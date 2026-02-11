import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "../app/Components/Ui/Navbar";
import Chatbot from "./Components/Ui/AarambhChatbot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arambh | Where Brands Start & Rise",
  description:
    "Arambh is a performance-driven digital marketing and influencer marketing agency helping brands grow through SEO, social media marketing, paid ads, and creator collaborations.",

  icons: {
    icon: "/favicon.png",
  },

  openGraph: {
    title: "Arambh | Where Brands Start & Rise",
    description:
      "Performance-driven digital marketing & influencer marketing agency helping brands scale with SEO, social media, paid ads and creator partnerships.",
    url: "https://arambhinfluence.com",
    siteName: "Arambh",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "Arambh Logo",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Arambh | Where Brands Start & Rise",
    description:
      "Grow your brand with Arambh – SEO, social media, paid ads & influencer marketing agency.",
    images: ["/favicon.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <Chatbot />
        {children}
      </body>
    </html>
  );
}
