"use client";

import { FormEvent, useMemo, useState } from "react";
import { business } from "@/src/content/business";
import { Button } from "./Button";

type FormValues = {
  name: string;
  phone: string;
  email: string;
  boroughNeighborhood: string;
  serviceNeeded: string;
};

type FieldName = keyof FormValues;
type FormErrors = Partial<Record<FieldName, string>>;

const PLACEHOLDER_ENDPOINT = "https://example.com/api/contact-request";

const initialValues: FormValues = {
  name: "",
  phone: "",
  email: "",
  boroughNeighborhood: "",
  serviceNeeded: "",
};

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (values.name.trim().length < 2) {
    errors.name = "Please enter your full name.";
  }

  if (values.phone.replace(/\D/g, "").length < 10) {
    errors.phone = "Please enter a valid phone number.";
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (values.boroughNeighborhood.trim().length < 2) {
    errors.boroughNeighborhood = "Tell us your borough or neighborhood.";
  }

  if (values.serviceNeeded.trim().length < 8) {
    errors.serviceNeeded = "Please share the service you need.";
  }

  return errors;
}

const inputClass =
  "mt-1 w-full rounded-xl border border-[var(--border)] bg-[var(--card)] px-3 py-2 text-sm text-[var(--text)] shadow-sm outline-none ring-0 placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[rgba(59,130,246,0.25)]";

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({});
  const [submitNotice, setSubmitNotice] = useState<string>("");

  const errors = useMemo(() => validate(values), [values]);

  function setField(name: FieldName, value: string) {
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  function markTouched(name: FieldName) {
    setTouched((prev) => ({ ...prev, [name]: true }));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    const allTouched: Partial<Record<FieldName, boolean>> = {
      name: true,
      phone: true,
      email: true,
      boroughNeighborhood: true,
      serviceNeeded: true,
    };

    setTouched(allTouched);

    if (Object.keys(errors).length > 0) {
      event.preventDefault();
      setSubmitNotice("Please fix the highlighted fields and try again.");
      return;
    }

    setSubmitNotice(
      "Thanks. This demo form posts to a placeholder endpoint while backend processing is pending."
    );
  }

  return (
    <>
      <form
        className="section-elevated rounded-3xl border border-[var(--border)] p-5 ui-shadow-sm sm:p-7"
        action={PLACEHOLDER_ENDPOINT}
        method="post"
        target="contact-submit-frame"
        onSubmit={onSubmit}
        noValidate
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="text-sm font-medium text-[var(--text)]" htmlFor="contact-name">
            Name
            <input
              id="contact-name"
              className={inputClass}
              name="name"
              autoComplete="name"
              value={values.name}
              onChange={(event) => setField("name", event.target.value)}
              onBlur={() => markTouched("name")}
              aria-invalid={Boolean(touched.name && errors.name)}
              aria-describedby={touched.name && errors.name ? "error-name" : undefined}
              required
            />
            {touched.name && errors.name ? (
              <span id="error-name" className="mt-1 block text-xs font-medium text-red-600">
                {errors.name}
              </span>
            ) : null}
          </label>

          <label className="text-sm font-medium text-[var(--text)]" htmlFor="contact-phone">
            Phone
            <input
              id="contact-phone"
              className={inputClass}
              name="phone"
              autoComplete="tel"
              value={values.phone}
              onChange={(event) => setField("phone", event.target.value)}
              onBlur={() => markTouched("phone")}
              aria-invalid={Boolean(touched.phone && errors.phone)}
              aria-describedby={touched.phone && errors.phone ? "error-phone" : undefined}
              required
            />
            {touched.phone && errors.phone ? (
              <span id="error-phone" className="mt-1 block text-xs font-medium text-red-600">
                {errors.phone}
              </span>
            ) : null}
          </label>

          <label className="text-sm font-medium text-[var(--text)]" htmlFor="contact-email">
            Email
            <input
              id="contact-email"
              className={inputClass}
              name="email"
              type="email"
              autoComplete="email"
              value={values.email}
              onChange={(event) => setField("email", event.target.value)}
              onBlur={() => markTouched("email")}
              aria-invalid={Boolean(touched.email && errors.email)}
              aria-describedby={touched.email && errors.email ? "error-email" : undefined}
              required
            />
            {touched.email && errors.email ? (
              <span id="error-email" className="mt-1 block text-xs font-medium text-red-600">
                {errors.email}
              </span>
            ) : null}
          </label>

          <label className="text-sm font-medium text-[var(--text)]" htmlFor="contact-area">
            Borough / Neighborhood
            <input
              id="contact-area"
              className={inputClass}
              name="boroughNeighborhood"
              value={values.boroughNeighborhood}
              onChange={(event) => setField("boroughNeighborhood", event.target.value)}
              onBlur={() => markTouched("boroughNeighborhood")}
              aria-invalid={Boolean(
                touched.boroughNeighborhood && errors.boroughNeighborhood
              )}
              aria-describedby={
                touched.boroughNeighborhood && errors.boroughNeighborhood
                  ? "error-boroughNeighborhood"
                  : undefined
              }
              required
            />
            {touched.boroughNeighborhood && errors.boroughNeighborhood ? (
              <span
                id="error-boroughNeighborhood"
                className="mt-1 block text-xs font-medium text-red-600"
              >
                {errors.boroughNeighborhood}
              </span>
            ) : null}
          </label>
        </div>

        <label className="mt-4 block text-sm font-medium text-[var(--text)]" htmlFor="contact-service-needed">
          Service needed
          <textarea
            id="contact-service-needed"
            className={`${inputClass} min-h-28`}
            name="serviceNeeded"
            rows={4}
            value={values.serviceNeeded}
            onChange={(event) => setField("serviceNeeded", event.target.value)}
            onBlur={() => markTouched("serviceNeeded")}
            aria-invalid={Boolean(touched.serviceNeeded && errors.serviceNeeded)}
            aria-describedby={
              touched.serviceNeeded && errors.serviceNeeded ? "error-serviceNeeded" : undefined
            }
            required
          />
          {touched.serviceNeeded && errors.serviceNeeded ? (
            <span id="error-serviceNeeded" className="mt-1 block text-xs font-medium text-red-600">
              {errors.serviceNeeded}
            </span>
          ) : null}
        </label>

        <label className="mt-4 block text-sm font-medium text-[var(--text)]" htmlFor="contact-photos">
          Optional photos
          <input
            id="contact-photos"
            className={`${inputClass} file:mr-3 file:rounded-lg file:border-0 file:bg-[var(--accent)] file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-white hover:file:bg-[#60a5fa]`}
            name="photos"
            type="file"
            accept="image/*"
            multiple
          />
          <span className="mt-1 block text-xs text-[var(--muted)]">
            Optional upload field is included for now; backend file handling can be added later.
          </span>
        </label>

        {submitNotice ? (
          <p className="mt-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm text-[var(--text)]">
            {submitNotice}
          </p>
        ) : null}

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Button type="submit">Send Request</Button>
          <a
            className="text-sm font-semibold text-[var(--accent)] underline-offset-4 hover:underline"
            href={`tel:+1${business.phone.replace(/\D/g, "")}`}
          >
            Or call {business.phone}
          </a>
        </div>
      </form>

      <iframe title="Contact form placeholder submission" name="contact-submit-frame" className="hidden" />
    </>
  );
}
