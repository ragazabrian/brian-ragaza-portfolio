"use client";

import React from "react";
import { CLIENT_LOGOS } from "@/lib/data";

export default function ClientMarquee() {
  const logos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <div className="w-full py-14 overflow-hidden border-y border-zinc-900 bg-black/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 mb-8 flex items-center justify-between">
        <span className="text-xs uppercase tracking-widest text-zinc-500 font-mono">
          Trusted by market defining founders & enterprises
        </span>
        <span className="text-xs text-zinc-600 font-mono hidden sm:inline">
          EST. 2006 — 2026
        </span>
      </div>

      <div className="relative w-full flex overflow-x-hidden">
        <div className="flex animate-marquee gap-14 whitespace-nowrap items-center">
          {logos.map((client, i) => (
            <div
              key={i}
              className="flex items-center gap-4 text-zinc-500 hover:text-white transition-colors cursor-default"
            >
              <span className="text-2xl sm:text-3xl font-light tracking-tighter">
                {client.name}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
