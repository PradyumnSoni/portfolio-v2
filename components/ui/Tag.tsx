"use client";

import { motion } from "framer-motion";
import type { ElementType, ReactNode } from "react";
import type { ComponentProps } from "react";
import styles from "./Tag.module.scss";

type TagProps<T extends ElementType> = {
  as?: T;
  /** Render a framer-motion wrapper around the element. */
  motion?: boolean;
  /** Additional props forwarded to the motion component (variants, transition, etc). */
  motionProps?: ComponentProps<typeof motion.div>;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
  iconClassName?: string;
  textClassName?: string;
} & Omit<ComponentProps<T>, "as" | "children" | "className">;

export function Tag<T extends ElementType = "p">({
  as,
  motion: useMotion = false,
  motionProps,
  icon,
  children,
  className = "",
  iconClassName = "",
  textClassName = "",
  ...props
}: TagProps<T>) {
  const Comp = (as ?? "p") as ElementType;
  const rootClassName = `${styles.tag} ${className}`.trim();

  if (useMotion) {
    const MotionComp = motion.create(Comp);
    return (
      <MotionComp
        className={rootClassName}
        {...(props as ComponentProps<typeof MotionComp>)}
        {...motionProps}
      >
        {icon ? (
          <span className={`${styles.icon} ${iconClassName}`.trim()}>
            {icon}
          </span>
        ) : null}
        <span className={`${styles.text} ${textClassName}`.trim()}>
          {children}
        </span>
      </MotionComp>
    );
  }

  return (
    <Comp className={rootClassName} {...(props as ComponentProps<T>)}>
      {icon ? (
        <span className={`${styles.icon} ${iconClassName}`.trim()}>{icon}</span>
      ) : null}
      <span className={`${styles.text} ${textClassName}`.trim()}>
        {children}
      </span>
    </Comp>
  );
}

