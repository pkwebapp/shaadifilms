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
                  <a href="#" aria-label="Instagram">
                    <Instagram className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="#" aria-label="Facebook">
                    <Facebook className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="#" aria-label="YouTube">
                    <Youtube className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="#" aria-label="WhatsApp">
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
                C1302 EVERSHINE COSMIC, opp. Infiniti Mall,
                <br />
                Veera Desai Industrial Estate, Andheri West,
                <br />
                Mumbai, Maharashtra 400053
              </p>
              <div className="aspect-video mt-4 rounded-lg overflow-hidden border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15079.80555315923!2d72.822855526978!3d19.10978643807961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9b83b3a0a6b%3A0x28979a3b8b15a639!2sAndheri%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1680183693631!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
