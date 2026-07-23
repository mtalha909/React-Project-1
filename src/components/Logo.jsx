/**
 * Logo
 * ----
 * The mark is an ascending path with a dot at the tip — the same
 * "route toward a destination" idea as TrackRail, just condensed
 * into a badge. The dot pulses gently to feel alive without being
 * distracting (see the ping animation in index.css).
 */
export default function Logo({ light = false }) {
  return (
    <a href="#home" className="group flex items-center gap-2.5">
      <span className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-ink to-[#1d2a22] shadow-sm transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M3 17L9 11L13 15L21 6"
            stroke="#1B7A5B"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M15 6H21V12" stroke="#1B7A5B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="21" cy="6" r="2.5" fill="#FFB800" />
          <circle cx="21" cy="6" r="2.5" fill="#FFB800" className="animate-ping-slow opacity-75" />
        </svg>
      </span>
      <span className={`font-display text-[17px] font-semibold tracking-tight ${light ? "text-paper" : "text-ink"}`}>
        internee<span className="text-primary">.pk</span>
      </span>
    </a>
  );
}
