import { useEffect, useRef, useState } from "react";

/**
 * useReveal
 * ----------
 * A small reusable hook that tells a component whether it has
 * scrolled into the viewport yet. Attach the returned `ref` to
 * any element, and use `isVisible` to toggle the "is-visible"
 * class defined in index.css (see .reveal / .reveal.is-visible).
 *
 * This replaces the old initScrollReveal() function from the
 * plain-JS version — same idea, just packaged as a hook so any
 * component can reuse it with one line.
 */
export function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el); // only animate once
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}
