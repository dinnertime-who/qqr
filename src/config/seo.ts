import type { Metadata } from 'next';
import { serverEnv } from './env';

export const APPLICATION_NAME = 'QQR';

export const SEO_TITLE = `스마트한 QR코드 생성기 - ${APPLICATION_NAME}`;

export const SEO_DESCRIPTION = `온라인과 오프라인을 연결하는 스마트한 웹 링크 관리의 시작,
  QQR에서 URL 단축과 QR코드 생성, 애널리틱스까지. 지금 무료로 체험해보세요!!`;

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

export const MAIN_METADATA: Metadata = {
  title: {
    default: SEO_TITLE,
    template: `%s | ${SEO_TITLE}`,
  },
  description: SEO_DESCRIPTION,
  keywords: SEO_KEYWORDS,
  metadataBase: new URL(serverEnv.WEB_URL),
  authors: [{ name: 'dinnertime-who', url: 'https://github.com/dinnertime-who/qqr' }],
  applicationName: APPLICATION_NAME,
  manifest: `/manifest.json`,
};
