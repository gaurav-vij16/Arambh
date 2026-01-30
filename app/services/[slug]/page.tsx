import { notFound } from "next/navigation";
import { servicesData } from "@/app/data/serviceData";
import Image from "next/image";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = servicesData.find((item) => item.slug === slug);

  if (!service) notFound();

  return (
    <main className="bg-[#0b3a85] text-[#06255d] font-sans">

      {/* TOP IMAGE */}
      <section className="relative w-full aspect-[1920/770] overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          priority
          className="object-cover object-top"
        />
      </section>

      {/* DESCRIPTION */}
      <section className="py-32 px-6 bg-[#fff8e5]">
        <div className="max-w-4xl mx-auto">
          {service.description.split("\n").map((line, i) => (
            <p
              key={i}
              className="text-[#06255d] text-xl md:text-2xl leading-relaxed mb-8 font-medium text-justify"
            >
              {line}
            </p>
          ))}
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-40 px-6 bg-[#06255d] text-center">
        <h2
          className="text-4xl md:text-5xl font-bold mb-24 tracking-tight text-[#f5c842]"
          style={{ fontFamily: "Masvis, sans-serif" }}
        >
          What We Focus On
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
          {service.highlights.map((item, i) => {
            const isGold = i % 2 === 0;

            return (
              <div
                key={i}
                className={`
                  rounded-3xl p-14
                  ${isGold ? "bg-[#f5c842]" : "bg-white"}
                  text-[#06255d]
                  border border-slate-200
                  shadow-xl
                  transition-transform duration-500
                  hover:-translate-y-4
                `}
              >
                <p className="text-xl md:text-2xl font-semibold tracking-wide">
                  {item}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* OFFERINGS */}
      <section className="py-36 px-6 bg-[#fff8e5] text-center">
        <h2
          className="text-4xl md:text-5xl font-bold mb-28 tracking-tight text-[#06255d]"
          style={{ fontFamily: "Masvis, sans-serif" }}
        >
          Our Offerings
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          {service.offerings.map((offering, i) => {
            const isGold = i % 2 === 0;

            return (
              <div
                key={i}
                className={`
                  rounded-3xl p-14
                  ${isGold ? "bg-[#f5c842]" : "bg-[#06255d]"}
                  border border-slate-200
                  shadow-xl
                  transition-transform duration-500
                  hover:-translate-y-4
                `}
              >
                <h3
                  className={`text-2xl md:text-3xl font-semibold mb-6 tracking-tight ${
                    isGold ? "text-[#06255d]" : "text-white"
                  }`}
                  style={{ fontFamily: "Masvis, sans-serif" }}
                >
                  {offering.title}
                </h3>

                <p
                  className={`text-lg md:text-xl leading-relaxed ${
                    isGold ? "text-[#1f2937]" : "text-white/80"
                  }`}
                >
                  {offering.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 px-6 bg-[#06255d] text-center text-white">
        <h3
          className="text-4xl md:text-5xl font-bold tracking-tight"
          style={{ fontFamily: "Masvis, sans-serif" }}
        >
          Ready to get started?
        </h3>

        <p className="mt-10 text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
          Let’s turn strategy into measurable growth and build brands that scale globally.
        </p>

        <div className="mt-16">
          <a
            href={service.cta.link}
            className="
              inline-block px-18 py-5 rounded-full
              bg-white text-[#06255d]
              text-lg font-semibold tracking-wide
              shadow-xl
              transition-all duration-300
              hover:bg-[#f5c842] hover:text-[#06255d]
              hover:scale-105
            "
          >
            {service.cta.text}
          </a>
        </div>
      </section>
    </main>
  );
}
