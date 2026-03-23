import Image from 'next/image';
import { Container, Section, SectionHeading, Surface } from '@/app/components/ui';

const options = [
  {
    name: 'Option 1',
    note: 'Balanced and readable. Best fit for a consulting brand.',
    mark: '/s3-mark.svg',
  },
  {
    name: 'Option 2',
    note: 'Softer futuristic feel with the white 3 taking the lead.',
    mark: '/s3-mark-option-2.svg',
  },
  {
    name: 'Option 3',
    note: 'Sharper geometric version with a more technical edge.',
    mark: '/s3-mark-option-3.svg',
  },
];

export const metadata = {
  title: 'Logo Lab',
};

export default function LogoLabPage() {
  return (
    <>
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Logo Lab"
            title="Three cleaner S3 directions."
            intro="These are intentionally simpler and more readable than the previous rounds. The header currently uses Option 1."
            as="h1"
          />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {options.map((option) => (
              <Surface key={option.name} className="bg-[var(--surface-strong)]">
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent-strong)]">
                  {option.name}
                </div>
                <div className="mt-5 flex items-center justify-center rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8">
                  <Image src={option.mark} alt={option.name} width={128} height={128} className="h-32 w-32" />
                </div>
                <p className="mt-5 text-sm leading-7 text-[var(--muted)]">{option.note}</p>
              </Surface>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
