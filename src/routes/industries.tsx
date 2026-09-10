import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Layout, PageHero } from "@/components/site/Layout";
import { Container } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import { industries, services } from "@/content/company";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/industries")({
  head: () =>
    seo({
      title: "Industries We Serve | Africa Electro Mechanical Engineering",
      description:
        "Electromechanical engineering support for industrial, commercial, healthcare, agricultural and institutional facilities in Addis Ababa and across Ethiopia.",
      path: "/industries",
    }),
  component: Industries,
});

function Industries() {
  return (
    <Layout>
      <PageHero
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Industries" }]}
        eyebrow="Industries"
        title="Engineering shaped by how your facility operates."
        intro="Each sector places different demands on electromechanical equipment. Our scope stays the same; the way we plan and schedule it does not."
        image={industries[2].image}
        imageAlt={industries[2].imageAlt}
      />

      {industries.map((industry, index) => {
        const related = services.filter((service) => industry.services.includes(service.slug));
        const dark = index % 2 === 1;
        return (
          <section
            key={industry.slug}
            id={industry.slug}
            className={
              dark
                ? "scroll-mt-24 bg-graphite py-20 text-graphite-foreground lg:py-28"
                : "scroll-mt-24 border-b border-border py-20 lg:py-28"
            }
          >
            <Container>
              <div
                className={`grid gap-12 lg:grid-cols-2 lg:gap-20 ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                <Reveal>
                  <img
                    src={industry.image}
                    alt={industry.imageAlt}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover"
                  />
                </Reveal>
                <Reveal delay={80}>
                  <p
                    className={`label-technical flex items-center gap-3 ${dark ? "text-graphite-foreground/55" : "text-muted-foreground"}`}
                  >
                    <span aria-hidden="true" className="h-px w-8 bg-primary" />
                    {String(index + 1).padStart(2, "0")} — {industry.name}
                  </p>
                  <h2 className="mt-4 text-3xl leading-tight font-semibold sm:text-4xl">
                    {industry.headline}
                  </h2>
                  <p
                    className={`mt-5 text-base leading-relaxed ${dark ? "text-graphite-foreground/70" : "text-muted-foreground"}`}
                  >
                    {industry.description}
                  </p>

                  <h3
                    className={`label-technical mt-9 ${dark ? "text-graphite-foreground/55" : "text-muted-foreground"}`}
                  >
                    Typical engineering needs
                  </h3>
                  <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                    {industry.needs.map((need) => (
                      <li key={need} className="flex gap-2.5 text-sm leading-relaxed">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                        {need}
                      </li>
                    ))}
                  </ul>

                  <h3
                    className={`label-technical mt-9 ${dark ? "text-graphite-foreground/55" : "text-muted-foreground"}`}
                  >
                    Relevant services
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {related.map((service) => (
                      <li key={service.slug}>
                        <Link
                          to="/services/$slug"
                          params={{ slug: service.slug }}
                          className={`inline-flex min-h-11 items-center rounded-sm border px-4 text-xs transition-colors ${
                            dark
                              ? "border-hairline text-graphite-foreground/80 hover:bg-graphite-foreground/10"
                              : "border-border hover:bg-accent"
                          }`}
                        >
                          {service.title}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className="mt-9 inline-flex min-h-12 items-center gap-2 rounded-sm bg-primary px-6 text-sm font-medium text-primary-foreground"
                  >
                    Request Engineering Support
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Reveal>
              </div>
            </Container>
          </section>
        );
      })}
    </Layout>
  );
}
