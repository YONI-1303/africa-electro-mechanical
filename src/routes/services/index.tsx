import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Layout, PageHero } from "@/components/site/Layout";
import { Container } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import { services } from "@/content/company";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/services/")({
  head: () =>
    seo({
      title: "Electromechanical Services in Ethiopia | Africa Electro Mechanical",
      description:
        "Installation and commissioning, preventive and corrective maintenance, repair, equipment servicing, engineering support, consulting and design for industrial, commercial, healthcare and agricultural clients.",
      path: "/services",
    }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <Layout>
      <PageHero
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Services" }]}
        eyebrow="Services"
        title="Electromechanical engineering, delivered end to end."
        intro="Ten service areas covering consulting and engineering design through installation, commissioning, maintenance, repair, servicing and continuing technical support."
        image={services[0].image}
        imageAlt={services[0].imageAlt}
      />

      <section className="py-16 lg:py-24">
        <Container>
          <ul className="grid gap-px bg-border md:grid-cols-2">
            {services.map((service, i) => (
              <Reveal as="li" key={service.slug} delay={(i % 2) * 80} className="group bg-background">
                <Link
                  to="/services/$slug"
                  params={{ slug: service.slug }}
                  className="flex h-full flex-col"
                >
                  <span className="relative block aspect-[16/9] overflow-hidden bg-muted">
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </span>
                  <span className="flex flex-1 flex-col p-7">
                    <span className="label-technical text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="mt-4 font-display text-xl font-semibold">{service.title}</span>
                    <span className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {service.short}
                    </span>
                    <span className="label-technical mt-6 inline-flex items-center gap-2 text-foreground">
                      Explore service
                      <ArrowRight
                        className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-t border-border bg-secondary py-16 lg:py-20">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-6">
            <h2 className="max-w-xl font-display text-2xl font-semibold sm:text-3xl">
              Not sure which service fits your situation? Describe the equipment and we will advise.
            </h2>
            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center gap-2 rounded-sm bg-primary px-6 text-sm font-medium text-primary-foreground"
            >
              Discuss Your Requirement
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </section>
    </Layout>
  );
}
