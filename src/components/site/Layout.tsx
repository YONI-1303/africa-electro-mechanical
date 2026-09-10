import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { company } from "@/content/company";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { Container } from "./ui";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-sm focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground"
      >
        Skip to main content
      </a>
      <Nav />
      <main id="main" className="flex-1 pb-16 lg:pb-0">
        {children}
      </main>
      <Footer />
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-hairline bg-graphite lg:hidden">
        <a
          href={company.phoneHref}
          className="flex min-h-14 items-center justify-center gap-2 text-sm font-medium text-graphite-foreground"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          Call Now
        </a>
        <Link
          to="/contact"
          className="flex min-h-14 items-center justify-center bg-primary text-sm font-medium text-primary-foreground"
        >
          Request Support
        </Link>
      </div>
    </div>
  );
}

/** Standard inner-page hero. */
export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  breadcrumbs,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  image?: string;
  imageAlt?: string;
  breadcrumbs?: { label: string; to?: string }[];
}) {
  return (
    <section className="relative isolate overflow-hidden bg-graphite pt-28 pb-16 text-graphite-foreground lg:pt-40 lg:pb-24">
      {image ? (
        <>
          <img
            src={image}
            alt={imageAlt ?? ""}
            className="absolute inset-0 -z-20 h-full w-full object-cover opacity-30"
            loading="eager"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-gradient-to-r from-graphite via-graphite/90 to-graphite/50"
          />
        </>
      ) : (
        <div aria-hidden="true" className="rule-grid absolute inset-0 -z-10 opacity-60" />
      )}
      <Container>
        {breadcrumbs?.length ? (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="label-technical flex flex-wrap items-center gap-2 text-graphite-foreground/50">
              {breadcrumbs.map((crumb, i) => (
                <li key={crumb.label} className="flex items-center gap-2">
                  {crumb.to ? (
                    <Link to={crumb.to} className="hover:text-graphite-foreground">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-graphite-foreground/80">
                      {crumb.label}
                    </span>
                  )}
                  {i < breadcrumbs.length - 1 ? <span aria-hidden="true">/</span> : null}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}
        <p className="label-technical flex items-center gap-3 text-graphite-foreground/60">
          <span aria-hidden="true" className="h-px w-8 bg-primary" />
          {eyebrow}
        </p>
        <h1 className="mt-5 max-w-4xl text-4xl leading-[1.05] font-semibold sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {intro ? (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-graphite-foreground/75 lg:text-lg">
            {intro}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
