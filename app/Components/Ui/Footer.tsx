"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/clients/Logo.png";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const quickLinks = [
  { label: "About Us", href: "/AboutUs" },
  { label: "Services", href: "/Services" },
  { label: "Contact Us", href: "/ContactUs" },
  { label: "Careers", href: "/Career" },
];

const services = [
  { label: "Social Media Marketing", slug: "social-media-marketing" },
  { label: "Affiliate Marketing", slug: "affiliate-marketing" },
  { label: "SEO", slug: "seo" },
  { label: "Paid Advertising", slug: "paid-advertising" },
  { label: "Email Marketing", slug: "email-marketing" },
  { label: "Content Production", slug: "content-production" },
];

export default function Footer() {
  return (
    <footer className="bg-[#06255d] pt-20 pb-8 px-6 text-white">

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">

        {/* LOGO + ABOUT */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <Image src={Logo} alt="Arambh Logo" width={160} height={70} />

          <p className="text-gray-300 text-sm leading-relaxed max-w-xs mt-5">
            Arambh drives growth with creativity, innovation, and
            performance-driven digital strategies built for modern brands.
          </p>

          <div className="flex gap-5 text-2xl mt-6">
            <a
              href="https://www.instagram.com/skmdigimedia"
              target="_blank"
              className="text-[#f5c842] hover:text-white transition hover:scale-110"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/company/skm-digi/"
              target="_blank"
              className="text-[#f5c842] hover:text-white transition hover:scale-110"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <h3 className="font-semibold text-lg text-[#f5c842] mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-300">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="hover:text-[#f5c842] transition hover:translate-x-1 inline-block"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* SERVICES */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <h3 className="font-semibold text-lg text-[#f5c842] mb-5">
            Our Services
          </h3>

          <ul className="space-y-3 text-gray-300">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/Services#${service.slug}`}
                  className="hover:text-[#f5c842] transition hover:translate-x-1 inline-block"
                >
                  {service.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* GET CONNECTED CARD */}
        <div className="bg-[#0a3278] p-7 rounded-2xl shadow-xl border border-[#f5c842]/30
          flex flex-col items-center text-center hover:shadow-2xl transition">

          <h3 className="font-bold text-xl text-[#f5c842] mb-2">
            Get Connected
          </h3>

          <p className="text-gray-300 mb-3 italic">
            Over a cup of hot or cold brew, maybe?
          </p>

          <p className="text-gray-300 mb-6">
            Have an idea or want to scale your brand? Let’s talk growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full mb-6">

            <Link
              href="/ContactUs"
              className="flex-1 bg-[#f5c842] text-[#06255d]
              font-semibold py-2 rounded-lg
              hover:bg-[#ffd86b] transition"
            >
              Brand
            </Link>

            <Link
              href="/Career"
              className="flex-1 border border-[#f5c842] text-[#f5c842]
              font-semibold py-2 rounded-lg
              hover:bg-[#f5c842] hover:text-[#06255d] transition"
            >
              Influencer
            </Link>

          </div>

          <p className="text-gray-300 font-semibold text-sm">
            Email us at{" "}
            <a
              href="mailto:info@skmdigi.com"
              className="text-[#f5c842] hover:underline"
            >
              info@skmdigi.com
            </a>
          </p>

        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-white/10 mt-14 pt-6" />

      {/* COPYRIGHT */}
      <div className="text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Arambh. All rights reserved.
      </div>

    </footer>
  );
}
