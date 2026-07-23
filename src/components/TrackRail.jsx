import { useState } from "react";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { tracks } from "../data/tracks";

export default function TrackRail() {
  const [selectedId, setSelectedId] = useState(tracks[0].id);
  const selectedIndex = tracks.findIndex((t) => t.id === selectedId);
  const selected = tracks[selectedIndex];

  // how far along the rail the colored "progress" line should reach —
  // reinforces the idea that picking a station shows your route so far
  const progressPercent = (selectedIndex / (tracks.length - 1)) * 100;

  return (
    <section id="tracks" className="relative overflow-hidden border-y border-line bg-dot-grid py-24">
      <div className="mx-auto max-w-content px-6">
        <Reveal className="mb-3 text-center">
          <SectionLabel>Tracks</SectionLabel>
        </Reveal>
        <Reveal as="h2" className="mb-2 text-center font-display text-3xl font-semibold tracking-tight text-ink">
          Pick your route
        </Reveal>
        <Reveal as="p" className="mb-16 text-center text-muted">
          Every track is a path, not a playlist — pick a station to see where it leads.
        </Reveal>

        <Reveal>
          <div className="relative overflow-x-auto pb-2">
            <div className="relative flex min-w-[640px] justify-between px-4">
              {/* base line (full length, always muted) */}
              <div className="absolute left-4 right-4 top-[15px] h-0.5 bg-line" aria-hidden="true" />
              {/* progress line (colored, grows as you pick later stations) */}
              <div
                className="absolute left-4 top-[15px] h-0.5 bg-primary transition-all duration-500 ease-out"
                style={{ width: `calc((100% - 2rem) * ${progressPercent / 100})` }}
                aria-hidden="true"
              />

              {tracks.map((track, index) => {
                const isActive = track.id === selectedId;
                return (
                  <button
                    key={track.id}
                    onClick={() => setSelectedId(track.id)}
                    className="group relative z-10 flex flex-1 flex-col items-center gap-3 px-2 text-center"
                  >
                    <span className="relative flex h-8 w-8 items-center justify-center">
                      {isActive && (
                        <span className="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-primary/50" />
                      )}
                      <span
                        className={`relative flex h-8 w-8 items-center justify-center rounded-full border-2 font-mono text-xs transition-all duration-300 ${
                          isActive
                            ? "border-primary bg-primary text-paper scale-110"
                            : "border-line bg-paper text-muted group-hover:border-primary/50 group-hover:text-ink"
                        }`}
                      >
                        {index + 1}
                      </span>
                    </span>
                    <span
                      className={`text-sm font-medium transition-colors duration-300 ${
                        isActive ? "text-ink" : "text-muted group-hover:text-ink"
                      }`}
                    >
                      {track.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div
            key={selected.id}
            className="animate-fade-slide mt-10 overflow-hidden rounded-lg border border-line-dark bg-ink p-8 text-paper shadow-xl md:p-10"
          >
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-accent">
              <span>{selected.level}</span>
              <span className="text-paper/30">•</span>
              <span>{selected.duration}</span>
            </div>

            <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">{selected.title}</h3>
            <p className="mt-3 max-w-xl text-paper/70">{selected.desc}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {selected.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-paper/20 px-3 py-1 font-mono text-xs text-paper/80 transition-colors hover:border-accent/50 hover:text-accent"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-7 inline-block rounded-md bg-accent px-6 py-3 font-semibold text-ink shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/30"
            >
              Apply for {selected.title}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
