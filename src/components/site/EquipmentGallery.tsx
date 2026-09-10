import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, Maximize2, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { equipment, equipmentCategories, type EquipmentItem } from "@/content/company";
import { cn } from "@/lib/utils";

export function EquipmentGallery({ limit }: { limit?: number }) {
  const [category, setCategory] = useState("All");
  const [active, setActive] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const items: EquipmentItem[] = equipment
    .filter((item) => category === "All" || item.category === category)
    .slice(0, limit ?? equipment.length);

  const close = useCallback(() => {
    setActive(null);
    triggerRef.current?.focus();
  }, []);

  useEffect(() => {
    if (active === null) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") setActive((i) => (i === null ? i : (i + 1) % items.length));
      if (e.key === "ArrowLeft")
        setActive((i) => (i === null ? i : (i - 1 + items.length) % items.length));
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, items.length]);

  const current = active === null ? null : items[active];

  return (
    <div>
      {limit ? null : (
        <div role="group" aria-label="Filter equipment by category" className="mb-8 flex flex-wrap gap-2">
          {equipmentCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              aria-pressed={category === cat}
              className={cn(
                "label-technical min-h-11 rounded-sm border px-4 transition-colors",
                category === cat
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:border-foreground/30 hover:text-foreground",
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      <ul className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <li key={item.id} className="group relative bg-card">
            <button
              type="button"
              onClick={(e) => {
                triggerRef.current = e.currentTarget;
                setActive(index);
              }}
              className="block w-full text-left"
            >
              <span className="relative block aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <span className="absolute top-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-sm bg-graphite/80 text-graphite-foreground opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                  <Maximize2 className="h-4 w-4" aria-hidden="true" />
                </span>
              </span>
              <span className="flex items-start justify-between gap-4 p-5">
                <span>
                  <span className="label-technical block text-primary">{item.category}</span>
                  <span className="mt-2 block font-display text-base font-medium">
                    {item.label}
                  </span>
                </span>
                <span className="label-technical mt-1 shrink-0 text-muted-foreground">View</span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      {current ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.label}
          className="fixed inset-0 z-[60] flex flex-col bg-graphite/97 p-4 backdrop-blur-sm sm:p-8"
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div className="flex items-start justify-between gap-6 text-graphite-foreground">
            <div>
              <p className="label-technical text-primary">{current.category}</p>
              <h2 className="mt-1 font-display text-xl font-medium">{current.label}</h2>
            </div>
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-graphite-foreground/25"
              aria-label="Close image viewer"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <div className="flex min-h-0 flex-1 items-center justify-center py-6">
            <img
              src={current.image}
              alt={current.alt}
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 text-graphite-foreground/70">
            <p className="text-sm">
              {(active ?? 0) + 1} / {items.length}
            </p>
            <Link
              to="/contact"
              className="inline-flex min-h-11 items-center gap-2 rounded-sm bg-primary px-5 text-sm font-medium text-primary-foreground"
            >
              Ask About This Equipment
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
