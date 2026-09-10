import { useState, type FormEvent } from "react";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import {
  FORMSPREE_ENDPOINT,
  industryOptions,
  serviceOptions,
  timelineOptions,
} from "@/content/company";
import { cn } from "@/lib/utils";

type Errors = Record<string, string>;

const fieldClass =
  "mt-2 block w-full min-h-11 rounded-sm border border-input bg-card px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 focus-visible:border-primary";

function Field({
  id,
  label,
  children,
  error,
  required,
  hint,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
  error?: string;
  required?: boolean;
  hint?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="label-technical text-muted-foreground">
        {label}
        {required ? <span className="text-primary"> *</span> : null}
      </label>
      {children}
      {hint ? <p className="mt-1.5 text-xs text-muted-foreground">{hint}</p> : null}
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 flex items-center gap-1.5 text-xs text-destructive">
          <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const next: Errors = {};
    const name = String(data.get("full_name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const detail = String(data.get("message") ?? "").trim();
    const service = String(data.get("service_needed") ?? "");

    if (name.length < 2) next.full_name = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Please enter a valid email address.";
    if (!service) next.service_needed = "Please select the service you need.";
    if (detail.length < 10) next.message = "Please describe the requirement in a little more detail.";
    if (!data.get("consent")) next.consent = "Please confirm we may use your details to respond.";

    setErrors(next);
    if (Object.keys(next).length > 0) {
      const first = document.getElementById(Object.keys(next)[0]);
      first?.focus();
      return;
    }

    if (FORMSPREE_ENDPOINT.includes("YOUR_FORM_ID")) {
      setStatus("error");
      setMessage(
        "The inquiry form is not connected to a mailbox yet. Please email or call us directly in the meantime.",
      );
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!response.ok) throw new Error(`Request failed: ${response.status}`);
      setStatus("success");
      setMessage(
        "Thank you. Your inquiry has been received. The Africa Electro Mechanical Engineering team will review your request and contact you.",
      );
      form.reset();
    } catch {
      setStatus("error");
      setMessage(
        "Your inquiry could not be sent. Please try again, or contact us by phone or email.",
      );
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="panel flex flex-col items-start gap-4 p-8">
        <CheckCircle2 className="h-8 w-8 text-primary" aria-hidden="true" />
        <h3 className="font-display text-xl font-semibold">Inquiry received</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{message}</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="min-h-11 rounded-sm border border-border px-5 text-sm hover:bg-accent"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      action={FORMSPREE_ENDPOINT}
      method="POST"
      onSubmit={handleSubmit}
      noValidate
      className="panel p-6 sm:p-8"
    >
      {/* Honeypot — hidden from users, catches automated submissions. */}
      <div aria-hidden="true" className="absolute h-0 w-0 overflow-hidden">
        <label htmlFor="company_website">Do not fill this field</label>
        <input id="company_website" type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="full_name" label="Full Name" required error={errors.full_name}>
          <input
            id="full_name"
            name="full_name"
            type="text"
            autoComplete="name"
            required
            aria-invalid={!!errors.full_name}
            aria-describedby={errors.full_name ? "full_name-error" : undefined}
            className={fieldClass}
          />
        </Field>

        <Field id="organization" label="Company / Organization">
          <input
            id="organization"
            name="organization"
            type="text"
            autoComplete="organization"
            className={fieldClass}
          />
        </Field>

        <Field id="email" label="Email Address" required error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={fieldClass}
          />
        </Field>

        <Field id="phone" label="Phone Number">
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={fieldClass} />
        </Field>

        <Field id="service_needed" label="Service Needed" required error={errors.service_needed}>
          <select
            id="service_needed"
            name="service_needed"
            required
            defaultValue=""
            aria-invalid={!!errors.service_needed}
            aria-describedby={errors.service_needed ? "service_needed-error" : undefined}
            className={fieldClass}
          >
            <option value="" disabled>
              Select a service
            </option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>

        <Field id="industry" label="Industry / Project Type">
          <select id="industry" name="industry" defaultValue="" className={fieldClass}>
            <option value="">Select an option</option>
            {industryOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>

        <Field id="project_location" label="Project Location">
          <input
            id="project_location"
            name="project_location"
            type="text"
            placeholder="City, region or site"
            className={fieldClass}
          />
        </Field>

        <Field id="timeline" label="Preferred Timeline">
          <select id="timeline" name="timeline" defaultValue="" className={fieldClass}>
            <option value="">Select an option</option>
            {timelineOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>

        <div className="sm:col-span-2">
          <Field
            id="message"
            label="Message / Project Description"
            required
            error={errors.message}
            hint="Equipment involved, site conditions, symptoms observed or scope required."
          >
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
              className={cn(fieldClass, "resize-y")}
            />
          </Field>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex items-start gap-3">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            value="yes"
            required
            aria-invalid={!!errors.consent}
            aria-describedby={errors.consent ? "consent-error" : undefined}
            className="mt-1 h-5 w-5 shrink-0 rounded-sm border border-input accent-[var(--color-primary)]"
          />
          <label htmlFor="consent" className="text-sm leading-relaxed text-muted-foreground">
            I agree that Africa Electro Mechanical Engineering PLC may use the details above to
            respond to this inquiry.
          </label>
        </div>
        {errors.consent ? (
          <p id="consent-error" className="mt-1.5 flex items-center gap-1.5 text-xs text-destructive">
            <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
            {errors.consent}
          </p>
        ) : null}
      </div>

      {status === "error" ? (
        <p role="alert" className="mt-6 flex items-start gap-2 border-l-2 border-destructive bg-destructive/5 p-4 text-sm text-foreground">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" aria-hidden="true" />
          {message}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-sm bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Sending inquiry…
          </>
        ) : (
          "Request Engineering Support"
        )}
      </button>
      <p className="mt-3 text-xs text-muted-foreground">
        Fields marked with * are required.
      </p>
    </form>
  );
}
