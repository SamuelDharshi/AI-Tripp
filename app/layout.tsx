import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI DreamTrip — Your 24/7 AI Travel Companion",
  description: "Plan, book, and travel—all automated by AI. End-to-end trip planning optimized for your budget, mood, and time. Real-time guidance that adapts to weather, delays, and preferences. 80% faster planning.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
