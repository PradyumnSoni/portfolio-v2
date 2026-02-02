"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";
import styles from "./ContactSection.module.scss";

export function ContactSection() {
  return (
    <section
      id="contact"
      className={styles.contact}
      aria-labelledby="contact-heading"
    >
      <ScrollReveal className={styles.inner}>
        <h2 id="contact-heading" className={styles.heading}>
          Contact
        </h2>
        <p className={styles.body}>
          Interested in working together? Get in touch.
        </p>
        <div className={styles.actions}>
          <Button
            variant="primary"
            href="mailto:hello@example.com"
            className={styles.button}
          >
            Email me
          </Button>
          <Button
            variant="secondary"
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            LinkedIn
          </Button>
        </div>
      </ScrollReveal>
    </section>
  );
}
