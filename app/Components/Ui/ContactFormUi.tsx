"use client";

import { Mail, Phone, Instagram, Linkedin, Youtube } from "lucide-react";

export default function ContactFormUi() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* TOP – LET'S CONNECT */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-light tracking-wide text-gray-800 mb-6">
            Let’s Connect
          </h2>

          <div className="flex justify-center gap-8 text-gray-600">
            <Instagram className="cursor-pointer hover:text-black transition" />
            <Linkedin className="cursor-pointer hover:text-black transition" />
            <Youtube className="cursor-pointer hover:text-black transition" />
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          
          {/* LEFT – COMPANY INFO */}
          <div className="space-y-6">
            <h3 className="text-4xl font-light tracking-wide text-gray-800">
              ReelCraft
            </h3>

            <div className="space-y-4 text-gray-600 text-base">
              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>ReelCraftinfo@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>+91 98 7654 3210</span>
              </div>
            </div>
          </div>

          {/* RIGHT – FORM */}
          <div className="relative">
            {/* Vertical Divider */}
            <div className="absolute -left-8 top-0 h-full w-px bg-gray-300 hidden md:block" />

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full rounded-md border border-gray-200 bg-gray-50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Your Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  className="w-full rounded-md border border-gray-200 bg-gray-50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full rounded-md border border-gray-200 bg-gray-50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Your Message (optional)
                </label>
                <textarea
                  rows={4}
                  className="w-full rounded-md border border-gray-200 bg-gray-50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <button
                type="submit"
                className="bg-red-600 text-white px-8 py-3 rounded-md font-medium hover:bg-red-700 transition"
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
