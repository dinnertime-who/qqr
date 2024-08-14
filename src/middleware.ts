import { NextResponse, type NextRequest } from 'next/server';
import { getLocaleFromPathName, getPrefferedLocale } from './config/i18n/server';
import { DEFAULT_LOCALE, LOCALE_HEADER_KEY } from './config/i18n/constants';

export async function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const { pathname, origin, href, searchParams } = request.nextUrl;

  const prefferedLocale = await getPrefferedLocale(request.headers);
  const localeFromPathname = await getLocaleFromPathName(pathname);

  if (!localeFromPathname && prefferedLocale !== DEFAULT_LOCALE) {
    return NextResponse.redirect(`${origin}/${prefferedLocale}${pathname}?${searchParams.toString()}`);
  }

  requestHeaders.set(LOCALE_HEADER_KEY, localeFromPathname || prefferedLocale);

  const response = localeFromPathname
    ? NextResponse.rewrite(href.replace(`/${localeFromPathname}`, ''), {
        request: { headers: requestHeaders },
      })
    : NextResponse.next({ request: { headers: requestHeaders } });

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
