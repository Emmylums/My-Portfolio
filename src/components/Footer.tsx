import { profile } from "../data";
import { GitHubIcon, LinkedInIcon, WhatsAppIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-canvas py-10 px-6">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center md:items-start justify-between gap-6 text-sm text-ink-soft">
        <div className="text-center md:text-left">
          <p className="font-display text-base text-ink mb-1">{profile.name}</p>
          <p>{profile.locationShort}</p>
          <p className="mt-1">{profile.phone}</p>
          <a
            href={`mailto:${profile.email}`}
            className="hover:text-gold-deep dark:hover:text-gold transition-colors"
          >
            {profile.email}
          </a>
        </div>

        <div className="flex gap-3">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-full border border-line p-2.5 text-ink-soft hover:border-gold hover:text-gold-deep dark:hover:text-gold transition-colors"
          >
            <GitHubIcon />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-full border border-line p-2.5 text-ink-soft hover:border-gold hover:text-gold-deep dark:hover:text-gold transition-colors"
          >
            <LinkedInIcon />
          </a>
          <a
            href={profile.whatsapp}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="rounded-full border border-line p-2.5 text-ink-soft hover:border-gold hover:text-gold-deep dark:hover:text-gold transition-colors"
          >
            <WhatsAppIcon />
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-6xl mt-8 pt-6 border-t border-line text-xs text-center text-ink-soft/70">
        © {new Date().getFullYear()} {profile.name}. Built with React, Tailwind &amp; Framer Motion.
      </div>
    </footer>
  );
}