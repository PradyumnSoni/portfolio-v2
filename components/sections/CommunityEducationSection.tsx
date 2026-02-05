"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Tag } from "@/components/ui/Tag";
import styles from "./CommunityEducationSection.module.scss";

export function CommunityEducationSection() {
  return (
    <section
      id="community-education"
      className={styles.section}
      aria-labelledby="community-education-heading"
    >
      <ScrollReveal className={styles.inner}>
        <CommunityEducationIntro />
      </ScrollReveal>
    </section>
  );
}

function CommunityEducationIntro() {
  return (
    <div className={styles.intro}>
      <div className={styles.introColumn}>
        <Tag
          as="div"
          className={styles.introTag}
          textClassName={styles.tagText}
          icon={
            <Image
              src="/pradyhead.png"
              alt=""
              width={32}
              height={32}
              className={styles.tagIcon}
              aria-hidden
            />
          }
        >
          Community &amp; Education
        </Tag>

        <h2 id="community-education-heading" className={styles.heading}>
          Inspiring every kind of mind.
        </h2>

        <p className={styles.subheading}>
          Being in this field gives me access to people and spaces where I can
          influence how design is understood.
        </p>
      </div>

      <div className={styles.media} aria-hidden>
        <Image
          src="/CommunityEducationIntroGIF.gif"
          alt=""
          fill
          className={styles.mediaImg}
          sizes="(max-width: 768px) 92vw, 1200px"
          unoptimized
        />
      </div>
    </div>
  );
}

