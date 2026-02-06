"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/components/animations/variants";
import { Tag } from "@/components/ui/Tag";
import { useFirstLoadReady } from "@/app/PageClient";
import styles from "./HeroSection.module.scss";

export function HeroSection() {
  const isReady = useFirstLoadReady();

  return (
    <section id="hero" className={styles.hero} aria-label="Hero">
      <motion.div
        className={styles.inner}
        variants={staggerContainer}
        initial="initial"
        animate={isReady ? "animate" : "initial"}
      >
        <Tag
          as="p"
          motion
          className={styles.label}
          motionProps={{
            initial: fadeInUp.initial,
            animate: isReady ? fadeInUp.animate : fadeInUp.initial,
            transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
          }}
          icon={
            <Image
              src="/pradyhead.png"
              alt=""
              width={40}
              height={40}
              className={styles.labelHead}
              priority
              unoptimized
              aria-hidden
            />
          }
        >
          Pradyumn Soni
        </Tag>
        <motion.h1
          className={styles.title}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
        >
          UX Design Portfolio
        </motion.h1>
        <motion.div
          className={styles.mockups}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.15 }}
          aria-hidden
        >
          <Image
            src="/HeroDeviceMockups.png"
            alt=""
            width={960}
            height={540}
            className={styles.mockupImage}
            priority
            sizes="(max-width: 900px) 100vw, 960px"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
