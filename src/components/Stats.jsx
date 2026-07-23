import { useCountUp } from "../hooks/useCountUp";

const STATS = [
  { label: "Students Trained", target: 5000, suffix: "+" },
  { label: "Partner Companies", target: 120, suffix: "+" },
  { label: "Internship Tracks", target: 5, suffix: "" },
  { label: "Satisfaction Rate", target: 98, suffix: "%" },
];

// one counter — its own component so each stat gets its own
// independent useCountUp hook instance (hooks can't be called
// in a loop, so this is the correct pattern for "N of the same thing")
function StatCounter({ label, target, suffix }) {
  const { ref, count } = useCountUp(target);
  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-3xl font-semibold text-accent md:text-4xl">
        {count}
        {suffix}
      </p>
      <p className="mt-1 text-sm text-paper/70">{label}</p>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="bg-ink py-12">
      <div className="mx-auto grid max-w-content grid-cols-2 gap-8 px-6 md:grid-cols-4">
        {STATS.map((stat) => (
          <StatCounter key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}
