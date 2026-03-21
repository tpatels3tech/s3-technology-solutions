'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { site } from '@/app/lib/site';
import { ButtonLink, Container } from '@/app/components/ui';

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[rgba(8,17,29,0.94)] backdrop-blur">
      <Container>
        <div className="flex flex-col gap-4 py-4 md:flex-row md:items-center md:justify-between">
          <Link href="/" className="flex items-center gap-3 font-semibold tracking-tight text-[var(--ink)]">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border-strong)] bg-[var(--surface-strong)] text-sm text-[var(--ink)]">
              S3
            </span>
            <span>
              <span className="block">{site.name}</span>
              <span className="block text-xs font-normal tracking-normal text-[var(--muted)]">{site.domain}</span>
            </span>
          </Link>

          <div className="flex flex-col gap-3 md:flex-row md:items-center">
            <nav className="flex flex-wrap items-center gap-1">
              {site.nav.map((item) => (
                (() => {
                  const isActive = pathname === item.href;
                  const className = isActive
                    ? 'rounded-lg border border-[#4c6f9f] bg-[var(--surface-soft)] px-4 py-2 text-sm font-medium text-[var(--ink)]'
                    : 'rounded-lg px-4 py-2 text-sm font-medium text-[var(--muted)] transition hover:bg-[var(--surface-soft)] hover:text-[var(--ink)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9fc2ff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08111d]';

                  return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={className}
                >
                  {item.label}
                </Link>
                  );
                })()
              ))}
            </nav>
            <ButtonLink href="/contact">Contact</ButtonLink>
          </div>
        </div>
      </Container>
    </header>
  );
}
