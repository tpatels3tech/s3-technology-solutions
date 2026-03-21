import { site } from '@/app/lib/site';
import { ButtonLink, Container, Eyebrow, Section, SectionHeading, Surface } from '@/app/components/ui';
import { AgenticIllustration } from '@/app/components/AgenticIllustration';
import { AgenticPulse } from '@/app/components/AgenticPulse';

export default function Home() {
  return (
    <>
      <Section className="pt-12 sm:pt-16">
        <Container>
          <Surface className="px-6 py-8 sm:px-10 sm:py-12">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
              <div className="max-w-3xl">
                <Eyebrow>{site.home.eyebrow}</Eyebrow>
                <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-[var(--ink)] sm:text-6xl">
                  {site.home.title}
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
                  {site.home.intro}
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href={site.home.primaryCta.href}>{site.home.primaryCta.label}</ButtonLink>
                  <ButtonLink href={site.home.secondaryCta.href} variant="secondary">
                    {site.home.secondaryCta.label}
                  </ButtonLink>
                </div>

                <ul className="mt-10 grid gap-3 text-sm leading-7 text-[var(--muted-strong)] sm:grid-cols-3">
                  {site.home.supportingPoints.map((point) => (
                    <li key={point} className="rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-4 text-[var(--ink)]">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid gap-5">
                <AgenticPulse />
                <AgenticIllustration />
              </div>
            </div>
          </Surface>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <Surface className="bg-[var(--surface-strong)]">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent-strong)]">
                  Agentic offerings
                </div>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--ink)]">
                  Advisory and delivery built for copilots, agents, and governed automation.
                </h2>
                <p className="mt-4 text-base leading-8 text-[var(--muted)]">
                  We help teams think beyond generic AI pilots and design the operating model, controls, and execution
                  rhythm needed for real agentic systems.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {site.agenticOfferings.map((offering) => (
                  <div key={offering.title} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
                    <div className="text-base font-semibold text-[var(--ink)]">{offering.title}</div>
                    <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{offering.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </Surface>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Services"
            title="Focused offerings for AI, agentic workflows, and governed execution."
            intro="Each service is designed to answer a common leadership need: where to focus, how to move forward, how to deploy agentic capabilities responsibly, and how to manage risk while doing it."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {site.services.map((service) => (
              <Surface key={service.slug}>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-strong)]">Service</div>
                <div className="mt-3 text-xl font-semibold text-[var(--ink)]">{service.name}</div>
                <p className="mt-3 text-base leading-7 text-[var(--muted)]">{service.summary}</p>
                <div className="mt-6">
                  <ButtonLink href={`/services#${service.slug}`} variant="secondary">
                    Learn more
                  </ButtonLink>
                </div>
              </Surface>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="How we work"
            title="A simple process designed to keep work moving."
            intro="The approach stays intentionally lightweight: understand the situation, identify the right AI and agentic opportunities, and support delivery with the right amount of structure."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {site.process.map((step) => (
              <Surface key={step.step}>
                <div className="text-sm font-semibold text-[var(--accent-strong)]">{step.step}</div>
                <div className="mt-3 text-xl font-semibold text-[var(--ink)]">{step.title}</div>
                <p className="mt-3 text-base leading-7 text-[var(--muted)]">{step.description}</p>
              </Surface>
            ))}
          </div>

          <Surface className="mt-10 flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
            <div>
              <div className="text-xl font-semibold text-[var(--ink)]">Need a clearer next step?</div>
              <div className="mt-2 text-base leading-7 text-[var(--muted)]">
                Start with a short conversation and we can figure out whether strategy, delivery support, or risk review is the best fit.
              </div>
            </div>
            <ButtonLink href="/contact">Get in touch</ButtonLink>
          </Surface>
        </Container>
      </Section>
    </>
  );
}
