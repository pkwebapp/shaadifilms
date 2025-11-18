"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import { PageHeader } from "@/components/common/page-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Facebook, Youtube, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const form = e.currentTarget;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setLoading(false);
          form.reset();
        },
        (error) => {
          console.error("FAILED...", error);
          setStatus("Something went wrong. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <>
      <PageHeader
        title="Contact Our Wedding Photographers in Mumbai"
        description="We'd love to hear from you. Reach out to our Andheri West team for questions about our wedding photography packages or to book a consultation."
      />

      <div className="container py-16">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="font-headline text-2xl font-bold mb-4">Contact Form</h2>
            <form className="space-y-4" onSubmit={sendEmail}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" name="first_name" placeholder="Rohan" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" name="last_name" placeholder="Mehra" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="user_email"
                  type="email"
                  placeholder="rohan@example.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="I'm looking for a wedding photographer in Mumbai for my wedding..."
                  className="min-h-[150px]"
                  required
                />
              </div>

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </Button>

              {status && <p className="text-sm text-center mt-2">{status}</p>}
            </form>
          </div>

          {/* Right side: Socials + Studio */}
          <div className="space-y-8">
            <div>
              <h3 className="font-headline text-xl font-bold mb-2">Connect with Us</h3>
              <p className="text-muted-foreground mb-4">
                Follow our journey and see our latest work as a premier wedding videographer in Mumbai.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon" asChild>
                  <a
                    href="https://www.instagram.com/shaadifilmsmumbai?igsh=YXF2OXBkZmN4MWcy"
                    aria-label="Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a
                    href="https://www.facebook.com/profile.php?id=61581420640349"
                    aria-label="Facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a
                    href="https://www.youtube.com/@PKPhotographyindia"
                    aria-label="YouTube"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Youtube className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a
                    href="https://wa.me/8188881905?text=Hi%20Aman%20I%20am%20interested%20in%20your%20wedding%20services%20at%20Shaadifilms"
                    aria-label="WhatsApp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>

            <div>
              <h2 className="font-headline text-xl font-bold mb-2">Our Studio in Andheri West</h2>
              <p className="text-muted-foreground">
                Visit our wedding photography studio:
                <br />
                EVERSHINE COSMIC, C1302,
                <br />
                Veera Desai Industrial Estate, Andheri West,
                <br />
                Mumbai, Maharashtra 400053
              </p>
              <div className="aspect-video mt-4 rounded-lg overflow-hidden border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.27157584577!2d72.836069!3d19.1412379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7811d656dc5%3A0x7ce9c50c36f26d59!2sShaadi%20Films%20I%20Wedding%20Photography%20and%20Videography%20mumbai!5e1!3m2!1sen!2sin!4v1763489360741!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Shaadi Films Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}