import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const nav = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo + title */}
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full"
            priority
          />
          <span className="text-lg font-semibold text-teal-600 dark:text-teal-300">
            Dr. Serena Blake
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-slate-600 dark:text-slate-200">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="hover:text-teal-400 transition"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          className="md:hidden text-slate-600 dark:text-slate-200"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <nav className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 px-6 pb-4 space-y-4 text-sm font-medium text-slate-700 dark:text-slate-200">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block hover:text-teal-400 transition"
            >
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
