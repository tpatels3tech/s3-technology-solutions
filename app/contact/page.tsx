import { site } from '@/app/lib/site';
import { Card, Container, Section } from '@/app/components/ui';

export const metadata = {
  title: 'Contact',
};

export default function Contact() {
  return (
    <>
      <Section>
        <Container>
          <h1 className="text-4xl font-semibold tracking-tight">Contact</h1>
          <p className="mt-4 max-w-3xl text-white/70">
            The quickest way to get started is a short strategy call. If you prefer email, reach out any time.
          </p>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <div className="text-lg font-semibold">Book a Strategy Call</div>
              <p className="mt-2 text-sm text-white/70">
                20–30 minutes to align on goals, scope, and next steps.
              </p>
              <a
                href={site.calendlyUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black hover:bg-white/90"
              >
                Open Calendly
              </a>
              <div className="mt-3 text-xs text-white/50">
                Update your Calendly link in <span className="font-mono">app/lib/site.ts</span>.
              </div>
            </Card>

            <Card>
              <div className="text-lg font-semibold">Email</div>
              <p className="mt-2 text-sm text-white/70">
                Prefer email? Send a note and we’ll respond with proposed times.
              </p>
              <a
                href={`mailto:${site.contactEmail}`}
                className="mt-5 inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white hover:bg-white/10"
              >
                {site.contactEmail}
              </a>
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
