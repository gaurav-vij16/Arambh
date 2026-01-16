"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "../../../public/clients/Logo.png";

const NAV_ITEMS = ["Home", "About", "Clients", "Services", "Team", "Contact"] as const;

export default function Navbar() {
  const [active, setActive] = useState<(typeof NAV_ITEMS)[number]>("Home");
  const [open, setOpen] = useState(false);

  const navRef = useRef<HTMLUListElement | null>(null);
  const underlineRef = useRef<HTMLSpanElement | null>(null);

  // Smooth scroll with offset
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = -80;
    const y =
      el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
    setOpen(false);
  };

  // Scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY < 200) {
        setActive("Home");
        return;
      }

      NAV_ITEMS.forEach((item) => {
        if (item === "Home") return;

        const el = document.getElementById(item.toLowerCase());
        if (!el) return;

        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(item);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animated underline
  useEffect(() => {
    if (!navRef.current || !underlineRef.current) return;

    const activeLink = navRef.current.querySelector<HTMLButtonElement>(
      `[data-item="${active}"]`
    );

    if (activeLink) {
      underlineRef.current.style.transform = `translateX(${activeLink.offsetLeft}px)`;
      underlineRef.current.style.width = `${activeLink.offsetWidth}px`;
    }
  }, [active]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200/40">
      <nav className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={Logo}
            alt="Brand Logo"
            width={160}
            height={86}
            priority
            className="object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="relative hidden md:block">
          <ul
            ref={navRef}
            className="flex items-center gap-12 text-[13px] font-medium tracking-[0.18em]"
          >
            {NAV_ITEMS.map((item) => (
              <li key={item}>
                <button
                  data-item={item}
                  onClick={() => handleScrollTo(item.toLowerCase())}
                  className={`relative py-2 transition-colors duration-300 ${
                    active === item
                      ? "text-[#0c3269] font-semibold"
                      : "text-gray-700 hover:text-[#0c3269]"
                  }`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>

          {/* Sliding underline */}
          <span
            ref={underlineRef}
            className="absolute -bottom-1 left-0 h-0.5 bg-[#dab33a] rounded-full transition-all duration-300"
            style={{ width: 0 }}
          />
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-800"
          aria-label="Toggle Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-20 left-0 w-full bg-white/95 backdrop-blur-xl border-t border-gray-200/40 transition-all duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <ul className="flex flex-col divide-y divide-gray-200/40 text-sm tracking-wider">
          {NAV_ITEMS.map((item) => (
            <li key={item}>
              <button
                onClick={() => handleScrollTo(item.toLowerCase())}
                className="block w-full text-left px-6 py-4 text-gray-700 hover:bg-gray-50"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
