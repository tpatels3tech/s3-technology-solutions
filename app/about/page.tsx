import { Card, Container, Section } from '@/app/components/ui';

export const metadata = {
  title: 'About',
};

export default function About() {
  return (
    <>
      <Section>
        <Container>
          <h1 className="text-4xl font-semibold tracking-tight">About</h1>
          <p className="mt-4 max-w-3xl text-white/70">
            S3 Technology Solutions helps organizations turn AI and digital transformation into measurable outcomes—while keeping governance, security, and risk in view.
          </p>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <div className="text-lg font-semibold">Our approach</div>
              <p className="mt-2 text-sm text-white/70">
                Start with clear business priorities, validate assumptions early, and scale what works with disciplined execution.
              </p>
            </Card>
            <Card>
              <div className="text-lg font-semibold">How we deliver</div>
              <p className="mt-2 text-sm text-white/70">
                Practical roadmaps, hands-on implementation support, and executive-ready communication to align teams and stakeholders.
              </p>
            </Card>
            <Card>
              <div className="text-lg font-semibold">How we manage risk</div>
              <p className="mt-2 text-sm text-white/70">
                Controls, auditability, and human-in-the-loop guardrails where decisions have material business, legal, or regulatory impact.
              </p>
            </Card>
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-lg font-semibold">Where we can help</div>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-white/70">
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
