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
          <div className="grid gap-5 md:grid-cols-3">
            {site.about.principles.map((principle) => (
              <Surface key={principle.title} className="bg-[var(--surface-strong)]">
                <div className="text-xl font-semibold text-[var(--ink)]">{principle.title}</div>
                <p className="mt-3 text-base leading-7 text-[var(--muted)]">{principle.description}</p>
              </Surface>
            ))}
          </div>

          <Surface className="mt-8 bg-[var(--surface-strong)]">
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
        </Container>
      </Section>
    </>
  );
}
