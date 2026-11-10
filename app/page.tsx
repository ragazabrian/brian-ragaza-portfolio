"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Hero from "@/components/Hero";
import ClientMarquee from "@/components/ClientMarquee";
import ProjectCard from "@/components/ProjectCard";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import { FEATURED_PROJECTS } from "@/lib/data";

export default function HomePage() {
  return (
    <div className="w-full">
      {/* 1. Hero */}
      <Hero />

      {/* 2. Client Marquee */}
      <ClientMarquee />

      {/* 3. Featured Work Grid */}
      <section id="featured-work" className="py-24 max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-zinc-500 font-mono mb-4">
              Selected Work
            </p>
            <h2 className="headline-large text-white">
              Products that define <br />
              <span className="text-zinc-500">their categories.</span>
            </h2>
          </div>

          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium border border-white/20 text-white hover:bg-white hover:text-black transition-all"
          >
            <span>View all 85+ projects</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 2-column responsive layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {FEATURED_PROJECTS.map((project, idx) => (
            <ProjectCard key={project.slug} project={project} priority={idx < 2} />
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium bg-zinc-900 border border-zinc-800 text-white hover:bg-zinc-800 hover:border-zinc-700 transition-all"
          >
            <span>Explore full index of work</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 4. Manifesto / Philosophy */}
      <section className="py-28 bg-zinc-950/80 border-y border-zinc-900">
        <div className="max-w-5xl mx-auto px-6 sm:px-10">
          <span className="text-xs uppercase tracking-widest text-zinc-500 font-mono block mb-8">
            Our Thesis
          </span>
          <p className="text-2xl sm:text-4xl md:text-5xl font-light text-zinc-200 leading-tight tracking-tight">
            &ldquo;Most software is built to function. We build software to be felt. Since
            2006, our obsession has been creating products that feel so natural, effortless,
            and beautifully crafted that you can&apos;t imagine your day without
            them.&rdquo;
          </p>

          <div className="mt-12 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-mono">
              ML
            </div>
            <div>
              <p className="text-sm font-medium text-white">MetaLab Philosophy</p>
              <p className="text-xs text-zinc-500">Victoria • Vancouver • New York • Remote</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Capabilities */}
      <CapabilitiesSection />

      {/* 6. Pre-Footer Call to Action Banner */}
      <section className="py-24 max-w-7xl mx-auto px-6 sm:px-10">
        <div className="rounded-3xl p-10 sm:p-16 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <span className="text-xs uppercase tracking-widest text-zinc-400 font-mono block mb-3">
              Have a bold idea?
            </span>
            <h3 className="text-3xl sm:text-5xl font-light text-white tracking-tight">
              Let&apos;s build the next <br />
              <span className="text-zinc-400">breakthrough together.</span>
            </h3>
          </div>
          <Link
            href="/contact"
            className="px-8 py-4 rounded-full text-sm font-medium bg-white text-black hover:bg-zinc-200 transition-all flex items-center gap-2"
          >
            <span>Start a project</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
