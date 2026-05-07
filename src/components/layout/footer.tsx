import Link from "next/link";
import { Logo } from "@/components/common/logo";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const navItems = [
    { href: "/services", label: "Services" },
    { href: "/packages", label: "Packages" },
    { href: "/gallery", label: "Gallery" },
    { href: "/album", label: "Album" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <footer className="bg-card border-t">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-3">

          {/* Logo + Intro */}
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground max-w-xs">
              Luxury wedding photographer and videographer in Mumbai,
              specializing in cinematic wedding films. Based in Andheri West.
            </p>
          </div>

          {/* Explore / Legal / Connect */}
          <div className="grid gap-8 sm:grid-cols-2 md:col-span-2 lg:grid-cols-3">

            {/* Explore */}
            <div>
              <h4 className="font-semibold mb-3">Explore</h4>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold mb-3">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/privacypolicy"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/termsofservice"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-semibold mb-3">Connect</h4>

              {/* Instagram Link */}
              <a
                href="https://www.instagram.com/shaadifilms.in?igsh=MTl1M2FxN2pmYXh3&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors space-x-1"
              >
                <span>Instagram</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <div className="space-y-3 text-sm text-muted-foreground mt-4">

                {/* Address */}
                <div>
                  <h5 className="font-semibold text-foreground mb-1">Address</h5>
                  <div className="space-y-4">
                    <a
                      href="https://www.google.com/maps/place/Shaadi+Films+I+Wedding+Photography+and+Videography+mumbai/@19.1412429,72.8334941,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7b7811d656dc5:0x7ce9c50c36f26d59!8m2!3d19.1412379!4d72.836069!16s%2Fg%2F11ylzns6kc?hl=en-GB&entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:text-primary transition-colors"
                    >
                      EVERSHINE COSMIC, C1302,<br />
                      Veera Desai Industrial Estate, Andheri West,<br />
                      Mumbai, Maharashtra 400053
                    </a>
                    <a
                      href="https://www.google.com/maps/place/Sands+and+Vows+by+Shaadi+Films/@15.6326393,73.7380582,1086m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bbfe97ab63e5fd1:0xfe6368c888847e04!8m2!3d15.6326393!4d73.7380582!16s%2Fg%2F11nbqc4frr?hl=en-GB&entry=ttu&g_ep=EgoyMDI2MDUwMi4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:text-primary transition-colors"
                    >
                      <span className="font-semibold block">Sands and Vows by Shaadi Films</span>
                      246, Katte Wada Rd, Morjim, Goa 403512
                    </a>
                  </div>
                </div>

                {/* Contact */}
                <div>
                  <h5 className="font-semibold text-foreground mb-1">Contact</h5>
                  <div className="space-y-1">
                    <a
                      href="tel:+918188881905"
                      className="hover:text-primary transition-colors"
                    >
                      +91-8188881905
                    </a>
                    <br />
                    <a
                      href="tel:+918888766739"
                      className="hover:text-primary transition-colors"
                    >
                      +91-8888766739
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Shaadifilms. All rights reserved.
            Wedding Photographer in Mumbai.
          </p>
        </div>

      </div>
    </footer>
  );
}