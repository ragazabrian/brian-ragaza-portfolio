"use client";

import React from "react";
import Link from "next/link";
import { CAPABILITIES } from "@/lib/data";

export default function WhatWeDoPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-36 pb-32 px-6 sm:px-12 max-w-7xl mx-auto">
      {/* Massive Serif Headline in PP Eiko */}
      <div className="text-center max-w-4xl mx-auto mb-20">
        <h1 className="font-eiko text-[clamp(4rem,9vw,9.5rem)] leading-[0.9] tracking-[-0.03em] text-white">
          Odds are you’ve used a <br />
          product we’ve built
        </h1>
      </div>

      {/* Central Phone Video Preview */}
      <div className="flex justify-center mb-32">
        <div className="w-[320px] sm:w-[380px] aspect-[9/16] rounded-[48px] overflow-hidden border-4 border-zinc-800 bg-zinc-950 shadow-2xl relative">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            src="https://cdn.sanity.io/files/nuxb3jim/production-july-2025/f97dd92a601263f3e1cf6ea57bcd49bb74e73035.mp4"
          />
        </div>
      </div>

      {/* Core Capabilities */}
      <div className="space-y-24 max-w-5xl mx-auto">
        {CAPABILITIES.map((cap, idx) => (
          <div
            key={cap.id}
            className="pt-16 border-t border-zinc-900 grid grid-cols-1 md:grid-cols-12 gap-8"
          >
            <div className="md:col-span-4">
              <span className="text-xs font-mono uppercase text-zinc-600 block mb-2">
                0{idx + 1}
              </span>
              <h2 className="font-eiko text-3xl sm:text-4xl text-white mb-2">
                {cap.title}
              </h2>
              <p className="text-xs text-zinc-500 font-sans">{cap.subtitle}</p>
            </div>

            <div className="md:col-span-8">
              <p className="text-lg text-zinc-300 font-light leading-relaxed mb-8">
                {cap.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-zinc-400 font-sans">
                {cap.deliverables.map((item, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-32 text-center pt-16 border-t border-zinc-900">
        <Link
          href="/contact"
          className="font-eiko text-3xl sm:text-5xl text-white hover:text-zinc-400 transition-colors inline-block"
        >
          Have a project in mind? Say hey &rarr;
        </Link>
      </div>
    </div>
  );
}
