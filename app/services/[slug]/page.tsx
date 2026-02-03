"use client";

import { notFound } from "next/navigation";
import { servicesData } from "@/app/data/serviceData";
import Image from "next/image";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = servicesData.find((item) => item.slug === slug);

  if (!service) notFound();

  return (
    <main className="font-masvis bg-white text-[#06255d]">

      {/* HERO IMAGE */}
      <section className="relative w-full aspect-[1920/770] overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          priority
          className="object-cover object-top"
        />
      </section>

      {/* DESCRIPTION */}
      <section className="py-48 px-6 bg-[#fff8e5]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[60px_1fr] gap-12">

          {/* Vertical accent */}
          <div className="hidden lg:block relative">
            <div className="sticky top-40 h-40 w-[6px] rounded-full bg-gradient-to-b from-[#f5c842] to-[#ffae42]" />
          </div>

          {/* Text Content */}
          <div className="space-y-14">
            {service.description.split("\n").map((line, i) => (
              <p
                key={i}
                className="text-[#06255d] text-2xl md:text-3xl lg:text-[2.1rem] leading-[1.85] font-medium"
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-40 px-6 bg-[#06255d] relative overflow-hidden">
        {/* Floating background blobs */}
        <div className="absolute -top-32 -left-32 w-72 h-72 bg-[#f5c842]/10 rounded-full blur-[100px] animate-blob" />
        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-[#22d3ee]/10 rounded-full blur-[120px] animate-blob animation-delay-2000" />

        {/* Heading */}
        <div className="text-center mb-24 relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-5 text-[#f5c842] font-masvis tracking-tight">
            What We Focus On
          </h2>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto">
            Focused strategies designed to deliver clarity, consistency, and growth.
          </p>
        </div>

        {/* Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10">
          {service.highlights.map((item, i) => (
            <div
              key={i}
              className="group relative rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105 hover:rotate-3"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#f5c842]/20 via-[#ffae42]/20 to-[#f5c842]/20 opacity-30 group-hover:opacity-60 transition-opacity duration-500" />

              {/* Funky accent number */}
              <div className="absolute -top-5 -left-5 text-6xl font-extrabold text-[#f5c842]/20 pointer-events-none select-none rotate-12">
                0{i + 1}
              </div>

              {/* Card content */}
              <div className="relative h-full w-full rounded-3xl px-10 py-14 bg-white text-[#06255d] flex flex-col justify-center items-start shadow-lg">
                <p className="text-lg md:text-xl font-semibold leading-relaxed">
                  {item}
                </p>
              </div>

              {/* Slight floating effect */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="w-24 h-24 bg-[#f5c842]/10 rounded-full blur-xl absolute -top-8 -left-8 animate-blob"></div>
                <div className="w-20 h-20 bg-[#22d3ee]/10 rounded-full blur-lg absolute -bottom-6 -right-6 animate-blob animation-delay-1000"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Blob animations */}
        <style jsx>{`
    @keyframes blob {
      0%, 100% { transform: translate(0px, 0px) scale(1); }
      33% { transform: translate(30px, -20px) scale(1.1); }
      66% { transform: translate(-20px, 30px) scale(0.9); }
    }
    .animate-blob { animation: blob 8s infinite; }
    .animation-delay-1000 { animation-delay: 1s; }
    .animation-delay-2000 { animation-delay: 2s; }
  `}</style>
      </section>


      {/* OFFERINGS */}
      <section className="py-36 px-6 bg-[#fff8e5] text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-28 tracking-tight text-[#06255d] font-masvis">
          Our Offerings
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          {service.offerings.map((offering, i) => (
            <div
              key={i}
              className={`rounded-3xl p-14 shadow-2xl transition-transform duration-500 hover:-translate-y-4 ${i % 2 === 0
                  ? "bg-gradient-to-tr from-[#f5c842] to-[#ffae42] text-[#06255d]"
                  : "bg-[#06255d] text-white"
                }`}
            >
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 tracking-tight font-masvis">
                {offering.title}
              </h3>
              <p className="text-lg md:text-xl leading-relaxed font-masvis">
                {offering.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 px-6 bg-[#06255d] text-center">
        <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-[#f5c842] font-masvis">
          Ready to get started?
        </h3>

        <p className="mt-10 text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-masvis">
          Let’s turn strategy into measurable growth and build brands that scale globally.
        </p>

        <div className="mt-16">
          <a
            href={service.cta.link}
            className="inline-block px-16 py-5 rounded-full bg-white text-[#06255d] text-lg font-semibold tracking-wide shadow-xl transition-all duration-300 hover:bg-[#f5c842] hover:text-[#06255d] hover:scale-105 font-masvis"
          >
            {service.cta.text}
          </a>
        </div>
      </section>
    </main>
  );
}
