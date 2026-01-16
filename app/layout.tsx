import type { Metadata } from 'next';
import { Manrope, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Nav } from '@/app/components/Nav';
import { Footer } from '@/app/components/Footer';
import { site } from '@/app/lib/site';

const sans = Manrope({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const mono = JetBrains_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description: site.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${mono.variable} bg-aurora min-h-dvh text-white antialiased`}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
