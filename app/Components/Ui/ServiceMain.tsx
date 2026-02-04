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

/* ================= DATA ================= */

const services = [
  { title: "Social Media Management", slug: "social-media-management", icon: Share2 },
  { title: "Content Marketing", slug: "content-marketing", icon: FileText },
  { title: "Performance Marketing", slug: "performance-marketing", icon: BarChart3 },
  { title: "Model Shoots", slug: "model-shoots", icon: Camera },
  { title: "Influencer Marketing", slug: "influencer-marketing", icon: Users },
  { title: "Website Development", slug: "website-development", icon: Code2 },
  { title: "SEO Optimization", slug: "seo-optimization", icon: Search },
  { title: "Brand Shoot", slug: "brand-shoot", icon: Sparkles },
];

/* ================= COMPONENT ================= */

export default function ServicesUSP() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#06255d]">

      {/* TOP CURVE */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[120px]">
          <path
            d="M0,80 C240,40 480,40 720,80 960,120 1200,120 1440,60 L1440,0 L0,0 Z"
            fill="#06255d"
          />
        </svg>
      </div>

      {/* SOFT BACKGROUND GLOWS */}
      <div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-[#0b3a78]/40 blur-[200px]" />
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-[#f5c842]/15 blur-[180px]" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-screen flex flex-col justify-center pt-24">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-[#f5c842]">
            Services That Build Market Authority
          </h2>

          <p className="mt-4 text-white/80 text-xl max-w-2xl mx-auto">
            Strategy-first execution crafted to scale brands with clarity & impact.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">

          {services.map(({ title, slug, icon: Icon }) => (
            <Link key={slug} href={`/services/${slug}`}>

              <motion.div
                whileHover={{ y: -8, scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="
                  group rounded-2xl p-7
                  bg-white
                  shadow-[0_10px_30px_rgba(0,0,0,0.15)]
                  hover:shadow-[0_25px_60px_rgba(245,200,66,0.45)]
                  transition-shadow
                "
              >
                {/* ICON */}
                <div className="mb-4 flex justify-center">
                  <div
                    className="
                      w-12 h-12 rounded-xl
                      flex items-center justify-center
                      bg-[#06255d]
                      text-[#f5c842]
                      transition-transform
                      group-hover:scale-110
                    "
                  >
                    <Icon size={20} />
                  </div>
                </div>

                {/* TITLE */}
                <h3 className="text-center text-bold  font-bold  text-[#06255d]">
                  {title}
                </h3>

              </motion.div>

            </Link>
          ))}

        </div>

        {/* GOLD DIVIDER */}
        <div className="relative mt-16 flex justify-center">
          <div className="w-64 h-px bg-gradient-to-r from-transparent via-[#f5c842] to-transparent animate-pulse" />
        </div>

      </div>

      {/* BOTTOM CURVE */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[120px]">
          <path
            d="M0,40 C240,120 480,120 720,80 960,40 1200,40 1440,60 L1440,120 L0,120 Z"
            fill="#ffffff"
          />
        </svg>
      </div>

    </section>
  );
}
