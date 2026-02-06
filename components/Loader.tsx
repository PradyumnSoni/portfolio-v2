"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Loader.module.scss";
import { loaderExit } from "./animations/variants";
import { useReducedMotionContext } from "@/contexts/ReducedMotionContext";

type LoaderProps = {
  isReady?: boolean;
};

const reducedTransition = { duration: 0 };
const defaultTransition = { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const };

const bottomHiVariants = {
  initial: { opacity: 1 },
  exit: {
    opacity: 0,
    transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] as const, delay: 1.0 },
  },
};

const bottomMessageVariants = {
  initial: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] as const, delay: 1.3 },
  },
};

export function Loader({ isReady = false }: LoaderProps) {
  const reducedMotion = useReducedMotionContext();

  return (
    <AnimatePresence mode="wait">
      {!isReady && (
        <motion.div
          key="loader"
          className={styles.loader}
          role="status"
          aria-label="Loading"
          initial="initial"
          exit="exit"
          variants={
            reducedMotion
              ? { ...loaderExit, exit: { ...loaderExit.exit, transition: reducedTransition } }
              : loaderExit
          }
          transition={reducedMotion ? reducedTransition : defaultTransition}
        >
          <motion.div
            className={styles.content}
            initial={reducedMotion ? undefined : { opacity: 0, y: 8 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={reducedMotion ? reducedTransition : { delay: 0.05, duration: 0.4 }}
          >
            <div className={styles.lineTop}>
              <span className={styles.logo}>
                <Image
                  src="/pradyhead.png"
                  alt=""
                  width={80}
                  height={80}
                  className={styles.logoImage}
                  priority
                  unoptimized
                  aria-hidden
                />
              </span>
            </div>
            <div className={styles.lineBottom}>
              {!reducedMotion ? (
                <>
                  <motion.span
                    className={styles.lineText}
                    variants={bottomHiVariants}
                    initial="initial"
                    animate="exit"
                  >
                    Hi!
                  </motion.span>
                  <motion.span
                    className={styles.lineSubtext}
                    variants={bottomMessageVariants}
                    initial="initial"
                    animate="show"
                  >
                    This is how I design...
                  </motion.span>
                </>
              ) : (
                <>
                  <span className={styles.lineText}>Hi!</span>
                  <span className={styles.lineSubtext}>
                    This is how I design...
                  </span>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
