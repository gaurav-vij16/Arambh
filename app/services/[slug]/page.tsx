import { notFound } from "next/navigation";
import { servicesData } from "@/app/data/serviceData";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;

  const service = servicesData.find(
    (item) => item.slug === slug
  );

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#03244f] via-[#06255d] to-[#03244f] text-white">
      {/* HERO */}
      <section className="py-32 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-semibold text-[var(--gold)]">
          {service.title}
        </h1>
        <p className="mt-6 text-xl text-white/80">
          {service.tagline}
        </p>
      </section>

      {/* DESCRIPTION */}
      <section className="px-6 pb-24 text-center">
        <p className="max-w-4xl mx-auto text-lg text-white/75">
          {service.description}
        </p>
      </section>

      {/* HIGHLIGHTS */}
      <section className="px-6 pb-24">
        <h2 className="text-3xl font-semibold text-center text-[var(--gold)] mb-12">
          What We Focus On
        </h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          {service.highlights.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 bg-white text-[#03244f] shadow-lg"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* OFFERINGS */}
      <section className="px-6 pb-32">
        <h2 className="text-3xl font-semibold text-center text-[var(--gold)] mb-12">
          Our Offerings
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {service.offerings.map((offering, i) => (
            <div
              key={i}
              className="rounded-2xl p-8 bg-white text-[#03244f] shadow-xl hover:-translate-y-2 transition"
            >
              <h3 className="font-semibold mb-3">
                {offering.title}
              </h3>
              <p className="text-sm opacity-80">
                {offering.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-32 px-6 text-center">
        <div className="max-w-4xl mx-auto rounded-3xl p-12 bg-gradient-to-r from-[#1b38ba] to-[#2563eb] shadow-2xl">
          <h3 className="text-3xl font-semibold">
            Ready to get started?
          </h3>

          <p className="mt-4 text-white/85">
            Let’s turn strategy into measurable growth.
          </p>

          <a
            href={service.cta.link}
            className="inline-block mt-8 px-14 py-4 rounded-full bg-[var(--gold)] text-[#03244f] font-semibold hover:scale-110 transition"
          >
            {service.cta.text}
          </a>
        </div>
      </section>
    </main>
  );
}
