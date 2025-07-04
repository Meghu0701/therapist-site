import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    title: "Anxiety & Stress Management",
    img: "/images/anxiety.jpeg",
    desc: "Tools to calm racing thoughts, regulate your nervous system, and build resilience.",
  },
  {
    title: "Relationship Counseling",
    img: "/images/relationship.jpeg",
    desc: "Strengthen communication, deepen intimacy, and navigate conflict gracefully.",
  },
  {
    title: "Trauma Recovery",
    img: "/images/Trauma.png",
    desc: "Process past experiences safely, reduce triggers, and reclaim self‑compassion.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-slate-50 px-6 py-24 dark:bg-slate-900/60"
    >
      <h2 className="mb-14 text-center text-3xl font-semibold">
        <span className="relative inline-block">
          Areas&nbsp;of&nbsp;Focus
          <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-teal-300" />
        </span>
      </h2>

      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-3">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            whileHover={{ y: -8, boxShadow: "0 14px 30px rgba(0,0,0,0.15)" }}
            className="rounded-xl bg-white p-6 text-center ring-1 ring-slate-100 transition-all dark:bg-slate-800/60 dark:ring-slate-700"
          >
            <div className="relative mx-auto mb-6 h-48 w-48 before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-tr before:from-teal-400 before:to-cyan-500 before:blur-lg before:opacity-30">
              <Image
                src={s.img}
                alt={s.title}
                fill
                className="rounded-full object-cover grayscale transition hover:grayscale-0"
              />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-teal-200">
              {s.title}
            </h3>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {s.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
