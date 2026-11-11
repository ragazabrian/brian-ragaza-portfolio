import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ALL_PROJECTS, CASE_STUDIES } from "@/lib/data";

interface CaseStudyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return ALL_PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;

  const study = CASE_STUDIES[slug];
  const basicProject = ALL_PROJECTS.find((p) => p.slug === slug);

  if (!study && !basicProject) {
    notFound();
  }

  const title = study ? study.title : basicProject!.title;
  const category = study ? study.category : basicProject!.category;
  const tags = study ? study.tags : basicProject!.tags;
  const heroImage = study?.heroImage || basicProject?.heroImage || basicProject?.hoverImage;
  const videoDesktop = study?.videoDesktop || basicProject?.videoDesktop;
  const nextSlug = study?.nextSlug || "midjourney";
  const nextTitle = study?.nextTitle || "Next Project";

  return (
    <article className="min-h-screen bg-black text-white pt-36 pb-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Massive Serif Title in PP Eiko */}
        <div className="mb-14">
          <h1 className="font-eiko text-[clamp(4.5rem,10vw,10.5rem)] leading-[0.88] tracking-[-0.035em] text-white">
            {title}
          </h1>
        </div>

        {/* 3-Column Metadata Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-8 border-t border-zinc-900 mb-16 text-sm">
          <div>
            <span className="text-xs text-zinc-500 font-mono block mb-1">
              Project Type
            </span>
            <span className="text-white font-normal">{category || "Product"}</span>
          </div>
          <div>
            <span className="text-xs text-zinc-500 font-mono block mb-1">Stage</span>
            <span className="text-white font-normal">Leader</span>
          </div>
          <div>
            <span className="text-xs text-zinc-500 font-mono block mb-1">
              Deliverables
            </span>
            <span className="text-white font-normal">{tags.join(", ") || "Product Design"}</span>
          </div>
        </div>
      </div>

      {/* Full-bleed Hero Visual / Video */}
      <div className="relative aspect-[16/9] w-full max-w-[1600px] mx-auto overflow-hidden bg-zinc-950 mb-24">
        {videoDesktop ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            src={videoDesktop}
          />
        ) : heroImage ? (
          <Image
            src={heroImage}
            alt={title}
            fill
            priority
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-zinc-900">
            <span className="text-5xl font-eiko text-zinc-600">{title}</span>
          </div>
        )}
      </div>

      {/* Deep Story & Metrics */}
      <div className="max-w-5xl mx-auto px-6 sm:px-12 space-y-24">
        {study?.stats && study.stats.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-12 border-y border-zinc-900">
            {study.stats.map((stat, idx) => (
              <div key={idx}>
                <span className="font-eiko text-4xl sm:text-5xl text-white block mb-1">
                  {stat.value}
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        )}

        {study?.challenge && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4">
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                The Challenge
              </span>
            </div>
            <div className="md:col-span-8">
              <p className="text-xl sm:text-2xl font-light text-zinc-200 leading-relaxed font-sans">
                {study.challenge}
              </p>
            </div>
          </div>
        )}

        {study?.solution && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-12 border-t border-zinc-900">
            <div className="md:col-span-4">
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                The Solution
              </span>
            </div>
            <div className="md:col-span-8">
              <p className="text-xl sm:text-2xl font-light text-zinc-200 leading-relaxed font-sans">
                {study.solution}
              </p>
            </div>
          </div>
        )}

        {study?.quote && (
          <div className="py-16 text-center border-y border-zinc-900">
            <p className="font-eiko text-2xl sm:text-4xl text-white italic leading-snug mb-6">
              &ldquo;{study.quote.text}&rdquo;
            </p>
            <p className="text-sm font-medium text-white">{study.quote.author}</p>
            <p className="text-xs text-zinc-500 font-mono mt-1">{study.quote.role}</p>
          </div>
        )}

        {/* Next Project Navigator */}
        <div className="pt-16 border-t border-zinc-900 text-center">
          <span className="text-xs uppercase tracking-widest text-zinc-500 font-mono block mb-4">
            Next Project
          </span>
          <Link
            href={`/work/${nextSlug}`}
            className="font-eiko text-4xl sm:text-7xl text-white hover:text-zinc-400 transition-colors inline-block"
          >
            {nextTitle} &rarr;
          </Link>
        </div>
      </div>
    </article>
  );
}
