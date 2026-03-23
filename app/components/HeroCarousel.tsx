'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

type HeroSlide = {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  cta: string;
};

export function HeroCarousel({ slides }: { slides: HeroSlide[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 6000);

    return () => window.clearInterval(id);
  }, [slides.length]);

  const active = slides[activeIndex];

  return (
    <div className="relative overflow-hidden rounded-[32px] border border-[var(--border-strong)] bg-[var(--surface-strong)] shadow-[0_40px_100px_-55px_rgba(0,0,0,0.92)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(63,120,255,0.28),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(70,189,255,0.2),transparent_24%),linear-gradient(135deg,#10203a_0%,#0a1524_55%,#09111c_100%)]" />
      <div className="absolute inset-y-0 right-0 w-[45%] bg-[linear-gradient(180deg,rgba(159,197,255,0.08),rgba(255,255,255,0))]" />
      <div className="absolute right-[-8%] top-[14%] h-64 w-64 rounded-full bg-cyan-400/14 blur-3xl" />
      <div className="absolute bottom-[-12%] right-[8%] h-56 w-56 rounded-full bg-blue-500/18 blur-3xl" />

      <div className="relative grid gap-8 px-6 py-8 sm:px-10 sm:py-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[#b9d4ff]">{active.eyebrow}</div>
          <h1 className="mt-5 text-4xl font-semibold tracking-[-0.03em] text-white sm:text-6xl">{active.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#dce8fb]">{active.description}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={active.href}
              className="inline-flex items-center justify-center rounded-xl border border-[#56a4ff] bg-[#2b67bd] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#24579f]"
            >
              {active.cta}
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-[rgba(184,211,248,0.28)] bg-[rgba(15,27,45,0.7)] px-5 py-3 text-sm font-semibold text-white transition hover:border-[#9ec5ff] hover:bg-[rgba(22,40,66,0.95)]"
            >
              Book Consultation
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-3">
            {slides.map((slide, index) => (
              <button
                key={slide.title}
                type="button"
                aria-label={`Show slide ${index + 1}`}
                onClick={() => setActiveIndex(index)}
                className={
                  index === activeIndex
                    ? 'h-2.5 w-10 rounded-full bg-white'
                    : 'h-2.5 w-2.5 rounded-full bg-white/35'
                }
              />
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          {slides.map((slide, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={slide.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={
                  isActive
                    ? 'rounded-3xl border border-[#75b5ff] bg-[rgba(19,34,56,0.9)] p-5 text-left shadow-[0_26px_60px_-40px_rgba(117,181,255,0.55)]'
                    : 'rounded-3xl border border-[rgba(184,211,248,0.16)] bg-[rgba(15,27,45,0.72)] p-5 text-left transition hover:border-[#75b5ff] hover:bg-[rgba(19,34,56,0.88)]'
                }
              >
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9ec5ff]">{slide.eyebrow}</div>
                <div className="mt-3 text-xl font-semibold text-white">{slide.title}</div>
                <p className="mt-3 text-sm leading-7 text-[#d5e3fb]">{slide.description}</p>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
