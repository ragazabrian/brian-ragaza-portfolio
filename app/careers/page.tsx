"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, MapPin, Briefcase } from "lucide-react";
import { OPEN_ROLES } from "@/lib/data";

export default function CareersPage() {
  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-6 sm:px-10">
      {/* Hero */}
      <section className="mb-20">
        <p className="text-xs uppercase tracking-widest text-zinc-500 font-mono mb-4">
          Careers & Culture
        </p>
        <h1 className="headline-large text-white max-w-4xl mb-8">
          Your career — <br />
          <span className="text-zinc-500">our open roles.</span>
        </h1>
        <p className="text-xl sm:text-2xl font-light text-zinc-400 max-w-3xl leading-relaxed">
          We&apos;re an ambitious, tight-knit team of designers, engineers, and strategists
          dedicated to shaping digital products that touch millions of daily lives.
        </p>
      </section>

      {/* Perks / Benefits Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-12 border-y border-zinc-900 mb-24">
        <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-900">
          <span className="text-xs font-mono uppercase text-zinc-500 block mb-2">01</span>
          <h4 className="text-lg font-medium text-white mb-2">Remote-First Freedom</h4>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Work from anywhere in the world. We optimize for autonomy and asynchronous flow.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-900">
          <span className="text-xs font-mono uppercase text-zinc-500 block mb-2">02</span>
          <h4 className="text-lg font-medium text-white mb-2">Continuous Learning</h4>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Annual budgets for hardware, conferences, design books, and skill expansion.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-900">
          <span className="text-xs font-mono uppercase text-zinc-500 block mb-2">03</span>
          <h4 className="text-lg font-medium text-white mb-2">Comprehensive Health</h4>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Top-tier medical, dental, vision, mental health coaching, and parental leave.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-900">
          <span className="text-xs font-mono uppercase text-zinc-500 block mb-2">04</span>
          <h4 className="text-lg font-medium text-white mb-2">Uncapped Time Off</h4>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Generous vacation policies, wellness days, and mandatory end-of-year studio
            recharge.
          </p>
        </div>
      </section>

      {/* Open Roles Listing */}
      <section className="mb-24">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl sm:text-3xl font-light text-white">Current Openings</h2>
          <span className="text-xs font-mono text-zinc-500">
            {OPEN_ROLES.length} active positions
          </span>
        </div>

        <div className="space-y-4">
          {OPEN_ROLES.map((role, idx) => (
            <a
              key={idx}
              href={role.url}
              target="_blank"
              rel="noreferrer"
              className="group p-6 sm:p-8 rounded-2xl bg-zinc-950 border border-zinc-900 hover:border-zinc-700 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 block"
            >
              <div>
                <h3 className="text-xl font-medium text-white group-hover:text-zinc-300 transition-colors mb-2">
                  {role.title}
                </h3>
                <div className="flex items-center gap-4 text-xs text-zinc-500 font-mono">
                  <span className="flex items-center gap-1">
                    <Briefcase className="w-3.5 h-3.5" />
                    {role.department}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {role.location}
                  </span>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium bg-zinc-900 border border-zinc-800 text-white group-hover:bg-white group-hover:text-black transition-colors self-start sm:self-center">
                <span>Apply on Greenhouse</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* General inquiry banner */}
      <div className="p-8 sm:p-12 rounded-3xl bg-zinc-950 border border-zinc-800 text-center">
        <h3 className="text-xl sm:text-2xl font-light text-white mb-2">
          Don&apos;t see your role?
        </h3>
        <p className="text-sm text-zinc-400 font-light mb-6">
          We&apos;re always interested in exceptional people. Reach out directly at{" "}
          <a
            href="mailto:careers@metalab.com"
            className="text-white underline hover:text-zinc-300 font-mono"
          >
            careers@metalab.com
          </a>
          .
        </p>
        <Link
          href="/contact"
          className="text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-white"
        >
          Contact the team &rarr;
        </Link>
      </div>
    </div>
  );
}
