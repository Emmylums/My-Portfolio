import { motion } from "framer-motion";
import { projects, type Project, type PlaceholderIcon } from "../data";
import SectionHeading from "./SectionHeading";

const statusStyles: Record<
  Project["status"],
  { label: string; dot: string; text: string }
> = {
  live: { label: "Live", dot: "bg-emerald-400", text: "text-emerald-300" },
  wip: { label: "In Development", dot: "bg-amber-400", text: "text-amber-300" },
  archived: { label: "Archived", dot: "bg-slate-400", text: "text-slate-300" },
  private: { label: "Private", dot: "bg-slate-400", text: "text-slate-300" },
};

function PlaceholderGraphic({
  icon = "web",
}: {
  icon?: PlaceholderIcon;
}) {
  const base = "h-14 w-14 text-white/30";
  const svgs: Record<PlaceholderIcon, React.ReactNode> = {
    web: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={base} aria-hidden="true">
        <rect x="2" y="4" width="20" height="14" rx="2" />
        <path d="M8 22h8M12 18v4" />
      </svg>
    ),
    mobile: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={base} aria-hidden="true">
        <rect x="6" y="2" width="12" height="20" rx="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
    scissors: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={base} aria-hidden="true">
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <path d="M20 4 8.12 15.88M14.47 14.48 20 20M8.12 8.12 12 12" />
      </svg>
    ),
    generic: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={base} aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="9" cy="9" r="2" />
        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
      </svg>
    ),
  };
  return svgs[icon];
}

function ProjectCard({ p, i }: { p: Project; i: number }) {
  const status = statusStyles[p.status];
  const isClickable = !!p.link;

  const motionProps = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    whileHover: isClickable ? { y: -6 } : undefined,
    transition: { duration: 0.55, delay: i * 0.08 },
    viewport: { once: true },
    className: `group block h-full rounded-3xl overflow-hidden border border-line bg-surface shadow-sm transition-all ${
      isClickable
        ? "hover:shadow-xl hover:border-gold cursor-pointer"
        : ""
    }`,
  };

  const inner = (
    <>
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-[oklch(20%_0.01_85)] to-[oklch(35%_0.08_83)]">
        {p.image ? (
          <img
            src={p.image}
            alt={p.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <PlaceholderGraphic icon={p.placeholderIcon ?? "web"} />
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute top-4 right-4 flex items-center gap-2 rounded-full bg-black/70 backdrop-blur-sm px-3 py-1">
          <span className={`h-1.5 w-1.5 rounded-full ${status.dot}`} />
          <span className={`text-[10px] font-bold uppercase tracking-widest ${status.text}`}>
            {status.label}
          </span>
        </div>

        <div className="absolute bottom-4 left-4 right-4">
          <div className="w-8 h-1 bg-gold rounded-full mb-2" />
          <p className="text-white font-display font-bold text-xl">{p.title}</p>
          {p.role && (
            <p className="text-white/70 text-xs mt-1 uppercase tracking-wider">
              {p.role}
            </p>
          )}
        </div>
      </div>

      <div className="p-6">
        <p className="text-sm leading-relaxed text-ink-soft mb-4">{p.description}</p>

        {p.note && (
          <p className="text-xs italic text-ink-soft/70 mb-4">{p.note}</p>
        )}

        <ul className="flex flex-wrap gap-2 mb-5">
          {p.tags.map((t) => (
            <li
              key={t}
              className="rounded-full bg-line/60 dark:bg-white/10 px-3 py-1 font-mono text-xs text-ink-soft"
            >
              {t}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4 text-sm">
          {p.link && (
            <span className="text-gold-deep dark:text-gold font-medium inline-flex items-center gap-1">
              Visit site <span aria-hidden>→</span>
            </span>
          )}
          {p.repo && (
            <a
              href={p.repo}
              target="_blank"
              rel="noreferrer"
              className="text-ink-soft hover:text-gold-deep dark:hover:text-gold"
            >
              Code
            </a>
          )}
          {p.status === "private" && (
            <span className="text-ink-soft/70 italic text-xs">
              Case study on request
            </span>
          )}
          {p.status === "wip" && (
            <span className="text-ink-soft/70 italic text-xs">
              Launching soon
            </span>
          )}
        </div>
      </div>
    </>
  );

  if (isClickable) {
    return (
      <motion.a href={p.link} target="_blank" rel="noreferrer" {...motionProps}>
        {inner}
      </motion.a>
    );
  }

  return <motion.article {...motionProps}>{inner}</motion.article>;
}

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-28 px-6 bg-canvas">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Selected Work"
          title={
            <>
              Things I've{" "}
              <em className="italic font-light text-gold-deep dark:text-gold">
                shipped.
              </em>
            </>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}