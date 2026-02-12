"use client";

import Image from "next/image";

const clients = [
  "/clients/c1.png",
  "/clients/c2.jpg",
  "/clients/c4.jpg",
  "/clients/c5.png",
  "/clients/c6.webp",
  "/clients/c7.jpg",
  "/clients/c8.jpg",
  "/clients/c9.png",
  "/clients/c10.webp",
];

export default function ClientUi() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 md:py-24 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-10 sm:mb-14 px-4">
        <p className="tracking-[0.15em] font-bold text-3xl sm:text-4xl md:text-5xl text-[#f5c842] uppercase mb-4 sm:mb-6">
          Our Clients
        </p>

        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-semibold underline text-[#0c3269]">
          Trusted by Leading Brands
        </h2>
      </div>

      {/* Marquee */}
      <div className="client-marquee">
        <div className="client-track">
          {[...clients, ...clients].map((src, i) => (
            <ClientCard key={i} src={src} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ClientCard({ src }: { src: string }) {
  return (
    <div className="client-card">
      <div className="client-card-inner">
        <div className="client-face">
          <Image
            src={src}
            alt="Client logo"
            width={160}
            height={80}
            className="object-contain"
          />
        </div>

        <div className="client-face client-back">
          <Image
            src={src}
            alt="Client logo"
            width={160}
            height={80}
            className="object-contain scale-105"
          />
        </div>
      </div>
    </div>
  );
}
