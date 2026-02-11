"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 15, label: "Content Reach", suffix: "M+" },
  { value: 30523, label: "Influencer Community", suffix: "+" },
  { value: 12, label: "Industries Covered", suffix: "+" },
  { value: 30, label: "Live Sessions", suffix: "+" },
  { value: 15, label: "Languages", suffix: "+" },
  { value: 7, label: "Return On Investment", suffix: "x" },
];

export default function GrowthSection() {
  const [mounted, setMounted] = useState(false);
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));
  const rafRef = useRef<number | null>(null);

  // Mark component as mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  // Animate stats with easing
  useEffect(() => {
    if (!mounted) return;

    const duration = 1400;
    const start = performance.now();
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const easedProgress = easeOutCubic(progress);

      setCounts(stats.map((stat) => Math.floor(stat.value * easedProgress)));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [mounted]);

  return (
    <section className="relative overflow-hidden bg-[#06255d] py-32">
      {/* Ambient blobs */}
      <div className="absolute -top-48 -left-48 w-[400px] h-[400px] bg-[#f5c842]/20 blur-[140px] rounded-full animate-blob" />
      <div className="absolute -bottom-48 -right-48 w-[400px] h-[400px] bg-[#4ade80]/20 blur-[140px] rounded-full animate-blob animation-delay-2000" />

      {/* Heading */}
      <div className="relative z-10 text-center px-6">
        <h2 className="font-masvis font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white">
          Growth That <span className="text-[#f5c842]">Speaks</span>
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-gray-200">
          Real metrics. Real impact. Real brand momentum. See the numbers grow as
          we scale together.
        </p>
      </div>

      {/* Stats */}
      <div className="relative z-10 max-w-7xl mx-auto mt-16 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
        {stats.map((item, index) => (
          <div
            key={item.label}
            className="relative rounded-3xl p-8 bg-white/10 border border-[#f5c842]/40 shadow-xl backdrop-blur-md hover:scale-105 transition-transform duration-500"
          >
            {/* Accent line */}
            <div className="absolute top-0 left-0 w-full h-1 rounded-t-3xl bg-gradient-to-r from-[#f5c842] via-[#22d3ee] to-[#4ade80]" />

            {/* Number */}
            <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#f5c842] via-[#22d3ee] to-[#4ade80] bg-clip-text text-transparent text-center">
              {counts[index].toLocaleString()}
              <span className="ml-1 text-white/80">{item.suffix}</span>
            </div>

            {/* Label */}
            <p className="mt-3 text-gray-200 text-lg font-medium text-center">
              {item.label}
            </p>
          </div>
        ))}
      </div>

      {/* Curved Bottom Waves */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-32"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#06255d"
            fillOpacity="1"
            d="M0,192L48,186.7C96,181,192,171,288,176C384,181,480,203,576,213.3C672,224,768,224,864,202.7C960,181,1056,139,1152,112C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-[120px]"
        >
          <path
            d="M0,40 C240,120 480,120 720,80 960,40 1200,40 1440,60 L1440,120 L0,120 Z"
            fill="#06255d"
          />
        </svg>
      </div>

      {/* Custom blob animation */}
      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -20px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 30px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 8s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>

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
