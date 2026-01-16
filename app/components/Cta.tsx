import { site } from '@/app/lib/site';

export function Cta({
  title = 'Ready to talk?',
  subtitle = 'Book a quick intro call and we’ll map the fastest path to measurable outcomes.',
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-white sm:text-2xl">{title}</h3>
              <p className="mt-2 max-w-2xl text-sm text-white/70">{subtitle}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={site.calendlyUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black hover:bg-white/90"
              >
                Book a Strategy Call
              </a>
              <a
                href="/contact"
                className="rounded-full border border-white/20 px-5 py-2 text-sm font-medium text-white hover:bg-white/10"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
