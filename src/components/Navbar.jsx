import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Why Us" },
  { href: "#tracks", label: "Tracks" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("#home");
  // tracks scroll position so the bar can pick up a shadow once you
  // leave the very top of the page — a small but real "polish" detail
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) setIsOpen(false);
    }
    function handleScroll() {
      setScrolled(window.scrollY > 8);
    }
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-paper/85 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "border-line shadow-[0_1px_20px_rgba(16,21,31,0.06)]" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-3">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setActive(link.href)}
              className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                active === link.href ? "text-ink" : "text-muted hover:text-ink"
              }`}
            >
              {link.label}
              {/* animated underline — scales in from the center on hover/active */}
              <span
                className={`absolute inset-x-3 -bottom-[1px] h-0.5 origin-center scale-x-0 rounded-full bg-primary transition-transform duration-300 ${
                  active === link.href ? "scale-x-100" : "group-hover:scale-x-100"
                }`}
              />
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-md bg-primary px-4 py-2 text-sm font-semibold text-paper shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-md md:inline-block"
        >
          Apply Now
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setIsOpen((prev) => !prev)}
          className="text-ink transition-transform duration-200 active:scale-90 md:hidden"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <nav
        className={`flex flex-col gap-1 overflow-hidden border-t border-line px-6 transition-[max-height,padding] duration-300 md:hidden ${
          isOpen ? "max-h-80 py-4" : "max-h-0 py-0"
        }`}
      >
        {LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => {
              setActive(link.href);
              setIsOpen(false);
            }}
            className="rounded px-2 py-2 text-sm text-muted transition-colors hover:bg-line/40 hover:text-ink"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setIsOpen(false)}
          className="mt-2 rounded-md bg-primary px-4 py-2 text-center text-sm font-semibold text-paper"
        >
          Apply Now
        </a>
      </nav>
    </header>
  );
}
