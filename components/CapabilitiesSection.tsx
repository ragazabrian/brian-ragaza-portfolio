"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CAPABILITIES } from "@/lib/data";

export default function CapabilitiesSection() {
  return (
    <section className="py-28 max-w-7xl mx-auto px-6 sm:px-10 border-t border-zinc-900">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <p className="text-xs uppercase tracking-widest text-zinc-500 font-mono mb-4">
            Our Capabilities
          </p>
          <h2 className="headline-large text-white">
            End-to-end craft <br />
            <span className="text-zinc-500">at any scale.</span>
          </h2>
        </div>
        <Link
          href="/what-we-do"
          className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
        >
          <span>View all services & processes</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {CAPABILITIES.map((cap, idx) => (
          <div
            key={cap.id}
            className="p-8 sm:p-10 rounded-3xl bg-zinc-950 border border-zinc-800/80 hover:border-zinc-700 transition-all flex flex-col justify-between group"
          >
            <div>
              <span className="text-xs font-mono text-zinc-600 block mb-6">
                0{idx + 1}
              </span>
              <h3 className="text-2xl sm:text-3xl font-normal text-white tracking-tight mb-3">
                {cap.title}
              </h3>
              <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed mb-8">
                {cap.description}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-zinc-500 font-mono mb-3">
                Deliverables
              </p>
              <div className="flex flex-wrap gap-2">
                {cap.deliverables.map((item, dIdx) => (
                  <span
                    key={dIdx}
                    className="px-3 py-1.5 rounded-full text-xs font-medium bg-zinc-900 text-zinc-300 border border-zinc-800"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
