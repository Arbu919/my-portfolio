import { Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig, socialLinks } from "@/data/site";
import { FaLinkedin } from "react-icons/fa";

const linkedIn = socialLinks.find((s) => s.label === "LinkedIn");

export function ContactInfo() {
  return (
    <div>
      <p className="flex items-center gap-2 text-xs font-medium tracking-[0.14em] text-ink-muted">
        <span className="h-px w-8 bg-accent" aria-hidden="true" />
        LET&apos;S CONNECT
      </p>

      <h1 className="mt-5 font-display text-4xl leading-[1.1] text-ink md:text-5xl">
        Let&apos;s build something{" "}
        <em className="text-accent-strong not-italic">amazing.</em>
      </h1>

      <p className="mt-5 max-w-md text-base leading-relaxed text-ink-muted">
        Have a project in mind or just want to say hi? I&apos;d love to hear
        from you.
      </p>

      <div className="mt-7 flex flex-wrap gap-3">
        <Button href={`mailto:${siteConfig.email}`} variant="gradient" className="gap-1.5">
          <Mail size={16} aria-hidden="true" />
          Email Me
          <ArrowUpRight size={15} aria-hidden="true" />
        </Button>
        {linkedIn && (
          <Button href={linkedIn.href} variant="secondary" className="gap-1.5">
            <FaLinkedin size={16} aria-hidden="true" />
            LinkedIn
            <ArrowUpRight size={15} aria-hidden="true" />
          </Button>
        )}
      </div>

      <div className="mt-10 flex flex-col divide-y divide-line border-t border-line">
        <div className="flex items-center gap-4 py-4">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pill">
            <MapPin size={16} className="text-accent-strong" aria-hidden="true" />
          </span>
          <div>
            <p className="text-sm font-medium text-ink">Location</p>
            <p className="text-sm text-ink-muted">{siteConfig.location}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 py-4">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pill">
            <Mail size={16} className="text-accent-strong" aria-hidden="true" />
          </span>
          <div>
            <p className="text-sm font-medium text-ink">Email</p>
            <p className="text-sm text-ink-muted">{siteConfig.email}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 py-4">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pill">
            <Clock size={16} className="text-accent-strong" aria-hidden="true" />
          </span>
          <div>
            <p className="text-sm font-medium text-ink">Response time</p>
            <p className="text-sm text-ink-muted">
              Usually replies within <span className="text-accent-strong">{siteConfig.responseTime}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm text-ink">
        <span className="h-2 w-2 rounded-full bg-success" aria-hidden="true" />
        {siteConfig.availability}
      </div>
    </div>
  );
}