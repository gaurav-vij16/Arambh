"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import chatbot from "../../../public/ChatbotImg.jpg";
import { RotateCcw, Bot, User } from "lucide-react";

/* ---------------- TYPES ---------------- */
type Sender = "bot" | "user" | "typing";
type Message = { sender: Sender; text: string };

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
  const [submitting, setSubmitting] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    { sender: "bot", text: "Welcome to Arambh 👋" },
    { sender: "bot", text: "What best describes you?" },
  ]);

  const chatEndRef = useRef<HTMLDivElement | null>(null);
  const dataRef = useRef<any>({});

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  /* ---------------- HELPERS ---------------- */
  const botSay = (text: string, nextFlow: Flow) => {
    setMessages((prev) => [...prev, { sender: "typing", text: "" }]);
    setTimeout(() => {
      setMessages((prev) =>
        prev.filter((m) => m.sender !== "typing").concat({ sender: "bot", text })
      );
      setFlow(nextFlow);
    }, 600);
  };

  const userSay = (text: string) => {
    setMessages((prev) => [...prev, { sender: "user", text }]);
  };

  /* ---------------- SUBMIT TO GOOGLE SHEETS ---------------- */
  const submitToSheet = async () => {
    if (submitting) return;
    setSubmitting(true);

    let payload: any = {};

    if (dataRef.current.role === "Influencer") {
      payload = {
        role: "Influencer",
        name: dataRef.current.name || "",
        email: dataRef.current.email || "",
        phone: dataRef.current.phone || "",
        instagram: dataRef.current.instagram || "",
        youtube: dataRef.current.youtube || "",
      };
    }

    if (dataRef.current.role === "Brand") {
      payload = {
        role: "Brand",
        name: dataRef.current.name || "",
        email: dataRef.current.email || "",
        phone: dataRef.current.phone || "",
        website: dataRef.current.website || "",
        budget: dataRef.current.budget || "",
        services: dataRef.current.services || "",
      };
    }

    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbzETtPMT8o7wF3ArF-CpaUj14DL1C9nUmnUfOk_0hbrxeMUYpfJt1bJU-e-rLId0Hfx/exec",
        {
          method: "POST",
          body: JSON.stringify(payload), // ⚠️ NO HEADERS
        }
      );

      const result = await res.json();
      if (!result.success) throw new Error(result.error);

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "✅ Details received! Our team will contact you shortly.",
        },
      ]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "⚠️ Something went wrong. Please try again later.",
        },
      ]);
    } finally {
      setSubmitting(false);
    }
  };

  /* ---------------- HANDLE USER INPUT ---------------- */
  const handleSubmit = () => {
  if (!input.trim()) return;

  const map: Record<Flow, string> = {
    INF_NAME: "name",
    INF_EMAIL: "email",
    INF_PHONE: "phone",
    INF_INSTA: "instagram",
    INF_YT: "youtube",
    BRAND_NAME: "name",
    BRAND_EMAIL: "email",
    BRAND_PHONE: "phone",
    BRAND_WEBSITE: "website",
    BRAND_BUDGET: "budget",
    BRAND_SERVICE: "services",
    ROLE: "",
    DONE: "",
  };

  const key = map[flow];
  if (key) dataRef.current[key] = input;

  userSay(input);

  // ✅ CLEAR INPUT IMMEDIATELY
  setInput("");

  switch (flow) {
    case "INF_NAME":
      botSay("What’s your email address?", "INF_EMAIL");
      break;
    case "INF_EMAIL":
      botSay("Your phone number?", "INF_PHONE");
      break;
    case "INF_PHONE":
      botSay("Instagram profile link?", "INF_INSTA");
      break;
    case "INF_INSTA":
      botSay("YouTube link (optional)", "INF_YT");
      break;
    case "INF_YT":
      botSay("Thanks! Our team will connect shortly.", "DONE");
      submitToSheet();
      break;

    case "BRAND_NAME":
      botSay("Business email address?", "BRAND_EMAIL");
      break;
    case "BRAND_EMAIL":
      botSay("Contact number?", "BRAND_PHONE");
      break;
    case "BRAND_PHONE":
      botSay("Company website (optional)", "BRAND_WEBSITE");
      break;
    case "BRAND_WEBSITE":
      botSay("Estimated campaign budget?", "BRAND_BUDGET");
      break;
    case "BRAND_BUDGET":
      botSay(
        "Which services are you interested in?\n(Digital, Influencer, Content, Production)",
        "BRAND_SERVICE"
      );
      break;
    case "BRAND_SERVICE":
      botSay("Perfect! We’ll reach out very soon.", "DONE");
      submitToSheet();
      break;
  }
};

  const resetChat = () => {
    setMessages([
      { sender: "bot", text: "Welcome to Arambh 👋" },
      { sender: "bot", text: "What best describes you?" },
    ]);
    setFlow("ROLE");
    dataRef.current = {};
    setSubmitting(false);
  };

  /* ---------------- JSX (UNCHANGED UI) ---------------- */
   return (
    <>
      {/* Floating Button + Founder Welcome */}
      <div className="fixed bottom-5 right-5 z-50">
        <motion.div className="relative">
          {!open && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute bottom-20 right-0 w-[240px] p-4 rounded-2xl bg-[#06255d]/95 text-white border border-[var(--gold)]/40 shadow-glow peacock-grain"
            >
              <p className="text-xs leading-relaxed">
                Hi! I’m the Co-Founder of{" "}
                <span className="text-[var(--gold)] font-semibold">Arambh</span>
                . <br />
                How can I help you today?
              </p>
            </motion.div>
          )}

          <motion.button
            onClick={() => setOpen((p) => !p)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-glow bg-[#06255d]"
          >
            <Image src={chatbot} alt="Arambh Chatbot" fill className="object-cover" />
            <span className="absolute bottom-1 right-1 w-3 h-3 bg-green-400 border-2 border-white rounded-full animate-pulse" />
          </motion.button>
        </motion.div>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-5 w-[360px] h-[560px] rounded-3xl bg-[#06255d]/95 border border-white/20 shadow-glow flex flex-col overflow-hidden z-50 peacock-grain"
          >
            {/* Header */}
            <div className="px-5 py-4 flex justify-between items-center border-b border-white/10">
              <div>
                <h3 className="text-sm font-semibold text-white">Arambh</h3>
                <p className="text-[11px] text-[var(--gold)]">Where Brands Start and Rise</p>
              </div>
              <button onClick={resetChat} className="text-white/70 hover:text-white">
                <RotateCcw size={16} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 space-y-4 overflow-y-auto">
              {messages.map((m, i) =>
                m.sender === "typing" ? (
                  <div key={i} className="text-xs text-white/70 animate-pulse">
                    typing…
                  </div>
                ) : (
                  <div
                    key={i}
                    className={`flex gap-3 ${m.sender === "bot" ? "justify-start" : "justify-end"}`}
                  >
                    {m.sender === "bot" && (
                      <div className="w-8 h-8 rounded-full bg-[#06255d] border border-[var(--gold)]/40 flex items-center justify-center text-[var(--gold)]">
                        <Bot size={14} />
                      </div>
                    )}
                    <div
                      className={`px-4 py-2 text-xs max-w-[72%] ${
                        m.sender === "bot"
                          ? "bg-white/95 text-[#06255d] rounded-2xl rounded-bl-md"
                          : "bg-[#06255d] text-white border border-[var(--gold)]/40 rounded-2xl rounded-br-md"
                      }`}
                    >
                      {m.text}
                    </div>
                    {m.sender === "user" && (
                      <div className="w-8 h-8 rounded-full bg-[#06255d] border border-[var(--gold)]/40 flex items-center justify-center text-[var(--gold)]">
                        <User size={14} />
                      </div>
                    )}
                  </div>
                )
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Role Buttons */}
            {flow === "ROLE" && (
              <div className="p-4 grid grid-cols-2 gap-3 border-t border-white/10">
                {["Influencer", "Brand"].map((r) => (
                  <button
                    key={r}
                    onClick={() => {
                      userSay(r);
                      dataRef.current.role = r;
                      botSay("Great! What’s your name?", r === "Brand" ? "BRAND_NAME" : "INF_NAME");
                    }}
                    className="text-xs py-2 rounded-full border border-[var(--gold)]/50 text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[#06255d] transition"
                  >
                    {r}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            {flow !== "ROLE" && flow !== "DONE" && (
              <div className="p-3 border-t border-white/10 flex gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                  placeholder="Type your message…"
                  className="flex-1 text-xs rounded-full px-4 py-2 bg-white/90 outline-none"
                />
                <button
                  onClick={handleSubmit}
                  className="px-4 text-xs rounded-full bg-[var(--gold)] text-[#06255d] font-medium"
                >
                  Send
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Styles */}
      <style jsx>{`
        .shadow-glow {
          box-shadow: 0 20px 50px rgba(6, 37, 93, 0.6),
            0 0 25px rgba(212, 175, 55, 0.25);
        }
        .peacock-grain::before {
          content: "";
          position: absolute;
          inset: 0;
          background: repeating-radial-gradient(
            circle at 20% 30%,
            rgba(255, 255, 255, 0.035) 0,
            rgba(255, 255, 255, 0.035) 1px,
            transparent 2px,
            transparent 6px
          );
          opacity: 0.25;
          pointer-events: none;
          mix-blend-mode: overlay;
        }
      `}</style>
    </>
  );
}
