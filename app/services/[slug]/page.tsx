import { notFound } from "next/navigation";
import { servicesData } from "@/app/data/serviceData";
import Image from "next/image";
import bg from "../../../public/clients/Image4.jpg";

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
    <main className="bg-[#f8fafc] text-[#06255d]">
      {/* HERO */}
      <section className="relative py-40 px-6 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={bg}
            alt="Hero Background"
            fill
            className="object-cover object-center"
          />
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Hero Text */}
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white">
            {service.title}
          </h1>

          <p className="mt-8 max-w-2xl mx-auto text-xl text-white/80">
            {service.tagline}
          </p>
        </div>
      </section>

      {/* DESCRIPTION */}
      <section className="py-28 px-6 bg-white">
        <p className="max-w-4xl mx-auto text-center text-lg md:text-xl leading-relaxed text-[#475569]">
          {service.description}
        </p>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-32 px-6 bg-[#f8fafc]">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-20">
          What We Focus On
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-12">
          {service.highlights.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl p-10 bg-white border border-slate-200 shadow-sm hover:shadow-lg transition"
            >
              <p className="text-lg leading-relaxed text-slate-700">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OFFERINGS */}
      <section className="py-36 px-6 bg-white">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-24">
          Our Offerings
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-14">
          {service.offerings.map((offering, i) => (
            <div
              key={i}
              className="rounded-3xl p-12 bg-[#f8fafc] border border-slate-200 hover:border-[#06255d] hover:-translate-y-3 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-6">{offering.title}</h3>
              <p className="text-base leading-relaxed text-slate-600">
                {offering.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 px-6 bg-[#06255d] text-white text-center">
        <h3 className="text-4xl md:text-5xl font-semibold">
          Ready to get started?
        </h3>

        <p className="mt-8 text-lg text-white/80">
          Let’s turn strategy into measurable growth.
        </p>

        <a
          href={service.cta.link}
          className="inline-flex mt-14 px-16 py-5 rounded-full bg-white text-[#06255d] font-semibold text-lg hover:scale-105 transition"
        >
          {service.cta.text}
        </a>
      </section>
    </main>
  );
}
