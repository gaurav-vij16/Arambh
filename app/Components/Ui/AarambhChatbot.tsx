"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import chatbot from "../../../public/ChatbotImg.jpg";
import { RotateCcw, Bot, User } from "lucide-react";

/* ---------------- TYPES ---------------- */

type Sender = "bot" | "user" | "typing";

type Message = {
  sender: Sender;
  text: string;
};

type Flow =
  | "ROLE"
  | "INF_NAME"
  | "INF_EMAIL"
  | "INF_PHONE"
  | "INF_INSTA"
  | "INF_YT"
  | "BRAND_NAME"
  | "BRAND_EMAIL"
  | "BRAND_PHONE"
  | "BRAND_WEBSITE"
  | "BRAND_BUDGET"
  | "BRAND_SERVICE"
  | "DONE";

/* ---------------- COMPONENT ---------------- */

export default function AarambhChatbot() {
  const [open, setOpen] = useState(false);
  const [flow, setFlow] = useState<Flow>("ROLE");
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState<Message[]>([
    { sender: "bot", text: "Welcome to Arambh " },
    { sender: "bot", text: "What best describes you?" },
  ]);

  const chatEndRef = useRef<HTMLDivElement | null>(null);
  const dataRef = useRef<any>({});

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  /* ---------------- HELPERS ---------------- */

  const botSay = (text: string, nextFlow: Flow) => {
    setMessages((p) => [...p, { sender: "typing", text: "" }]);
    setTimeout(() => {
      setMessages((p) =>
        p.filter((m) => m.sender !== "typing").concat({
          sender: "bot",
          text,
        })
      );
      setFlow(nextFlow);
    }, 600);
  };

  const userSay = (text: string) => {
    setMessages((p) => [...p, { sender: "user", text }]);
  };

  const handleSubmit = () => {
    if (!input.trim()) return;
    userSay(input);

    switch (flow) {
      case "INF_NAME":
        dataRef.current.name = input;
        botSay(" What’s your email address?", "INF_EMAIL");
        break;
      case "INF_EMAIL":
        dataRef.current.email = input;
        botSay(" Your phone number?", "INF_PHONE");
        break;
      case "INF_PHONE":
        dataRef.current.phone = input;
        botSay(" Instagram profile link?", "INF_INSTA");
        break;
      case "INF_INSTA":
        dataRef.current.instagram = input;
        botSay(" YouTube link (optional)", "INF_YT");
        break;
      case "INF_YT":
        botSay(" Thanks! Our team will connect shortly.", "DONE");
        break;

      case "BRAND_NAME":
        dataRef.current.name = input;
        botSay(" Business email address?", "BRAND_EMAIL");
        break;
      case "BRAND_EMAIL":
        dataRef.current.email = input;
        botSay(" Contact number?", "BRAND_PHONE");
        break;
      case "BRAND_PHONE":
        dataRef.current.phone = input;
        botSay(" Company website (optional)", "BRAND_WEBSITE");
        break;
      case "BRAND_WEBSITE":
        botSay(" Estimated campaign budget?", "BRAND_BUDGET");
        break;
      case "BRAND_BUDGET":
        botSay(
          " Which services are you interested in?\n(Digital, Influencer, Content, Production)",
          "BRAND_SERVICE"
        );
        break;
      case "BRAND_SERVICE":
        botSay(" Perfect! We’ll reach out very soon.", "DONE");
        break;
    }

    setInput("");
  };

  const resetChat = () => {
    setMessages([
      { sender: "bot", text: "Welcome to Aarambh 👋" },
      { sender: "bot", text: "What best describes you?" },
    ]);
    setFlow("ROLE");
    dataRef.current = {};
  };

  /* ---------------- JSX ---------------- */

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-5 right-5 z-50">
        <motion.button
          onClick={() => setOpen((p) => !p)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-16 h-16 rounded-full overflow-hidden shadow-2xl border-2 border-white bg-white"
        >
          <Image
            src={chatbot}
            alt="Aarambh Chatbot"
            fill
            className="object-cover"
          />
          <span className="absolute bottom-1 right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
        </motion.button>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-5 w-[360px] h-[560px] bg-white rounded-3xl shadow-[0_30px_70px_rgba(0,0,0,0.25)] flex flex-col overflow-hidden z-50"
          >
            {/* Header */}
            <div className="bg-[#0B2C5F] text-white px-5 py-4 flex justify-between items-center">
              <div>
                <h3 className="text-sm font-semibold">Aarambh</h3>
                <p className="text-[11px] opacity-80 text-[var(--gold)]">
                  Where Brands Start and Rise
                </p>

              </div>
              <button onClick={resetChat}>
                <RotateCcw size={16} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 bg-gray-50 p-4 space-y-5 overflow-y-auto">
              {messages.map((m, i) =>
                m.sender === "typing" ? (
                  <div
                    key={i}
                    className="bg-white px-4 py-2 rounded-2xl w-fit text-xs shadow"
                  >
                    typing...
                  </div>
                ) : (
                  <div
                    key={i}
                    className={`flex items-end gap-3 ${m.sender === "bot"
                        ? "justify-start"
                        : "justify-end"
                      }`}
                  >
                    {m.sender === "bot" && (
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#6A8DFF] to-[#9F6AFF] flex items-center justify-center text-white shadow-md">
                        <Bot size={16} />
                      </div>
                    )}

                    <div
                      className={`px-4 py-2 text-xs max-w-[72%] leading-relaxed ${m.sender === "bot"
                          ? "bg-white rounded-2xl rounded-bl-md shadow"
                          : "bg-[#0B2C5F] text-white rounded-2xl rounded-br-md shadow"
                        }`}
                    >
                      {m.text}
                    </div>

                    {m.sender === "user" && (
                      <div className="w-9 h-9 rounded-full bg-[#0B2C5F] flex items-center justify-center text-white shadow-md">
                        <User size={16} />
                      </div>
                    )}
                  </div>
                )
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Role Buttons */}
            {flow === "ROLE" && (
              <div className="p-4 grid grid-cols-2 gap-3 border-t bg-white">
                <button
                  onClick={() => {
                    userSay("Influencer");
                    botSay(" Great! What’s your name?", "INF_NAME");
                  }}
                  className="border border-[#0B2C5F] text-[#0B2C5F] text-xs py-2 rounded-full font-medium hover:bg-[#0B2C5F] hover:text-white transition"
                >
                  Influencer
                </button>
                <button
                  onClick={() => {
                    userSay("Brand");
                    botSay(" Awesome! What’s your name?", "BRAND_NAME");
                  }}
                  className="border border-[#0B2C5F] text-[#0B2C5F] text-xs py-2 rounded-full font-medium hover:bg-[#0B2C5F] hover:text-white transition"
                >
                  Brand
                </button>
              </div>
            )}

            {/* Input */}
            {flow !== "ROLE" && flow !== "DONE" && (
              <div className="p-3 border-t flex gap-2 bg-white">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                  placeholder="Type your message..."
                  className="flex-1 text-xs border rounded-full px-4 py-2 outline-none"
                />
                <button
                  onClick={handleSubmit}
                  className="bg-[#0B2C5F] text-white text-xs px-4 rounded-full shadow"
                >
                  Send
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
