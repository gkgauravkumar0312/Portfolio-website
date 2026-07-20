import Link from "next/link";
import { navLinks, siteConfig, socials } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/60 px-5 py-12 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 text-center">
        <Link href="#home" className="text-2xl font-bold">
          <span className="text-gradient">{siteConfig.name}</span>
        </Link>

        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <Link
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={social.label}
                className="glass flex h-11 w-11 items-center justify-center rounded-full text-foreground transition-all hover:-translate-y-1 hover:text-primary"
              >
                <Icon className="h-5 w-5" />
              </Link>
            );
          })}
        </div>

        <p className="text-sm text-muted">
          © {year} {siteConfig.name}. Built with Next.js, Tailwind CSS & Framer Motion.
        </p>
      </div>
    </footer>
  );
}
