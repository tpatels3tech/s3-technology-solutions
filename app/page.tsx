import Link from 'next/link';
import { site } from '@/app/lib/site';
import { Badge, Card, Container, PrimaryButton, SecondaryButton, Section } from '@/app/components/ui';
import { ArrowRight, ShieldCheck, Sparkles, Workflow } from 'lucide-react';

const credibility = [
  {
    icon: Workflow,
    title: 'Business-aligned outcomes',
    desc: 'Roadmaps tied to ROI, measurable KPIs, and executive priorities.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure by design',
    desc: 'Governance and risk controls integrated from day one.',
  },
  {
    icon: Sparkles,
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
        <div className="pointer-events-none absolute inset-0">
          <div className="floaty absolute -top-28 left-12 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="floaty absolute -top-40 right-0 h-96 w-96 rounded-full bg-violet-400/10 blur-3xl" />
          <div className="absolute -bottom-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-sky-400/10 blur-3xl" />
        </div>

        <Section className="pb-12 pt-20">
          <Container>
            <div className="flex flex-col gap-10">
              <div className="max-w-3xl">
                <div className="text-xs font-semibold tracking-[0.28em] text-slate-300">WELCOME TO S3 TECHNOLOGY SOLUTIONS</div>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge>AI Strategy</Badge>
                  <Badge>Implementation</Badge>
                  <Badge>Cyber Risk</Badge>
                </div>

                <h1 className="mt-7 text-5xl font-semibold tracking-tight sm:text-7xl">
                  Secure AI.
                  <br />
                  <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-violet-300 bg-clip-text text-transparent">
                    Modernize platforms.
                  </span>
                  <br />
                  Deliver measurable outcomes.
                </h1>
                <p className="mt-5 text-xl text-slate-200 sm:text-2xl">{site.tagline}</p>
                <p className="mt-4 text-base text-slate-200 sm:text-lg">
                  We help enterprises move from AI ambition to real-world impact—aligning strategy, execution, and risk
                  management to deliver scalable, trusted results.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <PrimaryButton href={site.calendlyUrl}>Book a Strategy Call</PrimaryButton>
                  <SecondaryButton href="/services">View Services</SecondaryButton>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  {credibility.map((c) => (
                    <div
                      key={c.title}
                      className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl shadow-[0_20px_60px_-40px_rgba(0,0,0,0.8)]"
                    >
                      <div className="flex items-center gap-2 text-sm font-semibold">
                        <c.icon className="h-4 w-4 text-cyan-200" />
                        {c.title}
                      </div>
                      <div className="mt-1 text-sm text-slate-200">{c.desc}</div>
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
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Core services</h2>
          <p className="mt-3 max-w-2xl text-slate-200 sm:text-lg">
            Simple, focused offerings that help you plan, execute, and manage risk—without slowing down delivery.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {services.map((s) => (
              <Card key={s.title}>
                <div className="text-lg font-semibold">{s.title}</div>
                <p className="mt-2 text-sm text-slate-200">{s.desc}</p>
                <div className="mt-5">
                  <Link
                    href={s.href}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
                  >
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">How we work</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {steps.map((step) => (
              <Card key={step.n}>
                <div className="text-xs font-semibold text-slate-300">{step.n}</div>
                <div className="mt-2 text-xl font-semibold">{step.title}</div>
                <p className="mt-2 text-sm text-slate-200">{step.desc}</p>
              </Card>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl shadow-[0_28px_90px_-55px_rgba(0,0,0,0.85)] md:flex-row md:items-center">
            <div>
              <div className="text-xl font-semibold">Ready to move fast—with governance and confidence?</div>
              <div className="mt-1 text-sm text-slate-200">
                Book a short call to align on goals, scope, and next steps.
              </div>
            </div>
            <PrimaryButton href={site.calendlyUrl}>Book a Call</PrimaryButton>
          </div>
        </Container>
      </Section>
    </>
  );
}
