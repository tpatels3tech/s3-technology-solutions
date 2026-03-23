'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { site } from '@/app/lib/site';
import { ButtonLink, Container } from '@/app/components/ui';

export function Nav() {
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const visibleGroupLabel = openGroup;
  const visibleGroup = site.navGroups.find((group) => group.label === visibleGroupLabel) ?? null;

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[rgba(7,17,29,0.94)] backdrop-blur-xl">
      <Container>
        <div className="flex flex-col gap-4 py-4">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <Link href="/" className="flex items-center gap-3 font-semibold tracking-tight text-[var(--ink)]">
              <Image src="/s3-mark.svg" alt="S3 Technology Solutions logo" width={40} height={40} className="rounded-xl" />
            </Link>

            <div className="flex flex-col gap-3 xl:items-end">
              <div className="flex flex-col gap-3 xl:flex-row xl:items-center">
                <nav className="flex flex-wrap items-center gap-2">
                  {site.navGroups.map((group) => {
                    const isOpen = visibleGroupLabel === group.label;

                    return (
                      <button
                        key={group.label}
                        type="button"
                        aria-expanded={isOpen}
                        className={
                          isOpen
                            ? 'rounded-lg border border-[#4c6f9f] bg-[var(--surface-soft)] px-4 py-2 text-sm font-medium text-[var(--ink)]'
                            : 'rounded-lg px-4 py-2 text-sm font-medium text-[var(--muted)] transition hover:bg-[var(--surface-soft)] hover:text-[var(--ink)]'
                        }
                        onClick={() =>
                          setOpenGroup((current) => {
                            if (current === group.label) {
                              return null;
                            }

                            return group.label;
                          })
                        }
                      >
                        {group.label}
                      </button>
                    );
                  })}
                </nav>

                <ButtonLink href="/contact">Book Consultation</ButtonLink>
              </div>
            </div>
          </div>

          {visibleGroup ? (
            <div className="premium-surface rounded-3xl border border-[var(--border-strong)] p-5">
              <div className="grid gap-5 lg:grid-cols-[0.82fr_1.18fr]">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent-strong)]">
                    {visibleGroup.label}
                  </div>
                  <div className="mt-3 text-xl font-semibold text-[var(--ink)]">{visibleGroup.intro}</div>
                  <div className="mt-5">
                    <Link href={visibleGroup.href} className="text-sm font-semibold text-[var(--accent-strong)] hover:text-[var(--ink)]">
                      Go to section
                    </Link>
                  </div>
                </div>

                <div className="grid gap-3 md:grid-cols-3">
                  {visibleGroup.items.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="premium-surface-soft rounded-2xl border border-[var(--border)] p-4 transition hover:border-[var(--accent-strong)] hover:bg-[var(--surface-soft)]"
                    >
                      <div className="text-base font-semibold text-[var(--ink)]">{item.title}</div>
                      <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{item.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </Container>
    </header>
  );
}
