import type { Metadata } from 'next';
import { serverEnv } from './env';
import type { I18N_Record, SUPPORTED_LOCALES } from './i18n/constants';

export const APPLICATION_NAME = 'SQR';

export const I18N_SEO_TITLE: I18N_Record = {
  ko: `스마트한 QR코드 생성기 - ${APPLICATION_NAME}`,
  en: `Smart QR code generator - ${APPLICATION_NAME}`,
};

export const I18N_SEO_DESCRIPTION: I18N_Record = {
  ko: `온라인과 오프라인을 연결하는 스마트한 웹 링크 관리의 시작,
  ${APPLICATION_NAME}에서 URL 단축과 QR코드 생성, 애널리틱스까지. 지금 무료로 체험해보세요!!`,
  en: `The beginning of smart web link management that connects online and offline,
  From ${APPLICATION_NAME} to URL shortening, QR code creation, and analytics. Try it for free now!!`,
};

export const SEO_KEYWORDS = [
  APPLICATION_NAME,
  'URL 단축',
  'QR코드 생성',
  '링크 단축 서비스',
  '무료 QR코드',
  'URL 축소기',
  '애널리틱스 도구',
  '스마트 URL 관리',
  '온라인 마케팅 도구',
  'QR코드 제작',
  'URL 관리 플랫폼',
];

export const DEFAULT_METADATA: Metadata = {
  keywords: SEO_KEYWORDS,
  metadataBase: new URL(serverEnv.WEB_URL),
  alternates: {
    canonical: '/',
    languages: {
      en: '/en',
    },
  },
  authors: [{ name: 'dinnertime-who', url: 'https://github.com/dinnertime-who/qqr' }],
  applicationName: APPLICATION_NAME,
  manifest: `/manifest.json`,
};

export function getI18nMetadata(locale: (typeof SUPPORTED_LOCALES)[number]) {
  return {
    title: {
      default: I18N_SEO_TITLE[locale],
      template: `%s | ${I18N_SEO_TITLE[locale]}`,
    },
    description: I18N_SEO_DESCRIPTION[locale],
    ...DEFAULT_METADATA,
  };
}
