import { site } from '@/app/lib/site';
import { ButtonLink, Container, Section, SectionHeading, Surface } from '@/app/components/ui';

export const metadata = {
  title: 'Contact',
};

export default function Contact() {
  return (
    <>
      <Section>
        <Container>
          <SectionHeading eyebrow="Contact" title={site.contactPage.title} intro={site.contactPage.intro} as="h1" />
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            <Surface className="bg-[var(--surface-strong)]">
              <div className="text-xl font-semibold text-[var(--ink)]">Booking</div>
              <p className="mt-3 text-base leading-7 text-[var(--muted)]">
                A short conversation is the fastest way to align on what you are working through and what kind of support would help.
              </p>
              <div className="mt-6">
                <ButtonLink href={site.contact.calendlyUrl}>Book Consultation</ButtonLink>
              </div>
            </Surface>

            <Surface className="bg-[var(--surface-strong)]">
              <div className="text-xl font-semibold text-[var(--ink)]">Send an email</div>
              <p className="mt-3 text-base leading-7 text-[var(--muted)]">
                Prefer email first? Reach out with a little context and we can respond with suggested next steps.
              </p>
              <div className="mt-6">
                <ButtonLink href={`mailto:${site.contact.email}`} variant="secondary">
                  Contact Us
                </ButtonLink>
              </div>
            </Surface>
          </div>
        </Container>
      </Section>
    </>
  );
}
