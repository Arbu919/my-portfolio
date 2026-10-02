"use client";

import { useState, type FormEvent } from "react";
import { Send, User, Mail, MessageSquare, ArrowRight, Lock, CheckCircle2 } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

interface Errors {
  name?: string;
  email?: string;
  message?: string;
}

const inputClasses =
  "w-full rounded-[var(--radius-control)] border border-line bg-paper py-3 pl-11 pr-4 text-sm text-ink placeholder:text-ink-muted focus:border-accent focus:outline-none";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});

  function validate(formData: FormData): Errors {
    const next: Errors = {};
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name) next.name = "Please enter your name.";
    if (!email) next.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid email address.";
    if (!message || message.length < 10) next.message = "Tell me a bit more about the project.";

    return next;
  }

 async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-[var(--radius-card)] border border-line bg-surface p-10 text-center shadow-[var(--shadow-soft)]">
        <CheckCircle2 size={40} className="text-success" aria-hidden="true" />
        <p className="mt-4 font-display text-xl text-ink">Message received</p>
        <p className="mt-2 text-sm text-ink-muted">
          Thanks for reaching out — I&apos;ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-surface p-6 shadow-[var(--shadow-soft)] sm:p-8">
      <div className="flex flex-col items-center text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-pill">
          <Send size={18} className="text-accent-strong" aria-hidden="true" />
        </span>
        <p className="mt-4 font-display text-xl text-ink">Start a conversation</p>
        <p className="mt-2 max-w-xs text-sm text-ink-muted">
          Fill out the form below and I&apos;ll get back to you as soon as possible.
        </p>
      </div>

      <form className="mt-7 flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="name" className="text-sm font-medium text-ink">
            Your Name
          </label>
          <div className="relative mt-2">
            <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-muted" aria-hidden="true" />
            <input id="name" name="name" type="text" placeholder="Enter your name" className={inputClasses} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} />
          </div>
          {errors.name && <p id="name-error" className="mt-1.5 text-xs text-error">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-medium text-ink">
            Email Address
          </label>
          <div className="relative mt-2">
            <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-muted" aria-hidden="true" />
            <input id="email" name="email" type="email" placeholder="Enter your email" className={inputClasses} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} />
          </div>
          {errors.email && <p id="email-error" className="mt-1.5 text-xs text-error">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="message" className="text-sm font-medium text-ink">
            Your Message
          </label>
          <div className="relative mt-2">
            <MessageSquare size={16} className="absolute left-4 top-3.5 text-ink-muted" aria-hidden="true" />
            <textarea id="message" name="message" rows={4} placeholder="Tell me about your project..." className={`${inputClasses} resize-none pt-3`} aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined} />
          </div>
          {errors.message && <p id="message-error" className="mt-1.5 text-xs text-error">{errors.message}</p>}
        </div>

        {status === "error" && (
          <p className="text-sm text-error">Something went wrong — please try again.</p>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="mt-1 inline-flex items-center justify-center gap-2 rounded-[var(--radius-control)] bg-gradient-to-r from-accent to-accent-strong px-5 py-3.5 text-sm font-medium text-paper transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Send message"}
          {status !== "submitting" && <ArrowRight size={15} aria-hidden="true" />}
        </button>

        <p className="flex items-center justify-center gap-1.5 text-xs text-ink-muted">
          <Lock size={12} aria-hidden="true" />
          Your information is safe and secure.
        </p>
      </form>
    </div>
  );
}