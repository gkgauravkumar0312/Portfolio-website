import { siteConfig, socials } from "@/lib/data";

/** Structured data (JSON-LD) describing the person for rich search results. */
export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    jobTitle: siteConfig.roles[1],
    description: siteConfig.tagline,
    sameAs: socials
      .map((s) => s.href)
      .filter((href) => href.startsWith("http")),
  };

  return (
    <script
      type="application/ld+json"
      // JSON-LD must be injected as raw JSON.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
