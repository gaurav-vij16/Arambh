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
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  const [hasStarted, setHasStarted] = useState(false);
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));

  /* ---------------------------------- */
  /* Observe when section is visible */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect(); // run once
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  /* ---------------------------------- */
  /* Animate numbers */
  useEffect(() => {
    if (!hasStarted) return;

    const duration = 1400;
    const start = performance.now();

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = easeOutCubic(progress);

      setCounts(stats.map((s) => Math.floor(s.value * eased)));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [hasStarted]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#06255d] py-32"
    >
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
            <div className="absolute top-0 left-0 w-full h-1 rounded-t-3xl bg-gradient-to-r from-[#f5c842] via-[#22d3ee] to-[#4ade80]" />

            <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#f5c842] via-[#22d3ee] to-[#4ade80] bg-clip-text text-transparent text-center">
              {counts[index].toLocaleString()}
              <span className="ml-1 text-white/80">{item.suffix}</span>
            </div>

            <p className="mt-3 text-gray-200 text-lg font-medium text-center">
              {item.label}
            </p>
          </div>
        ))}
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
    </section>
  );
}
