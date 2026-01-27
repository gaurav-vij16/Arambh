"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Share2,
  FileText,
  BarChart3,
  Camera,
  Users,
  Code2,
  Search,
  Sparkles,
} from "lucide-react";

const services = [
  { title: "Social Media Management", slug: "social-media-management", icon: Share2 },
  { title: "Content Marketing", slug: "content-marketing", icon: FileText },
  { title: "Performance Marketing", slug: "performance-marketing", icon: BarChart3 },
  { title: "Model Shoots", slug: "model-shoots", icon: Camera },
  { title: "Influencer Marketing", slug: "influencer-marketing", icon: Users },
  { title: "Website Development", slug: "website-development", icon: Code2 },
  { title: "SEO Optimization", slug: "seo-optimization", icon: Search },
  { title: "Brand Strategy", slug: "brand-strategy", icon: Sparkles },
];

export default function ServicesUSP() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* TOP CURVED ENTRY */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-[120px]"
        >
          <path
            d="M0,80 C240,40 480,40 720,80 960,120 1200,120 1440,60 L1440,0 L0,0 Z"
            fill="#06255d"
          />
        </svg>
      </div>

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[#06255d]" />

      {/* SUBTLE DEPTH (CONTROLLED) */}
      <div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-[#0b3a78]/40 blur-[200px]" />
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-[#d4af37]/15 blur-[180px]" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-screen flex flex-col justify-center pt-24">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-semibold text-[var(--gold)]">
            Services That Build Market Authority
          </h2>
          <p className="mt-4 text-white/75 text-sm max-w-xl mx-auto">
            Strategy-first execution crafted to scale brands with clarity & impact.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {services.map(({ title, slug, icon: Icon }) => (
            <Link
              key={slug}
              href={`/services/${slug}`}
              aria-label={`Go to ${title} service page`}
            >
              <motion.div
                whileHover={{ y: -6, scale: 1.04 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="
                  group rounded-2xl p-6
                  bg-white
                  shadow-[0_12px_35px_rgba(0,0,0,0.15)]
                  hover:shadow-[0_30px_70px_rgba(0,0,0,0.25)]
                "
              >
                {/* ICON */}
                <div className="mb-4 flex justify-center">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#03244f] text-[var(--gold)] transition-transform group-hover:scale-110">
                    <Icon size={20} />
                  </div>
                </div>

                {/* TITLE */}
                <h3 className="text-center text-sm font-semibold text-[#03244f]">
                  {title}
                </h3>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* GOLD DIVIDER */}
        <div className="relative mt-16 flex justify-center">
          <div className="w-64 h-px bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent animate-pulse" />
        </div>
      </div>

      {/* BOTTOM CURVED EXIT */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-[120px]"
        >
          <path
            d="M0,40 C240,120 480,120 720,80 960,40 1200,40 1440,60 L1440,120 L0,120 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}
