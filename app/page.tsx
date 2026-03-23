import { site } from '@/app/lib/site';
import { ButtonLink, Container, Section, SectionHeading, Surface } from '@/app/components/ui';
import { AgenticIllustration } from '@/app/components/AgenticIllustration';
import { AgenticPulse } from '@/app/components/AgenticPulse';
import { FeatureCarousel } from '@/app/components/FeatureCarousel';
import { HeroCarousel } from '@/app/components/HeroCarousel';

export default function Home() {
  const serviceCarouselItems = site.services.map((service) => ({
    eyebrow: 'Service',
    title: service.name,
    description: service.details,
    href: `/services#${service.slug}`,
    cta: 'Explore service',
    bullets: service.outcomes.slice(0, 4),
  }));

  const frameworkCarouselItems = site.framework.map((step) => ({
    eyebrow: `Framework ${step.step}`,
    title: step.title,
    description: step.description,
    href: '/contact',
    cta: 'Talk through this stage',
    bullets:
      step.step === '01'
        ? [
            'Clarify business goals and decision context',
            'Identify the most credible AI and agentic opportunities',
            'Surface governance and stakeholder constraints',
            'Set the baseline for ROI and success measures',
          ]
        : step.step === '02'
          ? [
              'Design ownership, controls, and escalation paths',
              'Map tools, integrations, and orchestration needs',
              'Build a practical roadmap instead of a vague concept deck',
              'Connect milestones to business and operating outcomes',
            ]
          : [
              'Launch with monitoring and human oversight',
              'Measure adoption, performance, and risk signals',
              'Refine operating rhythms and governance controls',
              'Scale what works into repeatable capability',
            ],
  }));

  return (
    <>
      <Section className="pt-12 sm:pt-16">
        <Container>
          <HeroCarousel slides={site.heroSlides} />
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <SectionHeading
            eyebrow="What We Do"
            title="Capabilities organized the way consulting buyers actually explore them."
            intro="Start with the business problem, move into services and agentic offerings, then go deeper into the framework and governance model."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {site.featuredAreas.map((area) => (
              <Surface key={area.title}>
                <div className="text-base font-semibold text-[var(--ink)]">{area.title}</div>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{area.description}</p>
              </Surface>
            ))}
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <AgenticPulse />
            <AgenticIllustration />
          </div>
        </Container>
      </Section>

      <Section id="agentic-offerings">
        <Container>
          <SectionHeading
            eyebrow="Agentic AI"
            title="Offerings built around real agentic operating models."
            intro="Instead of treating agentic AI like a single feature, S3 helps clients decide where it fits, how it should be orchestrated, and what governance model should surround it."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
            <Surface className="bg-[var(--surface-strong)]">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent-strong)]">
                Why this matters
              </div>
              <div className="mt-4 text-2xl font-semibold text-[var(--ink)]">{site.tagline}</div>
              <div className="mt-6 space-y-5">
                {site.trustPoints.map((item) => (
                  <div key={item.title} className="border-t border-[var(--border)] pt-5 first:border-t-0 first:pt-0">
                    <div className="text-base font-semibold text-[var(--ink)]">{item.title}</div>
                    <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{item.description}</p>
                  </div>
                ))}
              </div>
            </Surface>

            <div className="grid gap-4 md:grid-cols-3">
              {site.agenticOfferings.map((offering) => (
                <Surface key={offering.title}>
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-strong)]">Offering</div>
                  <div className="mt-3 text-lg font-semibold text-[var(--ink)]">{offering.title}</div>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{offering.description}</p>
                </Surface>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Services"
            title="Core consulting services with a clearer path from strategy to execution."
            intro="Each service line connects strategic framing, execution planning, and governance, with direct links into the more detailed service page."
          />

          <div className="mt-10">
            <FeatureCarousel items={serviceCarouselItems} />
          </div>
        </Container>
      </Section>

      <Section id="framework">
        <Container>
          <SectionHeading
            eyebrow="Framework"
            title="A staged engagement model for AI and agentic transformation."
            intro="The flow mirrors how clients typically adopt AI: frame the opportunity, define the operating model, and launch with governance rather than improvising controls later."
          />

          <div className="mt-10">
            <FeatureCarousel items={frameworkCarouselItems} />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Why S3"
            title="Designed to feel more like a consulting engagement than a static brochure."
            intro="This final section gives buyers the confidence check they usually look for before reaching out: strategic alignment, practical execution, and governance maturity."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {site.whyS3.map((item) => (
              <Surface key={item.title}>
                <div className="text-lg font-semibold text-[var(--ink)]">{item.title}</div>
                <p className="mt-3 text-base leading-7 text-[var(--muted)]">{item.description}</p>
              </Surface>
            ))}
          </div>

          <Surface className="mt-10 flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
            <div>
              <div className="text-xl font-semibold text-[var(--ink)]">Ready to map your AI and agentic priorities?</div>
              <div className="mt-2 text-base leading-7 text-[var(--muted)]">
                Start with a short consultation and we can identify the right path across strategy, operating model, and implementation.
              </div>
            </div>
            <ButtonLink href="/contact">Book Consultation</ButtonLink>
          </Surface>
        </Container>
      </Section>
    </>
  );
}
