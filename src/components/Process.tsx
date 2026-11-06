import { motion } from "framer-motion";
import { process } from "../data";
import SectionHeading from "./SectionHeading";

export default function Process() {
  return (
    <section id="process" className="scroll-mt-24 py-28 px-6 bg-canvas">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="How I Work"
          title={
            <>
              A process that{" "}
              <em className="italic font-light text-gold-deep dark:text-gold">keeps shipping.</em>
            </>
          }
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-px bg-line" />
          {process.map((p, i) => (
            <motion.div
              key={p.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center mb-5 mx-auto font-display font-black text-ink text-lg shadow-lg">
                {p.step}
              </div>
              <h3 className="font-display font-bold text-xl text-ink mb-2 text-center">
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed text-ink-soft text-center">
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}