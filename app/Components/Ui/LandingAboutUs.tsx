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
      <div className="absolute top-0 left-0 w-full h-32 sm:h-40 md:h-48 -skew-y-3 origin-top-left bg-[#0c3269]" />

      {/* 🟡 Golden Highlight */}
      <div className="absolute top-24 sm:top-28 left-0 w-full h-[3px] bg-[#dab33a]" />

      {/* Content */}
      <div
        className="
          relative
          max-w-7xl
          mx-auto
          px-5
          sm:px-8
          md:px-12
          pt-32
          sm:pt-36
          md:pt-44
          pb-20
          sm:pb-24
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-14
          lg:gap-20
          items-center
        "
      >
        {/* 🦚 Image Block */}
        <div className="flex justify-center">
          <div
            className="
              relative
              w-64 h-64
              sm:w-72 sm:h-72
              md:w-80 md:h-80
              lg:w-88 lg:h-88
              flex items-center justify-center
            "
          >
            {/* Rotating Ring */}
            <div className="absolute inset-0 animate-spin-slow">
              <div
                className="w-full h-full rounded-full p-[3px]"
                style={{
                  background:
                    "conic-gradient(#dab33a 0deg, transparent 60deg, transparent 300deg, #dab33a 360deg)",
                }}
              >
                <div className="w-full h-full rounded-full bg-white" />
              </div>
            </div>

            {/* Glow */}
            <div className="absolute inset-8 rounded-full bg-[#dab33a]/10 blur-2xl" />

            {/* Image */}
            <div className="relative w-[90%] h-[90%] rounded-full overflow-hidden bg-white shadow-[0_20px_50px_rgba(0,0,0,0.18)] z-10">
              <Image
                src={AboutUsImg}
                alt="About Arambh"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* 📝 Content */}
        <div className="text-center lg:text-left">
          <h2
            className="
              brand-text
              text-3xl
              sm:text-4xl
              md:text-5xl
              font-bold
              mb-5
              tracking-tight
              text-[#f5c842]
              [text-shadow:1px_1px_3px_rgba(0,0,0,0.6)]
            "
          >
            What's The आरंभ ?
          </h2>

          <p className="leading-relaxed mb-4 text-base sm:text-lg text-[#0c3269]">
            <span className="brand-text font-semibold text-[#f5c842]">
              Arambh
            </span>{" "}
            is where strategy meets creativity and brands find their voice. We
            are a full scale{" "}
            <span className="font-semibold text-[#f5c842]">
              360° marketing and creative agency
            </span>{" "}
            delivering integrated solutions across branding, content,
            performance marketing, production, social media, and digital
            innovation.
          </p>

          <p className="leading-relaxed mb-4 text-base sm:text-lg text-[#0c3269]">
            We partner with forward-thinking brands to design impactful
            campaigns, compelling narratives, and visually powerful experiences
            that drive engagement and measurable growth.
          </p>

          <p className="leading-relaxed text-base sm:text-lg text-[#0c3269]">
            Every project at{" "}
            <span className="brand-text font-semibold text-[#f5c842]">
              Arambh
            </span>{" "}
            is built on insight, creativity, and performance  ensuring our
            clients don’t just stand out, but lead.
          </p>
        </div>
      </div>

      {/* 🔷 Bottom Closure Accent */}
      <div className="absolute bottom-0 left-0 w-full h-8 sm:h-10 skew-y-2 origin-bottom-left bg-[#0c3269]" />
    </section>
  );
}
