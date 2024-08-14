import { I18N_SEO_DESCRIPTION, I18N_SEO_TITLE } from '@/config/seo';
import { QrGeneratorInput } from './_components/qr-generator-input';
import { ExperienceButtons } from './_components/experience-buttons';
import { FreeQrGenerateContextContextProvider } from './_contexts/free-qr-generate.context';
import { getLocaleFromHeaders } from '@/config/i18n/server';
import type { I18N_Record } from '@/config/i18n/constants';

export const runtime = 'edge';

const I18N_LINK_TEXT: I18N_Record = {
  ko: '로그인 하고 더 많은 기능 사용하기',
  en: 'Log in and use more features',
};

const I18N_BUTTON_TEXT: I18N_Record = {
  ko: '무료로 시작하기',
  en: 'Get started for free',
};

export default async function Home() {
  const locale = await getLocaleFromHeaders();

  return (
    <section className="@container w-screen px-4 lg:px-8 h-svh flex flex-col justify-center items-center bg-gradient-to-tr from-10% from-background to-primary">
      <h1 className="text-center break-keep text-4xl @lg:text-5xl @3xl:text-6xl font-semibold mb-4">
        {I18N_SEO_TITLE[locale]}
      </h1>
      <h2 className="text-center text-base @lg:text-xl @3xl:text-2xl max-w-screen-md break-keep text-balance">
        {I18N_SEO_DESCRIPTION[locale]}
      </h2>

      <FreeQrGenerateContextContextProvider>
        <QrGeneratorInput className="mt-8 @lg:mt-12 max-w-screen-md" />
        <ExperienceButtons
          i18n={{ LINK: I18N_LINK_TEXT[locale], BUTTON: I18N_BUTTON_TEXT[locale] }}
          className="mt-8 @lg:mt-12 max-w-screen-md"
        />
      </FreeQrGenerateContextContextProvider>
    </section>
  );
}
