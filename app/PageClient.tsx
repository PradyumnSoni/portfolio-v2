"use client";

import { useState, useEffect, ReactNode } from "react";
import { Loader } from "@/components/Loader";

type PageClientProps = {
  children: ReactNode;
};

export function PageClient({ children }: PageClientProps) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const ready = () => setIsReady(true);
    const timeout = window.setTimeout(ready, 1500);
    if (document.fonts?.ready) {
      document.fonts.ready.then(ready);
    }
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Loader isReady={isReady} />
      {children}
    </>
  );
}
