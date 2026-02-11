"use client";

import { Mail, Phone, Instagram, Linkedin, Youtube } from "lucide-react";

export default function ContactFormUi() {
  return (
    <section className="w-full py-28 bg-[#06255d] text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* TOP – LET'S CONNECT */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light tracking-wide text-[#f5c842] mb-6">
            Let’s Connect
          </h2>

          <div className="flex justify-center gap-8 text-[#f5c842]">
            <Instagram className="cursor-pointer hover:text-white transition" />
            <Linkedin className="cursor-pointer hover:text-white transition" />
            <Youtube className="cursor-pointer hover:text-white transition" />
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT – COMPANY INFO */}
          <div className="space-y-8">
            <h3 className="text-4xl font-semibold tracking-wide text-[#f5c842]">
              ReelCraft
            </h3>

            <div className="space-y-5 text-gray-300 text-base">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#f5c842]" />
                <span>reelcraftinfo@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#f5c842]" />
                <span>+91 98 7654 3210</span>
              </div>
            </div>
          </div>

          {/* RIGHT – FORM */}
          <div className="relative bg-[#0a3278] p-8 rounded-2xl shadow-xl">

            {/* Vertical Divider */}
            <div className="absolute -left-8 top-0 h-full w-px bg-[#f5c842]/30 hidden md:block" />

            <form className="space-y-6">

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Your Name <span className="text-[#f5c842]">*</span>
                </label>
                <input
                  type="text"
                  className="w-full rounded-md border border-white/10 bg-[#06255d]
                  text-white px-4 py-3 focus:outline-none
                  focus:ring-2 focus:ring-[#f5c842]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Your Email <span className="text-[#f5c842]">*</span>
                </label>
                <input
                  type="email"
                  className="w-full rounded-md border border-white/10 bg-[#06255d]
                  text-white px-4 py-3 focus:outline-none
                  focus:ring-2 focus:ring-[#f5c842]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Subject <span className="text-[#f5c842]">*</span>
                </label>
                <input
                  type="text"
                  className="w-full rounded-md border border-white/10 bg-[#06255d]
                  text-white px-4 py-3 focus:outline-none
                  focus:ring-2 focus:ring-[#f5c842]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Your Message (optional)
                </label>
                <textarea
                  rows={4}
                  className="w-full rounded-md border border-white/10 bg-[#06255d]
                  text-white px-4 py-3 focus:outline-none
                  focus:ring-2 focus:ring-[#f5c842]"
                />
              </div>

              <button
                type="submit"
                className="bg-[#f5c842] text-[#06255d]
                px-10 py-3 rounded-md font-semibold
                hover:bg-[#ffd86b] transition"
              >
                Submit
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
