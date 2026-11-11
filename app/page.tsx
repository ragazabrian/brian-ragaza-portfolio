"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface CaseStudyPill {
  label: string;
  slug: string;
  video: string;
  image?: string;
}

const PILLS: CaseStudyPill[] = [
  {
    label: "Robinhood",
    slug: "robinhood",
    video: "https://cdn.sanity.io/files/nuxb3jim/production-july-2025/e1d3d5c5d03db97abd91769b3ae3cf13c2a83a2a.mp4",
  },
  {
    label: "Midjourney",
    slug: "midjourney",
    video: "https://cdn.sanity.io/files/nuxb3jim/production-july-2025/0ba9b63a2c6fbd52ecab9aa5f9fc5eee78fabf84.mp4",
  },
  {
    label: "Uber",
    slug: "uber",
    video: "https://cdn.sanity.io/files/nuxb3jim/production-july-2025/252d9fbe676eacbadfd63fbbab09a6912e459965.mp4",
  },
  {
    label: "Suno",
    slug: "suno",
    video: "https://cdn.sanity.io/files/nuxb3jim/production-july-2025/f97dd92a601263f3e1cf6ea57bcd49bb74e73035.mp4",
  },
  {
    label: "Ro",
    slug: "ro",
    video: "https://cdn.sanity.io/files/nuxb3jim/production-july-2025/b810fb6a8ea6b187daf93c142d98333fc2d5914b.mp4",
  },
  {
    label: "Atoms",
    slug: "atoms",
    video: "https://cdn.sanity.io/files/nuxb3jim/production-july-2025/d586a21cd5f7efa31f7eb1a816534d3d4262a280.mp4",
  },
  {
    label: "The Atlantic",
    slug: "the-atlantic",
    video: "https://cdn.sanity.io/files/nuxb3jim/production-july-2025/d8c4a84638ba32a4add866ed0e6529492b9e6f96.mp4",
  },
  {
    label: "Calvin Klein",
    slug: "calvin-klein",
    video: "https://cdn.sanity.io/files/nuxb3jim/production-july-2025/a5ee552185b0080836dc855b157e59c3cad20ac6.mp4",
  },
  {
    label: "Headspace",
    slug: "headspace",
    video: "https://cdn.sanity.io/files/nuxb3jim/production-july-2025/66c9fa66516f407457747c38548c941a67927f86.mp4",
  },
  {
    label: "All Work",
    slug: "work",
    video: "",
    image: "https://cdn.sanity.io/images/nuxb3jim/production-july-2025/771e3df0cb5787d37a5c781e0411abb65637beb2-2500x1500.png",
  },
];

const DEFAULT_VIDEO =
  "https://cdn.sanity.io/files/nuxb3jim/production-july-2025/6fbb33f6dd694cebe5cc6a5eea7f75df6b664539.mp4";

export default function HomePage() {
  const [activeMedia, setActiveMedia] = useState<{ video?: string; image?: string }>({
    video: DEFAULT_VIDEO,
  });
  const [hoveredLabel, setHoveredLabel] = useState<string | null>(null);

  const handlePillHover = (pill: CaseStudyPill) => {
    setHoveredLabel(pill.label);
    if (pill.video) {
      setActiveMedia({ video: pill.video });
    } else if (pill.image) {
      setActiveMedia({ image: pill.image });
    }
  };

  const handlePillLeave = () => {
    setHoveredLabel(null);
    setActiveMedia({ video: DEFAULT_VIDEO });
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black text-white select-none">
      {/* 1. Fullscreen Background Video/Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {activeMedia.video ? (
          <video
            key={activeMedia.video}
            src={activeMedia.video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover transition-opacity duration-700"
          />
        ) : activeMedia.image ? (
          <div className="relative w-full h-full">
            <Image
              src={activeMedia.image}
              alt="Preview"
              fill
              priority
              className="object-cover transition-opacity duration-700"
            />
          </div>
        ) : null}

        {/* Ambient Dark Overlay */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      </div>

      {/* 2. Left Pill Stack */}
      <div className="absolute top-[48%] -translate-y-1/2 left-8 sm:left-12 z-20 flex flex-col items-start gap-2">
        {PILLS.map((pill) => {
          const isHovered = hoveredLabel === pill.label;
          const href = pill.slug === "work" ? "/work" : `/work/${pill.slug}`;

          return (
            <Link
              key={pill.label}
              href={href}
              onMouseEnter={() => handlePillHover(pill)}
              onMouseLeave={handlePillLeave}
              className={`metalab-nav-pill ${isHovered ? "metalab-nav-pill-active" : ""}`}
            >
              {pill.label}
            </Link>
          );
        })}
      </div>

      {/* 3. Middle-Right Statement */}
      <div className="absolute top-[26%] right-8 sm:right-28 z-20 max-w-[270px] pointer-events-none">
        <p className="font-sans text-[15px] text-white/90 leading-[1.45] font-normal drop-shadow-md">
          Since 2006, we’ve helped the most innovative startups and reputable brands
          design, build, and ship products worth talking about.
        </p>
      </div>

      {/* 4. Bottom Giant Headline */}
      <div className="absolute bottom-6 sm:bottom-12 left-8 sm:left-12 right-8 sm:right-12 z-20 pointer-events-none">
        <h1 className="metalab-title">
          We make
          <span className="metalab-title-line2">interfaces</span>
        </h1>
      </div>

      {/* 5. Right Edge Indicator Dot */}
      <div className="absolute right-6 sm:right-10 top-1/2 -translate-y-1/2 z-20 hidden md:block pointer-events-none">
        <div className="w-2.5 h-2.5 rounded-full bg-white shadow-lg" />
      </div>
    </div>
  );
}
