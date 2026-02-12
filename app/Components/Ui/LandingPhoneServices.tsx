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
      <div className="relative bg-gradient-to-br from-[#03244f] via-[#06255d] to-[#03244f] py-16 sm:py-20 lg:py-24 clip-section">

        {/* Ambient glows */}
        <div className="absolute -top-32 -left-32 w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] bg-blue-500/25 blur-[160px]" />
        <div className="absolute bottom-0 right-0 w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] bg-yellow-400/20 blur-[140px]" />

        <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-center px-6">

          {/* LEFT SERVICES */}
          <div className="space-y-8 sm:space-y-12 order-2 lg:order-1">
            {services
              .filter(s => s.side === "left")
              .map(service => (
                <ServiceItem
                  key={service.id}
                  service={service}
                  activeId={activeId}
                  setActiveId={setActiveId}
                />
              ))}
          </div>

          {/* PHONE IMAGE */}
          <div className="flex justify-center order-1 lg:order-2">
            <div className="
              relative
              w-[230px] h-[420px]
              sm:w-[280px] sm:h-[500px]
              lg:w-[340px] lg:h-[600px]
              rounded-[28px]
              overflow-hidden
              bg-black/20
              shadow-[0_0_60px_rgba(0,0,0,0.45)]
            ">

              {services.map(service => (
                <Image
                  key={service.id}
                  src={service.image}
                  alt={service.title}
                  fill
                  priority
                  className={`
                    absolute inset-0 object-cover
                    transition-all duration-700 ease-in-out
                    ${activeId === service.id
                      ? "opacity-100 scale-100 translate-y-0 z-10"
                      : "opacity-0 scale-105 translate-y-2 z-0"}
                  `}
                />
              ))}

            </div>
          </div>

          {/* RIGHT SERVICES */}
          <div className="space-y-8 sm:space-y-12 order-3">
            {services
              .filter(s => s.side === "right")
              .map(service => (
                <ServiceItem
                  key={service.id}
                  service={service}
                  activeId={activeId}
                  setActiveId={setActiveId}
                />
              ))}
          </div>

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

/* ------------------------------ */

function ServiceItem({
  service,
  activeId,
  setActiveId,
}: {
  service: any;
  activeId: string;
  setActiveId: (id: string) => void;
}) {
  const isActive = activeId === service.id;

  return (
    <div
      onMouseEnter={() => setActiveId(service.id)}
      onClick={() => setActiveId(service.id)}
      className="group cursor-pointer select-none"
    >
      {/* Number */}
      <div className="relative border-b border-white/40 pb-1 mb-2">
        <span
          className={`
            font-bold
            text-3xl sm:text-4xl lg:text-5xl
            transition-all duration-300
            ${isActive ? "text-[var(--gold)]" : "text-white"}
          `}
        >
          {service.id}
        </span>

        {/* Animated underline */}
        <span
          className={`
            absolute left-0 bottom-0 h-[2px] bg-[var(--gold)]
            transition-all duration-500
            ${isActive ? "w-full" : "w-0"}
          `}
        />
      </div>

      {/* Title */}
      <p
        className={`
          text-base sm:text-lg font-semibold
          transition-colors duration-300
          ${isActive ? "text-[var(--gold)]" : "text-white"}
        `}
      >
        {service.title}
      </p>
    </div>
  );
}
