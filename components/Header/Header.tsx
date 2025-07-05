"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import next from "next";

const NAV: { href: string; label: string }[] = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  /* ───────────────────── local state ───────────────────── */
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  /* ── restore persisted theme on first load ── */
  useEffect(() => {
    const saved = localStorage.getItem("dark") === "true";
    setDark(saved);
    document.documentElement.classList.toggle("dark", saved);
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    localStorage.setItem("dark", String(next));
    document.documentElement.classList.toggle("dark", next);
  };

  /* ─────────────────────  markup  ───────────────────── */
  return (
    <motion.header
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35 }}
      className="
        sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-700
        bg-white/80 dark:bg-slate-900/80 backdrop-blur"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-4">
        {/* ─── Logo / Brand ─── */}
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/images/logo.png"
            alt="Dr. Serena Blake"
            width={40}
            height={40}
            priority
            className="rounded-full"
          />
          <span className="whitespace-nowrap text-lg font-semibold text-teal-600 dark:text-teal-300">
            Dr.&nbsp;Serena&nbsp;Blake
          </span>
        </Link>

        {/* ─── Desktop nav ─── */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {NAV.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="group relative text-slate-700 dark:text-slate-200
                         hover:text-teal-500 dark:hover:text-teal-400 transition"
            >
              {label}
              <span
                className="absolute inset-x-0 -bottom-0.5 h-[2px] origin-left
                           scale-x-0 bg-gradient-to-r from-teal-400 to-cyan-400
                           transition-transform duration-200 group-hover:scale-x-100"
              />
            </Link>
          ))}

          {/* theme toggle */}
          <button
            onClick={toggleDark}
            aria-label="Toggle dark mode"
            className="ml-4 p-1 rounded-full text-slate-600 dark:text-slate-200
                       hover:text-teal-500 dark:hover:text-teal-400 transition"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>

        {/* ─── Hamburger ─── */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="md:hidden text-slate-700 dark:text-slate-200"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* ─── Mobile drawer ─── */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ y: -8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -8, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-t border-slate-200 dark:border-slate-700
                       bg-white dark:bg-slate-900"
          >
            <ul
              className="flex flex-col px-6 py-4 space-y-4 text-sm font-medium
                            text-slate-700 dark:text-slate-300"
            >
              {NAV.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className="block hover:text-teal-500 dark:hover:text-teal-400 transition"
                  >
                    {label}
                  </Link>
                </li>
              ))}

              <li>
                <button
                  onClick={() => {
                    toggleDark();
                    setOpen(false);
                  }}
                  className="flex items-center gap-2 hover:text-teal-500 dark:hover:text-teal-400 transition"
                >
                  {dark ? <Sun size={18} /> : <Moon size={18} />}
                  {dark ? "Light mode" : "Dark mode"}
                </button>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
