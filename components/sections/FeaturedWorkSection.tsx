"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { featuredProjects } from "@/content/projects";
import { useModal } from "@/contexts/ModalContext";
import styles from "./FeaturedWorkSection.module.scss";

export function FeaturedWorkSection() {
  const { openModal } = useModal();

  return (
    <section
      id="featured-work"
      className={styles.section}
      aria-labelledby="featured-heading"
    >
      <ScrollReveal className={styles.inner}>
        <p className={styles.label}>Featured Work</p>
        <h2 id="featured-heading" className={styles.heading}>
          Designing and shipping for real businesses.
        </h2>
        <p className={styles.subtitle}>
          Selected case studies from product and UX work.
        </p>
        <ul className={styles.list} role="list">
          {featuredProjects.map((project) => (
            <li key={project.id} className={styles.project}>
              <ScrollReveal className={styles.projectInner}>
                <div className={styles.projectText}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDesc}>
                    {project.shortDescription}
                  </p>
                  <Button
                    variant="primary"
                    onClick={() =>
                      openModal("caseStudy", {
                        caseStudy: {
                          id: project.id,
                          title: project.title,
                        },
                      })
                    }
                    className={styles.viewBtn}
                  >
                    View Project
                  </Button>
                </div>
                <div className={styles.projectVisuals}>
                  <div className={styles.mainImage}>
                    <Image
                      src={project.image}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 60vw"
                      className={styles.img}
                    />
                  </div>
                  {project.mobileMockup && (
                    <div className={styles.mobileMockup}>
                      <Image
                        src={project.mobileMockup}
                        alt=""
                        fill
                        sizes="200px"
                        className={styles.img}
                      />
                    </div>
                  )}
                </div>
              </ScrollReveal>
            </li>
          ))}
        </ul>
      </ScrollReveal>
    </section>
  );
}
