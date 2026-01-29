"use client";

import { useState } from "react";
import Image from "next/image";

import webTech from "../../../public/WebTech.png";
import socialMedia from "../../../public/Social.png";
import branding from "../../../public/branding.png";
import performance from "../../../public/performance.png";

const services = [
  { id: "01", title: "Brand Marketing", image: branding, side: "left" },
  { id: "02", title: "Performance Marketing", image: performance, side: "left" },
  { id: "03", title: "Social Media Marketing", image: socialMedia, side: "right" },
  { id: "04", title: "Web & Technology", image: webTech, side: "right" },
];

export default function LandingPhoneServices() {
  const [activeId, setActiveId] = useState("01");

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative bg-gradient-to-br from-[#03244f] via-[#06255d] to-[#03244f] py-24 clip-section">

        {/* Ambient glows */}
        <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-blue-500/25 blur-[160px]" />
        <div className="absolute bottom-0 right-0 w-[360px] h-[360px] bg-yellow-400/20 blur-[140px]" />

        <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-center px-6">

          {/* LEFT SERVICES */}
          <div className="space-y-14">
            {services.filter(s => s.side === "left").map(service => (
              <div
                key={service.id}
                onMouseEnter={() => setActiveId(service.id)}
                className="group cursor-pointer"
              >
                <div className="border-b border-white/40 pb-2 mb-3">
                  <span className="text-white text-5xl font-bold transition-all duration-300 group-hover:text-[var(--gold)]">
                    {service.id}
                  </span>
                </div>
                <p className="text-white text-lg font-semibold transition-colors group-hover:text-[var(--gold)]">
                  {service.title}
                </p>
              </div>
            ))}
          </div>

          {/* FIXED IMAGE CONTAINER */}
          <div className="flex justify-center">
            <div className="relative w-[340px] h-[600px] rounded-[32px] overflow-hidden bg-black/20 shadow-[0_0_60px_rgba(0,0,0,0.45)]">
              {services.map(service => (
                <Image
                  key={service.id}
                  src={service.image}
                  alt={service.title}
                  fill
                  priority
                  className={`
                    object-cover
                    absolute inset-0
                    transition-all duration-700 ease-out
                    ${activeId === service.id
                      ? "opacity-100 scale-100 z-10"
                      : "opacity-0 scale-[1.03] z-0"}
                  `}
                />
              ))}
            </div>
          </div>

          {/* RIGHT SERVICES */}
          <div className="space-y-14">
            {services.filter(s => s.side === "right").map(service => (
              <div
                key={service.id}
                onMouseEnter={() => setActiveId(service.id)}
                className="group cursor-pointer"
              >
                <div className="border-b border-white/40 pb-2 mb-3">
                  <span className="text-white text-5xl font-bold transition-all duration-300 group-hover:text-[var(--gold)]">
                    {service.id}
                  </span>
                </div>
                <p className="text-white text-lg font-semibold transition-colors group-hover:text-[var(--gold)]">
                  {service.title}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* BOTTOM CURVE */}
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

      </div>

      {/* CLIP SHAPE */}
      <style>{`
        .clip-section {
          clip-path: polygon(
            0 0,
            100% 0,
            100% 92%,
            85% 100%,
            15% 100%,
            0 92%
          );
        }
      `}</style>
    </section>
  );
}
