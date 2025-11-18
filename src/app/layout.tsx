import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://shaadifilms.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Shaadifilms | Mumbai Wedding Photography & Videography",
    template: "%s | Shaadifilms",
  },
  description:
    "Luxury wedding photography and cinematic videography based in Andheri West, Mumbai. Shaadifilms specializes in capturing Indian weddings with a timeless, storytelling approach.",
  keywords: [
    "wedding photography Mumbai",
    "Indian wedding photographer",
    "cinematic wedding films",
    "Andheri West photographer",
    "luxury wedding services",
    "Shaadifilms",
    "best wedding photographer in Mumbai",
  ],
  openGraph: {
    title: "Shaadifilms | Mumbai Wedding Photography & Videography",
    description:
      "Luxury wedding photography and cinematic videography based in Andheri West, Mumbai.",
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
    title: "Shaadifilms | Mumbai Wedding Photography & Videography",
    description:
      "Luxury wedding photography and cinematic videography based in Andheri West, Mumbai.",
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
      </head>
      <body
        className={cn("min-h-screen bg-background font-body antialiased")}
      >
        {/* ✅ Floating WhatsApp Button */}
        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/8188881905?text=Hi%20Aman%20I%20am%20interested%20in%20your%20wedding%20services%20at%20Shaadifilms"
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