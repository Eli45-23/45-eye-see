"use client";

import { FormEvent, useMemo, useState } from "react";
import { business } from "@/src/content/business";
import { Button } from "./Button";
import styles from "./ContactForm.module.css";

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
        className={styles.form}
        action={PLACEHOLDER_ENDPOINT}
        method="post"
        target="contact-submit-frame"
        onSubmit={onSubmit}
        noValidate
      >
        <div className={styles.fieldGrid}>
          <label className={styles.field} htmlFor="contact-name">
            <span>Name</span>
            <input
              id="contact-name"
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
              <span id="error-name" className={styles.error}>
                {errors.name}
              </span>
            ) : null}
          </label>

          <label className={styles.field} htmlFor="contact-phone">
            <span>Phone</span>
            <input
              id="contact-phone"
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
              <span id="error-phone" className={styles.error}>
                {errors.phone}
              </span>
            ) : null}
          </label>

          <label className={styles.field} htmlFor="contact-email">
            <span>Email</span>
            <input
              id="contact-email"
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
              <span id="error-email" className={styles.error}>
                {errors.email}
              </span>
            ) : null}
          </label>

          <label className={styles.field} htmlFor="contact-area">
            <span>Borough / Neighborhood</span>
            <input
              id="contact-area"
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
              <span id="error-boroughNeighborhood" className={styles.error}>
                {errors.boroughNeighborhood}
              </span>
            ) : null}
          </label>
        </div>

        <label className={styles.field} htmlFor="contact-service-needed">
          <span>Service needed</span>
          <textarea
            id="contact-service-needed"
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
            <span id="error-serviceNeeded" className={styles.error}>
              {errors.serviceNeeded}
            </span>
          ) : null}
        </label>

        <label className={styles.field} htmlFor="contact-photos">
          <span>Optional photos</span>
          <input id="contact-photos" name="photos" type="file" accept="image/*" multiple />
          <span className={styles.note}>
            Optional upload field is included for now; backend file handling can be added later.
          </span>
        </label>

        {submitNotice ? <p className={styles.notice}>{submitNotice}</p> : null}

        <div className={styles.actions}>
          <Button type="submit">Send Request</Button>
          <a className={styles.callLink} href={`tel:+1${business.phone.replace(/\D/g, "")}`}>
            Or call {business.phone}
          </a>
        </div>
      </form>

      <iframe
        title="Contact form placeholder submission"
        name="contact-submit-frame"
        className={styles.hiddenFrame}
      />
    </>
  );
}
