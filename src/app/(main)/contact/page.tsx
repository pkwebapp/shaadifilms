"use client";

import { useState } from "react";
import { PageHeader } from "@/components/common/page-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Facebook, Youtube, MessageCircle } from "lucide-react";
import axios from "axios";

/** --------------------------
 *  Axios instance (same as your BookPage)
 *  -------------------------- */
const baseURL = "https://pk.thetechthingy.com/api/v1";

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;

    if (accessToken) {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    if (config.data instanceof FormData) {
      // allow browser to set multipart boundary
      // eslint-disable-next-line no-param-reassign
      delete config.headers["Content-Type"];
    } else {
      // ensure json content-type
      // eslint-disable-next-line no-param-reassign
      config.headers["Content-Type"] = "application/json";
    }

    return config;
  },
  (error) => Promise.reject(error)
);

/** --------------------------
 *  ContactPage component
 *  -------------------------- */
export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  // fields: phone is required; others optional
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    user_email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const validatePhone = (phone: string) => {
    // basic validation: digits and length between 7 and 15
    if (!phone) return false;
    const digits = phone.replace(/\D/g, "");
    return digits.length >= 7 && digits.length <= 15;
  };

  const sendToApi = async (payload: Record<string, any>) => {
    // endpoint used in BookPage
    return axiosInstance.post("/booking/request", payload);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(null);

    if (!validatePhone(form.phone)) {
      setStatus("Please enter a valid phone number.");
      return;
    }

    setLoading(true);

    // Build payload similar to your booking form
    const payload = {
      name: `${form.first_name || ""}${form.last_name ? ` ${form.last_name}` : ""}`.trim(),
      email: form.user_email || "",
      phone: form.phone,
      address: "",
      service: "",
      message: form.message || "",
      date: "",
      time: "",
    };

    try {
      const res = await sendToApi(payload);

      if (res.status === 201 || res.status === 200) {
        setStatus("Message sent successfully!");
        // reset only non-phone fields (or all if you prefer)
        setForm({
          first_name: "",
          last_name: "",
          user_email: "",
          phone: "",
          message: "",
        });
      } else {
        setStatus("Something went wrong. Please try again.");
        console.error("Unexpected response:", res);
      }
    } catch (err) {
      console.error("API Error:", err);
      setStatus("Failed to send. Please try again later.");
    } finally {
      setLoading(false);
    }
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

            <form className="space-y-4" onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input
                    id="first-name"
                    name="first_name"
                    placeholder="Rohan"
                    value={form.first_name}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input
                    id="last-name"
                    name="last_name"
                    placeholder="Mehra"
                    value={form.last_name}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="user_email"
                  type="email"
                  placeholder="rohan@example.com"
                  value={form.user_email}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">
                  Phone{" "}
                  <span aria-hidden className="text-red-500 ml-1">
                    *
                  </span>
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={form.phone}
                  onChange={handleChange}
                  aria-required
                  required
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Please provide your phone number — we will contact you over a call or WhatsApp.
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="I'm looking for a wedding photographer in Mumbai for my wedding..."
                  className="min-h-[150px]"
                  value={form.message}
                  onChange={handleChange}
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