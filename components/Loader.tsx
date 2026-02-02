"use client";

import { motion, AnimatePresence } from "framer-motion";
import styles from "./Loader.module.scss";
import { loaderExit, fadeInUp } from "./animations/variants";
import { useReducedMotionContext } from "@/contexts/ReducedMotionContext";

type LoaderProps = {
  isReady?: boolean;
};

const reducedTransition = { duration: 0 };
const defaultTransition = { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const };

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
          variants={reducedMotion ? { ...loaderExit, exit: { ...loaderExit.exit, transition: reducedTransition } } : loaderExit}
          transition={reducedMotion ? reducedTransition : defaultTransition}
        >
          <motion.div
            className={styles.content}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={reducedMotion ? reducedTransition : { delay: 0.2, duration: 0.5 }}
          >
            <motion.span
              className={styles.logo}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={reducedMotion ? reducedTransition : { delay: 0.1, duration: 0.4 }}
            >
              P
            </motion.span>
            <motion.span
              className={styles.text}
              initial={fadeInUp.initial}
              animate={fadeInUp.animate}
              transition={reducedMotion ? reducedTransition : { delay: 0.35, duration: 0.4 }}
            >
              Loading…
            </motion.span>
            <motion.div
              className={styles.progressTrack}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={reducedMotion ? reducedTransition : { delay: 0.5 }}
            >
              <motion.div
                className={styles.progressBar}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={reducedMotion ? reducedTransition : { duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
