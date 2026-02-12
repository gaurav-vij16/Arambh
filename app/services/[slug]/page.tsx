import { notFound } from "next/navigation";
import { servicesData } from "@/app/data/serviceData";
import Image from "next/image";
import ProcessSlider from "../../Components/Ui/ProcessSlider";

export const dynamicParams = false;

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;

  const service = servicesData.find((item) => item.slug === slug);

  if (!service) notFound();

  return (
    <main className="font-masvis bg-white text-[#06255d]">

      {/* ================= HERO ================= */}
      <section className="relative mt-16 sm:mt-20 h-[55vh] sm:h-[65vh] lg:h-[75vh] min-h-[340px] overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </section>

      {/* ================= MARQUEE ================= */}
      <section className="overflow-hidden border-y border-black py-4 sm:py-6 bg-white">
        <div className="flex animate-marquee">
          {[...Array(2)].map((_, block) => (
            <div key={block} className="flex space-x-16 sm:space-x-32 min-w-max">
              {[...Array(6)].map((_, i) => (
                <span
                  key={i}
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-wider uppercase whitespace-nowrap"
                >
                  {service.title}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ================= DESCRIPTION ================= */}
      <section className="py-16 sm:py-24 px-6 bg-[#fff8e5]">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-800">
            {service.description}
          </p>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      {service.steps && <ProcessSlider steps={service.steps} />}

      {/* ================= OFFERINGS (LIGHT THEME) ================= */}
      <section className="py-24 sm:py-32 bg-[#fff8e5] text-center overflow-hidden">

        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-Masvis font-extrabold mb-14 sm:mb-24">
          Our Offerings
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-14 max-w-7xl mx-auto px-6">

          {service.offerings.map((item, i) => (
            <div
              key={i}
              className="
                group relative rounded-[2.5rem] p-[1px]
                bg-gradient-to-r from-[#f5c842] via-[#36e7ff] to-[#7cff8a]
                shadow-[0_0_40px_rgba(0,0,0,0.15)]
                hover:shadow-[0_0_60px_rgba(0,0,0,0.25)]
                transition-all duration-500
              "
            >

              {/* INNER CARD */}
              <div
                className="
                  relative h-full w-full rounded-[2.4rem]
                  bg-white
                  p-10 sm:p-12
                  flex flex-col justify-center
                  group-hover:scale-[1.02]
                  transition-transform duration-500
                "
              >

                {/* TOP GRADIENT LINE */}
                <div
                  className="
                    absolute top-0 left-6 right-6 h-[3px]
                    bg-gradient-to-r from-[#f5c842] via-[#36e7ff] to-[#7cff8a]
                    rounded-full
                  "
                />

                <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-[#06255d]">
                  {item.title}
                </h3>

                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  {item.description}
                </p>

              </div>
            </div>
          ))}

        </div>
      </section>

      {/* ================= HIGHLIGHTS ================= */}
      <section className="py-24 sm:py-32 bg-[#06255d]">

        <h2 className="text-center font-Masvis text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#f5c842] mb-12 sm:mb-20">
          What We Focus On?
        </h2>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">

          {service.highlights.map((item, index) => {
            const [before, after] = item.split(":");

            return (
              <div
                key={index}
                className="
                  rounded-3xl p-8 sm:p-10
                  bg-gradient-to-br from-[#0f3b7d]/70 via-[#06255d]/60 to-[#0f3b7d]/70
                  border border-[#f5c842]/40
                  shadow-[0_10px_30px_rgba(245,200,66,0.3)]
                  hover:scale-105 transition-transform duration-500
                "
              >
                <p className="text-center text-base sm:text-lg md:text-xl lg:text-2xl text-white">
                  <span className="text-[#f5c842] font-bold">
                    {before}:
                  </span>
                  {after && ` ${after}`}
                </p>
              </div>
            );
          })}

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 sm:py-36 bg-[#fff8e5] text-center px-6">

        <h3
          className="
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl
            font-extrabold mb-10
            [text-shadow:0_4px_12px_rgba(245,200,66,0.45)]
          "
        >
          Ready to get started?
        </h3>

        <a
          href={service.cta.link}
          className="
            inline-block px-10 sm:px-14 py-4 sm:py-5 rounded-full
            font-bold text-[#06255d] text-base sm:text-lg md:text-xl
            bg-[#f5c842]
            hover:bg-[#06255d] hover:text-white
            transition-colors
          "
        >
          {service.cta.text}
        </a>

      </section>

    </main>
  );
}
