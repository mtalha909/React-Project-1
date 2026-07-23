import { useReveal } from "../hooks/useReveal";

/**
 * <Reveal> wraps any content and fades/slides it in once it
 * scrolls into view. Usage:
 *
 *   <Reveal><h2>Section title</h2></Reveal>
 *   <Reveal as="p" delay={100}>Some text</Reveal>
 *
 * `as` lets you pick the wrapping tag (defaults to div) so this
 * doesn't force extra <div>s where a <span> or <p> reads better.
 */
export default function Reveal({ children, as: Tag = "div", delay = 0, className = "" }) {
  const { ref, isVisible } = useReveal();

  return (
    <Tag
      ref={ref}
      className={`reveal ${isVisible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
