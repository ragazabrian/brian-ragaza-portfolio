"use client";

import React, { useState, useMemo } from "react";
import { ALL_PROJECTS } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";
import { Search } from "lucide-react";

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", "AI", "Product", "Full Build", "Web", "Brand"];

  const filteredProjects = useMemo(() => {
    return ALL_PROJECTS.filter((project) => {
      // Category match
      const matchesCategory =
        activeCategory === "All" ||
        project.category.toLowerCase().includes(activeCategory.toLowerCase()) ||
        project.industries.some((ind) =>
          ind.toLowerCase().includes(activeCategory.toLowerCase())
        );

      // Search match
      const matchesSearch =
        searchQuery.trim() === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-6 sm:px-10">
      {/* Header */}
      <div className="mb-16">
        <p className="text-xs uppercase tracking-widest text-zinc-500 font-mono mb-4">
          All Case Studies & Projects
        </p>
        <h1 className="headline-large text-white max-w-4xl">
          A sample of our work — <br />
          <span className="text-zinc-500">from startup to F500</span>
        </h1>
        <p className="mt-6 text-zinc-400 max-w-2xl text-base sm:text-lg font-light">
          Explore {ALL_PROJECTS.length} products, platforms, and brands we&apos;ve designed
          and built over the last two decades.
        </p>
      </div>

      {/* Filters and Search Bar */}
      <div className="sticky top-20 z-30 py-4 bg-black/90 backdrop-blur-md border-y border-zinc-900 mb-12 flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all whitespace-nowrap ${
                activeCategory === cat
                  ? "bg-white text-black"
                  : "bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search 85+ projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-full text-xs bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 transition-colors"
          />
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-8 flex items-center justify-between text-xs font-mono text-zinc-500">
        <span>Showing {filteredProjects.length} projects</span>
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="hover:text-white underline transition-colors"
          >
            Clear search
          </button>
        )}
      </div>

      {/* Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div key={project.slug} id={project.slug}>
              <ProjectCard project={project} priority={idx < 6} />
            </div>
          ))}
        </div>
      ) : (
        <div className="py-24 text-center border border-dashed border-zinc-800 rounded-3xl">
          <p className="text-lg text-zinc-400 font-light">
            No projects matched &ldquo;{searchQuery}&rdquo;
          </p>
          <button
            onClick={() => {
              setActiveCategory("All");
              setSearchQuery("");
            }}
            className="mt-4 px-6 py-2.5 rounded-full text-xs bg-white text-black font-medium hover:bg-zinc-200"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
