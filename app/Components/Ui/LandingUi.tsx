"use client";

export default function LandingUi() {
  return (
    <section className="relative w-full h-screen overflow-hidden pt-20">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/BgVideo.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0c3269]/40" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-20 max-w-7xl mx-auto">

        {/* Brand Title */}
        <h1
          className="
            hindi-text
            text-6xl md:text-8xl
            font-semibold
            leading-tight
            bg-gradient-to-r
            from-[#0c3269]
            via-[#1b4c8f]
            to-[#dab33a]
            bg-clip-text
            text-transparent
            drop-shadow-[0_6px_25px_rgba(0,0,0,0.35)]
          "
        >
          आरंभ
        </h1>

        {/* Gold Accent */}
        <div className="mt-5 h-[2px] w-28 bg-[#dab33a]" />

        {/* Tagline */}
        <p className="mt-7 max-w-lg text-base md:text-lg text-white/90 leading-relaxed">
          Where brands start{" "}
          <span className="text-[#dab33a] font-medium">&</span>{" "}
          rise
        </p>

        {/* CTA */}
        <div className="mt-14">
          <button
            className="
              inline-flex items-center
              px-8 py-3.5
              text-sm font-medium
              rounded-full
              bg-[#dab33a]
              text-[#0c3269]
              shadow-lg
              shadow-[#dab33a]/40
              transition-all
              duration-300
              hover:scale-[1.05]
              hover:shadow-[#dab33a]/60
            "
          >
            Explore Our Work
          </button>
        </div>
      </div>
    </section>
  );
}
