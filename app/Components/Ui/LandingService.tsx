type Service = {
  title: string;
};

const services: Service[] = [
  { title: "CREATIVE" },
  { title: "CONTENT" },
  { title: "DIGITAL" },
  { title: "MEDIA" },
];

export default function LandingService() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="
              funky-hover
              relative h-65 rounded-2xl overflow-hidden
              bg-[var(--blue)]
              shadow-[0_20px_45px_rgba(0,0,0,0.25)]
              transition-all duration-300
              hover:-translate-y-2
            "
          >
            {/* Semi-transparent Gold diagonal */}
            <div
              className="
                absolute top-[-40%] left-[-60%]
                w-[140%] h-[140%]
                bg-[var(--gold)] opacity-80
                rotate-[-35deg]
                z-0
              "
            />

            {/* Text */}
            <div className="relative z-10 p-8 flex items-center justify-center h-full">
              <h3
                className="
                  text-[var(--blue)] text-xl font-extrabold
                  tracking-[0.35em]
                  drop-shadow-md
                "
              >
                {service.title}
              </h3>
            </div>
          </div>
        ))}

        {/* CTA */}
        <div className="mt-20 col-span-full flex justify-center">
          <button
            className="
              px-12 py-4 rounded-xl
              bg-[var(--blue)]
              text-[var(--gold)]
              font-medium
              shadow-lg
              transition-all duration-300
              hover:scale-105
            "
          >
            See us in action ⚡
          </button>
        </div>
      </div>
    </section>
  );
}
