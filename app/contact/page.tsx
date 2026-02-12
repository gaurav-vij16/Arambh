"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const servicesList = [
  "Performance Marketing",
  "Social Media Marketing",
  "Email Marketing",
  "SEO",
  "Affiliate Marketing",
  "Content Production",
];

export default function Contact() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* SOFT BLOBS */}
      <div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-[#06255d]/10 blur-[200px]" />
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-[#d4af37]/10 blur-[180px]" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 py-10 flex flex-col items-center">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-6xl md:text-8xl font-semibold text-[#f5c842]">
            Get In Touch
          </h2>
          <p className="mt-4 text-[#06255d] text-2xl max-w-4xl mx-auto">
            Tell us about your goals and we’ll craft a strategy that fits.
          </p>
        </motion.div>

        {/* FORM CARD */}
        <motion.form
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full bg-[#06255d] rounded-3xl shadow-2xl p-10 flex flex-col gap-7"
        >

          {/* Name */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-white/80">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-xl bg-white/95 focus:outline-none focus:ring-2 focus:ring-[#f5c842]"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-white/80">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-xl bg-white/95 focus:outline-none focus:ring-2 focus:ring-[#f5c842]"
            />
          </div>

          {/* SERVICES */}
          <div className="flex flex-col gap-3">
            <label className="text-sm text-white/80">
              Services you're interested in
            </label>

            <div className="flex flex-wrap gap-3">
              {servicesList.map((service) => (
                <button
                  key={service}
                  type="button"
                  onClick={() => toggleService(service)}
                  className={`px-4 py-2 rounded-xl border transition-all text-sm
                    ${
                      selectedServices.includes(service)
                        ? "bg-[#f5c842] text-[#06255d] border-[#f5c842]"
                        : "bg-transparent text-white border-white/30 hover:bg-white/10"
                    }`}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>

          {/* MESSAGE */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-white/80">Message</label>
            <textarea
              rows={5}
              placeholder="Tell us about your project..."
              className="w-full px-4 py-3 rounded-xl bg-white/95 resize-none focus:outline-none focus:ring-2 focus:ring-[#f5c842]"
            />
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            className="mt-4 bg-[#f5c842] text-[#06255d] font-semibold py-3 rounded-xl hover:scale-105 transition-transform shadow-lg"
          >
            Send Message
          </button>
        </motion.form>

        {/* GOLD DIVIDER */}
        <div className="relative mt-20 flex justify-center w-full">
          <div className="w-64 h-px bg-gradient-to-r from-transparent via-[#06255d] to-transparent" />
        </div>
      </div>
    </section>
  );
}
