import { site } from '@/app/lib/site';
import { Container } from '@/app/components/ui';

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[rgba(5,11,21,0.72)]">
      <Container>
        <div className="flex flex-col gap-8 py-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="font-semibold text-[var(--ink)]">{site.name}</div>
            <div className="mt-2 max-w-md text-sm leading-6 text-[var(--muted)]">{site.description}</div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--muted-strong)]">
            {site.nav.map((item) => (
              <a key={item.href} className="hover:text-[var(--ink)] hover:underline" href={item.href}>
                {item.label}
              </a>
            ))}
            <a
              className="hover:text-[var(--ink)] hover:underline"
              href={site.contact.linkedInUrl}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="border-t border-[var(--border)] py-5 text-xs text-[var(--muted)]">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
