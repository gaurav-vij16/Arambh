"use client";

import { useState } from "react";
import Image from "next/image";

import phone from "../../../public/phone.png";
import image1 from "../../../public/clients/Image1.jpg";
import image2 from "../../../public/Image2.png";
import image3 from "../../../public/clients/Image3.jpg";
import image4 from "../../../public/clients/Image4.jpg";
import image5 from "../../../public/clients/Image5.jpg";
import image6 from "../../../public/clients/Image6.jpg";

const services = [
  { id: "01", title: "Content Production and 3D", image: image1, side: "left" },
  { id: "02", title: "Social Media Management", image: image2, side: "left" },
  { id: "03", title: "TikTok management", image: image3, side: "left" },
  { id: "04", title: "Branding and design", image: image4, side: "right" },
  { id: "05", title: "Web & App Design", image: image5, side: "right" },
  {
    id: "06",
    title: "Celebrity and Influencer management",
    image: image6,
    side: "right",
  },
];

export default function LandingPhoneServices() {
  const [activeImage, setActiveImage] = useState(image1);

  return (
    <section className="relative w-full overflow-hidden">
      {/* SOLID BACKGROUND */}
      <div className="relative bg-[#06255d] py-32 clip-section">
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 items-center gap-16 px-6">

          {/* LEFT SERVICES */}
          <div className="space-y-20 z-20">
            {services
              .filter((s) => s.side === "left")
              .map((service) => (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveImage(service.image)}
                  className="group cursor-pointer"
                >
                  <div className="border-b border-white/60 pb-3 mb-4">
                    <span className="text-white text-6xl font-bold transition-all duration-300 group-hover:text-[var(--gold)] group-hover:drop-shadow-[0_0_25px_rgba(212,175,55,0.8)]">
                      {service.id}
                    </span>
                  </div>
                  <p className="text-white text-xl font-semibold max-w-[260px] group-hover:text-[var(--gold)] transition-colors duration-300">
                    {service.title}
                  </p>
                </div>
              ))}
          </div>

          {/* PHONE */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-[360px] h-[720px] scale-125">
              {/* SCREEN */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="relative w-[72%] h-[69%] translate-y-[2%] overflow-hidden rounded-[28px]">
                  <Image
                    src={activeImage}
                    alt="Service preview"
                    fill
                    className="object-cover scale-[0.92] transition-all duration-500"
                    priority
                  />
                </div>
              </div>

              {/* PHONE FRAME */}
              <div className="absolute inset-0 z-20 pointer-events-none">
                <Image
                  src={phone}
                  alt="Phone frame"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          {/* RIGHT SERVICES */}
          <div className="space-y-20 z-20">
            {services
              .filter((s) => s.side === "right")
              .map((service) => (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveImage(service.image)}
                  className="group cursor-pointer"
                >
                  <div className="border-b border-white/60 pb-3 mb-4">
                    <span className="text-white text-6xl font-bold transition-all duration-300 group-hover:text-[var(--gold)] group-hover:drop-shadow-[0_0_25px_rgba(212,175,55,0.8)]">
                      {service.id}
                    </span>
                  </div>
                  <p className="text-white text-xl font-semibold max-w-[260px] group-hover:text-[var(--gold)] transition-colors duration-300">
                    {service.title}
                  </p>
                </div>
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
