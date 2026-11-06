import { motion } from "framer-motion";
import { profile } from "../data";
import { scrollToId } from "../utils/scroll";
import bg from "../assets/bg.jpg";
import resume from "../assets/Resume.pdf";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden bg-canvas"
    >
      {/* Subtle background glow — now visible from y=0 */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,200,80,0.10),transparent_55%)]" />

      <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-12 md:pt-28 md:pb-20 grid md:grid-cols-2 gap-10 md:gap-16 items-center min-h-[100svh]">
        {/* ── Text column (2nd on mobile, 1st on desktop) ─────── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="order-2 md:order-1"
        >
          <span className="inline-block text-gold-deep dark:text-gold font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-6">
            {profile.role}
          </span>

          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight mb-6 text-ink">
            Hi, I'm Emmanuel.{" "}
            <span className="block">
              I build for{" "}
              <em className="italic text-gold-deep dark:text-gold font-light">
                web and mobile.
              </em>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-ink-soft max-w-xl leading-relaxed mb-10">
            {profile.tagline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-3 bg-gold hover:bg-gold-bright text-ink font-semibold px-8 py-4 rounded-full tracking-wide shadow-lg transition-all"
            >
              See my work
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="h-4 w-4"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a
              href={resume}
              download="Emmanuel-Lumati-Resume.pdf"
              className="inline-flex items-center justify-center gap-3 border-2 border-line text-ink hover:border-gold hover:text-gold-deep dark:hover:text-gold font-semibold px-8 py-4 rounded-full tracking-wide transition-all"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
              Download Resume
            </a>
          </div>

          <p className="mt-8 text-ink-soft text-sm">
            Or reach me at{" "}
            <a
              href={`mailto:${profile.email}`}
              className="text-gold-deep dark:text-gold hover:underline underline-offset-4"
            >
              {profile.email}
            </a>
          </p>
        </motion.div>

        {/* ── Image column (1st on mobile, 2nd on desktop) ────── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-1 md:order-2"
        >
          {/* Offset gold frame — desktop only */}
          <div className="hidden md:block absolute -inset-4 rounded-3xl border border-gold/40 pointer-events-none" />

          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={bg}
              alt="Emmanuel's workspace"
              className="w-full aspect-[4/3] md:aspect-[4/5] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>

          {/* Floating stat badge */}
          <div className="absolute -bottom-5 -left-3 md:-left-6 bg-gold px-5 py-3 rounded-2xl shadow-xl">
            <p className="text-ink font-display font-bold text-2xl leading-none">
              3+
            </p>
            <p className="text-ink/70 text-[10px] uppercase tracking-widest mt-1 font-semibold">
              Years building
            </p>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator — desktop only */}
      <button
        onClick={() => scrollToId("about")}
        className="hidden md:block absolute bottom-6 left-1/2 -translate-x-1/2 text-ink-soft hover:text-gold-deep dark:hover:text-gold transition-colors"
        aria-label="Scroll to about"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-ink/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-ink/40 rounded-full" />
        </motion.div>
      </button>
    </section>
  );
}