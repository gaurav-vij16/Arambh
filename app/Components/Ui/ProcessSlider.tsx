"use client";

type Step = {
  title: string;
  description?: string;
};

export default function ProcessSlider({ steps }: { steps: Step[] }) {

  const scroll = (direction: "left" | "right") => {
    const el = document.getElementById("process-slider");
    if (!el) return;

    el.scrollBy({
      left: direction === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative py-24 sm:py-32 bg-[#06255d] text-white overflow-hidden">

      {/* ===== HEADING ===== */}
      <h2 className="font-masvis text-center text-4xl sm:text-6xl lg:text-7xl font-extrabold mb-16 sm:mb-24 tracking-tight text-[#f5c842]">
        Our Proven Process
      </h2>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

        {/* ===== LEFT ARROW ===== */}
        <button
          onClick={() => scroll("left")}
          aria-label="Scroll left"
          className="
            absolute left-2 sm:-left-10 top-1/2 -translate-y-1/2
            w-10 h-10 sm:w-12 sm:h-12
            rounded-full bg-[#f5c842]
            flex items-center justify-center
            text-[#06255d] text-xl sm:text-2xl font-bold
            hover:scale-110 transition
            shadow-lg z-20
          "
        >
          ‹
        </button>

        {/* ===== RIGHT ARROW ===== */}
        <button
          onClick={() => scroll("right")}
          aria-label="Scroll right"
          className="
            absolute right-2 sm:-right-10 top-1/2 -translate-y-1/2
            w-10 h-10 sm:w-12 sm:h-12
            rounded-full bg-[#f5c842]
            flex items-center justify-center
            text-[#06255d] text-xl sm:text-2xl font-bold
            hover:scale-110 transition
            shadow-lg z-20
          "
        >
          ›
        </button>

        {/* ===== SLIDER ===== */}
        <div
          id="process-slider"
          className="
            flex gap-16 sm:gap-24
            overflow-x-auto scroll-smooth
            py-6
            snap-x snap-mandatory

            [scrollbar-width:none]
            [-ms-overflow-style:none]
            [&::-webkit-scrollbar]:hidden
          "
        >

          {steps.map((step, i) => (
            <div
              key={i}
              className="flex items-center snap-center"
            >

              {/* ===== CARD ===== */}
              <div className="flex flex-col items-center text-center min-w-[220px] sm:min-w-[260px]">

                {/* NUMBER CIRCLE */}
                <div
                  className="
                    w-28 h-28 sm:w-36 sm:h-36
                    rounded-full
                    bg-gradient-to-br from-[#f5c842] to-[#ffae42]
                    flex items-center justify-center
                    mb-8 sm:mb-10
                    outline outline-4 outline-white
                    shadow-xl
                  "
                >
                  <span className="text-4xl sm:text-5xl font-bold text-[#06255d]">
                    {i + 1}
                  </span>
                </div>

                {/* TITLE */}
                <h3 className="text-xl sm:text-2xl font-semibold">
                  {step.title}
                </h3>

                {/* OPTIONAL DESCRIPTION */}
                {/* {step.description && (
                  <p className="mt-2 text-sm sm:text-base text-gray-300 max-w-[260px]">
                    {step.description}
                  </p>
                )} */}
              </div>

              {/* CONNECTOR */}
              {i !== steps.length - 1 && (
                <div className="mx-8 sm:mx-14 hidden sm:flex items-center">
                  <span className="text-[#f5c842] text-4xl opacity-80 animate-pulse">
                    ➜
                  </span>
                </div>
              )}

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
