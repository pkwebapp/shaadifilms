import Seo from "@/components/common/Seo";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Toaster } from "@/components/ui/toaster";
import WhatsAppChat from "@/components/whatsapp/WhatsAppChat";
import { CANONICAL_SITE_URL } from "@/lib/site";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Add default SEO here */}
<Seo
  title="Shaadifilms - Wedding Photography & Videography in Goa"
  description="Luxury wedding photography and cinematic videography in Morjim, Goa. Shaadifilms captures Indian weddings."
  image="/images/seo/homepage-og.jpg"
  url={CANONICAL_SITE_URL}
  keywords="Wedding Photography Goa, Wedding Videography Goa, Shaadifilms, Cinematic Wedding Films, Pre-wedding shoots"
  canonical={CANONICAL_SITE_URL}
/>

      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      {/* <WhatsAppChat /> */}
      <Toaster />
    </div>
  );
}
