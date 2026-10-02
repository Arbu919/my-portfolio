"use client";

import { useEffect, useRef, useState } from "react";
import {
  Bot,
  ChevronDown,
  MessageCircle,
  Send,
  Sparkles,
  X,
} from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const suggestions = [
  "What does Arbaaz specialize in?",
  "Tell me about his projects",
  "What services does he offer?",
  "How can I contact Arbaaz?",
];

export default function AskArbaaz() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi! I'm Ask Arbaaz 👋 Ask me about Arbaaz's skills, projects, services, or how to contact him.",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => inputRef.current?.focus(), 220);
      return () => clearTimeout(timer);
    }
  }, [open]);

  async function sendMessage(messageText?: string) {
    const text = (messageText ?? input).trim();
    if (!text || loading) return;

    const userMessage: Message = { role: "user", content: text };
    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/ask-arbaaz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Something went wrong.");

      setMessages((current) => [
        ...current,
        { role: "assistant", content: data.reply },
      ]);
    } catch (error) {
      console.error("Ask Arbaaz error:", error);
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content:
            "Sorry, I'm having trouble responding right now. Please try again in a moment.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <>
      {/* =========================================================
          LOCAL ANIMATIONS / SCROLLBAR
      ========================================================= */}
      <style>{`
        @keyframes aa-window-in {
          from { opacity: 0; transform: translateY(16px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0)    scale(1); }
        }
        @keyframes aa-msg-in {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes aa-halo {
          0%, 100% { opacity: 0.55; transform: scale(1); }
          50%      { opacity: 0.9;  transform: scale(1.15); }
        }
        @keyframes aa-sheen {
          0%   { transform: translateX(-120%); }
          100% { transform: translateX(220%); }
        }
        .aa-window { animation: aa-window-in 0.42s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .aa-msg    { animation: aa-msg-in 0.35s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .aa-halo   { animation: aa-halo 4.5s ease-in-out infinite; }
        .aa-sheen::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(100deg, transparent 20%, rgba(255,255,255,0.35) 50%, transparent 80%);
          transform: translateX(-120%);
          pointer-events: none;
        }
        .aa-sheen:hover::after { animation: aa-sheen 1.1s ease; }
        .aa-scroll { scrollbar-width: thin; scrollbar-color: rgba(255,255,255,0.12) transparent; }
        .aa-scroll::-webkit-scrollbar { width: 6px; }
        .aa-scroll::-webkit-scrollbar-track { background: transparent; }
        .aa-scroll::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.10);
          border-radius: 999px;
        }
        .aa-scroll::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.18); }
        @media (prefers-reduced-motion: reduce) {
          .aa-window, .aa-msg, .aa-halo, .aa-sheen:hover::after { animation: none !important; }
        }
      `}</style>

      {/* =========================================================
          CHAT WINDOW
      ========================================================= */}
      {open && (
        <div
          className="
            aa-window
            fixed bottom-[5.75rem] right-4 z-50
            flex w-[calc(100vw-2rem)] max-w-[400px]
            origin-bottom-right
            flex-col
            overflow-hidden
            rounded-[26px]
            border border-white/[0.08]
            bg-[#08080a]/95
            shadow-[0_32px_80px_-24px_rgba(0,0,0,0.9),0_0_0_1px_rgba(255,255,255,0.03)_inset]
            backdrop-blur-2xl
            sm:bottom-[5.75rem] sm:right-6
          "
        >
          {/* Ambient glow */}
          <div
            aria-hidden
            className="
              pointer-events-none absolute -top-24 left-1/2
              h-52 w-52 -translate-x-1/2
              rounded-full bg-white/[0.06] blur-3xl
            "
          />

          {/* Top hairline highlight */}
          <div
            aria-hidden
            className="
              pointer-events-none absolute inset-x-8 top-0 h-px
              bg-gradient-to-r from-transparent via-white/25 to-transparent
            "
          />

          {/* =====================================================
              HEADER
          ===================================================== */}
          <div
            className="
              relative flex items-center justify-between
              border-b border-white/[0.06]
              px-4 py-3.5
            "
          >
            <div className="flex items-center gap-3">
              {/* AI Icon */}
              <div className="relative">
                <span
                  aria-hidden
                  className="
                    aa-halo
                    absolute -inset-1.5 rounded-2xl
                    bg-white/10 blur-md
                  "
                />

                <div
                  className="
                    relative flex h-10 w-10
                    items-center justify-center
                    rounded-[14px]
                    bg-gradient-to-b from-white to-zinc-200
                    text-black
                    shadow-[0_4px_14px_-4px_rgba(255,255,255,0.5),0_1px_0_0_rgba(255,255,255,0.9)_inset]
                  "
                >
                  <Sparkles size={18} strokeWidth={2} />

                  {/* Online indicator */}
                  <span
                    className="
                      absolute -bottom-0.5 -right-0.5
                      h-3 w-3
                      rounded-full
                      border-[2.5px] border-[#08080a]
                      bg-emerald-400
                      shadow-[0_0_8px_2px_rgba(52,211,153,0.55)]
                    "
                  />
                </div>
              </div>

              <div className="leading-tight">
                <p className="text-[13.5px] font-semibold tracking-[-0.01em] text-white">
                  Ask Arbaaz
                </p>
                <p className="mt-0.5 flex items-center gap-1.5 text-[11px] text-zinc-500">
                  <span className="h-1 w-1 rounded-full bg-emerald-400/90" />
                  Portfolio assistant
                </p>
              </div>
            </div>

            {/* Close */}
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close Ask Arbaaz"
              className="
                group relative
                rounded-xl p-2
                text-zinc-500
                transition-all duration-200
                hover:bg-white/[0.06]
                hover:text-white
                active:scale-95
              "
            >
              <X size={17} strokeWidth={1.8} />
            </button>
          </div>

          {/* =====================================================
              MESSAGES
          ===================================================== */}
          <div
            className="
              aa-scroll
              h-[min(430px,55vh)]
              overflow-y-auto
              px-4 py-5
            "
          >
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={`aa-msg flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                  style={{ animationDelay: `${Math.min(index, 6) * 30}ms` }}
                >
                  {/* Assistant icon */}
                  {message.role === "assistant" && (
                    <div
                      className="
                        mr-2.5 mt-1
                        flex h-7 w-7 shrink-0
                        items-center justify-center
                        rounded-[10px]
                        border border-white/[0.06]
                        bg-white/[0.04]
                        text-zinc-400
                      "
                    >
                      <Bot size={13.5} strokeWidth={1.8} />
                    </div>
                  )}

                  {/* Message bubble */}
                  <div
                    className={`
                      max-w-[82%]
                      rounded-[18px]
                      px-4 py-2.5
                      text-[13.5px]
                      leading-[1.65]
                      tracking-[-0.005em]
                      ${
                        message.role === "user"
                          ? `
                            rounded-br-[6px]
                            bg-gradient-to-b from-white to-zinc-100
                            text-zinc-900
                            shadow-[0_6px_20px_-8px_rgba(255,255,255,0.35),0_1px_0_0_rgba(255,255,255,0.8)_inset]
                          `
                          : `
                            rounded-bl-[6px]
                            border border-white/[0.06]
                            bg-gradient-to-b from-white/[0.055] to-white/[0.025]
                            text-zinc-200
                            shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset]
                          `
                      }
                    `}
                  >
                    {message.content}
                  </div>
                </div>
              ))}

              {/* =================================================
                  SUGGESTED QUESTIONS
              ================================================= */}
              {messages.length === 1 && !loading && (
                <div className="aa-msg pt-1">
                  <p
                    className="
                      mb-2.5
                      text-[10px]
                      font-medium
                      uppercase
                      tracking-[0.16em]
                      text-zinc-500
                    "
                  >
                    Try asking
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {suggestions.map((suggestion, i) => (
                      <button
                        key={suggestion}
                        type="button"
                        onClick={() => sendMessage(suggestion)}
                        style={{ animationDelay: `${100 + i * 45}ms` }}
                        className="
                          aa-msg
                          rounded-full
                          border border-white/[0.07]
                          bg-white/[0.02]
                          px-3.5 py-2
                          text-left
                          text-[12px]
                          leading-tight
                          text-zinc-400
                          transition-all duration-300
                          hover:-translate-y-0.5
                          hover:border-white/[0.16]
                          hover:bg-white/[0.06]
                          hover:text-white
                          hover:shadow-[0_8px_24px_-12px_rgba(255,255,255,0.25)]
                          active:translate-y-0
                          active:scale-[0.98]
                        "
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* =================================================
                  TYPING INDICATOR
              ================================================= */}
              {loading && (
                <div className="aa-msg flex items-center gap-2.5">
                  <div
                    className="
                      flex h-7 w-7 shrink-0
                      items-center justify-center
                      rounded-[10px]
                      border border-white/[0.06]
                      bg-white/[0.04]
                      text-zinc-400
                    "
                  >
                    <Bot size={13.5} strokeWidth={1.8} />
                  </div>

                  <div
                    className="
                      rounded-[18px] rounded-bl-[6px]
                      border border-white/[0.06]
                      bg-gradient-to-b from-white/[0.055] to-white/[0.025]
                      px-4 py-3
                    "
                  >
                    <div className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-400/80 [animation-delay:-0.3s]" />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-400/80 [animation-delay:-0.15s]" />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-400/80" />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* =====================================================
              INPUT (REFINED ACTIVE STATE)
          ===================================================== */}
          <div className="relative border-t border-white/[0.06] bg-black/30 p-3">
            <div
              className="
                group flex items-center gap-2
                rounded-[16px]
                border border-white/[0.08]
                bg-white/[0.03]
                px-1.5 py-1.5
                transition-all duration-300
                focus-within:border-white/[0.25]
                focus-within:bg-white/[0.06]
                focus-within:shadow-[0_0_0_4px_rgba(255,255,255,0.04),0_4px_20px_-8px_rgba(255,255,255,0.15)]
              "
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about Arbaaz..."
                disabled={loading}
                className="
                  min-w-0 flex-1
                  bg-transparent
                  px-3 py-2
                  text-[13.5px]
                  tracking-[-0.005em]
                  text-white
                  outline-none ring-0
                  placeholder:text-zinc-500
                  focus:outline-none focus:ring-0
                  disabled:opacity-50
                "
              />

              {/* Send button */}
              <button
                type="button"
                onClick={() => sendMessage()}
                disabled={!input.trim() || loading}
                aria-label="Send message"
                className="
                  relative flex h-9 w-9 shrink-0
                  items-center justify-center
                  overflow-hidden
                  rounded-[12px]
                  bg-gradient-to-b from-white to-zinc-200
                  text-black
                  shadow-[0_4px_14px_-6px_rgba(255,255,255,0.6),0_1px_0_0_rgba(255,255,255,0.9)_inset]
                  transition-all duration-200
                  hover:scale-[1.04]
                  hover:shadow-[0_6px_22px_-6px_rgba(255,255,255,0.75)]
                  active:scale-95
                  disabled:cursor-not-allowed
                  disabled:opacity-25
                  disabled:shadow-none
                "
              >
                <Send size={15} strokeWidth={2.2} className="-ml-0.5" />
              </button>
            </div>

            <p className="mt-2.5 text-center text-[10px] tracking-[0.08em] text-zinc-700">
              ASK ARBAAZ · PORTFOLIO AI
            </p>
          </div>
        </div>
      )}

      {/* =========================================================
          FLOATING BUTTON (MOBILE TEXT VISIBLE)
      ========================================================= */}
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? "Close Ask Arbaaz" : "Open Ask Arbaaz"}
        className="
          group aa-sheen
          fixed bottom-5 right-4 z-50
          flex items-center gap-2.5
          overflow-hidden
          rounded-full
          border border-white/[0.10]
          bg-gradient-to-b from-zinc-900/95 to-zinc-950/95
          px-3 py-2 sm:px-4 sm:py-2.5
          text-sm font-medium
          text-white
          shadow-[0_18px_50px_-16px_rgba(0,0,0,0.9),0_0_0_1px_rgba(255,255,255,0.02)_inset]
          backdrop-blur-xl
          transition-all duration-300
          hover:-translate-y-0.5
          hover:border-white/[0.20]
          hover:shadow-[0_24px_60px_-16px_rgba(0,0,0,0.95),0_0_30px_-10px_rgba(255,255,255,0.18)]
          active:translate-y-0
          active:scale-[0.98]
          sm:bottom-6 sm:right-6
        "
      >
        {/* Button icon */}
        <span
          className="
            relative flex h-7 w-7 sm:h-8 sm:w-8 shrink-0
            items-center justify-center
            rounded-full
            bg-gradient-to-b from-white to-zinc-200
            text-black
            shadow-[0_1px_0_0_rgba(255,255,255,0.9)_inset]
            transition-transform duration-300
            group-hover:scale-[1.05]
          "
        >
          {open ? (
            <ChevronDown size={16} strokeWidth={2.2} />
          ) : (
            <MessageCircle size={15.5} strokeWidth={2.1} />
          )}

          {/* Online indicator */}
          {!open && (
            <span
              className="
                absolute -right-0.5 -top-0.5
                h-2.5 w-2.5
                rounded-full
                border-[2px] border-zinc-950
                bg-emerald-400
                shadow-[0_0_6px_1px_rgba(52,211,153,0.6)]
              "
            />
          )}
        </span>

        {/* Text is now visible on all screens including mobile */}
        <span className="pr-1 text-[13px] sm:text-[13.5px] tracking-[-0.01em]">
          Ask Arbaaz
        </span>
      </button>
    </>
  );
}