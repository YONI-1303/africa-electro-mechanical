import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Phone } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { Container, SectionHeader } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";
import { EquipmentGallery } from "@/components/site/EquipmentGallery";
import {
  company,
  industries,
  lifecycle,
  services,
  valueProps,
  whyUs,
} from "@/content/company";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    seo({
      title: "Electromechanical Engineering in Addis Ababa | Africa Electro Mechanical",
      description:
        "Africa Electro Mechanical Engineering PLC delivers electromechanical installation, commissioning, maintenance, repair and technical support for industrial, commercial, healthcare and agricultural clients in Ethiopia.",
      path: "/",
    }),
  component: Home,
});

function Home() {
  const heroImage = industries[0].image;

  return (
    <Layout>
      {/* 01 — HERO */}
      <section className="relative isolate flex min-h-[92svh] items-end overflow-hidden bg-graphite pt-28 pb-14 text-graphite-foreground lg:min-h-[100svh] lg:pb-20">
        <img
          src={heroImage}
          alt="Electromechanical plant equipment in operation"
          fetchPriority="high"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-t from-graphite via-graphite/85 to-graphite/55"
        />
        <div aria-hidden="true" className="rule-grid absolute inset-0 -z-10 opacity-40" />

        <Container>
          <p className="label-technical flex items-center gap-3 text-graphite-foreground/70">
            <span aria-hidden="true" className="h-px w-10 bg-primary" />
            {company.name}
          </p>
          <h1 className="mt-6 max-w-4xl text-[2.5rem] leading-[1.03] font-semibold sm:text-6xl lg:text-7xl">
            Engineering systems that keep operations moving.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-graphite-foreground/80 lg:text-lg">
            {company.intro}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Request Engineering Support
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              to="/services"
              className="inline-flex min-h-12 items-center justify-center rounded-sm border border-graphite-foreground/30 px-6 text-sm font-medium text-graphite-foreground transition-colors hover:bg-graphite-foreground/10"
            >
              Explore Our Services
            </Link>
          </div>

          <ul className="label-technical mt-12 grid grid-cols-2 gap-px border border-hairline bg-hairline sm:grid-cols-4">
            {["Industrial", "Commercial", "Healthcare", "Agriculture"].map((sector) => (
              <li
                key={sector}
                className="bg-graphite px-4 py-4 text-center text-graphite-foreground/70"
              >
                {sector}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 02 — VALUE */}
      <section className="border-b border-border bg-background py-16 lg:py-24">
        <Container>
          <ul className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {valueProps.map((prop, i) => (
              <Reveal as="li" key={prop.title} delay={i * 70} className="bg-background p-7">
                <span className="label-technical text-primary">0{i + 1}</span>
                <h2 className="mt-4 font-display text-lg font-semibold">{prop.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{prop.body}</p>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* 03 — WHO WE ARE */}
      <section className="py-20 lg:py-28">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <Reveal>
              <div className="relative">
                <img
                  src={services[6].image}
                  alt={services[6].imageAlt}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
                <div className="panel absolute -right-4 -bottom-6 max-w-[15rem] p-5 lg:-right-10">
                  <p className="label-technical text-primary">Based in</p>
                  <p className="mt-2 font-display text-lg leading-tight font-semibold">
                    Bole, Addis Ababa
                    <br />
                    Ethiopia
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <SectionHeader
                eyebrow="Who we are"
                title="A professional electromechanical engineering company."
              />
              <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
                <p>{company.about[0]}</p>
                <p>{company.about[1]}</p>
                <p>{company.about[2]}</p>
              </div>
              <Link
                to="/about"
                className="mt-8 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-foreground underline-offset-4 hover:text-primary hover:underline"
              >
                Meet Africa Electro Mechanical Engineering
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 04 — SERVICES */}
      <section className="bg-graphite py-20 text-graphite-foreground lg:py-28">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-8">
            <SectionHeader
              onDark
              eyebrow="Services"
              title="Engineering delivered across the equipment lifecycle."
              intro="Ten service areas covering consulting and design through installation, commissioning, maintenance, repair and continuing technical support."
            />
            <Link
              to="/services"
              className="inline-flex min-h-11 items-center gap-2 border-b border-primary pb-1 text-sm text-graphite-foreground"
            >
              All services
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <ul className="mt-14 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal
                as="li"
                key={service.slug}
                delay={(i % 3) * 70}
                className="group bg-graphite"
              >
                <Link
                  to="/services/$slug"
                  params={{ slug: service.slug }}
                  className="flex h-full flex-col p-7 transition-colors hover:bg-graphite-foreground/5"
                >
                  <span className="label-technical text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-lg leading-snug font-semibold">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-graphite-foreground/65">
                    {service.short}
                  </p>
                  <span className="label-technical mt-6 inline-flex items-center gap-2 text-graphite-foreground/70 transition-colors group-hover:text-graphite-foreground">
                    Explore service
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* 05 — INDUSTRIES */}
      <section className="py-20 lg:py-28">
        <Container>
          <SectionHeader
            eyebrow="Industries"
            title="Different sectors, the same engineering discipline."
            intro="Our work is shaped by how each facility operates — what it runs, when it can stop, and what happens when it does."
          />
          <ul className="mt-14 space-y-px bg-border">
            {industries.map((industry, i) => (
              <Reveal as="li" key={industry.slug} delay={i * 50} className="bg-background">
                <Link
                  to="/industries"
                  hash={industry.slug}
                  className="group grid items-center gap-6 p-6 transition-colors hover:bg-accent md:grid-cols-[8rem_1fr_1.2fr_auto] md:gap-10 md:p-8"
                >
                  <img
                    src={industry.image}
                    alt={industry.imageAlt}
                    loading="lazy"
                    className="h-28 w-full object-cover md:h-24"
                  />
                  <h3 className="font-display text-2xl font-semibold">{industry.name}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {industry.headline} {industry.description}
                  </p>
                  <ArrowRight
                    className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary"
                    aria-hidden="true"
                  />
                </Link>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* 06 — LIFECYCLE */}
      <section className="border-y border-border bg-secondary py-20 lg:py-28">
        <Container>
          <SectionHeader
            eyebrow="Engineering lifecycle"
            title="Support at every stage a system passes through."
            intro="We work with clients across the equipment lifecycle — from understanding the duty a system performs to supporting it long after commissioning."
          />
          <ol className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {lifecycle.map((phase, i) => (
              <Reveal as="li" key={phase.step} delay={(i % 3) * 70} className="bg-secondary p-7">
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-3xl font-semibold text-primary">
                    {phase.step}
                  </span>
                  <span aria-hidden="true" className="h-px flex-1 bg-border" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{phase.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{phase.body}</p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* 07 — EQUIPMENT */}
      <section className="py-20 lg:py-28">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-8">
            <SectionHeader
              eyebrow="Equipment"
              title="The machinery and systems we work with."
              intro="Industrial machinery, motors and drives, control and distribution panels, power systems and building equipment."
            />
            <Link
              to="/equipment"
              className="inline-flex min-h-11 items-center gap-2 border-b border-primary pb-1 text-sm"
            >
              Full equipment gallery
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-14">
            <EquipmentGallery limit={6} />
          </div>
        </Container>
      </section>

      {/* 08 — WORK / 09 — WHY US */}
      <section className="bg-graphite py-20 text-graphite-foreground lg:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionHeader
                onDark
                eyebrow="Where our engineering applies"
                title="Project evidence, published only when it is real."
                intro="We do not publish invented case studies. This section is built to hold verified project records — title, industry, location, scope, services delivered, equipment, challenge, solution, outcome and gallery — as clients approve their release."
              />
              <Link
                to="/projects"
                className="mt-8 inline-flex min-h-11 items-center gap-2 border-b border-primary pb-1 text-sm"
              >
                See where our work applies
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <div>
              <h2 className="label-technical text-graphite-foreground/55">Why work with us</h2>
              <ul className="mt-6 divide-y divide-hairline border-y border-hairline">
                {whyUs.map((item) => (
                  <li key={item.title} className="py-5">
                    <h3 className="font-display text-base font-medium">{item.title}</h3>
                    <p className="mt-1.5 text-sm text-graphite-foreground/65">{item.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* 10 — QUALITY MINDSET */}
      <section className="py-20 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
            <SectionHeader
              eyebrow="Technical mindset"
              title="Reliability is the outcome of disciplined work."
            />
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>{company.commitment}</p>
              <p>
                Workmanship, safety-conscious execution and timely service are how we protect the
                systems we are trusted with. Every installation is tested before handover, every
                repair is diagnosed before parts are changed, and every maintenance visit ends with
                findings shared honestly.
              </p>
              <p className="border-l-2 border-primary pl-5 text-foreground">
                We describe only what we do. Where a claim would require certification we do not
                hold, we leave it unsaid.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 11 — FINAL CTA */}
      <section className="relative isolate overflow-hidden bg-graphite py-20 text-graphite-foreground lg:py-28">
        <div aria-hidden="true" className="rule-grid absolute inset-0 -z-10 opacity-60" />
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-3xl leading-[1.1] font-semibold sm:text-4xl lg:text-5xl">
              Have an electromechanical system that needs a dependable engineering partner?
            </h2>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Request Engineering Support
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href={company.phoneHref}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border border-graphite-foreground/30 px-6 text-sm font-medium text-graphite-foreground transition-colors hover:bg-graphite-foreground/10"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call {company.phone}
              </a>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
}
