"use client";

import { useState } from "react";

export default function Portfolio() {
  const categories = [
    "FILMS",
    "SOCIAL MEDIA",
    "WEB DEVELOPMENT",
    "GRAPHICS",
    "EVENTS",
    "BRANDING",
    "INFRA",
  ];

  const [activeCategory, setActiveCategory] = useState("WEB DEVELOPMENT");

  return (
    <section className="w-full bg-white py-24">
      {/* Heading */}
      <div className="text-center max-w-4xl mx-auto px-4">
        <p className="text-red-500 tracking-widest text-sm font-semibold mb-4">
          WORK
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold mb-6">
          Portfolio
        </h2>

        <p className="text-gray-500 text-lg leading-relaxed">
          Take a closer look at some of our recent works to get a glimpse of our
          capabilities and the passion we pour into every endeavor.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-8 mt-16 text-sm font-semibold">
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setActiveCategory(item)}
            className={`uppercase tracking-wide transition-colors duration-300
              ${
                activeCategory === item
                  ? "text-red-500"
                  : "text-gray-500 hover:text-black"
              }
            `}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Sub Description */}
      {activeCategory === "WEB DEVELOPMENT" && (
        <p className="text-center text-gray-500 mt-6 text-sm px-4">
          UI/UX Design &nbsp;|&nbsp; Frontend & Backend Development &nbsp;|&nbsp;
          CMS & eCommerce Platforms &nbsp;|&nbsp; Custom Integrations &nbsp;|&nbsp;
          SEO & Performance Optimization
        </p>
      )}

      {/* Portfolio Grid */}
      <div className="max-w-7xl mx-auto px-6 mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="overflow-hidden rounded-lg">
          <img
            src="/portfolio-1.jpg"
            alt="Project 1"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="overflow-hidden rounded-lg">
          <img
            src="/portfolio-2.jpg"
            alt="Project 2"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="overflow-hidden rounded-lg">
          <img
            src="/portfolio-3.jpg"
            alt="Project 3"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
}
