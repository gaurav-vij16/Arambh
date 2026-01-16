"use client";

import { useState } from "react";
import Image from "next/image";

import phone from "../../../public/phone.png";
import image1 from "../../../public/clients/Image1.jpg";
import image2 from "../../../public/Image2.png";
import image3 from "../../../public/clients/Image3.jpg";
import image4 from "../../../public/clients/Image4.jpg";
import image5 from "../../../public/clients/Image5.jpg";
import image6 from "../../../public/clients/Image6.jpg";

const services = [
    { id: "01", title: "Content Production and 3D", image: image1, side: "left" },
    { id: "02", title: "Social Media Management", image: image2, side: "left" },
    { id: "03", title: "TikTok management", image: image3, side: "left" },
    { id: "04", title: "Branding and design", image: image4, side: "right" },
    { id: "05", title: "Web & App Design", image: image5, side: "right" },
    { id: "06", title: "Celebrity and Influencer management", image: image6, side: "right" },
];

export default function LandingPhoneServices() {
    const [activeImage, setActiveImage] = useState(image1);

    return (
        <section className="relative w-full bg-[#001489] py-28 overflow-hidden">
            <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 items-center gap-14 px-6">

                {/* LEFT SERVICES */}
                <div className="space-y-20 z-20">
                    {services.filter(s => s.side === "left").map(service => (
                        <div
                            key={service.id}
                            onMouseEnter={() => setActiveImage(service.image)}
                            className="cursor-pointer"
                        >
                            <div className="border-b border-white/80 pb-3 mb-4">
                                <span className="text-white text-6xl font-bold">
                                    {service.id}
                                </span>
                            </div>
                            <p className="text-white text-xl font-semibold max-w-[260px]">
                                {service.title}
                            </p>
                        </div>
                    ))}
                </div>

                {/* PHONE */}
                <div className="relative flex justify-center items-center">
                    <div className="relative w-[360px] h-[720px] scale-125">

                        {/* SCREEN MASK — PERFECT CENTERED */}
                        <div
                            className="
    absolute
    inset-0                                                                                                                                                                             
    flex
    items-center
    justify-center
    z-10
  "
                        >
                            <div
                                className="
      relative
      w-[72%]
      h-[69%]
      translate-y-[2%]
      overflow-hidden
      rounded-[28px]
    "
                            >
                                <Image
                                    src={activeImage}
                                    alt="Service preview"
                                    fill
                                    className="object-cover scale-[0.92] transition-all duration-500"
                                    priority
                                />
                            </div>
                        </div>



                        {/* PHONE FRAME — ALWAYS ON TOP */}
                        <div className="absolute inset-0 z-20 pointer-events-none">
                            <Image
                                src={phone}
                                alt="Phone frame"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>

                        {/* AMBIENT GLOW */}
                        <div className="absolute inset-0 -z-10 bg-blue-400/30 blur-[140px]" />
                    </div>
                </div>


                {/* RIGHT SERVICES */}
                <div className="space-y-20 z-20">
                    {services.filter(s => s.side === "right").map(service => (
                        <div
                            key={service.id}
                            onMouseEnter={() => setActiveImage(service.image)}
                            className="cursor-pointer"
                        >
                            <div className="border-b border-white/80 pb-3 mb-4">
                                <span className="text-white text-6xl font-bold">
                                    {service.id}
                                </span>
                            </div>
                            <p className="text-white text-xl font-semibold max-w-[260px]">
                                {service.title}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
