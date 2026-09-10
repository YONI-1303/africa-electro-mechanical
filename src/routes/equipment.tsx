import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Layout, PageHero } from "@/components/site/Layout";
import { Container } from "@/components/site/ui";
import { EquipmentGallery } from "@/components/site/EquipmentGallery";
import { equipment } from "@/content/company";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/equipment")({
  head: () =>
    seo({
      title: "Equipment & Machinery Gallery | Africa Electro Mechanical Engineering",
      description:
        "Industrial machinery, control panels, motors and drives, power systems and building equipment installed, serviced and repaired by Africa Electro Mechanical Engineering PLC.",
      path: "/equipment",
    }),
  component: Equipment,
});

function Equipment() {
  return (
    <Layout>
      <PageHero
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Equipment" }]}
        eyebrow="Equipment"
        title="Machinery and systems we install, service and repair."
        intro="A catalogue of the electromechanical equipment types our work covers. Images are supplied by the company; no specifications, models or ownership claims are implied."
        image={equipment[0].image}
        imageAlt={equipment[0].alt}
      />

      <section className="py-16 lg:py-24">
        <Container>
          <EquipmentGallery />
        </Container>
      </section>

      <section className="border-t border-border bg-secondary py-16 lg:py-20">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-6">
            <h2 className="max-w-xl font-display text-2xl font-semibold sm:text-3xl">
              Have similar equipment that needs installation, servicing or repair?
            </h2>
            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center gap-2 rounded-sm bg-primary px-6 text-sm font-medium text-primary-foreground"
            >
              Ask About This Equipment
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </section>
    </Layout>
  );
}
