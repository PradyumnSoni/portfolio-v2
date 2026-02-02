"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { selectedProjects } from "@/content/projects";
import { useModal } from "@/contexts/ModalContext";
import styles from "./SelectedProjectsSection.module.scss";

export function SelectedProjectsSection() {
  const [index, setIndex] = useState(0);
  const { openModal } = useModal();
  const project = selectedProjects[index] ?? selectedProjects[0];

  return (
    <section
      id="selected-projects"
      className={styles.section}
      aria-labelledby="selected-heading"
    >
      <ScrollReveal className={styles.inner}>
        <h2 id="selected-heading" className={styles.heading}>
          Selected Projects
        </h2>
        <p className={styles.subtitle}>
          A selection of recent UX and product design work.
        </p>
        <div className={styles.carousel}>
          <div
            className={styles.track}
            role="list"
            aria-label="Project carousel"
          >
            <AnimatePresence mode="wait">
              <motion.article
                key={project.id}
                className={styles.card}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                role="listitem"
              >
                <button
                  type="button"
                  className={styles.cardButton}
                  onClick={() =>
                    openModal("caseStudy", {
                      caseStudy: { id: project.id, title: project.title },
                    })
                  }
                >
                  <div className={styles.thumb}>
                    <Image
                      src={project.thumbnail}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className={styles.thumbImg}
                    />
                  </div>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                </button>
              </motion.article>
            </AnimatePresence>
          </div>
          <div className={styles.dots} role="tablist" aria-label="Project slides">
            {selectedProjects.map((p, i) => (
              <button
                key={p.id}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Go to ${p.title}`}
                className={`${styles.dot} ${i === index ? styles.dotActive : ""}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
