import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setShowTop(window.scrollY > 400);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <footer className="border-t border-line-dark bg-ink py-10">
        <div className="mx-auto flex max-w-content flex-col items-center gap-4 px-6 text-center">
          <Logo light />
          <p className="text-sm text-paper/50">
            &copy; {new Date().getFullYear()} Internee.pk — All rights reserved.
          </p>
        </div>
      </footer>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-paper shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-primary-dark hover:shadow-xl ${
          showTop ? "visible translate-y-0 opacity-100" : "invisible translate-y-2 opacity-0"
        }`}
      >
        <ArrowUp size={18} />
      </button>
    </>
  );
}
