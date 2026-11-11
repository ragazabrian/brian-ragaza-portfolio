"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-black text-white pt-36 pb-20 px-6 sm:px-12 max-w-7xl mx-auto flex flex-col justify-between">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
        {/* Left Column */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <h1 className="font-eiko text-[clamp(4.5rem,10vw,10.5rem)] leading-[0.88] tracking-[-0.035em] text-white mb-12">
              Say hey.
            </h1>

            <div className="space-y-6 text-sm sm:text-base text-zinc-300 font-sans font-light leading-relaxed max-w-md">
              <p>Not sure where to start?</p>
              <p>
                Tell us about your product, your timeline, how you heard about us, and
                where you’re located. Or reach out directly at{" "}
                <a
                  href="mailto:contact@metalab.com"
                  className="text-white underline hover:text-zinc-400 font-mono"
                >
                  contact@metalab.com
                </a>
                .
              </p>
              <p className="text-zinc-400">
                We read every message. So, thanks in advance for making it a good one.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <Link
              href="/careers"
              className="text-xs uppercase tracking-wider text-zinc-400 hover:text-white underline underline-offset-4 font-mono transition-colors"
            >
              Looking for a job?
            </Link>
          </div>
        </div>

        {/* Right Column: Exact MetaLab Underline Form */}
        <div className="lg:col-span-7">
          {submitted ? (
            <div className="py-20 text-center space-y-4 border border-zinc-800 rounded-3xl bg-zinc-950/60 p-8">
              <h3 className="font-eiko text-4xl text-white">Message received.</h3>
              <p className="text-sm text-zinc-400 max-w-sm mx-auto">
                Thanks for making it a good one. A partner from our studio will be in
                touch shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 px-6 py-2.5 rounded-full text-xs font-medium bg-white text-black hover:bg-zinc-200"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div>
                  <label className="block text-xs text-zinc-400 font-sans mb-2">Name*</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full pb-3 bg-transparent border-b border-zinc-800 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs text-zinc-400 font-sans mb-2">Email*</label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="w-full pb-3 bg-transparent border-b border-zinc-800 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div>
                  <label className="block text-xs text-zinc-400 font-sans mb-2">
                    How did you hear of us?*
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your answer"
                    className="w-full pb-3 bg-transparent border-b border-zinc-800 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs text-zinc-400 font-sans mb-2">
                    What stage is your company?
                  </label>
                  <select className="w-full pb-3 bg-black border-b border-zinc-800 text-sm text-white focus:outline-none focus:border-white transition-colors cursor-pointer">
                    <option value="">Select One</option>
                    <option value="Startup">Early Stage Startup</option>
                    <option value="Growth">Growth / Scaling (Series A-C)</option>
                    <option value="Enterprise">Enterprise / Fortune 500</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs text-zinc-400 font-sans mb-2">Message*</label>
                <textarea
                  required
                  rows={2}
                  placeholder="Type your message"
                  className="w-full pb-3 bg-transparent border-b border-zinc-800 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors resize-none"
                />
              </div>

              <div className="flex items-center justify-between pt-4">
                <label className="flex items-center gap-3 text-xs text-zinc-400 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-zinc-800 bg-zinc-950 text-white focus:ring-0"
                  />
                  <span>Signup to Newsletter</span>
                </label>

                <button
                  type="submit"
                  className="px-8 py-3 rounded-full text-xs font-medium bg-zinc-900 hover:bg-white text-white hover:text-black border border-zinc-800 transition-all"
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Exact MetaLab Contact Page Footer */}
      <div className="pt-16 border-t border-zinc-900 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-zinc-500 gap-6">
        <div className="flex items-center gap-6">
          <a
            href="https://linkedin.com/company/metalab"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white"
          >
            Linkedin
          </a>
          <a
            href="https://instagram.com/metalab"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white"
          >
            Instagram
          </a>
          <a
            href="https://twitter.com/metalab"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white"
          >
            X
          </a>
          <a
            href="https://medium.com/@metalabtech"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white"
          >
            Medium
          </a>
        </div>

        <div className="flex items-center gap-6">
          <Link href="/careers" className="hover:text-white">
            Careers
          </Link>
          <Link href="/contact" className="hover:text-white">
            Contact
          </Link>
          <Link href="/privacy-policy" className="hover:text-white">
            Privacy
          </Link>
          <Link href="/accessibility" className="hover:text-white">
            Accessibility
          </Link>
        </div>
      </div>
    </div>
  );
}
