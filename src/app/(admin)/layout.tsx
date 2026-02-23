"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  ImageIcon,
  FileText,
  Newspaper,
  ExternalLink,
} from "lucide-react";

const adminNav = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/gallery", label: "Shaadifilms Gallery", icon: ImageIcon },
  { href: "/admin/content", label: "Content", icon: FileText },
  { href: "/admin/blog", label: "Blog", icon: Newspaper },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-muted/30">
      <aside className="fixed inset-y-0 left-0 z-40 w-56 border-r bg-card flex flex-col">
        <div className="flex h-14 items-center gap-2 border-b px-4">
          <span className="font-semibold text-lg tracking-tight">Admin</span>
        </div>
        <nav className="flex-1 space-y-0.5 p-3">
          {adminNav.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/admin" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <item.icon className="h-4 w-4 shrink-0" />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="border-t p-3">
          <Link
            href="/"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            <ExternalLink className="h-4 w-4" />
            View site
          </Link>
        </div>
      </aside>
      <main className="flex-1 pl-56 min-h-screen">
        <div className="container py-8">{children}</div>
      </main>
    </div>
  );
}
