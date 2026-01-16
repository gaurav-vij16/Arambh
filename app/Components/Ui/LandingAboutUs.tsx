"use client";

import Image from "next/image";
import AboutUsImg from "../../../public/AboutUs.png";

export default function LandingAboutUs() {
  return (
    <section
      id="about"
      className="relative w-full bg-white overflow-hidden"
    >
      {/* 🔷 Top Blue Slanted Accent */}
      <div
        className="absolute top-0 left-0 w-full h-48 -skew-y-3 origin-top-left"
        style={{ backgroundColor: "#0c3269" }}
      />

      {/* 🟡 Golden Highlight */}
      <div
        className="absolute top-28 left-0 w-full h-[3px]"
        style={{ backgroundColor: "#dab33a" }}
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 pt-44 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* 🦚 Premium Visual */}
        <div className="flex justify-center items-center">
          <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem] flex items-center justify-center">

            {/* 🔄 Rotating Accent Ring */}
            <div className="absolute inset-0 animate-spin-slow">
              <div
                className="w-full h-full rounded-full"
                style={{
                  background:
                    "conic-gradient(#dab33a 0deg, transparent 60deg, transparent 300deg, #dab33a 360deg)",
                  padding: "3px",
                }}
              >
                <div className="w-full h-full rounded-full bg-white" />
              </div>
            </div>

            {/* Soft Golden Glow */}
            <div className="absolute inset-10 rounded-full bg-[#dab33a]/10 blur-2xl" />

            {/* Image */}
            <div className="relative w-[82%] h-[82%] rounded-full overflow-hidden bg-white shadow-[0_25px_60px_rgba(0,0,0,0.18)] z-10">
              <Image
                src={AboutUsImg}
                alt="About Arambh"
                fill
                className="object-cover rounded-full"
                priority
              />
            </div>
          </div>
        </div>

        {/* 📝 Right Content */}
        <div className="text-center lg:text-left">
          <h2
            className="brand-text text-4xl font-bold md:text-5xl mb-6 tracking-tight"
            style={{ color: "#dab33a" }}
          >
           What's The आरंभ ? 
          </h2>

          <p
            className="leading-relaxed mb-5 text-base md:text-lg"
            style={{ color: "#0c3269" }}
          >
            <span
              className="brand-text font-semibold"
              style={{ color: "#dab33a" }}
            >
              Arambh
            </span>{" "}
            is where strategy meets creativity and brands find their voice. We are
            a full-scale{" "}
            <span
              className="font-semibold"
              style={{ color: "#dab33a" }}
            >
              360° marketing and creative agency
            </span>{" "}
            delivering integrated solutions across branding, content,
            performance marketing, production, social media, and digital
            innovation.
          </p>

          <p
            className="leading-relaxed mb-5 text-base md:text-lg"
            style={{ color: "#0c3269" }}
          >
            We partner with forward-thinking brands to design impactful
            campaigns, compelling narratives, and visually powerful experiences
            that drive engagement and measurable growth.
          </p>

          <p
            className="leading-relaxed text-base md:text-lg"
            style={{ color: "#0c3269" }}
          >
            Every project at{" "}
            <span
              className="brand-text font-semibold"
              style={{ color: "#dab33a" }}
            >
              Arambh
            </span>{" "}
            is built on insight, creativity, and performance — ensuring our
            clients don’t just stand out, but lead.
          </p>
        </div>
      </div>

      {/* 🔷 Bottom Closure Accent */}
      <div
        className="absolute bottom-0 left-0 w-full h-10 skew-y-2 origin-bottom-left"
        style={{ backgroundColor: "#0c3269" }}
      />
    </section>
  );
}
