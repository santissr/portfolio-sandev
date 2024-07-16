import {type NextRequest, NextResponse} from 'next/server';
import Negotiator from 'negotiator';
import {match} from '@formatjs/intl-localematcher';
import {headers} from 'next/headers';

const locales = ['en', 'es'];
const defaultLocale = 'en';

function getLocale(request: NextRequest): string {
    const negotiatorHeaders: Record<string, string> = {};
    request.headers.forEach((value, key) => {
        negotiatorHeaders[key] = value;
    });

    const negotiator = new Negotiator({headers: negotiatorHeaders});
    const languages = negotiator.languages();
    return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest): NextResponse<unknown> {
    const {pathname} = request.nextUrl;

    if (pathname.startsWith('/_next')) {
        request.nextUrl.pathname = `/en/`;
        return NextResponse.redirect(request.nextUrl);
        // return new NextResponse(null, { status: 404 });
    }

    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
    );

    if (pathnameHasLocale) {
        const headersM = headers();
        console.log(headersM.get('next-url'));
        return NextResponse.next();
    }

    const locale = getLocale(request);
    request.nextUrl.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
}

export const config = {
    matcher: ['/((?!_next).*)'],
};
