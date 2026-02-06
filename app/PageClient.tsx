"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { motion } from "framer-motion";
import { Loader } from "@/components/Loader";

type PageClientProps = {
  children: ReactNode;
};

const FirstLoadContext = createContext(false);

export function useFirstLoadReady() {
  return useContext(FirstLoadContext);
}

const siteVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const, delay: 0.15 },
  },
};

export function PageClient({ children }: PageClientProps) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const MIN_DURATION = 2500;
    const start = Date.now();
    let finished = false;

    const finish = () => {
      if (finished) return;
      finished = true;
      const elapsed = Date.now() - start;
      const delay = Math.max(0, MIN_DURATION - elapsed);
      window.setTimeout(() => setIsReady(true), delay);
    };

    const timeout = window.setTimeout(finish, MIN_DURATION);

    if (document.fonts?.ready) {
      document.fonts.ready.then(finish).catch(() => {
        // If fonts fail to load, fall back to timeout-based finish.
      });
    }

    return () => {
      finished = true;
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    const body = document.body;
    const html = document.documentElement;
    const prevBodyOverflow = body.style.overflow;
    const prevHtmlOverflow = html.style.overflow;

    if (!isReady) {
      body.style.overflow = "hidden";
      html.style.overflow = "hidden";
    } else {
      body.style.overflow = prevBodyOverflow;
      html.style.overflow = prevHtmlOverflow;
    }

    return () => {
      body.style.overflow = prevBodyOverflow;
      html.style.overflow = prevHtmlOverflow;
    };
  }, [isReady]);

  return (
    <FirstLoadContext.Provider value={isReady}>
      <Loader isReady={isReady} />
      <motion.div
        initial="hidden"
        animate={isReady ? "visible" : "hidden"}
        variants={siteVariants}
      >
        {children}
      </motion.div>
    </FirstLoadContext.Provider>
  );
}
