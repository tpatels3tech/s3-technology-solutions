import { Card, Container, Section } from '@/app/components/ui';

export const metadata = {
  title: 'About',
};

export default function About() {
  return (
    <>
      <Section>
        <Container>
          <div className="text-xs font-semibold tracking-[0.28em] text-white">ABOUT</div>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
            Business-led.
            <br />
            <span className="text-white">Controls-forward.</span>
          </h1>
          <div className="mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-300 via-sky-200 to-violet-300" />
          <p className="mt-4 max-w-3xl text-white">
            S3 Technology Solutions helps organizations turn AI and digital transformation into measurable outcomes—while keeping governance, security, and risk in view.
          </p>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <div className="text-xl font-semibold">Our approach</div>
              <p className="mt-2 text-base text-white">
                Start with clear business priorities, validate assumptions early, and scale what works with disciplined execution.
              </p>
            </Card>
            <Card>
              <div className="text-xl font-semibold">How we deliver</div>
              <p className="mt-2 text-base text-white">
                Practical roadmaps, hands-on implementation support, and executive-ready communication to align teams and stakeholders.
              </p>
            </Card>
            <Card>
              <div className="text-xl font-semibold">How we manage risk</div>
              <p className="mt-2 text-base text-white">
                Controls, auditability, and human-in-the-loop guardrails where decisions have material business, legal, or regulatory impact.
              </p>
            </Card>
          </div>

          <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] p-7">
            <div className="text-xl font-semibold">Where we can help</div>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-base text-white">
              <li>Translate AI strategy into a phased roadmap with clear ownership and KPIs</li>
              <li>Implement scalable data, cloud, and integration foundations for AI-enabled workflows</li>
              <li>Assess cyber risk, third-party dependencies, and compliance readiness</li>
            </ul>
          </div>
        </Container>
      </Section>
    </>
  );
}
