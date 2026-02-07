"use client";

import { useState } from "react";
import { PageHeader } from "@/components/common/page-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Instagram,
  Facebook,
  Youtube,
  MessageCircle,
  MapPin,
  ExternalLink,
} from "lucide-react";
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
    const accessToken =
      typeof window !== "undefined"
        ? localStorage.getItem("accessToken")
        : null;

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
  (error) => Promise.reject(error),
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
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

  const studios = [
    {
      city: "Mumbai",
      placeName: "Shaadi Films I Wedding Photography and Videography mumbai",
      address:
        "C1302 EVERSHINE COSMIC, opp. Infiniti Mall, Veera Desai Industrial Estate, Andheri West, Mumbai, Maharashtra 400053",
      landmarks: "Infiniti Mall - Andheri, Mahak",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.27157584577!2d72.836069!3d19.1412379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7811d656dc5%3A0x7ce9c50c36f26d59!2sShaadi%20Films%20I%20Wedding%20Photography%20and%20Videography%20mumbai!5e1!3m2!1sen!2sin!4v1763489360741!5m2!1sen!2sin",
      viewLargerMapUrl:
        "https://www.google.com/maps/search/?api=1&query=Shaadi+Films+Wedding+Photography+Andheri+West+Mumbai",
    },
    {
      city: "Goa",
      placeName: "Sands and Vows by Shaadi Films",
      address:
        "Sands and Vows by Shaadi Films · Fort Aguada Rd, Beach, Sinquerim, Candolim, Goa 403515",

      landmarks: "Saligao, Decathlon Sports, Calangute Mall, Museum of Goa-MNG",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.5!2d73.7674666!3d15.4991464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfc1e49e73159d%3A0x4ee589708c2fbcf1!2sSands%20and%20Vows%20by%20Shaadi%20Films!5e1!3m2!1sen!2sin!4v1763489360741!5m2!1sen!2sin",
      viewLargerMapUrl:
        "https://www.google.com/maps/place/Sands+and+Vows+by+Shaadi+Films/@15.4991516,73.7648863,1142m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bbfc1e49e73159d:0x4ee589708c2fbcf1!8m2!3d15.4991464!4d73.7674666!16s%2Fg%2F11myv3dqxy?entry=tts",
    },
    {
      city: "Delhi",
      placeName: "Shaadi Films – Delhi Studio",
      address:
        "D-Block, South Extension II, Near McDonald's, New Delhi, Delhi 110049",

      landmarks: "Lajpat Nagar, Greater Kailash, Hauz Khas, Hauz Khas Social",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504!2d77.2170!3d28.5692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM0JzA5LjEiTiA3N8KwMTMnMDEuMiJF!5e1!3m2!1sen!2sin!4v1763489360741!5m2!1sen!2sin",
      viewLargerMapUrl: "https://www.google.com/maps?q=28.5692,77.2170",
    },
  ];

  return (
    <>
      <PageHeader
        title="Contact Our Wedding Photographers in Mumbai"
        description="We'd love to hear from you. Reach out to our team for questions about our wedding photography packages or to book a consultation."
      />

      <div className="container py-16">
        {/* First Row: Contact Form and Socials */}
        <div className="grid md:grid-cols-2 gap-16 mb-16 min-w-0">
          {/* Contact Form */}
          <div className="min-w-0">
            <h2 className="font-headline text-2xl font-bold mb-4">
              Contact Form
            </h2>

            <form className="space-y-4" onSubmit={handleSubmit} noValidate>
              <div className="space-y-2">
                <div className="grid grid-cols-2 gap-4">
                  <Label htmlFor="first-name">First Name</Label>
                  <Label htmlFor="last-name">Last Name</Label>
                </div>
                <div className="flex rounded-md border border-input bg-background overflow-hidden ring-offset-background has-[:focus-visible]:outline-none has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring has-[:focus-visible]:ring-offset-2">
                  <Input
                    id="first-name"
                    name="first_name"
                    placeholder="Rohan"
                    value={form.first_name}
                    onChange={handleChange}
                    className="border-0 rounded-none border-r border-input focus-visible:ring-0 focus-visible:ring-offset-0 flex-1 min-w-0"
                  />
                  <Input
                    id="last-name"
                    name="last_name"
                    placeholder="Mehra"
                    value={form.last_name}
                    onChange={handleChange}
                    className="border-0 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 flex-1 min-w-0"
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
                  Please provide your phone number — we will contact you over a
                  call or WhatsApp.
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

          {/* Social Media Section */}
          <div className="min-w-0">
            <h3 className="font-headline text-2xl font-bold mb-4">
              Connect with Us
            </h3>
            <p className="text-muted-foreground mb-6 break-words">
              Follow our journey and see our latest work as a premier wedding
              videographer in Mumbai.
            </p>
            <div className="flex space-x-4 mb-8">
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
                  href="https://www.youtube.com/@Shaadifilm"
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

            <div className="bg-muted/30 p-6 rounded-lg min-w-0">
              <h4 className="font-headline text-lg font-bold mb-2">
                Why Choose Us?
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2 min-w-0">
                  <span className="text-primary shrink-0">•</span>
                  <span className="break-words min-w-0">Professional wedding photography & videography</span>
                </li>
                <li className="flex items-start gap-2 min-w-0">
                  <span className="text-primary shrink-0">•</span>
                  <span className="break-words min-w-0">Multiple studio locations across India</span>
                </li>
                <li className="flex items-start gap-2 min-w-0">
                  <span className="text-primary shrink-0">•</span>
                  <span className="break-words min-w-0">Customized wedding packages</span>
                </li>
                <li className="flex items-start gap-2 min-w-0">
                  <span className="text-primary shrink-0">•</span>
                  <span className="break-words min-w-0">Premium quality albums & films</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Second Row: Studios in 3 Columns */}
        <div>
          <div className="flex justify-center mb-8">
            <div>
              <h2 className="font-headline text-3xl font-bold flex items-center">
                Visit Our Studios
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:grid-flow-row">
            {studios.map((studio, index) => (
              <div
                key={index}
                className="flex flex-col min-w-0 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Studio Info - same padding and structure for identical cards */}
                <div className="p-6 flex flex-col flex-1 min-h-0">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-headline text-xl font-bold">
                        Our Studio in {studio.city}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3 break-words">
                    {studio.address}
                  </p>
                </div>

                {/* Map: same width (grid column) and fixed height so all three are identical */}
                <div className="w-full h-[240px] shrink-0 bg-muted/30">
                  <iframe
                    src={studio.mapUrl}
                    width="100%"
                    height="240"
                    className="block w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Shaadi Films Location - ${studio.city}`}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t text-center md:hidden">
            <Button variant="outline">
              <ExternalLink className="h-4 w-4 mr-2" />
              View All Locations
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
