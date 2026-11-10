"use client";

import React from "react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-16 px-6 sm:px-10 max-w-7xl mx-auto overflow-hidden">
      {/* Background ambient video */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] max-w-none h-[120%] pointer-events-none opacity-25 -z-10 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105 filter blur-3xl contrast-125"
          src="https://cdn.sanity.io/files/nuxb3jim/production-july-2025/ab4a05d3b47c051abb3ace15ab7da4eb7edb2886.mp4"
        />
      </div>

      {/* Top Tagline */}
      <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-zinc-500">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Available for select partnerships</span>
        </div>
        <span className="hidden sm:inline">Product • Engineering • Brand</span>
      </div>

      {/* Main Massive Headline */}
      <div className="my-auto py-12">
        <h1 className="headline-huge text-white">
          We make <br />
          <span className="text-zinc-500 transition-colors hover:text-white">
            interfaces.
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg sm:text-xl text-zinc-400 font-light leading-relaxed">
          Metalab helps the world&apos;s most ambitious founders and companies — like
          Midjourney, Robinhood, Slack, and Uber — design, build, and ship products worth
          talking about.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-sm font-medium bg-white text-black hover:bg-zinc-200 transition-all transform hover:-translate-y-0.5"
          >
            <span>Explore Work</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
          <Link
            href="/what-we-do"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-sm font-medium bg-zinc-900/80 border border-white/10 text-white hover:bg-zinc-800 transition-all"
          >
            <span>What We Do</span>
          </Link>
        </div>
      </div>

      {/* Bottom status bar */}
      <div className="pt-8 border-t border-zinc-900/80 flex items-center justify-between text-xs text-zinc-500">
        <div className="flex items-center gap-6">
          <span>85+ Shipped Products</span>
          <span className="w-1 h-1 rounded-full bg-zinc-800" />
          <span>\$100B+ Combined Valuation</span>
        </div>

        <a
          href="#featured-work"
          aria-label="Scroll to featured work"
          className="flex items-center gap-2 hover:text-white transition-colors"
        >
          <span>Scroll to explore</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
