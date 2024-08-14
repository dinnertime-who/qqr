export const LOCALE_HEADER_KEY = 'x-locale' as const;

export const SUPPORTED_LOCALES = ['en', 'ko'] as const;
export const DEFAULT_LOCALE = 'ko' as const;

export type I18N_Record = Record<(typeof SUPPORTED_LOCALES)[number], string>;
