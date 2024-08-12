import type { Metadata } from 'next';
import './globals.css';
import { MAIN_METADATA } from '@/config/seo';
import { ThemeProvider } from '@/components/theme-provider';
import { Pretendard } from '@/config/fonts';

export const metadata = MAIN_METADATA satisfies Metadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`${Pretendard.variable} font-pretendard`}>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableColorScheme={true}
          enableSystem={true}
          disableTransitionOnChange={true}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
