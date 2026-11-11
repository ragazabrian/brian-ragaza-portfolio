"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Mail, Moon, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [timeStr, setTimeStr] = useState("1:25 PM");
  const pathname = usePathname();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-8 sm:px-12 py-7 flex items-center justify-between pointer-events-none">
        {/* Left: Menu */}
        <div className="pointer-events-auto">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="metalab-nav-pill text-[13px] px-5 py-2 font-normal"
          >
            <span>{menuOpen ? "Close" : "Menu"}</span>
            {menuOpen && <X className="w-3.5 h-3.5 ml-1.5" />}
          </button>
        </div>

        {/* Center: Metalab Wordmark */}
        <div className="pointer-events-auto">
          <Link
            href="/"
            className="text-white font-medium text-lg sm:text-xl tracking-[-0.03em] hover:opacity-80 transition-opacity"
          >
            Metalab
          </Link>
        </div>

        {/* Right: Time, Moon, Mail */}
        <div className="pointer-events-auto flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1.5 text-xs text-white/90 mr-1">
            <span className="font-mono text-zinc-400">LDN</span>
            <span>{timeStr}</span>
          </div>

          <button
            aria-label="Toggle Night Mode"
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 flex items-center justify-center text-white transition-all"
          >
            <Moon className="w-3.5 h-3.5" />
          </button>

          <Link
            href="/contact"
            aria-label="Contact MetaLab"
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 flex items-center justify-center text-white transition-all"
          >
            <Mail className="w-3.5 h-3.5" />
          </Link>
        </div>
      </header>

      {/* Fullscreen Authentic MetaLab Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-3xl text-white flex flex-col justify-between pt-28 pb-12 px-8 sm:px-16 overflow-y-auto animate-in fade-in duration-300">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start my-auto">
            {/* Left Nav links */}
            <div className="lg:col-span-4 flex flex-col gap-8">
              <nav className="flex flex-col gap-4">
                {[
                  { label: "What We Do", href: "/what-we-do" },
                  { label: "About Us", href: "/about" },
                  { label: "Latest News", href: "/careers" },
                  { label: "Get in Touch", href: "/contact" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="font-serif text-3xl sm:text-5xl font-light hover:text-zinc-400 transition-colors tracking-tight"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div>
                <p className="text-xs text-zinc-500 uppercase font-mono tracking-widest mb-4">
                  Case Studies
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: "Robinhood", href: "/work/robinhood" },
                    { label: "Midjourney", href: "/work/midjourney" },
                    { label: "Uber", href: "/work/uber" },
                    { label: "Suno", href: "/work/suno" },
                    { label: "Ro", href: "/work/ro" },
                    { label: "Atoms", href: "/work/atoms" },
                    { label: "The Atlantic", href: "/work/the-atlantic" },
                    { label: "Calvin Klein", href: "/work/calvin-klein" },
                    { label: "Headspace", href: "/work/headspace" },
                    { label: "All Work", href: "/work" },
                  ].map((p) => (
                    <Link
                      key={p.label}
                      href={p.href}
                      className="metalab-nav-pill text-xs px-3.5 py-1.5"
                    >
                      {p.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Center: Vertical Star Video */}
            <div className="hidden lg:flex lg:col-span-4 justify-center">
              <div className="relative w-72 h-[480px] rounded-3xl overflow-hidden border border-white/10 bg-zinc-950 shadow-2xl">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  src="https://cdn.sanity.io/files/nuxb3jim/production-july-2025/6fbb33f6dd694cebe5cc6a5eea7f75df6b664539.mp4"
                />
              </div>
            </div>

            {/* Right: Featured news / case study cards */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              <Link
                href="/work/windsurf"
                className="group p-4 rounded-2xl bg-zinc-900/60 border border-white/10 hover:border-white/20 transition-all flex flex-col gap-3"
              >
                <div className="flex items-center justify-between text-xs text-zinc-400">
                  <span>Our Windsurf case study</span>
                  <span className="text-zinc-600">✕</span>
                </div>
                <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden">
                  <Image
                    src="https://cdn.sanity.io/images/nuxb3jim/production-july-2025/771e3df0cb5787d37a5c781e0411abb65637beb2-2500x1500.png"
                    alt="Windsurf"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </Link>

              <div className="p-4 rounded-2xl bg-zinc-900/60 border border-white/10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center font-bold text-black text-xs shrink-0">
                  FAST CO.
                </div>
                <div>
                  <span className="text-[11px] font-mono text-zinc-500 block">Mar 2026</span>
                  <p className="text-xs text-zinc-200 leading-snug">
                    Metalab awarded Most Innovative Design Companies for 2026.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-900/60 border border-white/10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-emerald-500 flex items-center justify-center font-bold text-white text-xs shrink-0">
                  TC
                </div>
                <div>
                  <span className="text-[11px] font-mono text-zinc-500 block">Jul 2025</span>
                  <p className="text-xs text-zinc-200 leading-snug">
                    PlayerZero raises $15M in a Series A funding round.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
