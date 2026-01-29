"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

import phone from "../../../public/MobileWeb1.png";
import tablet from "../../../public/TabletWeb.png";
import laptop from "../../../public/LaptopWeb.png";

export default function WebDevService() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Softer, premium parallax
  const phoneX = useTransform(mouseX, [-500, 500], [14, -14]);
  const phoneY = useTransform(mouseY, [-300, 300], [8, -8]);

  const laptopX = useTransform(mouseX, [-500, 500], [6, -6]);
  const laptopY = useTransform(mouseY, [-300, 300], [4, -4]);

  const tabletX = useTransform(mouseX, [-500, 500], [-4, 4]);
  const tabletY = useTransform(mouseY, [-300, 300], [-2, 2]);

  return (
    <section className="relative w-full overflow-hidden py-28 bg-white">
      {/* Soft ambient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-50 to-white" />
      <div className="absolute top-1/3 right-20 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-20">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="space-y-6 z-30"
        >
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight">
            Web & App <br />
            <span className="font-normal">Development</span>
          </h1>

          <p className="text-gray-500 max-w-sm text-sm leading-relaxed">
            Creating premium, scalable and conversion-focused digital experiences
            for modern brands.
          </p>

          <button className="inline-flex items-center px-9 py-3 text-sm border border-black/80 hover:bg-black hover:text-white transition-all duration-300">
            Explore Services
          </button>
        </motion.div>

        {/* RIGHT DEVICES */}
        <div className="relative flex justify-center items-end h-[460px]">
          {/* MOBILE — foreground */}
          <motion.div
            style={{ x: phoneX, y: phoneY }}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 left-2 w-[150px] z-30 drop-shadow-xl"
          >
            <Image src={phone} alt="Mobile App" className="w-full h-auto" />
          </motion.div>

          {/* LAPTOP — main hero */}
          <motion.div
            style={{ x: laptopX, y: laptopY }}
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 w-[430px] z-20 drop-shadow-2xl"
          >
            <Image src={laptop} alt="Laptop Website" className="w-full h-auto" />
          </motion.div>

          {/* TABLET — pushed away & subtle */}
          <motion.div
            style={{ x: tabletX, y: tabletY }}
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-8 -right-14 w-[240px] z-10 opacity-90 drop-shadow-lg"
          >
            <Image src={tablet} alt="Tablet UI" className="w-full h-auto" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
