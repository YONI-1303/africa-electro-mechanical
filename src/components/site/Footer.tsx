import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { company, industries, services } from "@/content/company";
import { Container } from "./ui";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-hairline bg-graphite text-graphite-foreground">
      <Container className="py-14 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                width={48}
                height={48}
                loading="lazy"
                className="h-12 w-12 rounded-sm object-cover object-left"
              />
              <span className="font-display text-sm leading-tight font-semibold">
                AFRICA ELECTRO
                <br />
                MECHANICAL ENGINEERING PLC
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-graphite-foreground/65">
              A professional electromechanical engineering company providing consulting,
              design, installation, commissioning, maintenance, repair and technical
              services in Addis Ababa, Ethiopia.
            </p>
          </div>

          <nav aria-label="Services">
            <h2 className="label-technical text-graphite-foreground/50">Services</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: service.slug }}
                    className="text-graphite-foreground/70 transition-colors hover:text-graphite-foreground"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="text-graphite-foreground/70 transition-colors hover:text-graphite-foreground"
                >
                  All services
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Industries">
            <h2 className="label-technical text-graphite-foreground/50">Industries</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {industries.map((industry) => (
                <li key={industry.slug}>
                  <Link
                    to="/industries"
                    hash={industry.slug}
                    className="text-graphite-foreground/70 transition-colors hover:text-graphite-foreground"
                  >
                    {industry.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/equipment"
                  className="text-graphite-foreground/70 transition-colors hover:text-graphite-foreground"
                >
                  Equipment
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="label-technical text-graphite-foreground/50">Contact</h2>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span className="text-graphite-foreground/70">{company.location}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <a
                  href={company.phoneHref}
                  className="text-graphite-foreground/70 transition-colors hover:text-graphite-foreground"
                >
                  {company.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <a
                  href={`mailto:${company.email}`}
                  className="break-all text-graphite-foreground/70 transition-colors hover:text-graphite-foreground"
                >
                  {company.email}
                </a>
              </li>
            </ul>
            <Link
              to="/contact"
              className="mt-6 inline-flex min-h-11 items-center rounded-sm bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Contact the Engineering Team
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-hairline pt-6 text-xs text-graphite-foreground/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {company.name}
          </p>
          <p className="label-technical">
            {company.managerRole}: {company.manager}
          </p>
        </div>
      </Container>
    </footer>
  );
}
