import Script from "next/script";
import type { Metadata } from "next";
import { CANONICAL_SITE_URL } from "@/lib/site";
import { cn } from "@/lib/utils";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || CANONICAL_SITE_URL;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Shaadifilms" }],
  publisher: "Shaadifilms",
  title: {
    default: "Shaadifilms | Goa Wedding Photography & Videography",
    template: "%s | Shaadifilms",
  },
  description:
    "Luxury wedding photography and cinematic videography based in Morjim, Goa. Shaadifilms specializes in capturing Indian weddings with a timeless, storytelling approach.",
  keywords: [
    "wedding photography Goa",
    "Indian wedding photographer",
    "cinematic wedding films",
    "Morjim photographer",
    "luxury wedding services",
    "Shaadifilms",
    "best wedding photographer in Goa",
  ],
  openGraph: {
    title: "Shaadifilms | Goa Wedding Photography & Videography",
    description:
      "Luxury wedding photography and cinematic videography based in Morjim, Goa.",
    url: siteUrl,
    siteName: "Shaadifilms",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shaadifilms | Goa Wedding Photography & Videography",
    description:
      "Luxury wedding photography and cinematic videography based in Morjim, Goa.",
    images: [`${siteUrl}/og-image.jpg`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Poppins:wght@300;400;600&display=swap"
          rel="stylesheet"
        />

        {/* Google Tag - gtag.js */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-V27ENPZVGJ`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-V27ENPZVGJ');`}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "PhotographyBusiness",
              name: "Shaadifilms",
              image: `${siteUrl}/logo.png`,
              url: siteUrl,
              telephone: "+918188881165",
              address: {
                "@type": "PostalAddress",
                streetAddress: "House No, 1053 A, Madhlavaddo, Morjim",
                addressLocality: "Goa",
                postalCode: "403512",
                addressCountry: "IN",
              },
            }),
          }}
        />
      </head>
      <body className={cn("min-h-screen bg-background font-body antialiased")}>
        {/* ✅ Floating WhatsApp Button */}
        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/8188881165?text=Hi%20Prabhakar%20I%20am%20interested%20in%20your%20wedding%20services%20at%20Shaadifilms"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full hover:scale-110 transition-transform"
        >
          <img
            src="/whatsapp.webp"
            alt="WhatsApp"
            className="w-full h-full object-contain"
          />
        </a>

        {children}
      </body>
    </html>
  );
}
