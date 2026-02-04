"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

import phone from "../../../public/MobileWeb1.png";
import tablet from "../../../public/tabletdesign.png";
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

  /* Premium parallax */
  const phoneX = useTransform(mouseX, [-500, 500], [18, -18]);
  const phoneY = useTransform(mouseY, [-300, 300], [10, -10]);

  const laptopX = useTransform(mouseX, [-500, 500], [8, -8]);
  const laptopY = useTransform(mouseY, [-300, 300], [5, -5]);

  const tabletX = useTransform(mouseX, [-500, 500], [-6, 6]);
  const tabletY = useTransform(mouseY, [-300, 300], [-3, 3]);

  return (
    <section className="relative w-full overflow-hidden py-32 bg-white">

      {/* Soft Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-50 to-white" />
      <div className="absolute top-1/3 right-20 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-24">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-12 z-30"
        >
          {/* Heading */}
          <h1 className="text-5xl md:text-6xl xl:text-7xl font-light text-[#06255d] leading-tight">
            Web & App <br />
            <span className="font-semibold relative">
              Development
              <span className="absolute left-0 -bottom-3 w-28 h-[4px] bg-[#f5c842] rounded-full" />
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-600 max-w-lg text-xl leading-relaxed">
            We craft premium, scalable and conversion-focused digital
            experiences that help modern brands grow faster.
          </p>

          {/* CTA */}
          <button
            className="
  px-16 py-6 rounded-full
  bg-[#f5c842] text-[#06255d]
  text-xl font-semibold tracking-wide
  shadow-[0_18px_40px_rgba(245,200,66,0.45)]
  transition-all duration-300
  hover:bg-[#06255d] hover:text-white
  hover:shadow-[0_18px_40px_rgba(6,37,93,0.55)]
  hover:scale-105
"

          >
            Explore Services
          </button>
        </motion.div>

        {/* RIGHT DEVICES */}
        <div className="relative flex justify-center items-end h-[540px]">

          {/* Glow behind devices */}
          <div className="absolute bottom-24 w-[460px] h-[300px] bg-[#06255d]/10 blur-3xl rounded-full" />

          {/* MOBILE */}
          <motion.div
            style={{ x: phoneX, y: phoneY }}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 left-[-20px] w-[180px] z-30 drop-shadow-xl"
          >
            <Image src={phone} alt="Mobile App" className="w-full h-auto" />
          </motion.div>

          {/* LAPTOP */}
          <motion.div
            style={{ x: laptopX, y: laptopY }}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 w-[520px] z-20 drop-shadow-2xl"
          >
            <Image src={laptop} alt="Laptop Website" className="w-full h-auto" />
          </motion.div>

          {/* TABLET */}
          <motion.div
            style={{ x: tabletX, y: tabletY }}
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-12 right-[-90px] w-[300px] z-10 opacity-95 drop-shadow-lg"
          >
            <Image src={tablet} alt="Tablet UI" className="w-full h-auto" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
