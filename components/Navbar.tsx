"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X, Volume2, VolumeX } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [muted, setMuted] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "Work", href: "/work" },
    { label: "What We Do", href: "/what-we-do" },
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "py-4 bg-black/80 backdrop-blur-md border-b border-white/5" : "py-7 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2.5">
            <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center transition-transform group-hover:scale-110">
              <div className="w-1.5 h-1.5 rounded-full bg-black" />
            </div>
            <span className="font-semibold tracking-tight text-white text-base sm:text-lg">
              MetaLab <span className="text-zinc-500 font-normal">× Brian Ragaza</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 bg-white/[0.04] border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-colors ${
                    isActive
                      ? "text-black bg-white"
                      : "text-zinc-400 hover:text-white hover:bg-white/[0.06]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMuted(!muted)}
              aria-label="Toggle ambient sound"
              className="hidden lg:flex w-9 h-9 rounded-full items-center justify-center border border-white/10 text-zinc-400 hover:text-white hover:border-white/30 transition-all"
            >
              {muted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
            </button>

            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium bg-white text-black hover:bg-zinc-200 transition-colors"
            >
              <span>Let&apos;s talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              className="md:hidden w-10 h-10 rounded-full flex items-center justify-center border border-white/15 text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden flex flex-col justify-between px-8 py-28 animate-in fade-in duration-200">
          <div className="flex flex-col gap-6">
            <p className="text-xs uppercase tracking-widest text-zinc-500 font-mono">Navigation</p>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-3xl font-light text-white hover:text-zinc-400 tracking-tight"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-10 border-t border-zinc-800 flex flex-col gap-4">
            <p className="text-xs text-zinc-500">Get in touch directly</p>
            <Link
              href="mailto:contact@metalab.com"
              className="text-lg text-white font-mono hover:underline"
            >
              contact@metalab.com
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
