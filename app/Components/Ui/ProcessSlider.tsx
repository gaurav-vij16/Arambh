"use client";

type Step = {
    title: string;
    description: string;
};

export default function ProcessSlider({ steps }: { steps: Step[] }) {

    const scroll = (direction: "left" | "right") => {
        const el = document.getElementById("process-slider");
        if (!el) return;

        el.scrollBy({
            left: direction === "left" ? -350 : 350,
            behavior: "smooth",
        });
    };

    return (
        <section className="py-40 bg-[#06255d] text-white overflow-hidden">

            {/* Heading */}
            <h2
                className="font-masvis text-center text-5xl md:text-8xl font-extrabold mb-28 tracking-tight text-[#f5c842]"
                style={{ fontFamily: "Masvis, sans-serif" }}
            >
                Our Proven Process
            </h2>

            <div className="relative max-w-7xl mx-auto px-6">

                {/* LEFT ARROW */}
                <button
                    onClick={() => scroll("left")}
                    className="hidden md:flex absolute -left-20 top-1/2 -translate-y-1/2
          w-14 h-14 rounded-full bg-[#f5c842]
          items-center justify-center
          text-[#06255d] text-3xl font-bold
          hover:scale-110 transition"
                >
                    ‹
                </button>

                {/* RIGHT ARROW */}
                <button
                    onClick={() => scroll("right")}
                    className="hidden md:flex absolute -right-20 top-1/2 -translate-y-1/2
          w-14 h-14 rounded-full bg-[#f5c842]
          items-center justify-center
          text-[#06255d] text-3xl font-bold
          hover:scale-110 transition"
                >
                    ›
                </button>

                {/* SLIDER */}
                <div
                    id="process-slider"
                    className="flex gap-28 overflow-x-hidden scroll-smooth py-6">

                    {steps.map((step, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-center text-center min-w-[260px]"
                        >

                            {/* STEP CIRCLE */}
                            <div
                                className="w-36 h-36 rounded-full
  bg-gradient-to-br from-[#f5c842] to-[#ffae42]
  flex items-center justify-center mb-10
  outline outline-4 outline-white outline-offset-0"
                            >
                                <span className="text-5xl font-bold text-[#06255d]">
                                    {i + 1}
                                </span>
                            </div>

                            <h3 className="text-3xl font-semibold mb-4">
                                {step.title}
                            </h3>

                            {/* <p className="text-[#f5c842] max-w-[260px]">
                                {step.description}
                            </p> */}

                        </div>
                    ))}
                </div>

            </div>
        </section >
    );
}
