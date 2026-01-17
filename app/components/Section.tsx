import type { ReactNode } from 'react';

export function Section({
  title,
  eyebrow,
  children,
}: {
  title: string;
  eyebrow?: string;
  children: ReactNode;
}) {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-6xl px-4">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-300">{eyebrow}</p>
        ) : null}
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">{title}</h2>
        <div className="mt-6 text-slate-200">{children}</div>
      </div>
    </section>
  );
}
