import { site } from '@/app/lib/site';
import { ButtonLink, Container, Section, SectionHeading, Surface } from '@/app/components/ui';
import { AgenticPulse } from '@/app/components/AgenticPulse';

export const metadata = {
  title: 'Services',
};

export default function Services() {
  return (
    <>
      <Section>
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
            <SectionHeading
              eyebrow="Services"
              title="Clear service lines built around AI strategy, agentic execution, and risk-aware delivery."
              intro="This page is intentionally straightforward. Each service explains what it is, what you get, and when it is the right fit, with additional focus on copilots, agentic workflows, governance, and operating model design."
              as="h1"
            />
            <AgenticPulse />
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <div className="mb-6 grid gap-4 md:grid-cols-3">
            {site.agenticOfferings.map((offering) => (
              <Surface key={offering.title} className="premium-surface-soft">
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent-strong)]">
                  Agentic
                </div>
                <div className="mt-3 text-lg font-semibold text-[var(--ink)]">{offering.title}</div>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{offering.description}</p>
              </Surface>
            ))}
          </div>

          <div className="grid gap-6">
            {site.services.map((service, index) => (
              <Surface key={service.slug}>
                <div id={service.slug} className="scroll-mt-28" />
                <div className="text-sm font-semibold text-[var(--accent-strong)]">Service {index + 1}</div>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--ink)] sm:text-4xl">{service.name}</h2>
                <p className="mt-4 max-w-3xl text-lg leading-8 text-[var(--muted)]">{service.details}</p>

                <div className="mt-8 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
                  <div className="premium-surface-soft rounded-[24px] border border-[var(--border)] p-6">
                    <div className="text-base font-semibold text-[var(--ink)]">What you get</div>
                    <ul className="mt-4 space-y-3 text-base leading-7 text-[var(--muted)]">
                      {service.outcomes.map((outcome) => (
                        <li key={outcome} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-[var(--accent-strong)]" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="premium-surface-soft rounded-[24px] border border-[var(--border)] p-6">
                    <div className="text-base font-semibold text-[var(--ink)]">Best for</div>
                    <p className="mt-4 text-base leading-7 text-[var(--muted)]">{service.bestFor}</p>
                  </div>
                </div>
              </Surface>
            ))}
          </div>

          <Surface className="mt-10 flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
            <div>
              <div className="text-xl font-semibold text-[var(--ink)]">Want help deciding where to start?</div>
              <div className="mt-2 text-base leading-7 text-[var(--muted)]">
                We can talk through scope, urgency, and what kind of engagement would be most useful.
              </div>
            </div>
            <ButtonLink href="/contact">Contact S3 Tech</ButtonLink>
          </Surface>
        </Container>
      </Section>
    </>
  );
}
