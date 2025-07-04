"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="px-4 sm:px-6 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="
          mx-auto grid max-w-5xl items-center        /* ★ aligns text + image */
          gap-12 sm:gap-14 md:grid-cols-2
          rounded-3xl border border-slate-200 dark:border-slate-700
          bg-white/80 dark:bg-slate-800/70 backdrop-blur-xl
          shadow-xl shadow-black/5 dark:shadow-black/40
          p-8 sm:p-10 md:p-14
        "
      >
        {/* ───────── Text column ───────── */}
        <div className="space-y-6 sm:space-y-7 text-[17px] leading-relaxed text-slate-700 dark:text-slate-300">
          <h2 className="relative inline-block text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-teal-200">
            About&nbsp;Dr.&nbsp;Serena&nbsp;Blake
            <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded bg-gradient-to-r from-teal-400 to-cyan-400" />
          </h2>

          <p className="text-lg font-light text-slate-800 dark:text-slate-200">
            <span className="font-semibold text-teal-600 dark:text-teal-300">
              Compassion‑focused. Evidence‑based.
            </span>{" "}
            Dr.&nbsp;Serena Blake helps adults transform anxiety, heal trauma,
            and foster genuine connection.
          </p>

          <p>
            A licensed clinical psychologist&nbsp;(PsyD) in Los Angeles,
            Dr.&nbsp;Blake has guided{" "}
            <span className="font-semibold text-teal-600 dark:text-teal-300">
              500+ sessions
            </span>{" "}
            across eight years. Blending{" "}
            <span className="font-medium">CBT, mindfulness,</span> and
            <span className="font-medium"> attachment‑oriented</span> work, she
            tailors therapy to every unique story.
          </p>

          <p>
            Meet in her serene Maplewood Drive office or connect securely via
            Zoom—either way you’ll find a safe, judgment‑free space for growth
            and resilience.
          </p>

          <div>
            <p className="font-medium mb-1">
              <strong>Office hours:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Tue & Thu 10 AM–6 PM&nbsp;
                <span className="italic">(in‑person)</span>
              </li>
              <li>
                Mon, Wed & Fri 1 PM–5 PM&nbsp;
                <span className="italic">(virtual)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ───────── Portrait column ───────── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative flex justify-center md:justify-end"
        >
          {/* floating animation */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="relative w-full max-w-[360px]" /* keeps width consistent */
          >
            {/* subtle halo */}
            <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-tr from-teal-400 to-cyan-500 blur-lg opacity-20" />

            <Image
              src="/images/dr-blake.webp"
              alt="Dr. Serena Blake"
              width={360}
              height={460}
              priority
              className="rounded-2xl object-cover shadow-2xl shadow-black/20"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
