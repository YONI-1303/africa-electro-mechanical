import { company, SITE_URL } from "@/content/company";

type SeoInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

/** Builds meta + canonical link entries for a route head(). */
export function seo({ title, description, path, image }: SeoInput) {
  const url = `${SITE_URL}${path}`;
  const meta = [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];
  if (image?.startsWith("https://")) {
    meta.push({ property: "og:image", content: image });
    meta.push({ name: "twitter:image", content: image });
  }
  return {
    meta,
    links: [{ rel: "canonical", href: url }],
  };
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: company.name,
  description:
    "Professional electromechanical engineering company providing consulting, engineering design, installation, commissioning, maintenance, repair, servicing and technical support in Addis Ababa, Ethiopia.",
  url: SITE_URL,
  telephone: company.phone,
  email: company.email,
  areaServed: "Ethiopia",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Bole",
    addressLocality: "Addis Ababa",
    addressCountry: "ET",
  },
  employee: {
    "@type": "Person",
    name: company.manager,
    jobTitle: company.managerRole,
  },
};

export function serviceSchema(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${SITE_URL}${path}`,
    serviceType: "Electromechanical engineering",
    provider: { "@type": "Organization", name: company.name },
    areaServed: "Ethiopia",
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function JsonLd(data: unknown) {
  return {
    type: "application/ld+json",
    children: JSON.stringify(data),
  };
}
