import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, User } from "lucide-react";
import { Layout, PageHero } from "@/components/site/Layout";
import { Container } from "@/components/site/ui";
import { ContactForm } from "@/components/site/ContactForm";
import { company, services } from "@/content/company";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    seo({
      title: "Contact | Africa Electro Mechanical Engineering PLC, Addis Ababa",
      description:
        "Request engineering support from Africa Electro Mechanical Engineering PLC in Bole, Addis Ababa. Call 0973737494 or send a project inquiry.",
      path: "/contact",
    }),
  component: Contact,
});

function Contact() {
  return (
    <Layout>
      <PageHero
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
        eyebrow="Contact"
        title="Request engineering support."
        intro="Describe the equipment, the site and what needs to happen. We will review the request and respond with the practical next step."
        image={services[5].image}
        imageAlt={services[5].imageAlt}
      />

      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
            <div>
              <h2 className="label-technical text-muted-foreground">Direct contact</h2>
              <ul className="mt-6 divide-y divide-border border-y border-border">
                <li className="flex items-start gap-4 py-5">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <p className="label-technical text-muted-foreground">Phone</p>
                    <a
                      href={company.phoneHref}
                      className="mt-1 block font-display text-lg font-medium hover:text-primary"
                    >
                      {company.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4 py-5">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <p className="label-technical text-muted-foreground">Email</p>
                    <a
                      href={`mailto:${company.email}`}
                      className="mt-1 block font-display text-lg font-medium break-all hover:text-primary"
                    >
                      {company.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4 py-5">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <p className="label-technical text-muted-foreground">Location</p>
                    <p className="mt-1 font-display text-lg font-medium">{company.location}</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 py-5">
                  <User className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <p className="label-technical text-muted-foreground">{company.managerRole}</p>
                    <p className="mt-1 font-display text-lg font-medium">{company.manager}</p>
                  </div>
                </li>
              </ul>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                For breakdowns and urgent equipment faults, calling is usually fastest.
              </p>
            </div>

            <div>
              <h2 className="label-technical text-muted-foreground">Project inquiry</h2>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
}
