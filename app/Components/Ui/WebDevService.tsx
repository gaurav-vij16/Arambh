"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

import phone from "../../../public/MobileWeb1.png";
import tablet from "../../../public/tabletdesign.png";
import laptop from "../../../public/LaptopBg.png";

export default function WebDevService() {
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  /* Detect screen */
  useEffect(() => {
    const check = () => {
      if (typeof window !== "undefined") {
        setIsDesktop(window.innerWidth >= 1024);
      }
    };

    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* Mouse parallax */
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

  const phoneX = useTransform(mouseX, [-500, 500], [18, -18]);
  const phoneY = useTransform(mouseY, [-300, 300], [12, -12]);

  const laptopX = useTransform(mouseX, [-500, 500], [10, -10]);
  const laptopY = useTransform(mouseY, [-300, 300], [8, -8]);

  const tabletX = useTransform(mouseX, [-500, 500], [-14, 14]);
  const tabletY = useTransform(mouseY, [-300, 300], [-10, 10]);

  return (
    <section className="relative w-full overflow-hidden py-20 md:py-20 bg-white">
      <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-50 to-white" />
      <div className="absolute top-1/3 right-10 w-[420px] h-[420px] bg-blue-100/40 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-10"
        >
          <h1 className="text-5xl md:text-6xl xl:text-7xl font-light text-[#06255d] leading-tight">
            Web & App <br />
            <span className="font-semibold relative">
              Development
              <span className="absolute left-0 -bottom-3 w-32 h-[4px] bg-[#f5c842] rounded-full" />
            </span>
          </h1>

          <p className="text-gray-600 max-w-xl text-lg md:text-xl leading-relaxed">
            We craft premium, scalable and conversion-focused digital
            experiences that help modern brands grow faster.
          </p>

          <button className="px-14 md:px-18 py-5 rounded-full bg-[#f5c842] text-[#06255d] text-lg md:text-xl font-semibold shadow-[0_20px_50px_rgba(245,200,66,0.45)] transition-all duration-300 hover:bg-[#06255d] hover:text-white hover:scale-105">
            Explore Services
          </button>
        </motion.div>

        {/* RIGHT DEVICES */}
        <div className="relative flex justify-center items-end h-[460px] sm:h-[520px] md:h-[580px] lg:h-[620px]">
          <div className="absolute bottom-24 w-[480px] h-[300px] bg-[#06255d]/10 blur-[100px] rounded-full" />

          {/* MOBILE */}
          <motion.div
            initial={{ opacity: 0, x: -100, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            style={isDesktop ? { x: phoneX, y: phoneY } : {}}
            animate={{ y: [0, -10, 0] }}
            className="absolute bottom-16 left-[-40px] w-[150px] sm:w-[180px] md:w-[210px] z-30 drop-shadow-2xl"
          >
            <Image src={phone} alt="Mobile App" className="w-full h-auto" />
          </motion.div>

          {/* LAPTOP */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            style={isDesktop ? { x: laptopX, y: laptopY } : {}}
            animate={{ y: [0, -8, 0] }}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[360px] sm:w-[480px] md:w-[600px] z-20 drop-shadow-2xl"
          >
            {/* CLOUDINARY VIDEO */}
            <div className="absolute top-[16.8%] left-[24.5%] w-[52%] h-[49%] rounded-[6px] overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
              >
                <source
                  src="https://res.cloudinary.com/dveh4evhy/video/upload/f_auto,q_auto/WebDevVideo_xakger.mp4"
                  type="video/mp4"
                />
              </video>
            </div>

            <Image
              src={laptop}
              alt="Laptop Website"
              className="w-full h-auto pointer-events-none"
            />
          </motion.div>

          {/* TABLET */}
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
            style={isDesktop ? { x: tabletX, y: tabletY } : {}}
            animate={{ y: [0, -7, 0] }}
            className="absolute bottom-24 right-[-40px] sm:right-[-120px] w-[220px] sm:w-[260px] md:w-[300px] z-10 drop-shadow-2xl"
          >
            <Image src={tablet} alt="Tablet UI" className="w-full h-auto" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
