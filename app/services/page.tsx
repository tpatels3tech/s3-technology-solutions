import { site } from '@/app/lib/site';
import { Card, Container, Section } from '@/app/components/ui';

export const metadata = {
  title: 'Services',
};

export default function Services() {
  return (
    <>
      <Section>
        <Container>
          <h1 className="text-4xl font-semibold tracking-tight">Services</h1>
          <p className="mt-4 max-w-3xl text-white/70">
            Three focused offerings that help you prioritize AI, deliver at scale, and reduce cyber risk with clear,
            executive-ready outputs.
          </p>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <div className="grid gap-6">
            <Card>
              <div id="ai-strategy" className="scroll-mt-24" />
              <h2 className="text-2xl font-semibold">1) AI Strategy & Roadmapping</h2>
              <p className="mt-2 text-white/70">
                Move from experimentation to an enterprise-ready plan. We help leaders define a business-aligned AI
                strategy, prioritize use cases, and build a roadmap that balances value, governance, and readiness.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                  <div className="text-sm font-medium">What you get</div>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/70">
                    <li>Use-case identification and prioritization</li>
                    <li>Roadmap and investment plan (phased delivery)</li>
                    <li>Data and platform readiness assessment</li>
                    <li>Responsible AI governance and control framework</li>
                  </ul>
                </div>
                <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                  <div className="text-sm font-medium">Best for</div>
                  <p className="mt-2 text-sm text-white/70">
                    Executive teams who want a clear AI direction and a practical plan to scale beyond pilots.
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <div id="implementation" className="scroll-mt-24" />
              <h2 className="text-2xl font-semibold">2) Implementation</h2>
              <p className="mt-2 text-white/70">
                Hands-on execution across data, cloud, integration, and AI-enabled workflows. We focus on scalable,
                secure delivery with human-in-the-loop oversight where it matters.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                  <div className="text-sm font-medium">What you get</div>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/70">
                    <li>AI and data platform implementation support</li>
                    <li>Secure cloud foundations and integration patterns</li>
                    <li>Operating model with guardrails and escalation paths</li>
                    <li>Delivery leadership, metrics, and execution cadence</li>
                  </ul>
                </div>
                <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                  <div className="text-sm font-medium">Best for</div>
                  <p className="mt-2 text-sm text-white/70">
                    Teams ready to build and deploy AI-enabled capabilities with speed, quality, and governance.
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <div id="cyber-risk" className="scroll-mt-24" />
              <h2 className="text-2xl font-semibold">3) Cyber Risk Assessment</h2>
              <p className="mt-2 text-white/70">
                Executive-level assessments that translate technical risk into business impact. We focus on today’s
                realities: cloud adoption, third-party dependencies, and AI-enabled workflows.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                  <div className="text-sm font-medium">What you get</div>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/70">
                    <li>Risk posture assessment and executive readout</li>
                    <li>Third-party and AI-adjacent risk review</li>
                    <li>Compliance and control readiness (SOX, SOC, PCI, privacy)</li>
                    <li>Prioritized remediation roadmap</li>
                  </ul>
                </div>
                <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                  <div className="text-sm font-medium">Best for</div>
                  <p className="mt-2 text-sm text-white/70">
                    CIOs, CISOs, and boards needing clarity on risk, controls, and the fastest path to improvement.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 md:flex-row md:items-center">
            <div>
              <div className="text-lg font-semibold">Want to talk through scope and timing?</div>
              <div className="mt-1 text-sm text-white/70">Book a short call and we’ll map the quickest path to value.</div>
            </div>
            <a
              href={site.calendlyUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black hover:bg-white/90"
            >
              Book a Call
            </a>
          </div>
        </Container>
      </Section>
    </>
  );
}
