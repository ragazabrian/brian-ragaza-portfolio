"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white pt-24 pb-12 overflow-hidden border-t border-zinc-900">
      {/* Background Ambient Video */}
      <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          src="https://cdn.sanity.io/files/nuxb3jim/production-july-2025/ab4a05d3b47c051abb3ace15ab7da4eb7edb2886.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10">
        {/* Top Prompt Section */}
        <div className="mb-20">
          <p className="text-xs uppercase tracking-widest text-zinc-500 font-mono mb-6">
            Get in touch
          </p>
          <h2 className="headline-large mb-12 max-w-3xl">
            How can <br />
            <span className="text-zinc-500">we help?</span>
          </h2>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium bg-white text-black hover:bg-zinc-200 transition-colors"
            >
              <span>Work together</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium bg-zinc-900 border border-zinc-800 text-white hover:bg-zinc-800 transition-colors"
            >
              <span>Join our team</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <a
              href="mailto:contact@metalab.com"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium bg-zinc-900 border border-zinc-800 text-white hover:bg-zinc-800 transition-colors"
            >
              <span>Just say hello</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Multi-column Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-12 border-t border-zinc-900">
          <div>
            <h4 className="text-xs uppercase tracking-widest text-zinc-500 font-mono mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-zinc-400">
              <li>
                <Link href="/work" className="hover:text-white transition-colors">
                  Work & Case Studies
                </Link>
              </li>
              <li>
                <Link href="/what-we-do" className="hover:text-white transition-colors">
                  What We Do
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-zinc-500 font-mono mb-4">
              Featured Case Studies
            </h4>
            <ul className="space-y-2.5 text-sm text-zinc-400">
              <li>
                <Link href="/work/midjourney" className="hover:text-white transition-colors">
                  Midjourney
                </Link>
              </li>
              <li>
                <Link href="/work/robinhood" className="hover:text-white transition-colors">
                  Robinhood
                </Link>
              </li>
              <li>
                <Link href="/work/suno" className="hover:text-white transition-colors">
                  Suno
                </Link>
              </li>
              <li>
                <Link href="/work/uber" className="hover:text-white transition-colors">
                  Uber
                </Link>
              </li>
              <li>
                <Link href="/work/windsurf" className="hover:text-white transition-colors">
                  Windsurf
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-zinc-500 font-mono mb-4">
              Connect
            </h4>
            <ul className="space-y-2.5 text-sm text-zinc-400">
              <li>
                <a
                  href="https://linkedin.com/in/brianragaza"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  LinkedIn <ArrowUpRight className="w-3 h-3 text-zinc-600" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ragazabrian"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  GitHub <ArrowUpRight className="w-3 h-3 text-zinc-600" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/metalab"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  X (Twitter) <ArrowUpRight className="w-3 h-3 text-zinc-600" />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/metalab"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  Instagram <ArrowUpRight className="w-3 h-3 text-zinc-600" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-zinc-500 font-mono mb-4">
              Locations
            </h4>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Victoria, BC <br />
              Vancouver, BC <br />
              New York, NY <br />
              San Francisco, CA <br />
              Remote Everywhere
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-600 gap-4">
          <p>
            © {new Date().getFullYear()} MetaLab. Recreated by Brian Ragaza for portfolio
            showcase.
          </p>
          <div className="flex items-center gap-6">
            <span>Designed with precision</span>
            <span className="w-1 h-1 rounded-full bg-zinc-800" />
            <span>Built with Next.js & Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
