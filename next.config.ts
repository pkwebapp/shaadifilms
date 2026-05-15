import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

const CANONICAL_SITE = "https://www.shaadifilms.com";

export default function nextConfig(phase: string): NextConfig {
  const isDevServer = phase === PHASE_DEVELOPMENT_SERVER;

  return {
    async redirects() {
      return [
        {
          source: "/:path*",
          has: [{ type: "host", value: "shaadifilms.com" }],
          destination: `${CANONICAL_SITE}/:path*`,
          permanent: true,
        },
        {
          source: "/:path*",
          has: [{ type: "host", value: "shaadifilms.io" }],
          destination: `${CANONICAL_SITE}/:path*`,
          permanent: true,
        },
        {
          source: "/:path*",
          has: [{ type: "host", value: "www.shaadifilms.io" }],
          destination: `${CANONICAL_SITE}/:path*`,
          permanent: true,
        },
      ];
    },
    // Keep dev and build artifacts separate to avoid .next collisions
    // when `next dev` and `next build` run at the same time.
    distDir: isDevServer ? ".next-dev" : ".next",
    eslint: {
      // Temporary: repo currently has many existing lint errors.
      // Keep lint runnable via `npm run lint`, but don't block production build.
      ignoreDuringBuilds: true,
    },
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "placehold.co",
          port: "",
          pathname: "/**",
        },
        {
          protocol: "https",
          hostname: "images.unsplash.com",
          port: "",
          pathname: "/**",
        },
        {
          protocol: "https",
          hostname: "picsum.photos",
          port: "",
          pathname: "/**",
        },
        {
          protocol: "https",
          hostname: "drive.google.com", // allow Google Drive images
          port: "",
          pathname: "/**",
        },
        {
          protocol: "https",
          hostname: "cdn.flipsnack.com",
          port: "",
          pathname: "/**",
        },
        {
          protocol: "https",
          hostname: "pkprod.s3.ap-south-1.amazonaws.com",
          port: "",
          pathname: "/**",
        },
      ],
    },
  };
}
