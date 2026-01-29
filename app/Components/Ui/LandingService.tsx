"use client";

import ServiceBg from "../../../public/Temp.png";

const services = ["CREATIVE", "CONTENT", "DIGITAL", "MEDIA"];

export default function LandingService() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* SOLID PEACOCK BLUE BACKGROUND */}
      <div className="relative bg-[#06255d] py-20 clip-section">
        <div className="relative max-w-7xl mx-auto px-6">

          {/* SERVICE CARDS */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 place-items-center">
            {services.map((title, index) => (
              <div
                key={index}
                className="group relative w-56 h-56 transition-all duration-500 hover:scale-[1.07]"
              >
                <div className="relative w-full h-full rounded-full bg-white overflow-hidden shadow-[0_35px_80px_rgba(0,0,0,0.55)]">

                  {/* Rotating texture */}
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `url(${ServiceBg.src})`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "108%",
                      animation: "spinSlow 45s linear infinite",
                    }}
                  />

                  {/* Gold ring */}
                  <div className="absolute inset-0 rounded-full ring-1 ring-[#d4af37]/60" />

                  {/* TITLE */}
                  <div className="relative z-10 flex items-center justify-center h-full">
                    <h3 className="text-lg font-extrabold tracking-[0.20em] uppercase text-[#06255d] ">
                      {title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-20 mb-28 flex justify-center">
            <button
              className="
                px-14 py-3.5 rounded-full
                bg-white
                text-[#1e40af]
                font-semibold tracking-wide
                shadow-[0_22px_60px_rgba(0,0,0,0.4)]
                transition-all duration-300
                hover:bg-[#d4af37]
                hover:scale-105
                hover:shadow-[0_35px_90px_rgba(212,175,55,0.6)]
              "
            >
              See us in action ⚡
            </button>
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
      </div>

      {/* STYLES */}
      <style>{`
        .clip-section {
          clip-path: polygon(
            0 0,
            100% 0,
            100% 94%,
            85% 100%,
            15% 100%,
            0 94%
          );
        }

        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
