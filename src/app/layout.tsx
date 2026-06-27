import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mastering Contract Drafting & Freelancing | Lawctopus Elite",
  description: "Become one of India's most sought-after contract drafting professionals through an elite 6-month immersive mentorship program taught by industry leaders.",
  keywords: ["contract drafting", "legal freelancing", "corporate law", "lawctopus", "career accelerator", "legal training"],
};

export default function RootLayout({
  children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${instrumentSerif.variable} scroll-smooth antialiased`}
    >
      <body suppressHydrationWarning className="bg-[#F8F7F4] text-[#111111] font-sans selection:bg-[#C8A96B]/30 selection:text-[#111111] min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
