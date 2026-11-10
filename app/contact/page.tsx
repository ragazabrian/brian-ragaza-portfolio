"use client";

import React, { useState } from "react";
import { ArrowUpRight, CheckCircle2, Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "Product Design",
    budget: "$50k - $100k",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-6 sm:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left Column: Context & Direct Contact */}
        <div className="lg:col-span-5">
          <p className="text-xs uppercase tracking-widest text-zinc-500 font-mono mb-4">
            Contact Us
          </p>
          <h1 className="headline-large text-white mb-8">
            Say <br />
            <span className="text-zinc-500">hey.</span>
          </h1>

          <div className="space-y-6 text-base text-zinc-300 font-light leading-relaxed mb-12">
            <p>
              Not sure where to start? Tell us about your product, your timeline, how you
              heard about us, and where you’re located.
            </p>
            <p>
              Or reach out directly at{" "}
              <a
                href="mailto:contact@metalab.com"
                className="text-white underline hover:text-zinc-300 font-mono"
              >
                contact@metalab.com
              </a>
              .
            </p>
            <p className="text-zinc-500 italic">
              We read every message. So, thanks in advance for making it a good one.
            </p>
          </div>

          <div className="pt-8 border-t border-zinc-900 space-y-4">
            <div className="flex items-center gap-3 text-sm text-zinc-400">
              <Mail className="w-4 h-4 text-zinc-600" />
              <span>General: hello@metalab.com</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-zinc-400">
              <Phone className="w-4 h-4 text-zinc-600" />
              <span>Studio: +1 (250) 590-1910</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-zinc-400">
              <MapPin className="w-4 h-4 text-zinc-600" />
              <span>Headquarters: Victoria, BC & Vancouver, BC</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Form */}
        <div className="lg:col-span-7">
          <div className="p-8 sm:p-12 rounded-3xl bg-zinc-950 border border-zinc-900">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h3 className="text-2xl font-light text-white">Message dispatched!</h3>
                <p className="text-sm text-zinc-400 max-w-sm mx-auto">
                  Thank you for reaching out. A partner from our studio will review your
                  inquiry and follow up shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2.5 rounded-full text-xs font-medium bg-zinc-900 text-zinc-300 hover:text-white border border-zinc-800"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-zinc-500 font-mono mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-zinc-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-zinc-500 font-mono mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-zinc-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-zinc-500 font-mono mb-2">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      placeholder="Acme Corp"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-zinc-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-zinc-500 font-mono mb-2">
                      Estimated Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus:outline-none focus:border-zinc-500"
                    >
                      <option value="Under $50k">Under $50k</option>
                      <option value="$50k - $100k">$50k - $100k</option>
                      <option value="$100k - $250k">$100k - $250k</option>
                      <option value="$250k+">$250k+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-500 font-mono mb-2">
                    Primary Service Needed
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus:outline-none focus:border-zinc-500"
                  >
                    <option value="Product Design">Product Design (UX/UI)</option>
                    <option value="AI Interfaces">AI & Frontier Interfaces</option>
                    <option value="Full-Stack Engineering">Full-Stack Engineering</option>
                    <option value="Brand Identity">Brand & Visual Identity</option>
                    <option value="Full Build">End-to-End Build (Design + Code)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-500 font-mono mb-2">
                    Project Details & Timeline *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about what you want to build, target launch dates, and existing assets..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-zinc-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-white text-black font-medium text-sm hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
                >
                  <span>Submit Project Inquiry</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
