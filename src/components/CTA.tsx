import { motion } from "framer-motion";
import { profile } from "../data";
import resume from "../assets/Resume.pdf";

const MailIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 5L2 7" />
  </svg>
);

const PhoneIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const PinIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const DownloadIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
  </svg>
);

export default function CTA() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 relative py-28 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[oklch(15%_0.01_85)] via-[oklch(20%_0.01_85)] to-[oklch(30%_0.08_83)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,200,80,0.15),transparent_50%)]" />

      <div className="relative mx-auto max-w-4xl text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-gold font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-4">
            Let's build
          </span>
          <h2 className="font-display text-3xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
            Have a project in mind?{" "}
            <em className="italic font-light text-gold">Let's ship it.</em>
          </h2>
          <p className="text-lg md:text-xl text-white/75 mb-10 max-w-2xl mx-auto">
            Open to freelance work and full-time roles. Email is fastest — I
            reply within a day.
          </p>

          <div className="flex justify-center mb-14">
            <a
              href={resume}
              download="Emmanuel-Lumati-Resume.pdf"
              className="inline-flex items-center justify-center gap-3 bg-gold hover:bg-gold-bright text-ink font-semibold px-8 py-4 rounded-full tracking-wide shadow-lg transition-all"
            >
              <DownloadIcon />
              Download Resume
            </a>
          </div>

          <div className="grid sm:grid-cols-3 gap-5 text-sm text-left max-w-3xl mx-auto">
            <a
              href={`mailto:${profile.email}`}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-gold/50 p-5 transition-all"
            >
              <div className="flex items-center gap-2 mb-2">
                <MailIcon className="h-4 w-4 text-gold" />
                <span className="text-gold text-xs font-bold uppercase tracking-widest">
                  Email
                </span>
              </div>
              <div className="text-white/85 group-hover:text-white leading-relaxed">
                {profile.email}
              </div>
            </a>

            <a
              href={profile.phoneHref}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-gold/50 p-5 transition-all"
            >
              <div className="flex items-center gap-2 mb-2">
                <PhoneIcon className="h-4 w-4 text-gold" />
                <span className="text-gold text-xs font-bold uppercase tracking-widest">
                  Phone
                </span>
              </div>
              <div className="text-white/85 group-hover:text-white leading-relaxed">
                {profile.phone}
              </div>
            </a>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <div className="flex items-center gap-2 mb-2">
                <PinIcon className="h-4 w-4 text-gold" />
                <span className="text-gold text-xs font-bold uppercase tracking-widest">
                  Location
                </span>
              </div>
              <div className="text-white/85 leading-relaxed">
                {profile.address}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}