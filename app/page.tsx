import Link from 'next/link';
import { site } from '@/app/lib/site';
import { Badge, Card, Container, Section } from '@/app/components/ui';

const credibility = [
  {
    title: 'Business-aligned outcomes',
    desc: 'Roadmaps tied to ROI, measurable KPIs, and executive priorities.',
  },
  {
    title: 'Secure by design',
    desc: 'Governance and risk controls integrated from day one.',
  },
  {
    title: 'Enterprise-ready delivery',
    desc: 'Pragmatic implementation support that scales across teams and systems.',
  },
];

const services = [
  {
    title: 'AI Strategy & Roadmapping',
    desc: 'Define a clear AI strategy, prioritize use cases, and build a roadmap that balances value, governance, and readiness.',
    href: '/services#ai-strategy',
  },
  {
    title: 'Implementation',
    desc: 'Hands-on execution across data, cloud, integration, and AI-enabled workflows—designed to scale with human oversight.',
    href: '/services#implementation',
  },
  {
    title: 'Cyber Risk Assessment',
    desc: 'Executive-level risk assessments translating technical gaps into business impact, with a prioritized remediation roadmap.',
    href: '/services#cyber-risk',
  },
];

const steps = [
  {
    n: '01',
    title: 'Assess',
    desc: 'Clarify goals, constraints, data readiness, and risk posture.',
  },
  {
    n: '02',
    title: 'Design',
    desc: 'Create an executable roadmap and control framework aligned to outcomes.',
  },
  {
    n: '03',
    title: 'Deliver',
    desc: 'Implement with speed, governance, and measurable progress.',
  },
];

export default function Home() {
  return (
    <>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        </div>

        <Section className="pb-10 pt-16">
          <Container>
            <div className="flex flex-col gap-10">
              <div className="max-w-3xl">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge>AI Strategy</Badge>
                  <Badge>Implementation</Badge>
                  <Badge>Cyber Risk</Badge>
                </div>

                <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">{site.name}</h1>
                <p className="mt-4 text-lg text-white/70 sm:text-xl">{site.tagline}</p>
                <p className="mt-4 text-white/70">
                  We help enterprises move from AI ambition to real-world impact—aligning strategy, execution, and risk
                  management to deliver scalable, trusted results.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={site.calendlyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black hover:bg-white/90"
                  >
                    Book a Strategy Call
                  </a>
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white hover:bg-white/10"
                  >
                    View Services
                  </Link>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {credibility.map((c) => (
                    <div key={c.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="text-sm font-medium">{c.title}</div>
                      <div className="mt-1 text-sm text-white/70">{c.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </Section>
      </div>

      <Section className="pt-0">
        <Container>
          <h2 className="text-2xl font-semibold tracking-tight">Core services</h2>
          <p className="mt-2 max-w-2xl text-white/70">
            Simple, focused offerings that help you plan, execute, and manage risk—without slowing down delivery.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {services.map((s) => (
              <Card key={s.title}>
                <div className="text-lg font-semibold">{s.title}</div>
                <p className="mt-2 text-sm text-white/70">{s.desc}</p>
                <div className="mt-5">
                  <Link
                    href={s.href}
                    className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
                  >
                    Learn more
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-2xl font-semibold tracking-tight">How we work</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {steps.map((step) => (
              <Card key={step.n}>
                <div className="text-xs font-semibold text-white/60">{step.n}</div>
                <div className="mt-2 text-lg font-semibold">{step.title}</div>
                <p className="mt-2 text-sm text-white/70">{step.desc}</p>
              </Card>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 md:flex-row md:items-center">
            <div>
              <div className="text-lg font-semibold">Ready to move fast—with governance and confidence?</div>
              <div className="mt-1 text-sm text-white/70">
                Book a short call to align on goals, scope, and next steps.
              </div>
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
