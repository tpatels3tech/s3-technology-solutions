import { site } from '@/app/lib/site';
import { Card, Container, PrimaryButton, SecondaryButton, Section } from '@/app/components/ui';

export const metadata = {
  title: 'Contact',
};

export default function Contact() {
  return (
    <>
      <Section>
        <Container>
          <div className="text-xs font-semibold tracking-[0.28em] text-white/60">CONTACT</div>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight sm:text-6xl">
            Let’s align fast—
            <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-violet-300 bg-clip-text text-transparent">
              {' '}then execute.
            </span>
          </h1>
          <p className="mt-4 max-w-3xl text-white/70">
            The quickest way to get started is a short strategy call. If you prefer email, reach out any time.
          </p>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <div className="text-xl font-semibold">Book a Strategy Call</div>
              <p className="mt-3 text-base text-white/70">
                20–30 minutes to align on goals, scope, and next steps.
              </p>
              <div className="mt-5">
                <PrimaryButton href={site.calendlyUrl}>Open Calendly</PrimaryButton>
              </div>
              <div className="mt-3 text-xs text-white/50">
                Update your Calendly link in <span className="font-mono">app/lib/site.ts</span>.
              </div>
            </Card>

            <Card>
              <div className="text-xl font-semibold">Email</div>
              <p className="mt-3 text-base text-white/70">
                Prefer email? Send a note and we’ll respond with proposed times.
              </p>
              <div className="mt-5">
                <SecondaryButton href={`mailto:${site.contactEmail}`}>{site.contactEmail}</SecondaryButton>
              </div>
              <div className="mt-3 text-xs text-white/50">
                Update your email in <span className="font-mono">app/lib/site.ts</span>.
              </div>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
}
