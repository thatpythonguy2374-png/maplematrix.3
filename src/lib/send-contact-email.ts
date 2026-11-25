// src/lib/send-contact-email.ts
//
// One helper used by every form on the site. Sends the enquiry to YOUR inbox via Web3Forms.
// 1. Get a free access key at https://web3forms.com (enter your email, the key arrives by mail)
// 2. Add to .env:   VITE_WEB3FORMS_KEY=your-access-key   (restart the dev server)
//    (Next.js: NEXT_PUBLIC_WEB3FORMS_KEY and process.env instead of import.meta.env)

export type EnquiryPayload = {
  name: string;
  /** Which form/page sent this, shows up in the email subject and body */
  source: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
  /** Honeypot: real users never tick this. Bots do. */
  botcheck?: boolean;
};

export type SendResult = { ok: true } | { ok: false; error: string };

const ENDPOINT = "https://api.web3forms.com/submit";

export async function sendContactEmail(data: EnquiryPayload): Promise<SendResult> {
  // Pretend success for bots so they don't retry
  if (data.botcheck) return { ok: true };

  const accessKey = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined;
  if (!accessKey) {
    return { ok: false, error: "Email service is not configured." };
  }

  // Only send fields that have a value, so the email stays clean
  const fields: Record<string, string> = {
    name: data.name,
    source: data.source,
    ...(data.email && { email: data.email }), // replies go to the visitor when present
    ...(data.phone && { phone: data.phone }),
    ...(data.service && { service: data.service }),
    ...(data.message && { message: data.message }),
  };

  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `New enquiry from ${data.name} (${data.source}) | Maple Matrix`,
        from_name: "Maple Matrix Website",
        ...fields,
      }),
    });

    const json = await res.json().catch(() => null);

    if (res.ok && json?.success) return { ok: true };
    return { ok: false, error: json?.message || "Could not send your message." };
  } catch {
    return { ok: false, error: "Network error. Please try again." };
  }
}