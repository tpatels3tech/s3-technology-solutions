import { site } from '@/app/lib/site';
import { Container, Section, SectionHeading, Surface } from '@/app/components/ui';

export const metadata = {
  title: 'About',
};

export default function About() {
  return (
    <>
      <Section>
        <Container>
          <SectionHeading eyebrow="About" title={site.about.title} intro={site.about.intro} as="h1" />
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <div id="principles" className="grid gap-5 md:grid-cols-3">
            {site.about.principles.map((principle) => (
              <Surface key={principle.title} className="bg-[var(--surface-strong)]">
                <div className="text-xl font-semibold text-[var(--ink)]">{principle.title}</div>
                <p className="mt-3 text-base leading-7 text-[var(--muted)]">{principle.description}</p>
              </Surface>
            ))}
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            <Surface className="bg-[var(--surface-strong)]">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent-strong)]">
                Navigation flow
              </div>
              <div className="mt-4 text-2xl font-semibold text-[var(--ink)]">How this site is structured</div>
              <p className="mt-4 text-base leading-8 text-[var(--muted)]">
                Our Buyers can move from who we are, to what we do, into agentic offerings, then into services and contact.
                The structure is designed to support exploration instead of forcing everything into one flat page.
              </p>
            </Surface>

            <Surface className="bg-[var(--surface-strong)]">
              <div className="text-xl font-semibold text-[var(--ink)]">Where we can help</div>
              <ul className="mt-4 space-y-3 text-base leading-7 text-[var(--muted)]">
                {site.services.map((service) => (
                  <li key={service.slug} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[var(--accent-strong)]" />
                    <span>{service.summary}</span>
                  </li>
                ))}
              </ul>
            </Surface>
          </div>
        </Container>
      </Section>
    </>
  );
}
