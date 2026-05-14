import { NextResponse } from 'next/server';

export function middleware(request) {
  const url = request.nextUrl.clone();

  // Jodi keu affiliate.visernic.com/webitpay te ashe...
  if (url.pathname.startsWith('/webitpay')) {
    // Eta Rizon (webitpay.vercel.app) theke sob data (CSS, JS, HTML) tene anbe
    const targetUrl = new URL(
      url.pathname + url.search, 
      'https://webitpay.vercel.app'
    );
    return NextResponse.rewrite(targetUrl);
  }
}

// Ei API proxy ta shudhu /webitpay er jonno kaj korbe
export const config = {
  matcher: ['/webitpay', '/webitpay/:path*'],
};
