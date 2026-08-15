"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/components/animations/variants";
import { useFirstLoadReady } from "@/app/PageClient";
import styles from "./HeroSection.module.scss";

export function HeroSection() {
  const isReady = useFirstLoadReady();

  return (
    <section id="hero" className={styles.hero} aria-label="Pradyumn Soni">
      <h1 className={styles.visuallyHidden}>Pradyumn Soni</h1>
      <motion.div
        className={styles.inner}
        variants={staggerContainer}
        initial="initial"
        animate={isReady ? "animate" : "initial"}
      >
        <motion.div className={styles.portrait} variants={fadeInUp}>
          <Image
            src="/pradyhead2.0.jpg"
            alt=""
            width={88}
            height={88}
            className={styles.portraitImg}
            priority
            unoptimized
          />
        </motion.div>
        <motion.p
          id="about"
          className={styles.body}
          variants={fadeInUp}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          I design UX/UI because products don&apos;t have the luxury of being confusing.
        </motion.p>
        <motion.blockquote
          className={styles.quote}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
        >
          <p className={styles.quoteText}>
            “To be truly simple, you have to go really deep.” <cite className={styles.quoteCite}>Jony Ive</cite>
          </p>
        </motion.blockquote>
      </motion.div>
    </section>
  );
}
