import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { testimonials } from "../data/services";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  function goTo(next) {
    setIndex((next + testimonials.length) % testimonials.length);
  }

  useEffect(() => {
    const timer = setTimeout(() => goTo(index + 1), 5000);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <section id="testimonials" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full gradient-blob-accent" aria-hidden="true" />
      <div className="relative mx-auto max-w-content px-6">
        <Reveal className="mb-3 text-center">
          <SectionLabel>Reviews</SectionLabel>
        </Reveal>
        <Reveal as="h2" className="mb-14 text-center font-display text-3xl font-semibold tracking-tight text-ink">
          What interns say after shipping
        </Reveal>

        <Reveal className="mx-auto flex max-w-2xl items-center gap-4">
          <button
            onClick={() => goTo(index - 1)}
            aria-label="Previous testimonial"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-muted transition-all duration-300 hover:-translate-x-0.5 hover:border-ink hover:text-ink"
          >
            <ChevronLeft size={18} />
          </button>

          {/* key={index} forces React to remount the card on every slide
              change, which restarts the animate-fade-slide animation */}
          <div className="relative min-h-[220px] flex-1 overflow-hidden rounded-lg border border-line bg-white p-8 text-center shadow-sm">
            <Quote className="mx-auto mb-3 text-primary/25" size={28} />
            <div key={index} className="animate-fade-slide">
              <p className="font-display text-lg leading-relaxed text-ink">
                "{testimonials[index].text}"
              </p>
              <div className="mt-5 flex items-center justify-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 font-display text-sm font-semibold text-primary">
                  {testimonials[index].name.split(" ").map((n) => n[0]).join("")}
                </span>
                <span className="text-left">
                  <span className="block text-sm font-semibold text-ink">{testimonials[index].name}</span>
                  <span className="block text-xs text-muted">{testimonials[index].track}</span>
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={() => goTo(index + 1)}
            aria-label="Next testimonial"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-muted transition-all duration-300 hover:translate-x-0.5 hover:border-ink hover:text-ink"
          >
            <ChevronRight size={18} />
          </button>
        </Reveal>

        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              onClick={() => goTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-primary" : "w-2 bg-line hover:bg-muted/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
