import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Layout, PageHero } from "@/components/site/Layout";
import { Container, SectionHeader } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import { industries, services } from "@/content/company";
import { seo } from "@/lib/seo";

/**
 * Project records are intentionally empty until the company supplies verified
 * entries. Populate `projects` below and the listing renders automatically.
 */
type Project = {
  title: string;
  industry: string;
  location: string;
  scope: string;
  servicesDelivered: string[];
  equipment: string[];
  challenge: string;
  solution: string;
  outcome: string;
  gallery: { src: string; alt: string }[];
  completedAt: string;
};

const projects: Project[] = [];

export const Route = createFileRoute("/projects")({
  head: () =>
    seo({
      title: "Projects & Work | Africa Electro Mechanical Engineering",
      description:
        "Where our electromechanical engineering support applies across industrial, commercial, healthcare, agricultural and institutional facilities in Ethiopia.",
      path: "/projects",
    }),
  component: Projects,
});

function Projects() {
  return (
    <Layout>
      <PageHero
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Projects" }]}
        eyebrow="Projects & work"
        title="Where our engineering support applies."
        intro="We publish project records only once they are confirmed and released by the client. Until then, this page shows the work we do and the settings it is delivered in."
        image={services[4].image}
        imageAlt={services[4].imageAlt}
      />

      {projects.length === 0 ? (
        <section className="py-20 lg:py-28">
          <Container>
            <div className="panel flex flex-col items-start gap-5 p-8 lg:p-12">
              <span className="label-technical text-primary">Portfolio in preparation</span>
              <h2 className="max-w-2xl font-display text-2xl leading-snug font-semibold sm:text-3xl">
                No fabricated case studies. Verified project records will be published here.
              </h2>
              <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
                Each entry will carry the project title, industry, location, scope, services
                delivered, equipment and systems involved, the challenge, the solution, the outcome,
                a gallery and the completion date — filterable by industry, service type and
                location.
              </p>
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center gap-2 rounded-sm bg-primary px-6 text-sm font-medium text-primary-foreground"
              >
                Discuss your project
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </Container>
        </section>
      ) : null}

      <section className="border-y border-border bg-secondary py-20 lg:py-28">
        <Container>
          <SectionHeader
            eyebrow="Application settings"
            title="The environments our work is delivered in."
            intro="Based on the sectors the company serves and the services it provides."
          />
          <ul className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, i) => (
              <Reveal as="li" key={industry.slug} delay={(i % 3) * 70} className="bg-secondary">
                <img
                  src={industry.image}
                  alt={industry.imageAlt}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover"
                />
                <div className="p-7">
                  <span className="label-technical text-primary">{industry.name}</span>
                  <h3 className="mt-3 font-display text-lg leading-snug font-semibold">
                    {industry.headline}
                  </h3>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {industry.needs.slice(0, 3).map((need) => (
                      <li key={need}>— {need}</li>
                    ))}
                  </ul>
                  <Link
                    to="/industries"
                    hash={industry.slug}
                    className="label-technical mt-6 inline-flex items-center gap-2 text-foreground"
                  >
                    View industry
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>
    </Layout>
  );
}
