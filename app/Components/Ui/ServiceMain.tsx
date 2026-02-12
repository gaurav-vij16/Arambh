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
    <section className="relative w-full overflow-hidden bg-[#06255d] py-24 sm:py-28 lg:py-36">

      {/* TOP CURVE */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[80px] sm:h-[120px]">
          <path
            d="M0,80 C240,40 480,40 720,80 960,120 1200,120 1440,60 L1440,0 L0,0 Z"
            fill="#06255d"
          />
        </svg>
      </div>

      {/* BACKGROUND GLOWS */}
      <div className="absolute -top-40 -left-40 w-[360px] sm:w-[520px] h-[360px] sm:h-[520px] bg-[#0b3a78]/40 blur-[160px]" />
      <div className="absolute bottom-0 right-0 w-[300px] sm:w-[420px] h-[300px] sm:h-[420px] bg-[#f5c842]/15 blur-[150px]" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl xl:text-7xl font-semibold text-[#f5c842] leading-tight">
            Services That Build Market Authority
          </h2>

          <p className="mt-5 sm:mt-6 text-white text-base sm:text-lg md:text-xl xl:text-2xl max-w-3xl mx-auto leading-relaxed">
            Strategy first execution crafted to scale brands with clarity & impact.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">

          {services.map(({ title, slug, icon: Icon }) => (
            <Link key={slug} href={`/services/${slug}`}>

              <motion.div
                whileHover={{ y: -6, scale: 1.04 }}
                transition={{ duration: 0.3 }}
                className="
                  group h-full
                  rounded-2xl p-6 md:p-7
                  bg-white
                  shadow-[0_10px_30px_rgba(0,0,0,0.15)]
                  hover:shadow-[0_25px_60px_rgba(245,200,66,0.45)]
                  transition-all
                  flex flex-col items-center justify-center
                "
              >
                {/* ICON */}
                <div className="mb-4">
                  <div
                    className="
                      w-11 h-11 md:w-12 md:h-12 rounded-xl
                      flex items-center justify-center
                      bg-[#06255d]
                      text-[#f5c842]
                      group-hover:scale-110
                      transition-transform
                    "
                  >
                    <Icon size={20} />
                  </div>
                </div>

                {/* TITLE */}
                <h3 className="text-center text-sm sm:text-base md:text-lg font-bold text-[#06255d]">
                  {title}
                </h3>

              </motion.div>

            </Link>
          ))}

        </div>

        {/* DIVIDER */}
        <div className="relative mt-14 sm:mt-20 flex justify-center">
          <div className="w-52 sm:w-64 h-px bg-gradient-to-r from-transparent via-[#f5c842] to-transparent animate-pulse" />
        </div>

      </div>

      {/* BOTTOM CURVE */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[80px] sm:h-[120px]">
          <path
            d="M0,40 C240,120 480,120 720,80 960,40 1200,40 1440,60 L1440,120 L0,120 Z"
            fill="#ffffff"
          />
        </svg>
      </div>

    </section>
  );
}
