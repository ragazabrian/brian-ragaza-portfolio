"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { OFFICE_LOCATIONS } from "@/lib/data";

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-6 sm:px-10">
      {/* Hero */}
      <section className="mb-20">
        <p className="text-xs uppercase tracking-widest text-zinc-500 font-mono mb-4">
          About MetaLab
        </p>
        <h1 className="headline-large text-white max-w-5xl mb-8">
          Global talent, <br />
          <span className="text-zinc-500">Canadian roots.</span>
        </h1>
        <p className="text-xl sm:text-2xl font-light text-zinc-300 max-w-3xl leading-relaxed">
          Founded in Victoria, British Columbia in 2006, MetaLab began with a radical idea:
          interfaces shouldn&apos;t just be utilitarian utilities — they should be delightful,
          warm, and visually breathtaking.
        </p>
      </section>

      {/* Stats Bar */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 py-12 border-y border-zinc-900 mb-28">
        <div>
          <span className="text-3xl sm:text-5xl font-light text-white block mb-1">
            2006
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">
            Year Founded
          </span>
        </div>
        <div>
          <span className="text-3xl sm:text-5xl font-light text-white block mb-1">
            160+
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">
            Designers & Engineers
          </span>
        </div>
        <div>
          <span className="text-3xl sm:text-5xl font-light text-white block mb-1">
            85+
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">
            Iconic Products Shipped
          </span>
        </div>
        <div>
          <span className="text-3xl sm:text-5xl font-light text-white block mb-1">
            \$100B+
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">
            Combined Client Value
          </span>
        </div>
      </section>

      {/* Global Team & Office Locations */}
      <section className="mb-28">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs uppercase tracking-widest text-zinc-500 font-mono mb-3">
              Where We Work
            </p>
            <h2 className="text-3xl sm:text-4xl font-light text-white">A global team.</h2>
          </div>
          <span className="text-xs font-mono text-zinc-500 hidden sm:inline">
            Distributed across 14 timezones
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {OFFICE_LOCATIONS.map((loc, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800 aspect-[4/3] flex flex-col justify-end p-6"
            >
              {loc.imageUrl ? (
                <Image
                  src={loc.imageUrl}
                  alt={loc.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-black" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-xl font-light text-white">{loc.title}</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values & Ethos */}
      <section className="py-20 border-t border-zinc-900 mb-28">
        <p className="text-xs uppercase tracking-widest text-zinc-500 font-mono mb-6">
          Principles
        </p>
        <h2 className="text-3xl sm:text-4xl font-light text-white mb-16 max-w-3xl">
          The code we live and build by.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-zinc-950 border border-zinc-900">
            <span className="text-xs font-mono text-zinc-600 block mb-6">01</span>
            <h3 className="text-xl font-medium text-white mb-3">No-Assholes Policy</h3>
            <p className="text-sm text-zinc-400 font-light leading-relaxed">
              Brilliance without kindness is useless. We foster high-empathy, egoless
              collaboration both internally and with client founders.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-zinc-950 border border-zinc-900">
            <span className="text-xs font-mono text-zinc-600 block mb-6">02</span>
            <h3 className="text-xl font-medium text-white mb-3">High-Taste Velocity</h3>
            <p className="text-sm text-zinc-400 font-light leading-relaxed">
              We move blisteringly fast, but never cut corners on craft. Every micro-motion,
              border radius, and typography hierarchy is obsessed over.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-zinc-950 border border-zinc-900">
            <span className="text-xs font-mono text-zinc-600 block mb-6">03</span>
            <h3 className="text-xl font-medium text-white mb-3">Built to Ship</h3>
            <p className="text-sm text-zinc-400 font-light leading-relaxed">
              We don&apos;t produce deckware that collects dust in Figma. We architect
              practical, extensible, and production-tested software that goes live.
            </p>
          </div>
        </div>
      </section>

      {/* Open Roles Preview */}
      <section className="p-10 sm:p-14 rounded-3xl bg-zinc-950 border border-zinc-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <span className="text-xs uppercase tracking-widest text-zinc-500 font-mono block mb-2">
            Join the craft
          </span>
          <h3 className="text-2xl sm:text-3xl font-light text-white">
            We&apos;re always looking for world-class talent.
          </h3>
          <p className="text-sm text-zinc-400 mt-2 font-light">
            Remote-first roles across design, engineering, and product strategy.
          </p>
        </div>
        <Link
          href="/careers"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-medium bg-white text-black hover:bg-zinc-200 transition-colors"
        >
          <span>View open positions</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </section>
    </div>
  );
}
