"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import styles from "./ProcessSection.module.scss";

const steps = [
  { title: "Research", body: "Understand users and context." },
  { title: "Ideate", body: "Explore concepts and flows." },
  { title: "Design", body: "Prototype and refine in Figma." },
  { title: "Test", body: "Validate with users and iterate." },
];

export function ProcessSection() {
  return (
    <section
      id="process"
      className={styles.process}
      aria-labelledby="process-heading"
    >
      <ScrollReveal className={styles.inner}>
        <h2 id="process-heading" className={styles.heading}>
          Process
        </h2>
        <ol className={styles.steps} role="list">
          {steps.map((step, i) => (
            <li key={step.title} className={styles.step}>
              <span className={styles.stepNum} aria-hidden>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepBody}>{step.body}</p>
            </li>
          ))}
        </ol>
      </ScrollReveal>
    </section>
  );
}
