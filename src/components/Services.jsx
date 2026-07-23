import { Braces, Users, GitBranch, Award } from "lucide-react";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { services } from "../data/services";

const ICONS = {
  braces: Braces,
  users: Users,
  "git-branch": GitBranch,
  award: Award,
};

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute -right-16 top-0 h-64 w-64 rounded-full gradient-blob" aria-hidden="true" />
      <div className="relative mx-auto max-w-content px-6">
        <Reveal className="mb-3 text-center">
          <SectionLabel>Why Us</SectionLabel>
        </Reveal>
        <Reveal as="h2" className="mb-14 text-center font-display text-3xl font-semibold tracking-tight text-ink">
          Built like a real job, not a course
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = ICONS[service.icon];
            return (
              <Reveal key={service.title} delay={i * 80}>
                <div className="group relative h-full overflow-hidden rounded-lg border border-line bg-white/60 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-xl hover:shadow-ink/5">
                  {/* accent bar slides in from the left on hover */}
                  <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />

                  <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 transition-colors duration-300 group-hover:bg-primary">
                    <Icon
                      className="text-primary transition-colors duration-300 group-hover:text-paper"
                      size={22}
                      strokeWidth={1.75}
                    />
                  </span>
                  <h3 className="mb-1.5 font-display font-semibold text-ink">{service.title}</h3>
                  <p className="text-sm text-muted">{service.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
