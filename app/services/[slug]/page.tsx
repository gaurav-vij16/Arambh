import { notFound } from "next/navigation";
import { servicesData } from "@/app/data/serviceData";

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

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#06255d] via-[#0b3a85] to-[#f5c842]">
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-40">
          <h1 className="gold-heading text-5xl md:text-7xl leading-tight drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]" style={{ fontFamily: 'Masvis, sans-serif' }}>
            {service.title}
          </h1>

          <p className="mt-8 max-w-2xl text-lg md:text-xl text-white/90 tracking-wide">
            {service.tagline}
          </p>

          <div className="mt-20 flex flex-wrap justify-center gap-6">
            {service.highlights.slice(0, 3).map((highlight, i) => (
              <div
                key={i}
                className="rounded-xl px-6 py-3 bg-white/10 backdrop-blur-sm text-white border border-white/20 shadow-xl text-lg font-medium tracking-wide transform hover:-translate-y-2 hover:scale-105 transition-all duration-500"
              >
                {highlight}
              </div>
            ))}
          </div>
        </div>

        {/* Abstract floating shapes */}
        <div className="absolute top-10 left-10 w-36 h-36 bg-gradient-to-tr from-[#f5c842]/30 to-[#06255d]/0 rounded-full blur-3xl animate-[float_12s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-gradient-to-bl from-[#0b3a85]/20 to-[#f5c842]/0 rounded-full blur-3xl animate-[float_15s_ease-in-out_infinite]"></div>
      </section>


      {/* DESCRIPTION WITH WAVY BOTTOM */}
      <section className="relative py-28 px-6 bg-gradient-to-r from-[#fff8e5] via-[#e6f0ff] to-[#fff8e5] text-center overflow-hidden">
        <p className="relative max-w-3xl mx-auto text-xl md:text-2xl leading-relaxed text-[#06255d] tracking-wide font-medium">
          {service.description.split("\n").map((line, i) => (
            <span key={i} className="block mb-4">
              <span className="bg-gradient-to-r from-[#f5c842] via-[#0b3a85] to-[#06255d] bg-clip-text text-transparent font-bold">
                {line}
              </span>
            </span>
          ))}
        </p>
      </section>


      {/* HIGHLIGHTS / WHAT WE FOCUS ON */}
      <section className="relative py-28 px-6 bg-gradient-to-r from-[#fff8e5] via-[#e6f0ff] to-[#fff8e5] text-center overflow-hidden">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-20 tracking-wide text-[#06255d]" style={{ fontFamily: 'Masvis, sans-serif' }}>
          What We Focus On
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {service.highlights.map((item, i) => (
            <div
              key={i}
              className="relative rounded-3xl p-12 bg-gradient-to-tr from-white via-[#f5f7fb] to-[#fff8e5] border border-slate-200 shadow-2xl hover:shadow-[0_30px_60px_rgba(0,0,0,0.15)] transition-transform duration-500 transform hover:-translate-y-6 hover:scale-105"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#f5c842]/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#0b3a85]/10 rounded-full blur-2xl"></div>
              <p className="text-lg leading-relaxed text-[#06255d] tracking-wide font-semibold">{item}</p>
            </div>
          ))}
        </div>

        {/* Decorative floating circles for more color */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-tr from-[#f5c842]/30 to-[#0b3a85]/0 rounded-full blur-3xl animate-[float_15s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-bl from-[#0b3a85]/30 to-[#f5c842]/0 rounded-full blur-3xl animate-[float_20s_ease-in-out_infinite]"></div>
      </section>

      {/* OFFERINGS */}
      <section className="relative py-28 px-6 bg-gradient-to-r from-[#fff8e5] via-[#e6f0ff] to-[#fff8e5] text-center overflow-hidden">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-24 tracking-wide text-[#06255d]" style={{ fontFamily: 'Masvis, sans-serif' }}>
          Our Offerings
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-14">
          {service.offerings.map((offering, i) => (
            <div
              key={i}
              className="relative rounded-3xl p-12 bg-gradient-to-tr from-[#fff8e5] via-white to-[#e6f0ff] border border-slate-200 shadow-2xl hover:shadow-[0_30px_60px_rgba(0,0,0,0.15)] transition-all duration-500 transform hover:-translate-y-6 hover:scale-105"
            >
              <div className="absolute -top-5 -right-5 w-10 h-10 bg-[#f5c842]/30 rounded-full blur-2xl"></div>
              <h3 className="text-2xl font-bold mb-6 tracking-wide text-[#06255d]" style={{ fontFamily: 'Masvis, sans-serif' }}>{offering.title}</h3>
              <p className="text-base leading-relaxed text-slate-600 tracking-wide">{offering.description}</p>
            </div>
          ))}
        </div>

        {/* Optional: subtle gradient overlay behind offerings */}
        <div className="absolute -top-24 -left-20 w-72 h-72 bg-gradient-to-tr from-[#f5c842]/20 to-[#06255d]/0 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-20 w-72 h-72 bg-gradient-to-bl from-[#0b3a85]/20 to-[#f5c842]/0 rounded-full blur-3xl"></div>
      </section>

      {/* CTA */}
      <section className="relative py-40 px-6 bg-[#06255d] text-white text-center overflow-hidden">
  <h3
    className="text-4xl md:text-5xl font-extrabold gold-heading drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
    style={{ fontFamily: 'Masvis, sans-serif' }}
  >
    Ready to get started?
  </h3>

  <p className="mt-6 md:mt-8 text-lg md:text-xl text-white/80 tracking-wide max-w-2xl mx-auto leading-relaxed">
    Let’s turn strategy into measurable growth and make a global impact.
  </p>

  {/* Button with more aesthetic spacing & subtle float */}
  <div className="mt-12 flex justify-center">
    <a
      href={service.cta.link}
      className="
        relative px-16 py-4 rounded-full
        bg-white text-[#1e40af]
        font-semibold tracking-wide
        shadow-[0_20px_60px_rgba(0,0,0,0.35)]
        transition-all duration-400
        hover:bg-[#d4af37] hover:text-white
        hover:scale-105
        hover:shadow-[0_35px_80px_rgba(212,175,55,0.6)]
        animate-[float_6s_ease-in-out_infinite]
      "
    >
      {service.cta.text}
    </a>
  </div>

  {/* Floating gradient shapes */}
  <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#f5c842]/40 to-[#06255d]/0 rounded-full blur-3xl -translate-x-40 -translate-y-36 animate-[float_18s_ease-in-out_infinite]"></div>
  <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#0b3a85]/50 to-[#f5c842]/0 rounded-full blur-3xl translate-x-40 translate-y-36 animate-[float_20s_ease-in-out_infinite]"></div>
</section>

    </main>
  );
}
