"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  PencilLine,
  Clock,
  CheckCircle2,
} from "lucide-react";

type FormErrors = Record<string, string>;

export default function Contact() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());

    const required = ["name", "email", "phone", "message", "time", "agree"];
    const err: FormErrors = {};
    required.forEach((f) => !data[f] && (err[f] = "Required"));

    if (data.email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email as string))
      err.email = "Invalid email";
    if (data.phone && !(data.phone as string).match(/\d{3}/))
      err.phone = "Invalid phone";

    setErrors(err);
    if (!Object.keys(err).length) {
      setSent(true);
      (e.target as HTMLFormElement).reset();
    }
  };

  const cardCls =
    "mx-auto w-full max-w-lg rounded-3xl bg-white/75 dark:bg-slate-800/70 " +
    "backdrop-blur p-8 sm:p-10 ring-1 ring-slate-100 dark:ring-slate-700 " +
    "shadow-2xl shadow-black/10";

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-4 sm:px-6 py-20 md:py-24"
    >
      {/* animated gradient halo */}
      <div className="pointer-events-none absolute inset-0 flex justify-center">
        <div
          className="
        h-[450px] w-[450px] rounded-full opacity-20 blur-3xl
        bg-white
        animate-[borderPulse_8s_linear_infinite]"
        />
      </div>

      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ duration: 0.5 }}
            className={`${cardCls} text-center`}
          >
            <CheckCircle2
              size={48}
              className="mx-auto mb-4 text-teal-500 dark:text-teal-300"
            />
            <h2 className="text-3xl font-bold text-slate-900 dark:text-teal-200">
              Thank you!
            </h2>
            <p className="mt-2 mb-6 text-slate-700 dark:text-slate-300">
              Dr. Blake will be in touch within one business day.
            </p>
            <button
              onClick={() => setSent(false)}
              className="rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 px-6 py-2 text-sm font-medium text-white shadow-md hover:brightness-110 active:scale-95 transition"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.5 }}
            className={`${cardCls} space-y-8 ${
              Object.keys(errors).length ? "animate-[shake_0.3s_ease]" : ""
            }`}
          >
            <h2 className="text-center text-3xl font-bold text-slate-900 dark:text-pink-300">
              Get in Touch
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <Field id="name" label="Name" icon={User} errors={errors} />
              <Field
                id="email"
                label="Email"
                type="email"
                icon={Mail}
                errors={errors}
              />
              <Field
                id="phone"
                label="Phone"
                type="tel"
                icon={Phone}
                errors={errors}
              />
              <Field
                id="message"
                label="What brings you here?"
                type="textarea"
                icon={PencilLine}
                errors={errors}
              />
              <Field
                id="time"
                label="Preferred time to reach you"
                icon={Clock}
                errors={errors}
              />

              <div className="flex items-center gap-3">
                <input
                  id="agree"
                  name="agree"
                  type="checkbox"
                  className="h-5 w-5 rounded border-slate-300 dark:border-slate-600 focus:ring-fuchsia-400"
                />
                <label htmlFor="agree" className="text-sm">
                  I agree to be contacted
                </label>
              </div>
              {errors.agree && (
                <p className="text-sm text-red-500">{errors.agree}</p>
              )}

              <button
                type="submit"
                className="w-full rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 px-10 py-3 font-medium text-white shadow-md hover:brightness-110 active:scale-95 transition"
              >
                Submit
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ---------------- Field ---------------- */

function Field({
  label,
  id,
  type = "text",
  icon: Icon,
  errors,
}: {
  label: string;
  id: string;
  type?: "text" | "email" | "tel" | "textarea";
  icon: React.ElementType;
  errors: FormErrors;
}) {
  const base =
    "w-full rounded-xl border border-slate-300 dark:border-slate-600 " +
    "bg-white/90 dark:bg-slate-800/50 pl-10 pr-3 py-3 focus:outline-none " +
    "focus:ring-2 focus:ring-fuchsia-400";

  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-sm font-medium">
        {label}
      </label>
      <div className="relative">
        <Icon
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 pointer-events-none"
        />
        {type === "textarea" ? (
          <textarea id={id} name={id} rows={4} className={base} />
        ) : (
          <input id={id} name={id} type={type} className={base} />
        )}
      </div>
      {errors[id] && <p className="mt-1 text-sm text-red-500">{errors[id]}</p>}
    </div>
  );
}
