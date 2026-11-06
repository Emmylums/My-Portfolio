import { motion } from "framer-motion";
import { services } from "../data";
import SectionHeading from "./SectionHeading";

const icons: Record<string, React.ReactNode> = {
  web: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <rect x="2" y="4" width="20" height="14" rx="2" />
      <path d="M8 22h8M12 18v4" />
    </svg>
  ),
  mobile: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <rect x="6" y="2" width="12" height="20" rx="2" />
      <path d="M12 18h.01" />
    </svg>
  ),
  server: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <rect x="2" y="4" width="20" height="8" rx="2" />
      <rect x="2" y="14" width="20" height="6" rx="2" />
      <path d="M6 8h.01M6 17h.01" />
    </svg>
  ),
  layers: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <path d="M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
};

export default function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-24 py-28 px-6 bg-[oklch(15%_0.01_85)] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,200,80,0.08),transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="What I Do"
          title={
            <>
              Full-stack work,{" "}
              <em className="italic font-light text-gold">end to end.</em>
            </>
          }
          align="center"
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white/[0.04] backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-white/[0.08] hover:border-gold/50 transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-gold flex items-center justify-center mb-6 text-ink group-hover:scale-110 transition-transform">
                {icons[s.icon]}
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-3">
                {s.title}
              </h3>
              <p className="text-white/70 leading-relaxed">{s.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}