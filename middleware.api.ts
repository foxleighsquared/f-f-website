import { NextRequest, NextResponse } from 'next/server';

const generateCsp = (): string => {
  const production = process.env.NODE_ENV === 'production';

  const connectSrc = [
    process.env.NEXT_PUBLIC_API_ROOT,
    process.env.NEXT_PUBLIC_API_DOMAIN,
    process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    'https://*.google-analytics.com'
  ];

  const imgSrc = [
    "'self'",
    'https://cdn.sanity.io',
    'data:'
  ];

  const styleSrc = [
    "'self'",
    "'unsafe-inline'",
    'https://fonts.googleapis.com'
  ];

  const scriptSrc = [
    "'self'",
    'https://www.googletagmanager.com'
  ];

  if (!production) {
    scriptSrc.push("'unsafe-inline'", "'unsafe-eval'");
  }

  let csp = `default-src 'self';`;
  csp += `style-src ${styleSrc.join(' ')};`;
  csp += `connect-src 'self' ${connectSrc.join(' ')} ${
    production ? '' : 'ws://localhost:3000'
  };`;
  csp += `script-src ${scriptSrc.join(' ')};`;
  csp += `script-src-elem ${scriptSrc.join(' ')};`;
  csp += `img-src ${imgSrc.join(' ')};`;
  csp += `font-src 'self' https://fonts.gstatic.com;`;
  csp += `object-src 'none';`;
  csp += `base-uri 'self';`;
  csp += `form-action 'self';`;
  csp += `frame-ancestors 'none';`;
  csp += `upgrade-insecure-requests;`;

  return csp;
};

export function middleware(request: NextRequest) {
  const cspHeader = generateCsp();

  // Replace newline characters and spaces
  const contentSecurityPolicyHeaderValue = cspHeader
    .replace(/\s{2,}/g, ' ')
    .trim();

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(
    'Content-Security-Policy',
    contentSecurityPolicyHeaderValue
  );

  const response = NextResponse.next({
    request: {
      headers: requestHeaders
    }
  });
  response.headers.set(
    'Content-Security-Policy',
    contentSecurityPolicyHeaderValue
  );

  return response;
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
  missing: [
    { type: 'header', key: 'next-router-prefetch' },
    { type: 'header', key: 'purpose', value: 'prefetch' }
  ]
};
