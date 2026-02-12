"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

import phone from "../../../public/MobileWeb1.png";
import tablet from "../../../public/tabletdesign.png";
import laptop from "../../../public/LaptopWeb.png";

export default function WebDevService() {
  const [isDesktop, setIsDesktop] = useState(false);

  /* Detect screen */
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* Mouse parallax only on desktop */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    if (!isDesktop) return;

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [isDesktop, mouseX, mouseY]);

  const phoneX = useTransform(mouseX, [-500, 500], [16, -16]);
  const phoneY = useTransform(mouseY, [-300, 300], [10, -10]);

  const laptopX = useTransform(mouseX, [-500, 500], [8, -8]);
  const laptopY = useTransform(mouseY, [-300, 300], [6, -6]);

  const tabletX = useTransform(mouseX, [-500, 500], [-6, 6]);
  const tabletY = useTransform(mouseY, [-300, 300], [-4, 4]);

  return (
    <section className="relative w-full overflow-hidden py-24 md:py-32 bg-white">

      {/* Soft background */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-50 to-white" />
      <div className="absolute top-1/3 right-10 w-72 h-72 md:w-96 md:h-96 bg-blue-100/40 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-10"
        >
          <h1 className="text-4xl md:text-6xl xl:text-7xl font-light text-[#06255d] leading-tight">
            Web & App <br />
            <span className="font-semibold relative">
              Development
              <span className="absolute left-0 -bottom-3 w-28 h-[4px] bg-[#f5c842] rounded-full" />
            </span>
          </h1>

          <p className="text-gray-600 max-w-lg text-lg md:text-xl leading-relaxed">
            We craft premium, scalable and conversion-focused digital
            experiences that help modern brands grow faster.
          </p>

          <button
            className="
              px-12 md:px-16 py-4 md:py-6 rounded-full
              bg-[#f5c842] text-[#06255d]
              text-lg md:text-xl font-semibold
              shadow-[0_18px_40px_rgba(245,200,66,0.45)]
              transition-all duration-300
              hover:bg-[#06255d] hover:text-white
              hover:scale-105
            "
          >
            Explore Services
          </button>
        </motion.div>

        {/* RIGHT DEVICES */}
        <div className="relative flex justify-center items-end h-[420px] sm:h-[480px] md:h-[520px] lg:h-[560px]">

          {/* Glow */}
          <div className="absolute bottom-20 w-[360px] md:w-[460px] h-[260px] bg-[#06255d]/10 blur-3xl rounded-full" />

          {/* PHONE */}
          <motion.div
            initial={{ opacity: 0, x: -120, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            style={isDesktop ? { x: phoneX, y: phoneY } : {}}
            animate={{ y: [0, -8, 0] }}
            className="absolute bottom-0 left-[-10px] w-[120px] sm:w-[150px] md:w-[180px] z-30"
          >
            <Image src={phone} alt="Mobile App" className="w-full h-auto" />
          </motion.div>

          {/* LAPTOP */}
          <motion.div
            initial={{ opacity: 0, x: -120, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: true }}
            style={isDesktop ? { x: laptopX, y: laptopY } : {}}
            animate={{ y: [0, -6, 0] }}
            className="absolute bottom-0 w-[300px] sm:w-[420px] md:w-[520px] z-20"
          >
            <Image src={laptop} alt="Laptop Website" className="w-full h-auto" />
          </motion.div>

          {/* TABLET */}
          <motion.div
            initial={{ opacity: 0, x: -120, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
            viewport={{ once: true }}
            style={isDesktop ? { x: tabletX, y: tabletY } : {}}
            animate={{ y: [0, -5, 0] }}
            className="absolute bottom-12 right-[-60px] sm:right-[-100px] w-[200px] sm:w-[260px] md:w-[300px] z-10"
          >
            <Image src={tablet} alt="Tablet UI" className="w-full h-auto" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
