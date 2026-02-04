
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Logo } from "@/components/common/logo";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/delhi-weddings", label: "Delhi Weddings" },
  { href: "/goa-weddings", label: "Goa Weddings" },
  { href: "/services", label: "Services" },
  { href: "/packages", label: "Packages" },
  { href: "/gallery", label: "Gallery" },
  { href: "/album", label: "Album" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Logo />
        </div>
        <div className="md:hidden w-10"></div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-center">
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "transition-colors hover:text-[#7a2e46]",
                    isActive
                      ? "font-semibold text-[#7a2e46]"
                      : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
           <div className="md:hidden flex-1 flex justify-center">
             <Logo />
           </div>
        </div>
        <div className="hidden md:flex items-center space-x-2">
            <Button asChild><Link href="/book">Book a Consultation</Link></Button>
        </div>
        <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Toggle Menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <div className="px-2 pt-8">
                        <Logo />
                        <div className="mt-8 flex flex-col space-y-2">
                            {navItems.map((item) => (
                                <Button key={item.label} asChild variant="ghost" className="justify-start text-lg" onClick={() => setIsOpen(false)}>
                                    <Link href={item.href}>{item.label}</Link>
                                </Button>
                            ))}
                        </div>
                         <div className="mt-6 flex flex-col space-y-3">
                            <Button asChild className="w-full" onClick={() => setIsOpen(false)}><Link href="/book">Book a Consultation</Link></Button>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
