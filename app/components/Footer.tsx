import { site } from '@/app/lib/site';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="h-px w-full bg-gradient-to-r from-cyan-500/0 via-cyan-200/25 to-violet-500/0" />
        <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="font-semibold text-white">{site.name}</div>
            <div className="mt-1 text-sm text-white">{site.tagline}</div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm">
            <a className="text-white hover:underline" href="/services">
              Services
            </a>
            <a className="text-white hover:underline" href="/about">
              About
            </a>
            <a className="text-white hover:underline" href="/contact">
              Contact
            </a>
            <a
              className="text-white hover:underline"
              href={site.linkedInUrl}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-8 text-xs text-white">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
