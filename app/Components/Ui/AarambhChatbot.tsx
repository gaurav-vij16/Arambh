"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import chatbot from "../../../public/ChatbotImg.jpg"; // ✅ imported image
import {
  RotateCcw,
  ChevronLeft,
  Bot,
  User,
  Mail,
  Briefcase,
  Info,
  BarChart,
} from "lucide-react";

/* ---------------- TYPES ---------------- */

export type BotOption = {
  label: string;
  response: string;
  submenu?: BotOption[];
  icon?: React.ReactNode;
};

type Message = {
  sender: "bot" | "user" | "typing";
  text: string;
};

/* ---------------- DATA ---------------- */

const MAIN_MENU: BotOption[] = [
  {
    label: "Send us mail",
    icon: <Mail size={14} />,
    response:
      "📩 You can email us at contact@aarambh.com. Our team usually replies within 24 hours.",
  },
  {
    label: "Services we provide",
    icon: <Briefcase size={14} />,
    response: "Here are our core services. Please choose one 👇",
    submenu: [
      {
        label: "Web Development",
        response:
          "We build fast, scalable, and modern websites tailored to your business goals.",
      },
      {
        label: "Social Media Marketing",
        response:
          "Grow your brand across social platforms with data-driven strategies.",
      },
      {
        label: "Influencer Marketing",
        response:
          "We connect brands with trusted influencers to boost reach and engagement.",
      },
      {
        label: "SEO",
        response:
          "Improve visibility, organic traffic, and rankings with our SEO expertise.",
      },
    ],
  },
  {
    label: "About Aarambh",
    icon: <Info size={14} />,
    response:
      "Aarambh is a creative digital agency where brands start & rise 🚀. We focus on innovation, growth, and measurable results.",
  },
  {
    label: "Reports",
    icon: <BarChart size={14} />,
    response:
      "We provide detailed performance reports covering analytics, growth metrics, and insights.",
  },
];

/* ---------------- COMPONENT ---------------- */

export default function AarambhChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { sender: "bot", text: "✨ Hi! I’m Aarambh Bot. How can I help you today?" },
  ]);
  const [options, setOptions] = useState<BotOption[]>(MAIN_MENU);
  const [locked, setLocked] = useState(false);

  const chatEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  /* ---------------- FUNCTIONS ---------------- */

  const respondWithTyping = (response: string, next: BotOption[]) => {
    setLocked(true);
    setMessages((prev) => [...prev, { sender: "typing", text: "" }]);

    setTimeout(() => {
      setMessages((prev) =>
        prev
          .filter((m) => m.sender !== "typing")
          .concat({ sender: "bot", text: response })
      );
      setOptions(next);
      setLocked(false);
    }, 600);
  };

  const handleOptionClick = (opt: BotOption) => {
    if (locked) return;

    setMessages((prev) => [...prev, { sender: "user", text: opt.label }]);

    if (opt.submenu) {
      respondWithTyping(opt.response, [
        ...opt.submenu,
        { label: "Back to Main Menu", response: "" },
      ]);
    } else {
      respondWithTyping(opt.response, [
        { label: "Back to Main Menu", response: "" },
      ]);
    }
  };

  const handleBack = () => {
    respondWithTyping("🔙 Back to main menu. How else can I help?", MAIN_MENU);
  };

  const resetChat = () => {
    setMessages([
      { sender: "bot", text: "✨ Hi! I’m Aarambh Bot. How can I help you today?" },
    ]);
    setOptions(MAIN_MENU);
  };

  /* ---------------- JSX ---------------- */

  return (
    <>
      {/* FLOATING FOUNDER CTA + BUTTON */}
      <div className="fixed bottom-5 right-5 z-9999 flex flex-col items-end gap-2">
        {!open && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white text-[11px] px-3 py-2 rounded-xl shadow-lg max-w-55 relative"
          >
            <p className="font-medium">
              👋 Hey, this is{" "}
              <span className="text-[#0B2C5F] font-semibold">
                Aarambh’s founder
              </span>
            </p>
            <p className="opacity-80">
              How can I help you? Type a message 💬
            </p>
            <span className="absolute -bottom-2 right-4 w-3 h-3 bg-white rotate-45 shadow-sm" />
          </motion.div>
        )}

        {/* CHATBOT IMAGE BUTTON */}
        <motion.button
          onClick={() => setOpen(!open)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-16 h-16 rounded-full overflow-hidden shadow-2xl border-2 border-white bg-white"
        >
          <Image
            src={chatbot} // ✅ using imported image
            alt="Aarambh Chatbot"
            fill
            className="object-cover"
            priority
          />
          {/* Online dot */}
          <span className="absolute bottom-1 right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
        </motion.button>
      </div>

      {/* CHAT WINDOW */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed bottom-24 right-5 z-9998 w-[320px] h-120 rounded-2xl bg-white shadow-2xl border flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="px-4 py-3 bg-[#0B2C5F] text-white flex justify-between items-center">
              <div>
                <h3 className="text-sm font-semibold">Aarambh Assistance</h3>
                <p className="text-[11px] opacity-80">
                  Where brands start & rise 🚀
                </p>
              </div>
              <button onClick={resetChat}>
                <RotateCcw size={16} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 px-3 py-2 overflow-y-auto bg-gray-50 space-y-2">
              {messages.map((msg, i) =>
                msg.sender === "typing" ? (
                  <div
                    key={i}
                    className="bg-white px-3 py-2 rounded-xl w-fit"
                  >
                    <div className="flex gap-1">
                      <span className="dot" />
                      <span className="dot" />
                      <span className="dot" />
                    </div>
                  </div>
                ) : (
                  <div
                    key={i}
                    className={`flex gap-2 ${
                      msg.sender === "bot"
                        ? "justify-start"
                        : "justify-end"
                    }`}
                  >
                    {msg.sender === "bot" && (
                      <div className="w-5 h-5 rounded-full bg-[#0B2C5F] flex items-center justify-center text-white">
                        <Bot size={12} />
                      </div>
                    )}

                    <div
                      className={`max-w-[75%] text-xs px-3 py-2 rounded-xl ${
                        msg.sender === "bot"
                          ? "bg-white text-black"
                          : "bg-[#0B2C5F] text-white"
                      }`}
                    >
                      {msg.text}
                    </div>

                    {msg.sender === "user" && (
                      <div className="w-5 h-5 rounded-full bg-[#E6B84C] flex items-center justify-center text-white">
                        <User size={12} />
                      </div>
                    )}
                  </div>
                )
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Options */}
            <div className="px-3 py-2 space-y-2 border-t bg-white">
              {options.map((opt, i) =>
                opt.label === "Back to Main Menu" ? (
                  <button
                    key={i}
                    onClick={handleBack}
                    className="w-full flex items-center gap-2 px-3 py-2 text-xs rounded-lg border text-[#0B2C5F]"
                  >
                    <ChevronLeft size={14} />
                    Back to main menu
                  </button>
                ) : (
                  <button
                    key={i}
                    disabled={locked}
                    onClick={() => handleOptionClick(opt)}
                    className="w-full text-xs px-3 py-2 rounded-lg bg-[#F4F6FF] text-[#0B2C5F] font-medium hover:bg-[#E8ECFF] flex items-center gap-2"
                  >
                    {opt.icon || <Bot size={14} />}
                    {opt.label}
                  </button>
                )
              )}
            </div>

            {/* Input (UI Only) */}
            <div className="flex items-center gap-2 px-3 py-2 border-t bg-white">
              <input
                disabled
                placeholder="Enter your message..."
                className="flex-1 text-xs px-3 py-2 rounded-lg border bg-gray-100 cursor-not-allowed"
              />
              <button className="text-xs px-3 py-2 rounded-lg bg-[#0B2C5F] text-white">
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Typing animation */}
      <style jsx>{`
        .dot {
          width: 5px;
          height: 5px;
          background: #0b2c5f;
          border-radius: 50%;
          animation: blink 1.4s infinite both;
        }
        .dot:nth-child(2) {
          animation-delay: 0.2s;
        }
        .dot:nth-child(3) {
          animation-delay: 0.4s;
        }
        @keyframes blink {
          0% {
            opacity: 0.2;
          }
          20% {
            opacity: 1;
          }
          100% {
            opacity: 0.2;
          }
        }
      `}</style>
    </>
  );
}
