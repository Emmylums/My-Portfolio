import { motion } from "framer-motion";
import { stats } from "../data";

export default function Stats() {
  return (
    <section className="bg-gold py-12">
      <div className="mx-auto max-w-6xl px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="font-display text-3xl md:text-5xl font-black text-ink">
              {s.value}
            </div>
            <div className="text-ink/70 text-[10px] md:text-sm mt-2 tracking-[0.2em] uppercase font-semibold">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}