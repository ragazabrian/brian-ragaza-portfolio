"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export default function ProjectCard({ project, priority = false }: ProjectCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const projectUrl = project.hasFullCaseStudy
    ? `/work/${project.slug}`
    : `/work#${project.slug}`;

  return (
    <Link
      href={projectUrl}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group block relative flex flex-col w-full text-left"
    >
      {/* Media container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-zinc-900 border border-white/5 transition-transform duration-500 ease-out group-hover:scale-[0.99] group-hover:border-white/20">
        {/* Video if available */}
        {project.videoDesktop ? (
          <video
            ref={videoRef}
            src={project.videoDesktop}
            loop
            muted
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
          />
        ) : null}

        {/* Fallback / poster image */}
        {project.heroImage || project.hoverImage ? (
          <div
            className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
              project.videoDesktop && isHovered ? "opacity-0" : "opacity-100"
            }`}
          >
            <Image
              src={project.heroImage || project.hoverImage || ""}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={priority}
              className="object-cover"
            />
          </div>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-950 flex items-center justify-center p-8">
            <span className="text-3xl font-light text-zinc-600">{project.title}</span>
          </div>
        )}

        {/* Subtle overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

        {/* Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
          <span className="px-3 py-1 rounded-full text-[11px] font-medium tracking-wide uppercase bg-black/60 backdrop-blur-md text-zinc-300 border border-white/10">
            {project.category}
          </span>
          {project.hasFullCaseStudy && (
            <span className="px-2.5 py-1 rounded-full text-[10px] font-medium tracking-wider uppercase bg-white text-black">
              Case Study
            </span>
          )}
        </div>

        {/* Hover Arrow Pill */}
        <div className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-white text-black flex items-center justify-center transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>

      {/* Title & metadata */}
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-medium tracking-tight text-white group-hover:text-zinc-300 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-zinc-400 mt-1 line-clamp-2 font-normal leading-relaxed">
            {project.shortDescription}
          </p>
        </div>
      </div>

      {/* Tags */}
      {project.tags && project.tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag, idx) => (
            <span
              key={idx}
              className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
}
