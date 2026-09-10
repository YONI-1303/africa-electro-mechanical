import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, Phone } from "lucide-react";
import { Layout, PageHero } from "@/components/site/Layout";
import { Container, SectionHeader } from "@/components/site/ui";
import { EquipmentGallery } from "@/components/site/EquipmentGallery";
import { company, industries, services } from "@/content/company";
import { breadcrumbSchema, seo, serviceSchema } from "@/lib/seo";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) return {};
    const path = `/services/${service.slug}`;
    const base = seo({
      title: `${service.title} | Africa Electro Mechanical Engineering`,
      description: service.short,
      path,
    });
    return {
      ...base,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(serviceSchema(service.title, service.short, path)),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
              { name: service.title, path },
            ]),
          ),
        },
      ],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const related = industries.filter((industry) => service.industries.includes(industry.slug));

  return (
    <Layout>
      <PageHero
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Services", to: "/services" },
          { label: service.title },
        ]}
        eyebrow="Service"
        title={service.title}
        intro={service.short}
        image={service.image}
        imageAlt={service.imageAlt}
      />

      <section className="py-20 lg:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
            <div>
              <SectionHeader eyebrow="Overview" title="What this service covers." />
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                {service.overview}
              </p>

              <h3 className="label-technical mt-12 text-muted-foreground">Typical client need</h3>
              <p className="mt-4 border-l-2 border-primary pl-5 text-base leading-relaxed">
                {service.need}
              </p>

              <h3 className="label-technical mt-12 text-muted-foreground">What is included</h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {service.includes.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <aside className="panel h-fit p-7 lg:sticky lg:top-28">
              <h2 className="font-display text-xl font-semibold">Discuss your requirement</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Tell us the equipment, the site and what you need to happen. We will respond with
                the practical next step.
              </p>
              <Link
                to="/contact"
                className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-sm bg-primary px-5 text-sm font-medium text-primary-foreground"
              >
                Request Engineering Support
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href={company.phoneHref}
                className="mt-3 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-sm border border-border px-5 text-sm font-medium hover:bg-accent"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call {company.phone}
              </a>
            </aside>
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-secondary py-20 lg:py-24">
        <Container>
          <SectionHeader eyebrow="Related industries" title="Where this service is applied." />
          <ul className="mt-10 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {related.map((industry) => (
              <li key={industry.slug} className="bg-secondary p-6">
                <h3 className="font-display text-lg font-semibold">{industry.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {industry.headline}
                </p>
                <Link
                  to="/industries"
                  hash={industry.slug}
                  className="label-technical mt-5 inline-flex items-center gap-2 text-foreground"
                >
                  View industry
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-20 lg:py-24">
        <Container>
          <SectionHeader eyebrow="Related equipment" title="Systems commonly involved." />
          <div className="mt-10">
            <EquipmentGallery limit={3} />
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-20 lg:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
            <SectionHeader eyebrow="FAQ" title="Common questions." />
            <div className="divide-y divide-border border-y border-border">
              {service.faq.map((item) => (
                <details key={item.q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-base font-medium">
                    {item.q}
                    <span
                      aria-hidden="true"
                      className="text-primary transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
}
