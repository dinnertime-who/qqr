import type { Metadata } from 'next';
import './globals.css';
import { Pretendard } from '@/config/fonts';
import { getLocaleFromHeaders } from '@/config/i18n/server';
import { getI18nMetadata } from '@/config/seo';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocaleFromHeaders();
  return getI18nMetadata(locale);
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocaleFromHeaders();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${Pretendard.variable} font-pretendard`}>{children}</body>
    </html>
  );
}
