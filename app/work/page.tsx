"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { ALL_PROJECTS } from "@/lib/data";

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const filters = [
    "Startup",
    "Leader",
    "AI",
    "Ecommerce",
    "Finance",
    "Health & Wellness",
    "Productivity",
    "SaaS",
    "Media",
  ];

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return ALL_PROJECTS;
    return ALL_PROJECTS.filter((p) => {
      const matchIndustry = p.industries.some(
        (i) => i.toLowerCase() === activeFilter.toLowerCase()
      );
      const matchTag = p.tags.some(
        (t) => t.toLowerCase() === activeFilter.toLowerCase()
      );
      const matchCat = p.category.toLowerCase() === activeFilter.toLowerCase();
      return matchIndustry || matchTag || matchCat;
    });
  }, [activeFilter]);

  return (
    <div className="min-h-screen bg-black text-white pt-36 pb-32 px-6 sm:px-12 max-w-7xl mx-auto">
      {/* Top Massive Serif Heading in PP Eiko */}
      <div className="mb-20">
        <h1 className="font-eiko text-[clamp(3.5rem,8vw,7.5rem)] leading-[0.92] tracking-[-0.03em] text-white">
          A sample of our work — <br />
          from startup to F500
        </h1>
      </div>

      {/* Filter Row */}
      <div className="mb-16 flex flex-wrap items-center gap-2.5 text-xs">
        <span className="text-zinc-500 font-sans mr-2">Filter By:</span>
        <button
          onClick={() => setActiveFilter("All")}
          className={`px-4 py-2 rounded-full font-medium tracking-tight border transition-all ${
            activeFilter === "All"
              ? "bg-white text-black border-white"
              : "bg-white/[0.08] hover:bg-white/[0.14] text-white/80 border-white/10"
          }`}
        >
          All
        </button>
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(activeFilter === filter ? "All" : filter)}
            className={`px-4 py-2 rounded-full font-medium tracking-tight border transition-all ${
              activeFilter === filter
                ? "bg-white text-black border-white"
                : "bg-white/[0.08] hover:bg-white/[0.14] text-white/80 border-white/10"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Editorial Table / List of Projects */}
      <div className="border-t border-zinc-900">
        {filteredProjects.map((project) => {
          const isHovered = hoveredProject === project.slug;
          const href = project.hasFullCaseStudy
            ? `/work/${project.slug}`
            : `/work#${project.slug}`;

          return (
            <Link
              key={project.slug}
              href={href}
              onMouseEnter={() => setHoveredProject(project.slug)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative grid grid-cols-1 md:grid-cols-12 gap-6 py-10 border-b border-zinc-900 transition-colors hover:bg-white/[0.02] items-start"
            >
              {/* Col 1: Logo or Title */}
              <div className="md:col-span-3 flex items-center gap-3">
                {project.logoWhite ? (
                  <div className="h-7 w-32 relative">
                    <Image
                      src={project.logoWhite}
                      alt={project.title}
                      fill
                      className="object-contain object-left opacity-90 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                ) : (
                  <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-zinc-300">
                    {project.title}
                  </h3>
                )}
              </div>

              {/* Col 2: Description */}
              <div className="md:col-span-6 pr-6">
                <p className="text-sm text-zinc-400 font-light leading-relaxed group-hover:text-zinc-200 transition-colors">
                  {project.shortDescription}
                </p>
              </div>

              {/* Col 3: Deliverables & Tags */}
              <div className="md:col-span-3 flex flex-col md:items-end text-xs text-zinc-500 font-sans space-y-1">
                {project.tags.slice(0, 2).map((tag, idx) => (
                  <span key={idx}>{tag}</span>
                ))}
                {project.hasFullCaseStudy && (
                  <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 mt-1">
                    Case Study ↗
                  </span>
                )}
              </div>

              {/* Hover Floating Preview if available */}
              {isHovered && (project.heroImage || project.hoverImage) && (
                <div className="hidden lg:block fixed right-16 bottom-16 w-80 h-48 rounded-2xl overflow-hidden border border-white/20 bg-zinc-950 shadow-2xl z-30 pointer-events-none animate-in fade-in duration-200">
                  <Image
                    src={project.heroImage || project.hoverImage || ""}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                    <span className="text-xs font-mono text-white">{project.title}</span>
                  </div>
                </div>
              )}
            </Link>
          );
        })}
      </div>

      {/* Right Edge Dot Indicator */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-20 pointer-events-none hidden sm:block">
        <div className="w-2.5 h-2.5 rounded-full bg-white" />
      </div>
    </div>
  );
}
