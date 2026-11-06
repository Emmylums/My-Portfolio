import { motion } from "framer-motion";
import { profile } from "../data";
import Reveal from "./Reveal";
import portrait from "../assets/portrait.jpg";
import resume from "../assets/Resume.pdf";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-28 px-6 bg-canvas">
      <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <Reveal y={40}>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={portrait}
                alt="Emmanuel Lumati"
                className="w-full h-[340px] md:h-[520px] object-cover"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-4 md:-right-8 bg-gold p-5 md:p-6 rounded-2xl shadow-2xl max-w-[240px]"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="text-ink/30 h-6 w-6 mb-2">
                <path d="M7 7h4v4H9c0 1.7 1 2 2 2v2c-3 0-4-2-4-5V7zm10 0h4v4h-2c0 1.7 1 2 2 2v2c-3 0-4-2-4-5V7z" />
              </svg>
              <p className="text-ink font-semibold text-sm md:text-base leading-snug">
                &ldquo;{profile.quote}&rdquo;
              </p>
              <p className="text-ink/60 text-xs mt-2 italic">— Emmanuel</p>
            </motion.div>
          </div>
        </Reveal>

        <Reveal delay={0.15} y={40}>
          <span className="inline-block text-gold-deep dark:text-gold font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-4">
            About
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-ink mb-6 leading-[1.1] tracking-tight">
            A fullstack developer who cares about the whole path.
          </h2>
          <p className="text-lg leading-relaxed text-ink-soft mb-5">
            I'm Emmanuel, a fullstack developer building across web and mobile.
            Most of my work is React and React Native on the front, backend by
            Spring Boot or Node.js, with MySQL and Firebase for data.
          </p>
          <p className="text-lg leading-relaxed text-ink-soft mb-8">
            I like problems that span the whole stack — designing the schema,
            wiring up the API, and shipping the interface that ties it together.
            One developer, whole product.
          </p>

          <ul className="space-y-3 mb-10">
            {[
              "Web apps in React + TypeScript",
              "Mobile apps in React Native",
              "APIs and services in Spring Boot / Node.js",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <div className="h-6 w-6 rounded-full bg-gold flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="h-3 w-3 text-ink">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-medium text-ink">{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-3 bg-ink text-canvas hover:bg-gold hover:text-ink font-semibold px-7 py-3.5 rounded-full tracking-wide shadow-lg transition-colors"
            >
              View projects
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="h-4 w-4">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a
              href={resume}
              download="Emmanuel-Lumati-Resume.pdf"
              className="inline-flex items-center gap-3 border-2 border-line hover:border-gold hover:text-gold-deep dark:hover:text-gold font-semibold px-7 py-3.5 rounded-full tracking-wide transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
              Download Resume
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}