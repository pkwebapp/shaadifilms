import Seo from "@/components/common/Seo";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Toaster } from "@/components/ui/toaster";
import WhatsAppChat from "@/components/whatsapp/WhatsAppChat";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Add default SEO here */}
<Seo
  title="Shaadifilms - Wedding Photography & Videography in Mumbai"
  description="Luxury wedding photography and cinematic videography in Andheri West, Mumbai. Shaadifilms captures Indian weddings."
  image="/images/seo/homepage-og.jpg"
  url="https://www.shaadifilms.com"
  keywords="Wedding Photography Mumbai, Wedding Videography Mumbai, Shaadifilms, Cinematic Wedding Films, Pre-wedding shoots"
  canonical="https://www.shaadifilms.com"
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
