/**
 * SectionLabel
 * ------------
 * The small uppercase tag above every section heading
 * ("WHY US", "TRACKS", "REVIEWS"...). Centralized here so the
 * whole site uses one consistent label style instead of each
 * section styling its own — a small thing that reads as more
 * "designed" rather than assembled piece by piece.
 */
export default function SectionLabel({ children, className = "" }) {
  return (
    <p className={`text-xs font-semibold uppercase tracking-[0.14em] text-primary ${className}`}>
      {children}
    </p>
  );
}
