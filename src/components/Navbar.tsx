import { useState } from "react";
import { profile } from "../data";
import { useTheme } from "../hooks/useTheme";
import resume from "../assets/Resume.pdf";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-canvas/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-lg font-semibold text-ink">
          {profile.name.split(" ")[0]}
          <span className="text-gold-deep dark:text-gold">.</span>
        </a>

        <ul className="hidden gap-7 text-sm lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-ink-soft transition-colors hover:text-gold-deep dark:hover:text-gold"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={resume}
            download="Emmanuel-Lumati-Resume.pdf"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gold hover:bg-gold-bright text-ink text-sm font-semibold px-4 py-2 transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
            Resume
          </a>

          <button
            onClick={toggle}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            className="rounded-lg p-2 text-ink-soft hover:bg-line/60 hover:text-gold-deep dark:hover:text-gold"
          >
            {theme === "dark" ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-5 w-5">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-5 w-5">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          <button
            onClick={() => setOpen((o) => !o)}
            className="rounded-lg p-2 text-ink-soft hover:bg-line/60 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-line px-6 py-3 text-sm lg:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-ink-soft hover:text-gold-deep dark:hover:text-gold"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={resume}
              download="Emmanuel-Lumati-Resume.pdf"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold text-ink text-sm font-semibold px-4 py-2.5"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
              Download Resume
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}