"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

type Props = {
  items: { q: string; a: string }[];
};

export default function Accordion({ items }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="divide-y divide-slate-200 dark:divide-slate-700">
      {items.map((item, i) => {
        const isOpen = activeIndex === i;
        return (
          <div key={i}>
            {/* ── Question Row ── */}
            <button
              onClick={() => toggle(i)}
              className={`
                w-full flex justify-between items-center py-4 px-2 sm:px-4
                font-medium text-left text-slate-800 dark:text-slate-100
                hover:text-teal-500 dark:hover:text-teal-400 transition
              `}
            >
              <span className="text-base sm:text-lg">{item.q}</span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown size={20} className="text-slate-500" />
              </motion.div>
            </button>

            {/* ── Answer Body ── */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden px-2 sm:px-4 pb-4 text-sm sm:text-base text-slate-600 dark:text-slate-300"
                >
                  {item.a}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
