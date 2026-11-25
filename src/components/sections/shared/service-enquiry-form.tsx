import React from "react";

import { sendContactEmail } from "@/lib/send-contact-email";

type ServiceOption = { value: string; label: string };

const ECOMMERCE_OPTIONS: ServiceOption[] = [
  { value: "E-commerce Development", label: "E-commerce Website Development" },
  { value: "Custom Online Store", label: "Custom Online Store" },
  { value: "Marketplace Development", label: "Multi-vendor Marketplace" },
  { value: "B2B E-commerce", label: "B2B E-commerce Platform" },
  { value: "E-commerce Redesign", label: "E-commerce Redesign" },
  { value: "Other", label: "Other" },
];

type Props = {
  /** Shown in the email so you know which page the lead came from */
  source?: string;
  /** Pass different options on other service pages (mobile app, SEO, etc.) */
  options?: ServiceOption[];
  defaultService?: string;
};

type Status = "idle" | "sending" | "success" | "error";

const inputClass =
  "w-full rounded-xl border border-[#493B30] bg-[#0E0D0C]/80 px-4 py-3 text-sm text-[#F5F1ED] outline-none transition placeholder:text-[#786C63] focus:border-[#C9A283] focus:ring-2 focus:ring-[#C9A283]/15";

const ServiceEnquiryForm = ({
  source = "E-commerce service page",
  options = ECOMMERCE_OPTIONS,
  defaultService,
}: Props) => {
  const [status, setStatus] = React.useState<Status>("idle");
  const [errorMsg, setErrorMsg] = React.useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;

    const form = e.currentTarget;
    const fd = new FormData(form);

    setStatus("sending");
    setErrorMsg("");

    const result = await sendContactEmail({
      name: String(fd.get("name") || "").trim(),
      phone: String(fd.get("phone") || "").trim(),
      service: String(fd.get("service") || ""),
      source,
      botcheck: fd.get("botcheck") === "on",
    });

    if (result.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
      setErrorMsg(result.error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot: hidden from people, bots tick it */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium text-[#F5F1ED]">
          Full Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Enter your full name"
          autoComplete="name"
          required
          className={inputClass}
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="mb-2 block text-sm font-medium text-[#F5F1ED]">
          Phone Number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+91 98765 43210"
          pattern="[+]?[0-9\s\-]{10,16}"
          title="Enter a valid phone number, for example +91 98765 43210"
          autoComplete="tel"
          required
          className={inputClass}
        />
      </div>

      <div>
        <label
          htmlFor="service"
          className="mb-2 block text-sm font-medium text-[#F5F1ED]">
          Type of Service
        </label>
        <select
          id="service"
          name="service"
          required
          defaultValue={defaultService ?? options[0].value}
          className="w-full appearance-none rounded-xl border border-[#493B30] bg-[#0E0D0C]/80 px-4 py-3 text-sm text-[#B8AAA0] outline-none transition focus:border-[#C9A283] focus:ring-2 focus:ring-[#C9A283]/15">
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#C9A283] to-[#8F6B52] px-6 py-3.5 text-sm font-semibold text-[#17110D] shadow-lg shadow-[#8F6B52]/15 transition hover:-translate-y-0.5 hover:shadow-[#8F6B52]/30 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0">
        {status === "sending" ? "Sending..." : "Get a Free Consultation"}
        {status !== "sending" && (
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        )}
      </button>

      {/* Status message (read out by screen readers) */}
      <p
        role="status"
        aria-live="polite"
        className="min-h-5 text-center text-sm">
        {status === "success" && (
          <span className="text-green-400">
            Thanks! We've received your enquiry and will call you soon.
          </span>
        )}
        {status === "error" && <span className="text-red-400">{errorMsg}</span>}
      </p>

      <p className="text-center text-xs text-[#887B70]">
        Your information is safe with us. We'll only contact you about your
        enquiry.
      </p>
    </form>
  );
};

export default ServiceEnquiryForm;
