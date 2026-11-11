"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { OFFICE_LOCATIONS } from "@/lib/data";

export default function AboutPage() {
  const video1 = "https://cdn.sanity.io/files/nuxb3jim/production-july-2025/aaee25005ed0687a0e21a0adac4435cdbf67c868.mp4";
  const video2 = "https://cdn.sanity.io/files/nuxb3jim/production-july-2025/c6c0ae514664db1fadddad38b5204a77bef243b9.mp4";
  const video3 = "https://cdn.sanity.io/files/nuxb3jim/production-july-2025/0ea4317fd40ad91f01cb0a1e696cd0bcd1a8d674.mp4";

  return (
    <div className="min-h-screen bg-black text-white pt-36 pb-32 px-6 sm:px-12 max-w-7xl mx-auto">
      {/* Massive Serif Headline with Inline Video Loops */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="font-eiko text-[clamp(4.2rem,10vw,10.5rem)] leading-[0.9] tracking-[-0.03em] text-white">
          <span>Global </span>
          <span className="inline-block w-[0.9em] h-[1.1em] rounded-md overflow-hidden align-middle mx-1 border border-zinc-700 bg-zinc-900">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              src={video1}
            />
          </span>
          <span>talent,</span>
          <br />
          <span className="inline-block w-[0.9em] h-[1.1em] rounded-md overflow-hidden align-middle mx-1 border border-zinc-700 bg-zinc-900">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              src={video2}
            />
          </span>
          <span>Canadian </span>
          <span className="inline-block w-[0.9em] h-[1.1em] rounded-md overflow-hidden align-middle mx-1 border border-zinc-700 bg-zinc-900">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              src={video3}
            />
          </span>
          <br />
          <span>home</span>
        </h1>

        <div className="mt-8">
          <Link
            href="/careers"
            className="text-xs uppercase tracking-widest text-zinc-400 hover:text-white underline underline-offset-4 font-mono transition-colors"
          >
            View open roles
          </Link>
        </div>
      </div>

      {/* Hero Studio Photo */}
      <div className="my-28 max-w-5xl mx-auto aspect-[16/10] rounded-3xl overflow-hidden relative border border-zinc-800">
        <Image
          src="https://cdn.sanity.io/images/nuxb3jim/production-july-2025/459bd4436ca8807e73a713da82cfeb4e6a9bed3a-1500x2000.png"
          alt="MetaLab Studio"
          fill
          className="object-cover"
        />
      </div>

      {/* Global Team & Offices */}
      <div className="max-w-5xl mx-auto mb-28">
        <h2 className="font-eiko text-4xl sm:text-5xl text-white mb-12">
          A global team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {OFFICE_LOCATIONS.map((loc, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800 aspect-[4/3] flex flex-col justify-end p-6"
            >
              {loc.imageUrl && (
                <Image
                  src={loc.imageUrl}
                  alt={loc.title}
                  fill
                  className="object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="relative z-10">
                <span className="font-eiko text-2xl text-white">{loc.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Studio Ethos & Principles */}
      <div className="max-w-5xl mx-auto py-16 border-t border-zinc-900 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <span className="text-xs font-mono uppercase text-zinc-500 block mb-2">01</span>
          <h3 className="font-eiko text-2xl text-white mb-2">No-Assholes Policy</h3>
          <p className="text-xs text-zinc-400 font-sans leading-relaxed">
            Brilliance without kindness is useless. We foster high-empathy, egoless
            collaboration.
          </p>
        </div>

        <div>
          <span className="text-xs font-mono uppercase text-zinc-500 block mb-2">02</span>
          <h3 className="font-eiko text-2xl text-white mb-2">High-Taste Velocity</h3>
          <p className="text-xs text-zinc-400 font-sans leading-relaxed">
            We move blisteringly fast, but never cut corners on craft and typography.
          </p>
        </div>

        <div>
          <span className="text-xs font-mono uppercase text-zinc-500 block mb-2">03</span>
          <h3 className="font-eiko text-2xl text-white mb-2">Built to Ship</h3>
          <p className="text-xs text-zinc-400 font-sans leading-relaxed">
            We architect practical, extensible, and production-tested software that goes
            live.
          </p>
        </div>
      </div>
    </div>
  );
}
