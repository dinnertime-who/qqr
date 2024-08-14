'use server';
import { headers } from 'next/headers';
import Negotiator from 'negotiator';
import { match } from '@formatjs/intl-localematcher';
import { DEFAULT_LOCALE, LOCALE_HEADER_KEY, SUPPORTED_LOCALES } from './constants';

export async function getPrefferedLocale(header = headers()) {
  const acceptLanguage = header.get('accept-language');
  const languages = new Negotiator({ headers: { 'accept-language': acceptLanguage || '' } }).languages();

  return match(languages, SUPPORTED_LOCALES, DEFAULT_LOCALE) as (typeof SUPPORTED_LOCALES)[number];
}

export async function getLocaleFromPathName(pathname: string) {
  return SUPPORTED_LOCALES.find((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`);
}

export async function getLocaleFromHeaders() {
  return (headers().get(LOCALE_HEADER_KEY) || DEFAULT_LOCALE) as (typeof SUPPORTED_LOCALES)[number];
}
