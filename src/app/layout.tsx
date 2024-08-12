import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { MAIN_METADATA } from '@/config/seo';

const inter = Inter({ subsets: ['latin'] });

export const metadata = MAIN_METADATA satisfies Metadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
