import { useEffect, useRef, useState } from "react";

/**
 * useCountUp
 * ----------
 * Animates a number from 0 up to `target` over `duration` ms,
 * starting only once the element becomes visible on screen.
 * Returns { ref, count } — attach ref to the element that
 * should trigger the count, render {count} as the number.
 */
export function useCountUp(target, duration = 1200) {
  const ref = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(el);

        const start = performance.now();
        function tick(now) {
          const progress = Math.min((now - start) / duration, 1);
          setCount(Math.floor(progress * target));
          if (progress < 1) requestAnimationFrame(tick);
          else setCount(target);
        }
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { ref, count };
}
