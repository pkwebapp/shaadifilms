import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  ALTERNATE_HOSTS,
  CANONICAL_HOST,
  CANONICAL_SITE_URL,
} from "@/lib/site";

function shouldSkipRedirect(host: string): boolean {
  return (
    host === "localhost" ||
    host === "127.0.0.1" ||
    host.endsWith(".vercel.app") ||
    host.endsWith(".local")
  );
}

function isKnownProductionHost(host: string): boolean {
  return host === CANONICAL_HOST || ALTERNATE_HOSTS.has(host);
}

export function middleware(request: NextRequest) {
  const host =
    request.headers.get("x-forwarded-host")?.split(":")[0] ??
    request.headers.get("host")?.split(":")[0] ??
    "";

  if (!host || shouldSkipRedirect(host) || !isKnownProductionHost(host)) {
    return NextResponse.next();
  }

  const proto = request.headers.get("x-forwarded-proto");
  const isHttps = proto === "https" || request.nextUrl.protocol === "https:";
  const isCanonicalHost = host === CANONICAL_HOST;

  if (isCanonicalHost && isHttps) {
    return NextResponse.next();
  }

  const destination = new URL(
    `${request.nextUrl.pathname}${request.nextUrl.search}`,
    CANONICAL_SITE_URL,
  );

  return NextResponse.redirect(destination, 308);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff2?|ttf|eot)$).*)",
  ],
};
