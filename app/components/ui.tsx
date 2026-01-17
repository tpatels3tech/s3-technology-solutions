import type { ReactNode } from 'react';

export function Container({ children }: { children: ReactNode }) {
  return <div className="mx-auto max-w-6xl px-4 sm:px-6">{children}</div>;
}

export function Section({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <section className={`py-20 sm:py-24 ${className}`}>{children}</section>;
}

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-white backdrop-blur">
      {children}
    </span>
  );
}

export function Card({ children }: { children: ReactNode }) {
  // Glassy “panel” look: gradient border + blur + deeper shadows
  return (
    <div className="group relative rounded-3xl bg-gradient-to-b from-white/15 to-white/5 p-px shadow-[0_28px_90px_-35px_rgba(0,0,0,0.85)]">
      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl transition hover:border-white/20 hover:bg-white/[0.055]">
        {children}
      </div>
    </div>
  );
}

export function PrimaryButton({ children, href }: { children: ReactNode; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-xl shadow-[0_18px_50px_-30px_rgba(0,0,0,0.85)] hover:bg-white/15"
    >
      {children}
    </a>
  );
}

export function SecondaryButton({ children, href }: { children: ReactNode; href: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.06] px-7 py-3.5 text-base font-medium text-white backdrop-blur-xl hover:bg-white/[0.10]"
    >
      {children}
    </a>
  );
}
