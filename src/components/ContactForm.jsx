import { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const INITIAL_VALUES = { name: "", email: "", phone: "", message: "" };

// one validation rule per field — easy to read, easy to extend
const VALIDATORS = {
  name: (val) => val.trim().length >= 3 || "Name must be at least 3 characters.",
  email: (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) || "Enter a valid email address.",
  phone: (val) => /^03\d{9}$/.test(val) || "Enter a valid phone number (e.g. 03001234567).",
  message: (val) => val.trim().length >= 10 || "Message must be at least 10 characters.",
};

export default function ContactForm() {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  // validates one field and stores/clears its error message
  function validateField(name, value) {
    const result = VALIDATORS[name](value);
    setErrors((prev) => ({ ...prev, [name]: result === true ? "" : result }));
    return result === true;
  }

  function handleBlur(e) {
    validateField(e.target.name, e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    // validate every field at once, collect which ones passed
    const results = Object.keys(values).map((key) => validateField(key, values[key]));
    const isValid = results.every(Boolean);

    if (isValid) {
      setSubmitted(true);
      setValues(INITIAL_VALUES);
      setErrors({});
      // TODO: replace with a real fetch()/API call to your backend
    } else {
      setSubmitted(false);
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden border-t border-line bg-white/40 py-20">
      <div className="pointer-events-none absolute right-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full gradient-blob" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-content gap-12 px-6 md:grid-cols-2">
        <Reveal>
          <SectionLabel className="mb-3">Contact</SectionLabel>
          <h2 className="mb-4 font-display text-3xl font-semibold tracking-tight text-ink">Ready to start?</h2>
          <p className="max-w-sm text-muted">
            Tell us which track interests you and we'll get back to you within two
            working days.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-muted">
            <li className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-primary">
                <MapPin size={15} />
              </span>
              Islamabad, Pakistan
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-primary">
                <Mail size={15} />
              </span>
              support@internee.pk
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-primary">
                <Phone size={15} />
              </span>
              +92 300 1234567
            </li>
          </ul>
        </Reveal>

        <Reveal delay={100}>
          <form onSubmit={handleSubmit} noValidate className="rounded-lg border border-line bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-md">
            <Field
              label="Full Name"
              name="name"
              value={values.name}
              error={errors.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Your name"
            />
            <Field
              label="Email Address"
              name="email"
              type="email"
              value={values.email}
              error={errors.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="you@example.com"
            />
            <Field
              label="Phone Number"
              name="phone"
              value={values.phone}
              error={errors.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="03XXXXXXXXX"
            />
            <Field
              label="Message"
              name="message"
              as="textarea"
              value={values.message}
              error={errors.message}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Which track are you interested in?"
            />

            <button
              type="submit"
              className="mt-2 w-full rounded-md bg-primary py-3 font-semibold text-paper shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/20"
            >
              Send Message
            </button>

            {submitted && (
              <p className="mt-3 text-sm font-medium text-primary">
                ✅ Message sent! We'll get back to you soon.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

// a single labeled input/textarea + its error message — kept in
// this file since it's only used here, but could move to its own
// file if you reuse it elsewhere
function Field({ label, name, type = "text", as = "input", value, error, onChange, onBlur, placeholder }) {
  const Tag = as;
  return (
    <div className="mb-4">
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-ink">
        {label}
      </label>
      <Tag
        id={name}
        name={name}
        type={as === "input" ? type : undefined}
        rows={as === "textarea" ? 4 : undefined}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className={`w-full rounded-md border px-3 py-2.5 text-sm outline-none transition-all duration-200 focus:border-primary focus:ring-4 focus:ring-primary/10 ${
          error ? "border-red-400" : "border-line"
        }`}
      />
      <span className="mt-1 block min-h-[1.1rem] text-xs text-red-500">{error}</span>
    </div>
  );
}
