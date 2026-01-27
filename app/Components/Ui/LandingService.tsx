"use client";

import ServiceBg from "../../../public/ServiceBg.png";

const services = ["CREATIVE", "CONTENT", "DIGITAL", "MEDIA"];

export default function LandingService() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* SOLID PEACOCK BLUE BACKGROUND */}
      <div className="relative bg-[#06255d] py-32 clip-section">
        <div className="relative max-w-7xl mx-auto px-6">

          {/* SVG CONNECTING LINES */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1000 400"
            preserveAspectRatio="none"
          >
            {[
              "M150 200 L350 200",
              "M350 200 L550 200",
              "M550 200 L750 200",
            ].map((path, i) => (
              <path
                key={i}
                d={path}
                fill="none"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                strokeDasharray="6 10"
                className="animate-lineFlow"
              />
            ))}

            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2563eb" />
                <stop offset="50%" stopColor="#d4af37" />
                <stop offset="100%" stopColor="#2563eb" />
              </linearGradient>
            </defs>
          </svg>

          {/* SERVICE CARDS */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-24 place-items-center">
            {services.map((title, index) => (
              <div
                key={index}
                className="group relative w-64 h-64 transition-all duration-500 hover:scale-110"
              >
                {/* CARD */}
                <div className="relative w-full h-full rounded-full bg-white overflow-hidden shadow-[0_40px_90px_rgba(0,0,0,0.6)]">

                  {/* Rotating texture */}
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `url(${ServiceBg.src})`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "115%",
                      animation: "spinSlow 40s linear infinite",
                    }}
                  />

                  {/* Gold ring */}
                  <div className="absolute inset-0 rounded-full ring-1 ring-[#d4af37]/60" />

                  {/* TITLE */}
                  <div className="relative z-10 flex items-center justify-center h-full">
                    <h3 className="text-xl font-extrabold tracking-widest uppercase text-[var(--gold)]">
                      {title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-32 flex justify-center">
            <button
              className="
                px-16 py-4 rounded-full
                bg-white
                text-[#1e40af]
                font-semibold tracking-wide
                shadow-[0_25px_70px_rgba(0,0,0,0.4)]
                transition-all duration-300
                hover:bg-[var(--gold)]
                hover:text-[#1e40af]
                hover:scale-110
                hover:shadow-[0_40px_100px_rgba(212,175,55,0.6)]
              "
            >
              See us in action ⚡
            </button>
          </div>
        </div>
      </div>

      {/* STYLES */}
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

        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-lineFlow {
          animation: dashMove 6s linear infinite;
        }

        @keyframes dashMove {
          from { stroke-dashoffset: 120; }
          to { stroke-dashoffset: 0; }
        }
      `}</style>
    </section>
  );
}
