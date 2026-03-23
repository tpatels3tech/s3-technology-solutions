import type { ElementType, ReactNode } from 'react';
import Link from 'next/link';

export function Container({ children }: { children: ReactNode }) {
  return <div className="mx-auto max-w-6xl px-5 sm:px-8">{children}</div>;
}

export function Section({
  children,
  className = '',
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-14 sm:py-18 ${className}`}>
      {children}
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted-strong)]">
      {children}
    </div>
  );
}

export function Surface({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`premium-surface rounded-3xl border border-[var(--border-strong)] p-6 sm:p-8 ${className}`}
    >
      {children}
    </div>
  );
}

export function ButtonLink({
  children,
  href,
  variant = 'primary',
}: {
  children: ReactNode;
  href: string;
  variant?: 'primary' | 'secondary';
}) {
  const isExternal = href.startsWith('http') || href.startsWith('mailto:');
  const className =
    variant === 'primary'
      ? 'inline-flex items-center justify-center rounded-xl border border-[#2f6fbe] bg-[#2f6fbe] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#255c9e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9fc5ff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08111d]'
      : 'inline-flex items-center justify-center rounded-xl border border-[#4c6f9f] bg-[#132238] px-5 py-3 text-sm font-semibold text-[#f7fbff] transition hover:border-[#9fc5ff] hover:bg-[#1a2f4d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9fc5ff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08111d]';

  if (isExternal) {
    return (
      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  as: Tag = 'h2',
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  as?: ElementType;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <Tag className="mt-3 text-3xl font-semibold tracking-tight text-[var(--ink)] sm:text-4xl">{title}</Tag>
      {intro ? <p className="mt-4 text-lg leading-8 text-[var(--muted)]">{intro}</p> : null}
    </div>
  );
}
