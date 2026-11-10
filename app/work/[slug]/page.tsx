import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
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

  // Look up case study
  const study = CASE_STUDIES[slug];
  const basicProject = ALL_PROJECTS.find((p) => p.slug === slug);

  if (!study && !basicProject) {
    notFound();
  }

  const title = study ? study.title : basicProject!.title;
  const shortDesc = study ? study.shortDescription : basicProject!.shortDescription;
  const category = study ? study.category : basicProject!.category;
  const tags = study ? study.tags : basicProject!.tags;
  const heroImage = study?.heroImage || basicProject?.heroImage || basicProject?.hoverImage;
  const videoDesktop = study?.videoDesktop || basicProject?.videoDesktop;
  const nextSlug = study?.nextSlug || "midjourney";
  const nextTitle = study?.nextTitle || "Next Project";

  return (
    <article className="pt-32 pb-24 max-w-7xl mx-auto px-6 sm:px-10">
      {/* Back link */}
      <div className="mb-10">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-500 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to all work</span>
        </Link>
      </div>

      {/* Case Study Hero Header */}
      <header className="mb-16">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="px-3.5 py-1 rounded-full text-xs font-medium uppercase tracking-wide bg-zinc-900 border border-zinc-800 text-zinc-300">
            {category}
          </span>
          {tags.map((tag, i) => (
            <span key={i} className="text-xs font-mono text-zinc-500">
              #{tag}
            </span>
          ))}
        </div>

        <h1 className="headline-large text-white mb-8">{title}</h1>

        <p className="text-xl sm:text-2xl font-light text-zinc-300 max-w-3xl leading-relaxed">
          {shortDesc}
        </p>
      </header>

      {/* Main Hero Visual / Video */}
      <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden bg-zinc-950 border border-white/10 mb-20 shadow-2xl">
        {videoDesktop ? (
          <video
            src={videoDesktop}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        ) : heroImage ? (
          <Image
            src={heroImage}
            alt={title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-zinc-900">
            <span className="text-5xl font-light text-zinc-700">{title}</span>
          </div>
        )}
      </div>

      {/* Impact Stats */}
      {study?.stats && study.stats.length > 0 && (
        <section className="py-12 border-y border-zinc-900 mb-20">
          <p className="text-xs uppercase tracking-widest text-zinc-500 font-mono mb-8">
            Impact & Reach
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {study.stats.map((stat, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-zinc-950/60 border border-zinc-900">
                <span className="text-3xl sm:text-5xl font-light tracking-tight text-white block mb-2">
                  {stat.value}
                </span>
                <span className="text-xs uppercase font-mono tracking-wider text-zinc-400">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Deep Dive: Challenge & Solution */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
        {study?.challenge && (
          <div className="p-8 sm:p-10 rounded-3xl bg-zinc-950 border border-zinc-900">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <h2 className="text-xs uppercase tracking-widest text-zinc-400 font-mono">
                The Challenge
              </h2>
            </div>
            <p className="text-lg text-zinc-300 font-light leading-relaxed">
              {study.challenge}
            </p>
          </div>
        )}

        {study?.solution && (
          <div className="p-8 sm:p-10 rounded-3xl bg-zinc-950 border border-zinc-900">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <h2 className="text-xs uppercase tracking-widest text-zinc-400 font-mono">
                The Solution & Craft
              </h2>
            </div>
            <p className="text-lg text-zinc-300 font-light leading-relaxed">
              {study.solution}
            </p>
          </div>
        )}
      </div>

      {/* Client Quote */}
      {study?.quote && (
        <section className="my-24 py-16 px-8 sm:px-14 rounded-3xl bg-gradient-to-r from-zinc-950 via-zinc-900/60 to-zinc-950 border border-zinc-800 text-center max-w-4xl mx-auto">
          <p className="text-xl sm:text-3xl font-light italic text-zinc-200 leading-snug mb-8">
            &ldquo;{study.quote.text}&rdquo;
          </p>
          <p className="text-sm font-medium text-white">{study.quote.author}</p>
          <p className="text-xs text-zinc-500 font-mono mt-1">{study.quote.role}</p>
        </section>
      )}

      {/* Next Project Teaser */}
      <footer className="pt-20 border-t border-zinc-900">
        <p className="text-xs uppercase tracking-widest text-zinc-500 font-mono mb-4">
          Next Case Study
        </p>
        <Link
          href={`/work/${nextSlug}`}
          className="group block p-10 sm:p-14 rounded-3xl bg-zinc-950 border border-zinc-900 hover:border-zinc-700 transition-all"
        >
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-mono text-zinc-500 uppercase">Up Next</span>
              <h3 className="text-3xl sm:text-5xl font-light text-white group-hover:text-zinc-300 transition-colors mt-2">
                {nextTitle}
              </h3>
            </div>
            <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center transform group-hover:translate-x-1 transition-transform">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>
        </Link>
      </footer>
    </article>
  );
}
