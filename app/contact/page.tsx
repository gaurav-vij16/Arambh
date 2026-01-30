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
    <section className="relative min-h-screen pt-10 overflow-hidden">

      {/* TOP CURVED ENTRY */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-[120px]"
        >
          <path
            d="M0,80 C240,40 480,40 720,80 960,120 1200,120 1440,60 L1440,0 L0,0 Z"
            fill="#06255d"
          />
        </svg>
      </div>

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[#06255d]" />

      {/* SUBTLE DEPTH */}
      <div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-[#0b3a78]/40 blur-[200px]" />
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-[#d4af37]/15 blur-[180px]" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 py-24 flex flex-col items-center">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-semibold text-[var(--gold)]">
            Get in Touch
          </h2>
          <p className="mt-4 text-white/75 text-sm max-w-lg mx-auto">
            We'd love to hear from you! Fill out the form and our team will reach out shortly.
          </p>
        </motion.div>

        {/* FORM */}
        <motion.form
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full bg-white rounded-2xl shadow-[0_12px_35px_rgba(0,0,0,0.15)] p-8 flex flex-col gap-6"
        >
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-[#03244f]">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-xl border border-[#03244f]/30 focus:outline-none focus:ring-2 focus:ring-[var(--gold)] transition"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-[#03244f]">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-xl border border-[#03244f]/30 focus:outline-none focus:ring-2 focus:ring-[var(--gold)] transition"
            />
          </div>

          {/* Services Horizontal Toggle */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-[#03244f]">
              Services you’re interested in
            </label>
            <div className="flex flex-wrap gap-3 mt-2">
              {servicesList.map((service) => (
                <button
                  key={service}
                  type="button"
                  onClick={() => toggleService(service)}
                  className={`px-4 py-2 rounded-xl border transition-all font-medium ${
                    selectedServices.includes(service)
                      ? "bg-[var(--gold)] text-[#03244f] border-[var(--gold)]"
                      : "bg-white text-[#03244f] border-[#03244f]/30 hover:bg-[var(--gold)] hover:text-[#03244f]"
                  }`}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-[#03244f]">Message</label>
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full px-4 py-3 rounded-xl border border-[#03244f]/30 focus:outline-none focus:ring-2 focus:ring-[var(--gold)] transition resize-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-4 bg-[var(--gold)] text-[#03244f] font-semibold py-3 rounded-xl hover:scale-105 transition-transform shadow-md"
          >
            Send Message
          </button>
        </motion.form>

        {/* GOLD DIVIDER */}
        <div className="relative mt-16 flex justify-center w-full">
          <div className="w-64 h-px bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent animate-pulse" />
        </div>
      </div>

      {/* BOTTOM CURVED EXIT */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-[120px]"
        >
          <path
            d="M0,40 C240,120 480,120 720,80 960,40 1200,40 1440,60 L1440,120 L0,120 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}
