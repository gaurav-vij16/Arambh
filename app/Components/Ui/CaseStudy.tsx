"use client";

import { useState } from "react";
import Image from "next/image";
import Logo from "../../../public/clients/Logo.png";

const categories = [
  "FILMS",
  "SOCIAL MEDIA",
  "WEB DEVELOPMENT",
  "GRAPHICS",
  "EVENTS",
  "BRANDING",
  "INFRA",
];

const subCategories = [
  "Brand TVC/DVC",
  "Corporate Films",
  "Product Shoots",
  "Documentaries",
  "Explainers/IPs",
  "Podcasts",
  "Testimonials",
];

export default function CaseStudy() {
  const [activeTab, setActiveTab] = useState("FILMS");

  // dummy array for grid (same image repeated)
  const items = Array(9).fill(Logo);

  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-sm tracking-widest text-red-500 uppercase mb-2">
            Work
          </p>

          <h2 className="text-5xl font-semibold mb-4">Case Study</h2>

          <p className="max-w-2xl mx-auto text-gray-500">
            Take a closer look at some of our recent works to get a glimpse of
            our capabilities and the passion we pour into every endeavor.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-8 mb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`text-sm tracking-wide font-medium transition
                ${
                  activeTab === cat
                    ? "text-red-500"
                    : "text-gray-500 hover:text-black"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sub Categories */}
        <div className="text-center text-gray-500 text-sm mb-14 flex flex-wrap justify-center gap-3">
          {subCategories.map((item, i) => (
            <span key={i}>
              {item}
              {i !== subCategories.length - 1 && " |"}
            </span>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((img, index) => (
            <div
              key={index}
              className="relative w-full h-[260px] overflow-hidden rounded-lg group"
            >
              <Image
                src={img}
                alt="portfolio"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
