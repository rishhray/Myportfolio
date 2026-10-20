import { useState } from "react";
import { Send } from "lucide-react";
import { contact, isPlaceholder } from "@/content/site";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

export function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<null | { ok: boolean; text: string }>(null);

  const validate = () => {
    const e: Errors = {};
    if (values.name.trim().length < 2) e.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) e.email = "Please enter a valid email.";
    if (values.message.trim().length < 10) e.message = "Message should be at least 10 characters.";
    return e;
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) {
      setStatus(null);
      return;
    }
    if (isPlaceholder(contact.email)) {
      setStatus({ ok: false, text: "Email isn't set up yet, so this message can't be sent. Please reach out on another channel." });
      return;
    }
    const subject = encodeURIComponent(`Portfolio message from ${values.name}`);
    const body = encodeURIComponent(`${values.message}\n\n— ${values.name} (${values.email})`);
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    setStatus({ ok: true, text: "Your email app should open with the message ready — just hit send there." });
  };

  const field = "w-full rounded-lg border border-input bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none";

  return (
    <form onSubmit={onSubmit} noValidate className="glass space-y-4 rounded-2xl p-6 md:p-8">
      {(["name", "email"] as const).map((k) => (
        <div key={k}>
          <label htmlFor={k} className="mb-1.5 block text-sm font-medium capitalize">{k}</label>
          <input
            id={k}
            type={k === "email" ? "email" : "text"}
            value={values[k]}
            onChange={(e) => setValues({ ...values, [k]: e.target.value })}
            aria-invalid={!!errors[k]}
            aria-describedby={errors[k] ? `${k}-err` : undefined}
            className={field}
            placeholder={k === "email" ? "you@example.com" : "Your name"}
          />
          {errors[k] && <p id={`${k}-err`} className="mt-1 text-xs text-destructive">{errors[k]}</p>}
        </div>
      ))}
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium">Message</label>
        <textarea
          id="message"
          rows={5}
          value={values.message}
          onChange={(e) => setValues({ ...values, message: e.target.value })}
          aria-invalid={!!errors.message}
          className={field}
          placeholder="Share an idea or say hello…"
        />
        {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
      </div>
      <button type="submit" className="bg-gradient-accent glow inline-flex w-full items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">
        Send Message <Send className="h-4 w-4" />
      </button>
      {status && (
        <p role="status" className={status.ok ? "text-sm text-primary" : "text-sm text-destructive"}>{status.text}</p>
      )}
    </form>
  );
}
