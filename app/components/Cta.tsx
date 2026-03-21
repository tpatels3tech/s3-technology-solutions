import { site } from '@/app/lib/site';
import { ButtonLink, Container, Surface } from '@/app/components/ui';

export function Cta({
  title = 'Ready to talk?',
  subtitle = 'Book a quick intro call and we’ll map the fastest path to measurable outcomes.',
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="py-14">
      <Container>
        <Surface className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-xl font-semibold text-[var(--ink)] sm:text-2xl">{title}</h3>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-[var(--muted)]">{subtitle}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href={site.contact.calendlyUrl}>Book a Strategy Call</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Contact
            </ButtonLink>
          </div>
        </Surface>
      </Container>
    </section>
  );
}
