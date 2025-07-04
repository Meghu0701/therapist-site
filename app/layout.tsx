import "./globals.css";
import { Lora } from "next/font/google";
import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Dr. Serena Blake, PsyD – Psychological Care in Los Angeles",
  description:
    "Evidence‑based therapy for anxiety, relationships & trauma. In‑person and virtual sessions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lora.variable} font-sans`}>{children}</body>
    </html>
  );
}
