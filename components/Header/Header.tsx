"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [drawer, setDrawer] = useState(false);
  const [dark, setDark] = useState(false);

  /* persist theme */
  useEffect(() => {
    const stored = localStorage.getItem("dark") === "true";
    setDark(stored);
    document.documentElement.classList.toggle("dark", stored);
  }, []);

  /* lock body scroll when drawer open */
  useEffect(() => {
    document.body.classList.toggle("overflow-y-hidden", drawer);
  }, [drawer]);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    localStorage.setItem("dark", String(next));
    document.documentElement.classList.toggle("dark", next);
  };

  return (
    <motion.header
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35 }}
      className="
      sticky top-0 z-50 w-full backdrop-blur
      bg-white/85 dark:bg-slate-900/80
      border-b border-slate-200 dark:to-black-700 shadow-sm"
    >
      {/* ── top bar ─────────────────────────────── */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-4">
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/images/logo-colored.png" // Use a colored, non-transparent logo
            alt="Dr. Serena Blake Logo"
            width={40}
            height={40}
            className="rounded-full bg-teal-600 dark:bg-teal-400" // Add background color to match theme
            priority
          />
          <span className="whitespace-nowrap text-lg font-semibold text-teal-600 dark:text-teal-300">
            Dr.&nbsp;Serena&nbsp;Blake
          </span>
        </Link>

        {/* desktop nav */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {NAV.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="group relative text-slate-700 dark:text-slate-200 hover:text-teal-500 dark:hover:text-teal-400 transition"
            >
              <span className="inline-block group-hover:-translate-y-[2px] transition">
                {label}
              </span>
              <span
                className="
            absolute inset-x-0 -bottom-[2px] h-[2px] scale-x-0
            bg-gradient-to-r from-[var(--logo-from)] to-[var(--logo-to)]
            transition-transform duration-200 group-hover:scale-x-100"
              />
            </Link>
          ))}

          {/* theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="ml-6 p-1 rounded-full text-slate-700 hover:text-teal-500 dark:text-slate-200 dark:hover:text-teal-400 transition"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>

        {/* hamburger icon */}
        <button
          onClick={() => setDrawer(!drawer)}
          aria-label="Menu"
          className="md:hidden text-slate-700 dark:text-slate-200"
        >
          {drawer ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* ── mobile drawer ──────────────────────── */}
      <AnimatePresence>
        {drawer && (
          <motion.nav
            key="drawer"
            initial={{ y: -8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -8, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900"
          >
            <ul className="flex flex-col px-6 py-4 space-y-4 text-sm font-medium text-slate-700 dark:text-slate-300">
              {NAV.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setDrawer(false)}
                    className="block hover:text-teal-500 dark:hover:text-teal-400 transition"
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={() => {
                    toggleTheme();
                    setDrawer(false);
                  }}
                  className="flex items-center gap-2 hover:text-teal-500 dark:hover:text-teal-400 transition"
                >
                  {dark ? <Sun size={18} /> : <Moon size={18} />}
                  {dark ? "Light mode" : "Dark mode"}
                </button>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
