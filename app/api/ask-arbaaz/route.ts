import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import { buildKnowledgeBase } from "@/data/assistant-knowledge";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

const SYSTEM_PROMPT = `You are "Ask Arbaaz" — an assistant embedded on Arbaaz Khan's portfolio website.

Your only job is to answer questions about Arbaaz: his skills, experience, projects, services, availability, and how to contact him.

STRICT RULES — follow these exactly:

1. Only use the facts in the KNOWLEDGE BASE below. Never invent, guess, or assume anything about Arbaaz that isn't explicitly stated there.

2. If someone asks something about Arbaaz that isn't in the knowledge base, respond exactly with:
"I don't have that information about Arbaaz yet."

3. Do not answer general-knowledge questions, coding help, or anything unrelated to Arbaaz.

If asked, respond:
"I'm just here to answer questions about Arbaaz — his skills, projects, services, or how to reach him. Is there something like that I can help with?"

4. Never claim to be a general-purpose AI, ChatGPT, Gemini, or anything other than "Ask Arbaaz."

5. Keep answers concise and factual — a few sentences, not essays.

6. If asked how to contact Arbaaz, point to the email in the knowledge base and the /contact page on this site.

7. Never make up statistics, client names, testimonials, prices, achievements, or results not present in the knowledge base.

KNOWLEDGE BASE:

${buildKnowledgeBase()}
`;

const rateLimit = new Map<
  string,
  { count: number; resetAt: number }
>();

const WINDOW_MS = 60_000;
const MAX_REQUESTS = 10;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, {
      count: 1,
      resetAt: now + WINDOW_MS,
    });

    return false;
  }

  if (entry.count >= MAX_REQUESTS) {
    return true;
  }

  entry.count += 1;

  return false;
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      {
        error:
          "Too many requests. Please wait a moment and try again.",
      },
      { status: 429 }
    );
  }

  let body: { messages?: ChatMessage[] };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }

  const messages = Array.isArray(body.messages)
    ? body.messages
    : [];

  if (messages.length === 0) {
    return NextResponse.json(
      { error: "No message provided." },
      { status: 400 }
    );
  }

  // Keep only the last 10 messages to control token usage.
  const trimmedHistory = messages.slice(-10);

  if (!process.env.GEMINI_API_KEY) {
    console.error("GEMINI_API_KEY is not set.");

    return NextResponse.json(
      {
        error: "Ask Arbaaz is not configured right now.",
      },
      { status: 500 }
    );
  }

  try {
    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",

      contents: trimmedHistory.map((message) => ({
        role: message.role === "assistant" ? "model" : "user",
        parts: [
          {
            text: message.content,
          },
        ],
      })),

      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.3,
        maxOutputTokens: 400,
      },
    });

    const reply = response.text;

    if (!reply) {
      return NextResponse.json(
        {
          error:
            "Ask Arbaaz couldn't generate a response. Please try again.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Failed to reach Gemini:", error);

    return NextResponse.json(
      {
        error:
          "Ask Arbaaz is temporarily unavailable. Please try again shortly.",
      },
      { status: 502 }
    );
  }
}