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
      <CommunityEducationIntro />
      <CanaryWorkshop />
    </section>
  );
}

function CommunityEducationIntro() {
  return (
    <div className={styles.introSection}>
      <ScrollReveal className={styles.inner}>
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
              Being in this field gives me access to people and spaces where I
              can influence how design is understood.
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
      </ScrollReveal>
    </div>
  );
}

function CanaryWorkshop() {
  return (
    <div className={styles.canarySection} aria-labelledby="canary-heading">
      <ScrollReveal className={styles.inner}>
        <div className={styles.canary}>
          <div className={styles.canaryText}>
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
              Student Workshop • Facilitator
            </Tag>
            <h3 id="canary-heading" className={styles.canaryTitle}>
              Introducing Students to Design in Practice.
            </h3>
            <p className={styles.canaryBody}>
              I was invited to conduct a workshop to introduce students to the
              world of design. With full freedom to shape the session, I used it
              to show what design really involves beyond tools, visuals, and
              buzzwords.
            </p>
            <p className={styles.canaryMeta}>Canary The School, Hyderabad</p>
          </div>

          <div className={styles.cards}>
            <WorkshopCard
              title="Design beyond aesthetics."
              body="I position design as a field with impact across products, systems, and organizations."
              imageSrc="/CanaryWorkshop1.jpg"
            />
            <WorkshopCard
              title="Between idea and execution."
              body="Design is the crucial link turning ideas into reality, along engineering."
              imageSrc="/CanaryWorkshop2.jpg"
            />
            <WorkshopCard
              title="Questions? Answers."
              body="Honest conversations around design careers, common misconceptions and reality."
              imageSrc="/CanaryWorkshop3.jpg"
            />
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}

type WorkshopCardProps = {
  title: string;
  body: string;
  imageSrc?: string;
};

function WorkshopCard({ title, body, imageSrc }: WorkshopCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.cardMedia} aria-hidden>
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt=""
            fill
            className={styles.cardMediaImg}
            sizes="(max-width: 900px) 100vw, 600px"
            unoptimized
          />
        ) : (
          <div className={styles.cardMediaPlaceholder}>Image placeholder</div>
        )}
      </div>
      <div className={styles.cardText}>
        <h4 className={styles.cardTitle}>{title}</h4>
        <p className={styles.cardBody}>{body}</p>
      </div>
    </article>
  );
}

