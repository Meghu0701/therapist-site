"use client";

import { motion } from "framer-motion";
import Accordion from "./Accordion";

type Item = { q: string; a: string };

const items: Item[] = [
  {
    q: "Do you accept insurance?",
    a: "I am an out‑of‑network provider. I can supply a superbill you may submit to your insurer for potential reimbursement.",
  },
  {
    q: "Are online sessions available?",
    a: "Yes. All virtual appointments are conducted via secure Zoom and adhere to HIPAA guidelines.",
  },
  {
    q: "What is your cancellation policy?",
    a: "Cancellations or rescheduling require 24‑hour notice to avoid being charged the full session fee.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="
        relative overflow-hidden px-4 sm:px-6 py-24
        bg-slate-50 dark:bg-slate-900"
    >
      {/* decorative gradient blob */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-80 w-80 rounded-full bg-gradient-to-br from-white-400 to-white-400 blur-3xl opacity-20 dark:opacity-10" />

      <motion.div
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-3xl space-y-12"
      >
        {/* heading with animated underline */}
        <motion.h2
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto mb-4 w-max text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-teal-200"
        >
          Frequently&nbsp;Asked&nbsp;Questions
          <span
            className="
              absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0
              bg-gradient-to-r from-teal-400 to-cyan-400
              animate-[grow_0.6s_ease-out_forwards]
              dark:from-teal-500 dark:to-cyan-500
            "
            style={{ animationDelay: "0.5s" }}
          />
        </motion.h2>

        {/* Accordion container */}
        <div className="rounded-3xl bg-white/70 dark:bg-slate-800/70 backdrop-blur ring-1 ring-slate-100 dark:ring-slate-700 shadow-xl p-6 sm:p-8">
          <Accordion items={items} />
        </div>
      </motion.div>

      {/* subtle bottom radial fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white/80 dark:from-slate-900/80 to-transparent" />
    </section>
  );
}

/* Tailwind keyframe for grow underline (add to globals.css or tailwind.config)
@layer utilities {
  @keyframes grow {
    to { transform: scaleX(1); }
  }
}
*/
