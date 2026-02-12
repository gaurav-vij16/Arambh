"use client";

export default function LandingUi() {
  return (
    <section className="relative w-full h-screen overflow-hidden pt-20">
      
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

      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-20 max-w-7xl mx-auto">
      </div>

    </section>
  );
}
