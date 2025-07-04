"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="
    relative flex min-h-screen flex-col items-center justify-start
    bg-cover bg-center text-white
    bg-[url('/oceanwaves.gif')]
  "
    >
      {/* dark overlay */}
      <div className="absolute inset-0 -z-10 bg-slate-900/60" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-32 flex flex-col items-center px-6 text-center"
      >
        <h1 className="text-4xl font-bold leading-tight drop-shadow-lg md:text-6xl">
          Psychological Care for
          <br className="hidden md:block" /> Change, Insight&nbsp;&amp;
          Well‑Being
        </h1>

        <p className="mt-4 text-lg font-light md:text-xl">
          In‑person in Los Angeles — Virtual across California.
        </p>

        <Link
          href="#contact"
          className="mt-8 inline-block rounded-full bg-teal-300/90 px-8 py-3 font-medium text-slate-900 backdrop-blur transition hover:bg-teal-200"
        >
          Book a Free Consultation
        </Link>
      </motion.div>
    </section>
  );
}
