import { site } from '@/app/lib/site';
import { Card, Container, PrimaryButton, Section } from '@/app/components/ui';

export const metadata = {
  title: 'Services',
};

export default function Services() {
  return (
    <>
      <Section>
        <Container>
          <div className="text-xs font-semibold tracking-[0.28em] text-white/60">SERVICES</div>
          <h1 className="mt-5 text-5xl font-semibold tracking-tight sm:text-6xl">
            Built for speed.
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-violet-300 bg-clip-text text-transparent">
              Designed for trust.
            </span>
          </h1>
          <p className="mt-4 max-w-3xl text-base text-white/70 sm:text-lg">
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
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">1) AI Strategy & Roadmapping</h2>
              <p className="mt-3 text-base text-white/70 sm:text-lg">
                Move from experimentation to an enterprise-ready plan. We help leaders define a business-aligned AI
                strategy, prioritize use cases, and build a roadmap that balances value, governance, and readiness.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl shadow-[0_18px_55px_-40px_rgba(0,0,0,0.8)]">
                  <div className="text-base font-semibold">What you get</div>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-base text-white/70">
                    <li>Use-case identification and prioritization</li>
                    <li>Roadmap and investment plan (phased delivery)</li>
                    <li>Data and platform readiness assessment</li>
                    <li>Responsible AI governance and control framework</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl shadow-[0_18px_55px_-40px_rgba(0,0,0,0.8)]">
                  <div className="text-base font-semibold">Best for</div>
                  <p className="mt-3 text-base text-white/70">
                    Executive teams who want a clear AI direction and a practical plan to scale beyond pilots.
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <div id="implementation" className="scroll-mt-24" />
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">2) Implementation</h2>
              <p className="mt-3 text-base text-white/70 sm:text-lg">
                Hands-on execution across data, cloud, integration, and AI-enabled workflows. We focus on scalable,
                secure delivery with human-in-the-loop oversight where it matters.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl shadow-[0_18px_55px_-40px_rgba(0,0,0,0.8)]">
                  <div className="text-base font-semibold">What you get</div>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-base text-white/70">
                    <li>AI and data platform implementation support</li>
                    <li>Secure cloud foundations and integration patterns</li>
                    <li>Operating model with guardrails and escalation paths</li>
                    <li>Delivery leadership, metrics, and execution cadence</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl shadow-[0_18px_55px_-40px_rgba(0,0,0,0.8)]">
                  <div className="text-base font-semibold">Best for</div>
                  <p className="mt-3 text-base text-white/70">
                    Teams ready to build and deploy AI-enabled capabilities with speed, quality, and governance.
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <div id="cyber-risk" className="scroll-mt-24" />
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">3) Cyber Risk Assessment</h2>
              <p className="mt-3 text-base text-white/70 sm:text-lg">
                Executive-level assessments that translate technical risk into business impact. We focus on today’s
                realities: cloud adoption, third-party dependencies, and AI-enabled workflows.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl shadow-[0_18px_55px_-40px_rgba(0,0,0,0.8)]">
                  <div className="text-base font-semibold">What you get</div>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-base text-white/70">
                    <li>Risk posture assessment and executive readout</li>
                    <li>Third-party and AI-adjacent risk review</li>
                    <li>Compliance and control readiness (SOX, SOC, PCI, privacy)</li>
                    <li>Prioritized remediation roadmap</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl shadow-[0_18px_55px_-40px_rgba(0,0,0,0.8)]">
                  <div className="text-base font-semibold">Best for</div>
                  <p className="mt-3 text-base text-white/70">
                    CIOs, CISOs, and boards needing clarity on risk, controls, and the fastest path to improvement.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl md:flex-row md:items-center">
            <div>
              <div className="text-xl font-semibold">Want to talk through scope and timing?</div>
              <div className="mt-1 text-base text-white/70">Book a short call and we’ll map the quickest path to value.</div>
            </div>
            <PrimaryButton href={site.calendlyUrl}>Book a Call</PrimaryButton>
          </div>
        </Container>
      </Section>
    </>
  );
}
