"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

import phone from "../../../public/phone.png";
import tablet from "../../../public/Tablet.jpg";
import laptop from "../../../public/Laptop.jpg";

export default function WebDevService() {
  const mouseX = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX]);

  /* opposing X movement */
  const leftX = useTransform(mouseX, [-500, 500], [20, -20]);
  const rightX = useTransform(mouseX, [-500, 500], [-30, 30]);

  return (
    <section className="relative w-full overflow-hidden py-20 bg-white">
      {/* subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-50 to-white" />

      <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

        {/* LEFT CONTENT */}
        <motion.div
          style={{ x: leftX }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight">
            Web & App <br />
            <span className="font-normal">Development</span>
          </h1>

          <p className="text-gray-500 max-w-sm text-sm leading-relaxed">
            Creating premium, scalable and conversion-focused digital
            experiences for modern brands.
          </p>

          <button className="inline-flex items-center px-8 py-3 text-sm border border-black hover:bg-black hover:text-white transition">
            Explore Services
          </button>
        </motion.div>

        {/* RIGHT DEVICES */}
        <div className="relative flex justify-center items-center h-[360px]">

          {/* Laptop (goes right + up) */}
          <motion.div
            style={{ x: rightX }}
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-0 w-[380px] hidden md:block drop-shadow-xl"
          >
            <Image src={laptop} alt="Laptop" className="w-full h-auto" />
          </motion.div>

          {/* Tablet (goes left + down) */}
          <motion.div
            style={{ x: leftX }}
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute z-10 w-[240px] left-12 drop-shadow-lg"
          >
            <Image src={tablet} alt="Tablet" className="w-full h-auto" />
          </motion.div>

          {/* Phone (goes right + more up) */}
          <motion.div
            style={{ x: rightX }}
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute z-20 w-[150px] left-0 drop-shadow-lg"
          >
            <Image src={phone} alt="Phone" className="w-full h-auto" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
