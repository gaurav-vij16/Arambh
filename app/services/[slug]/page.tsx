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

  // ✅ FIX: await params (Next.js 16 requirement)
  const { slug } = await params;

  const service = servicesData.find(
    (item) => item.slug === slug
  );

  if (!service) notFound();

  return (
    <main className="font-masvis bg-white text-[#06255d]">

      {/* ================= HERO ================= */}
      <section className="relative mt-20 h-[70vh] min-h-[520px] overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </section>

      {/* ================= MARQUEE ================= */}
      <section className="overflow-hidden border-y border-black py-6 bg-white">
        <div className="relative">
          <div className="flex animate-marquee">
            {[...Array(2)].map((_, block) => (
              <div key={block} className="flex space-x-32 min-w-max"> {/* min-w-max ensures full width */}
                {[...Array(6)].map((_, i) => (
                  <span
                    key={i}
                    className="text-3xl md:text-4xl font-bold tracking-wider text-[#06255d] uppercase whitespace-nowrap drop-shadow-lg"
                  >
                    {service.title}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* ================= DESCRIPTION ================= */}
      <section className="py-32 px-6 bg-[#fff8e5]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-800 font-sans md:text-2xl text-xl leading-relaxed tracking-wide">
            {service.description}
          </p>
        </div>
      </section>


      {/* ================= PROCESS ================= */}
      {service.steps && (
        <ProcessSlider steps={service.steps} />
      )}

      {/* ================= OFFERINGS ================= */}
      <section className="py-36 bg-[#fff8e5] text-center">
        <h2 className="text-5xl mb-20 font-bold">Our Offerings</h2>

        <div className="grid md:grid-cols-3 gap-14 max-w-6xl mx-auto px-6">
          {service.offerings.map((item, i) => (
            <div
              key={i}
              className={`p-14 rounded-3xl shadow-xl transition-transform hover:scale-105
              ${i % 2 === 0
                  ? "bg-gradient-to-tr from-[#f5c842] to-[#ffae42]"
                  : "bg-[#06255d] text-white"
                }`}
            >
              <h3 className="text-2xl font-semibold mb-4">
                {item.title}
              </h3>
              <p className="text-lg">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= HIGHLIGHTS ================= */}
      <section className="py-36 bg-[#06255d]">
        <h2 className="text-center text-5xl sm:text-6xl font-extrabold text-[#f5c842] mb-20">
          What We Focus On<span className="text-white/80">?</span>
        </h2>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-14">
          {service.highlights.map((item, index) => {
            // Split at the colon
            const [beforeColon, afterColon] = item.split(":");
            return (
              <div
                key={index}
                className="relative rounded-3xl p-10 sm:p-12 bg-gradient-to-br from-[#0f3b7d]/70 via-[#06255d]/60 to-[#0f3b7d]/70 border border-[#f5c842]/40 shadow-[0_10px_30px_rgba(245,200,66,0.3)] backdrop-blur-md hover:scale-105 transition-transform duration-500"
              >
                <div className="absolute top-0 left-0 w-full h-1 rounded-t-3xl bg-gradient-to-r from-[#f5c842] via-[#22d3ee] to-[#4ade80] animate-gradient-x" />
                <p className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
                  <span className="text-[#f5c842]">{beforeColon}:</span>
                  {afterColon && " " + afterColon}
                </p>
              </div>
            );
          })}
        </div>
      </section>






      {/* ================= CTA ================= */}
      <section className="py-40 bg-[#fff8e5] text-center">
        <h3 className="text-5xl text-[#f5c842] mb-14 font-bold">
          Ready to get started?
        </h3>

        <a
          href={service.cta.link}
          className="inline-block px-16 py-5 bg-white rounded-full
          font-semibold text-[#06255d]
          hover:bg-[#f5c842] transition-colors"
        >
          {service.cta.text}
        </a>
      </section>

    </main>
  );
}
