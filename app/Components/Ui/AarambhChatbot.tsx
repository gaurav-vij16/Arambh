"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ChevronLeft, RotateCcw, User, Bot } from "lucide-react";
import { MAIN_MENU, BotOption } from "../../data/chatbot";

type Message = {
  sender: "bot" | "user" | "typing";
  text: string;
};

export default function AarambhChatbot() {
  const [open, setOpen] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    { sender: "bot", text: "✨ Hi! I’m Aarambh Bot. How can I help you today?" },
  ]);
  const [options, setOptions] = useState<BotOption[]>(MAIN_MENU);
  const [locked, setLocked] = useState(false);

  const chatEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const respondWithTyping = (response: string, next: BotOption[]) => {
    setLocked(true);
    setMessages((prev) => [...prev, { sender: "typing", text: "" }]);

    setTimeout(() => {
      setMessages((prev) =>
        prev.filter((m) => m.sender !== "typing").concat({ sender: "bot", text: response })
      );
      setOptions(next);
      setLocked(false);
    }, 900);
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
      respondWithTyping(opt.response, [{ label: "Back to Main Menu", response: "" }]);
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

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.12 }}
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="fixed bottom-6 right-6 z-[9999] w-16 h-16 rounded-full bg-gradient-to-br from-[#0B2C5F] to-[#E6B84C] shadow-2xl flex items-center justify-center text-white"
      >
        <MessageCircle size={28} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ ease: "easeOut", duration: 0.25 }}
            className="fixed bottom-24 right-6 z-[9998] w-[360px] h-[560px] rounded-3xl overflow-hidden bg-white/80 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.25)] border border-white/40 flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#0B2C5F] to-[#E6B84C] p-4 text-white flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-lg">Aarambh Assistance</h3>
                <p className="text-xs opacity-90">Where brands start & rise 🚀</p>
              </div>
              <button
                onClick={resetChat}
                className="p-2 rounded-full hover:bg-white/20"
              >
                <RotateCcw size={18} />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {messages.map((msg, i) =>
                msg.sender === "typing" ? (
                  <div
                    key={i}
                    className="bg-white rounded-2xl px-4 py-3 w-fit shadow flex items-center gap-1"
                  >
                    <span className="dot" />
                    <span className="dot" />
                    <span className="dot" />
                  </div>
                ) : (
                  <div
                    key={i}
                    className={`flex items-end gap-2 ${
                      msg.sender === "bot" ? "justify-start" : "justify-end"
                    }`}
                  >
                    {/* Avatar */}
                    {msg.sender === "bot" && (
                      <div className="w-6 h-6 rounded-full bg-[#0B2C5F] flex items-center justify-center text-white">
                        <Bot size={16} />
                      </div>
                    )}
                    {msg.sender === "user" && (
                      <div className="w-6 h-6 rounded-full bg-[#E6B84C] flex items-center justify-center text-white">
                        <User size={16} />
                      </div>
                    )}

                    {/* Message Bubble */}
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`max-w-[70%] px-4 py-3 rounded-2xl text-sm shadow ${
                        msg.sender === "bot"
                          ? "bg-white text-black"
                          : "bg-[#0B2C5F] text-white"
                      }`}
                    >
                      {msg.text}
                    </motion.div>
                  </div>
                )
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Options */}
            <div className="p-3 space-y-2 bg-white/90 backdrop-blur border-t">
              {options.map((opt, i) =>
                opt.label === "Back to Main Menu" ? (
                  <button
                    key={i}
                    onClick={handleBack}
                    className="w-full flex items-center gap-2 px-4 py-2 rounded-xl text-sm text-[#0B2C5F] hover:bg-gray-100"
                  >
                    <ChevronLeft size={16} />
                    Back to Main Menu
                  </button>
                ) : (
                  <motion.button
                    key={i}
                    disabled={locked}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => handleOptionClick(opt)}
                    className="w-full px-4 py-3 rounded-2xl bg-gradient-to-r from-[#FFF6DA] to-[#EEF3FF] text-[#0B2C5F] font-semibold shadow hover:shadow-lg transition flex items-center gap-2"
                  >
                    <Bot size={16} />
                    {opt.label}
                  </motion.button>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Typing Dots */}
      <style jsx>{`
        .dot {
          width: 6px;
          height: 6px;
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
