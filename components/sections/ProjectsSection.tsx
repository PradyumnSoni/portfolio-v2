"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { useModal } from "@/contexts/ModalContext";
import { projects } from "@/content/projects";
import styles from "./ProjectsSection.module.scss";

export function ProjectsSection() {
  const { openModal } = useModal();

  return (
    <section
      id="projects"
      className={styles.projects}
      aria-labelledby="projects-heading"
    >
      <ScrollReveal className={styles.inner}>
        <h2 id="projects-heading" className={styles.heading}>
          Projects
        </h2>
        <ul className={styles.grid} role="list">
          {projects.map((project) => (
            <li key={project.id}>
              <Card
                className={styles.card}
                role="button"
                tabIndex={0}
                onClick={() =>
                  openModal("caseStudy", {
                    caseStudy: { id: project.id, title: project.title },
                  })
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openModal("caseStudy", {
                      caseStudy: { id: project.id, title: project.title },
                    });
                  }
                }}
              >
                <div className={styles.thumb}>
                  <Image
                    src={project.thumbnail}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={styles.thumbImg}
                  />
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <p className={styles.cardMeta}>
                    {project.role} · {project.timeframe}
                  </p>
                  <p className={styles.cardDesc}>{project.shortDescription}</p>
                  <Button
                    variant="primary"
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal("caseStudy", {
                        caseStudy: { id: project.id, title: project.title },
                      });
                    }}
                  >
                    View case study
                  </Button>
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </ScrollReveal>
    </section>
  );
}
