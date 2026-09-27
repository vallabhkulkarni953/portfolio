"use client";

import Link from 'next/link';
import { Sparkles } from 'lucide-react';

export function AvailabilityBadge() {
  return (
    <Link
      href="/contact"
      className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 hover:border-accent/50 text-accent text-xs font-mono transition-all duration-300 group shadow-sm hover:shadow-accent/10"
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
      </span>
      <span className="font-medium text-accent">Available for select enterprise & engineering roles</span>
      <Sparkles size={12} className="opacity-70 group-hover:rotate-12 transition-transform" />
    </Link>
  );
}
