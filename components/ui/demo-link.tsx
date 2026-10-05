'use client';

import { ArrowUpRight } from "lucide-react";

interface DemoLinkProps {
  url: string;
}

export function DemoLink({ url }: DemoLinkProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
      className="mt-5 inline-flex w-fit items-center gap-1 font-mono text-xs text-success hover:underline"
    >
      Live
      <ArrowUpRight size={11} aria-hidden="true" />
    </a>
  );
}