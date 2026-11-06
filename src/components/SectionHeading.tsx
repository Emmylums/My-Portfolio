import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  align = "left",
  light = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <Reveal>
      <div className={align === "center" ? "text-center mb-14" : "mb-12"}>
        <span
          className={`inline-block font-bold uppercase tracking-[0.3em] text-xs md:text-sm mb-4 ${
            light ? "text-gold" : "text-gold-deep dark:text-gold"
          }`}
        >
          {eyebrow}
        </span>
        <h2
          className={`font-display font-bold text-3xl md:text-5xl leading-[1.1] tracking-tight ${
            light ? "text-white" : "text-ink"
          }`}
        >
          {title}
        </h2>
      </div>
    </Reveal>
  );
}