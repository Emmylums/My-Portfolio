import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faqs } from "../data";
import SectionHeading from "./SectionHeading";

export default function FAQ() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="faq" className="scroll-mt-24 py-28 px-6 bg-surface">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              Questions{" "}
              <em className="italic font-light text-gold-deep dark:text-gold">clients ask.</em>
            </>
          }
          align="center"
        />

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              viewport={{ once: true }}
              className={`rounded-2xl border-2 overflow-hidden transition-all ${
                active === i
                  ? "border-gold bg-gold/5"
                  : "border-line hover:border-gold/50"
              }`}
            >
              <button
                onClick={() => setActive(active === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
                aria-expanded={active === i}
              >
                <span className="font-semibold text-base md:text-lg text-ink pr-4">
                  {faq.question}
                </span>
                <span
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                    active === i ? "bg-gold rotate-180" : "bg-line"
                  }`}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className={`h-4 w-4 ${active === i ? "text-ink" : "text-ink-soft"}`}>
                    {active === i ? <path d="M5 12h14" /> : <path d="M12 5v14M5 12h14" />}
                  </svg>
                </span>
              </button>

              <AnimatePresence initial={false}>
                {active === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 leading-relaxed text-ink-soft">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}