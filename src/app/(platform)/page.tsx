import { SEO_DESCRIPTION, SEO_TITLE } from '@/config/seo';
import { QrGeneratorInput } from './_components/qr-generator-input';
import { ExperienceButtons } from './_components/experience-buttons';
import { FreeQrGenerateContextContextProvider } from './_contexts/free-qr-generate.context';

export const runtime = 'edge';

export default function Home() {
  return (
    <section className="@container w-screen px-4 lg:px-8 h-svh flex flex-col justify-center items-center bg-gradient-to-tr from-10% from-background to-primary">
      <h1 className="text-center text-3xl @lg:text-5xl @3xl:text-6xl font-semibold mb-4">{SEO_TITLE}</h1>
      <h2 className="text-center text-base @lg:text-xl @3xl:text-2xl max-w-screen-md break-keep text-balance">
        {SEO_DESCRIPTION}
      </h2>

      <FreeQrGenerateContextContextProvider>
        <QrGeneratorInput className="mt-8 @lg:mt-12 max-w-screen-md" />
        <ExperienceButtons className="mt-8 @lg:mt-12 max-w-screen-md" />
      </FreeQrGenerateContextContextProvider>
    </section>
  );
}
