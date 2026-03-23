import { site } from '@/app/lib/site';
import { Container } from '@/app/components/ui';

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[rgba(7,17,29,0.88)] backdrop-blur">
      <Container>
        <div className="grid gap-8 py-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <div className="font-semibold text-[var(--ink)]">{site.name}</div>
            <div className="mt-2 max-w-md text-sm leading-6 text-[var(--muted)]">{site.description}</div>
          </div>

          <div className="grid gap-5 md:grid-cols-4">
            {site.navGroups.map((group) => (
              <div key={group.label}>
                <div className="text-sm font-semibold text-[var(--ink)]">{group.label}</div>
                <div className="mt-3 grid gap-2 text-sm text-[var(--muted-strong)]">
                  {group.items.map((item) => (
                    <a key={item.title} className="hover:text-[var(--ink)] hover:underline" href={item.href}>
                      {item.title}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-[var(--border)] py-5 text-xs text-[var(--muted)]">
          © {new Date().getFullYear()} {site.name}. All rights reserved. <a className="hover:text-[var(--ink)] hover:underline" href={site.contact.linkedInUrl} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </Container>
    </footer>
  );
}
