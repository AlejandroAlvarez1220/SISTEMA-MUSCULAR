import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = ""
}: SectionProps) {
  return (
    <section id={id} className={`section-shell animate-fade-in ${className}`}>
      <div className="mb-10 max-w-3xl">
        {eyebrow ? (
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-medical-primary">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
        {description ? (
          <p className="mt-4 text-lg leading-8 text-slate-300">{description}</p>
        ) : null}
      </div>
      {children}
    </section>
  );
}
