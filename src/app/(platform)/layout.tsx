import { PlatformHeader } from './_components/platform-header';

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <PlatformHeader />
      <main>{children}</main>
    </section>
  );
}
