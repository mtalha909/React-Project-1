import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const CODE_LINES = [
  "const you = {",
  "  skills: ['HTML', 'CSS', 'JS'],",
  "  experience: 'none yet',",
  "};",
  "",
  "internee.pk(you)",
  "  .mentor()",
  "  .buildRealProjects()",
  "  .certify();",
  "",
  "// → ready for the job market",
];

// small floating chips around the code panel — purely decorative,
// they reinforce the "real tech stack" idea from the hero copy
const FLOAT_BADGES = [
  { label: "React", className: "-left-6 top-10", delay: "" },
  { label: "Node.js", className: "-right-8 top-1/3", delay: "animate-float-slow" },
  { label: "MySQL", className: "-left-10 bottom-16", delay: "animate-float-slow" },
];

export default function Hero() {
  const [charCount, setCharCount] = useState(0);
  const fullText = CODE_LINES.join("\n");

  useEffect(() => {
    if (charCount >= fullText.length) return;
    const timeout = setTimeout(() => setCharCount((c) => c + 1), 22);
    return () => clearTimeout(timeout);
  }, [charCount, fullText.length]);

  const typedText = fullText.slice(0, charCount);

  return (
    <section id="home" className="relative overflow-hidden border-b border-line bg-dot-grid">
      {/* soft ambient color behind everything — kept low-opacity so it reads
          as atmosphere, not decoration competing with the content */}
      <div className="pointer-events-none absolute -top-20 left-1/4 h-72 w-72 rounded-full gradient-blob" />
      <div className="pointer-events-none absolute -bottom-24 right-0 h-80 w-80 rounded-full gradient-blob-accent" />

      <div className="relative mx-auto grid max-w-content items-center gap-12 px-6 py-24 md:grid-cols-2 md:py-32">
        <div>
          <Reveal className="mb-4">
            <SectionLabel>Internships for Pakistani students</SectionLabel>
          </Reveal>

          <Reveal as="h1" className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-ink md:text-5xl">
            Ship real projects.
            <br />
            Land your first role.
          </Reveal>

          <Reveal delay={100} as="p" className="mt-5 max-w-md text-muted">
            Internee.pk pairs you with a mentor and a real codebase —
            not another isolated tutorial series. Pick a track, commit
            code, get reviewed, and graduate with something to show.
          </Reveal>

          <Reveal delay={200} className="mt-8 flex flex-wrap gap-3">
            <a
              href="#tracks"
              className="rounded-md bg-primary px-6 py-3 font-semibold text-paper shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/20"
            >
              Browse Tracks
            </a>
            <a
              href="#services"
              className="rounded-md border border-line px-6 py-3 font-semibold text-ink transition-all duration-300 hover:-translate-y-1 hover:border-ink hover:shadow-sm"
            >
              How It Works
            </a>
          </Reveal>
        </div>

        {/* right: code editor mock, with floating tech badges around it */}
        <Reveal delay={150} className="relative">
          {FLOAT_BADGES.map((badge) => (
            <span
              key={badge.label}
              className={`animate-float ${badge.delay} absolute z-10 hidden rounded-full border border-line bg-white/90 px-3 py-1.5 font-mono text-xs text-ink shadow-md backdrop-blur sm:block ${badge.className}`}
            >
              {badge.label}
            </span>
          ))}

          <div className="relative overflow-hidden rounded-lg border border-line-dark bg-ink shadow-2xl shadow-ink/20 transition-transform duration-500 hover:-translate-y-1">
            <div className="flex items-center gap-1.5 border-b border-line-dark px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#FF5F56]" />
              <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
              <span className="h-3 w-3 rounded-full bg-[#27C93F]" />
              <span className="ml-3 font-mono text-xs text-muted">career.js</span>
            </div>

            <pre className="min-h-[280px] overflow-x-auto p-5 font-mono text-[13px] leading-relaxed text-paper">
              <code>
                {typedText}
                <span className="type-cursor h-4" />
              </code>
            </pre>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
