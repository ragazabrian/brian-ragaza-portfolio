"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { CAPABILITIES } from "@/lib/data";

export default function WhatWeDoPage() {
  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-6 sm:px-10">
      {/* Hero */}
      <section className="mb-24">
        <p className="text-xs uppercase tracking-widest text-zinc-500 font-mono mb-4">
          Capabilities & Process
        </p>
        <h1 className="headline-large text-white max-w-4xl mb-8">
          Odds are you’ve used a <br />
          <span className="text-zinc-500">product we’ve built.</span>
        </h1>
        <p className="text-xl sm:text-2xl font-light text-zinc-400 max-w-3xl leading-relaxed">
          Since 2006, we’ve helped the most innovative startups and iconic brands design,
          build, and ship products worth talking about.
        </p>
      </section>

      {/* Atmospheric Video Hero Banner */}
      <div className="relative aspect-[21/9] w-full rounded-3xl overflow-hidden bg-zinc-950 border border-zinc-800 mb-28">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          src="https://cdn.sanity.io/files/nuxb3jim/production-july-2025/ab4a05d3b47c051abb3ace15ab7da4eb7edb2886.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8 sm:p-12">
          <p className="text-lg sm:text-xl text-white font-light max-w-xl">
            We don’t just hand over static designs. We ship living, production-ready
            software.
          </p>
        </div>
      </div>

      {/* Detailed Capabilities Breakdowns */}
      <section className="space-y-24 mb-32">
        {CAPABILITIES.map((cap, idx) => (
          <div
            key={cap.id}
            id={cap.id}
            className="pt-16 border-t border-zinc-900 grid grid-cols-1 md:grid-cols-12 gap-10"
          >
            <div className="md:col-span-4">
              <span className="text-xs font-mono text-zinc-600 block mb-3">
                0{idx + 1} / CAPABILITY
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-white mb-4">
                {cap.title}
              </h2>
              <p className="text-sm text-zinc-400 font-mono">{cap.subtitle}</p>
            </div>

            <div className="md:col-span-8">
              <p className="text-lg text-zinc-300 font-light leading-relaxed mb-8">
                {cap.description}
              </p>

              <div>
                <p className="text-xs uppercase tracking-widest text-zinc-500 font-mono mb-4">
                  Specific Capabilities & Deliverables
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {cap.deliverables.map((deliv, dIdx) => (
                    <div
                      key={dIdx}
                      className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-900 flex items-center gap-3 text-sm text-zinc-300"
                    >
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* How We Partner */}
      <section className="py-20 border-t border-zinc-900 mb-24">
        <p className="text-xs uppercase tracking-widest text-zinc-500 font-mono mb-6">
          Engagement Models
        </p>
        <h2 className="text-3xl sm:text-5xl font-light text-white mb-16">
          Tailored for high-growth momentum.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-zinc-950 border border-zinc-900 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-zinc-500 block mb-4">01 / STAGE</span>
              <h3 className="text-2xl font-light text-white mb-3">0 to 1 Sprints</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                For early-stage founders needing to move from prototype to category-defining
                MVP in weeks, with clear positioning and launch assets.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-zinc-900 text-xs font-mono text-zinc-500">
              Typical duration: 6–10 weeks
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-zinc-950 border border-zinc-900 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-zinc-500 block mb-4">02 / STAGE</span>
              <h3 className="text-2xl font-light text-white mb-3">Scale & Redesign</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                For post-Series A/B companies breaking out into mass adoption, redesigning
                core workflows, multi-platform design systems, and performance tuning.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-zinc-900 text-xs font-mono text-zinc-500">
              Typical duration: 3–6 months
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-zinc-950 border border-zinc-900 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-zinc-500 block mb-4">03 / STAGE</span>
              <h3 className="text-2xl font-light text-white mb-3">Embedded Labs</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Long-term strategic partnership acting as an elite external skunkworks team
                for industry giants like Google, Slack, and Uber.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-zinc-900 text-xs font-mono text-zinc-500">
              Typical duration: Ongoing Retainer
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="p-10 sm:p-14 rounded-3xl bg-zinc-950 border border-zinc-800 text-center">
        <h3 className="text-2xl sm:text-4xl font-light text-white mb-4">
          Ready to make something unforgettable?
        </h3>
        <p className="text-zinc-400 max-w-xl mx-auto mb-8 font-light">
          Tell us about your project or product vision. We’ll schedule an exploratory
          session within 24 hours.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium bg-white text-black hover:bg-zinc-200 transition-colors"
        >
          <span>Initiate a Project</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
