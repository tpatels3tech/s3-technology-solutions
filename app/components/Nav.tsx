import Link from 'next/link';
import { site } from '@/app/lib/site';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-white/[0.04] backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight text-white">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
            <span className="text-sm font-semibold">S3</span>
          </span>
          <span className="hidden sm:inline">{site.name}</span>
        </Link>
        <nav className="flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={site.calendlyUrl}
            target="_blank"
            rel="noreferrer"
            className="ml-2 rounded-full bg-gradient-to-r from-cyan-300 via-sky-200 to-violet-300 px-5 py-2.5 text-sm font-semibold text-black shadow-[0_12px_30px_-18px_rgba(34,211,238,0.55)] hover:brightness-95"
          >
            Book a Call
          </a>
        </nav>
      </div>
    </header>
  );
}
