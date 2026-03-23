'use client';

import Link from 'next/link';
import { useState } from 'react';

type CarouselItem = {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  cta: string;
  bullets: string[];
};

export function FeatureCarousel({ items }: { items: CarouselItem[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = items[activeIndex];

  return (
    <div className="grid gap-5 lg:grid-cols-[0.34fr_0.66fr]">
      <div className="grid gap-3">
        {items.map((item, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={item.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={
                isActive
                  ? 'premium-surface-soft rounded-2xl border border-[#4c6f9f] px-4 py-4 text-left'
                  : 'premium-surface-soft rounded-2xl border border-[var(--border)] px-4 py-4 text-left transition hover:border-[var(--accent-strong)] hover:bg-[var(--surface-soft)]'
              }
            >
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent-strong)]">
                {item.eyebrow}
              </div>
              <div className="mt-2 text-base font-semibold text-[var(--ink)]">{item.title}</div>
            </button>
          );
        })}
      </div>

      <div className="premium-surface rounded-3xl border border-[var(--border-strong)] p-6 sm:p-8">
        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-strong)]">
          {activeItem.eyebrow}
        </div>
        <h3 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--ink)]">{activeItem.title}</h3>
        <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)]">{activeItem.description}</p>

        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {activeItem.bullets.map((bullet) => (
            <div key={bullet} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-4 text-sm leading-7 text-[var(--ink)]">
              {bullet}
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between gap-4">
          <Link href={activeItem.href} className="text-sm font-semibold text-[var(--accent-strong)] hover:text-[var(--ink)]">
            {activeItem.cta}
          </Link>
          <div className="flex items-center gap-2">
            {items.map((item, index) => (
              <button
                key={item.title}
                type="button"
                aria-label={`Show ${item.title}`}
                onClick={() => setActiveIndex(index)}
                className={index === activeIndex ? 'h-2.5 w-8 rounded-full bg-[var(--accent-strong)]' : 'h-2.5 w-2.5 rounded-full bg-[var(--border-strong)]'}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
