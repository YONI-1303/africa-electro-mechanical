import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { company } from "@/content/company";
import { cn } from "@/lib/utils";
import { Container } from "./ui";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Industries", to: "/industries" },
  { label: "Equipment", to: "/equipment" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const overlay = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || !overlay;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        solid
          ? "border-b border-hairline bg-graphite/95 backdrop-blur-sm"
          : "bg-transparent",
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-4 lg:h-20">
          <Link
            to="/"
            className="flex items-center gap-3"
            aria-label={`${company.name} — home`}
          >
            <img
              src={company.logo}
              alt={`${company.name} logo`}
              width={44}
              height={44}
              className="h-10 w-10 rounded-sm object-cover object-left lg:h-11 lg:w-11"
            />
            <span className="hidden leading-tight sm:block">
              <span className="block font-display text-sm font-semibold tracking-tight text-graphite-foreground">
                AFRICA ELECTRO MECHANICAL
              </span>
              <span className="label-technical block text-graphite-foreground/55">
                Engineering PLC
              </span>
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm text-graphite-foreground/75 transition-colors hover:text-graphite-foreground"
                activeProps={{ className: "text-graphite-foreground" }}
                activeOptions={{ exact: link.to === "/" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={company.phoneHref}
              className="hidden min-h-11 items-center gap-2 px-3 text-sm text-graphite-foreground/75 transition-colors hover:text-graphite-foreground md:inline-flex"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {company.phone}
            </a>
            <Link
              to="/contact"
              className="hidden min-h-11 items-center rounded-sm bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 lg:inline-flex"
            >
              Request a Consultation
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="inline-flex h-11 w-11 items-center justify-center rounded-sm text-graphite-foreground lg:hidden"
            >
              {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </Container>

      {open ? (
        <div
          id="mobile-menu"
          className="fixed inset-0 top-16 z-40 flex flex-col bg-graphite lg:hidden"
        >
          <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-5 py-6">
            <ul className="divide-y divide-hairline">
              {links.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="flex min-h-14 items-center font-display text-xl text-graphite-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 grid gap-3">
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-sm bg-primary px-5 text-sm font-medium text-primary-foreground"
              >
                Request a Consultation
              </Link>
              <a
                href={company.phoneHref}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border border-graphite-foreground/25 px-5 text-sm text-graphite-foreground"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call {company.phone}
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
