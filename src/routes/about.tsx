import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Layout, PageHero } from "@/components/site/Layout";
import { Container, SectionHeader } from "@/components/site/ui";
import { company, industries, lifecycle, services } from "@/content/company";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    seo({
      title: "About | Africa Electro Mechanical Engineering PLC",
      description:
        "Africa Electro Mechanical Engineering PLC is an electromechanical engineering company in Bole, Addis Ababa, serving industrial, commercial, healthcare, agricultural and institutional clients across Ethiopia.",
      path: "/about",
    }),
  component: About,
});

function About() {
  return (
    <Layout>
      <PageHero
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "About" }]}
        eyebrow="About the company"
        title="Engineering support built around reliability."
        intro={company.about[0]}
        image={services[8].image}
        imageAlt={services[8].imageAlt}
      />

      <section className="py-20 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
            <SectionHeader eyebrow="Company overview" title="What we do." />
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
              {company.about.slice(1).map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
              <p className="border-l-2 border-primary pl-5 text-foreground">
                {company.commitment}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-secondary py-20 lg:py-28">
        <Container>
          <SectionHeader
            eyebrow="Sectors served"
            title="Who we work with."
            intro="Businesses, industries, institutions, agricultural projects and other organizations that depend on electromechanical systems."
          />
          <ul className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-5">
            {industries.map((industry) => (
              <li key={industry.slug} className="bg-secondary p-6">
                <h3 className="font-display text-lg font-semibold">{industry.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {industry.headline}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionHeader
                eyebrow="Engineering approach"
                title="Understand the system before changing it."
              />
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Every engagement starts with the equipment and the duty it performs. Assessment and
                design come before installation; testing comes before handover; diagnosis comes
                before repair. That order is what makes the result dependable.
              </p>
            </div>
            <ol className="divide-y divide-border border-y border-border">
              {lifecycle.map((phase) => (
                <li key={phase.step} className="flex gap-6 py-5">
                  <span className="label-technical pt-1 text-primary">{phase.step}</span>
                  <div>
                    <h3 className="font-display text-base font-medium">{phase.title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">{phase.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <section className="bg-graphite py-20 text-graphite-foreground lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionHeader onDark eyebrow="Leadership" title="Who leads the company." />
              <div className="mt-8 border-t border-hairline pt-6">
                <p className="label-technical text-graphite-foreground/55">
                  {company.managerRole}
                </p>
                <p className="mt-2 font-display text-2xl font-semibold">{company.manager}</p>
              </div>
              <p className="mt-6 text-sm text-graphite-foreground/60">
                Further leadership and company history details will be published here once supplied
                by the company.
              </p>
            </div>
            <div className="border border-hairline p-8">
              <h2 className="label-technical text-graphite-foreground/55">Company details</h2>
              <dl className="mt-6 divide-y divide-hairline text-sm">
                <div className="flex justify-between gap-6 py-4">
                  <dt className="text-graphite-foreground/55">Registered name</dt>
                  <dd className="text-right">{company.name}</dd>
                </div>
                <div className="flex justify-between gap-6 py-4">
                  <dt className="text-graphite-foreground/55">Location</dt>
                  <dd className="text-right">{company.location}</dd>
                </div>
                <div className="flex justify-between gap-6 py-4">
                  <dt className="text-graphite-foreground/55">Phone</dt>
                  <dd className="text-right">
                    <a href={company.phoneHref}>{company.phone}</a>
                  </dd>
                </div>
                <div className="flex justify-between gap-6 py-4">
                  <dt className="text-graphite-foreground/55">Email</dt>
                  <dd className="text-right break-all">
                    <a href={`mailto:${company.email}`}>{company.email}</a>
                  </dd>
                </div>
              </dl>
              <Link
                to="/contact"
                className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-sm bg-primary px-5 text-sm font-medium text-primary-foreground"
              >
                Request a Consultation
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
}
