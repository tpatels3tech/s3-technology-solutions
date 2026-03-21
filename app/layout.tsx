import type { Metadata } from 'next';
import './globals.css';
import { Nav } from '@/app/components/Nav';
import { Footer } from '@/app/components/Footer';
import { site } from '@/app/lib/site';

export const metadata: Metadata = {
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description: site.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-[var(--page-bg)] text-[var(--ink)] antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
