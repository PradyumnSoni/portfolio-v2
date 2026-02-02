"use client";

import { motion } from "framer-motion";
import type { ComponentProps } from "react";
import type { ButtonHTMLAttributes } from "react";
import type { AnchorHTMLAttributes } from "react";
import styles from "./Button.module.scss";

type BaseProps = {
  variant?: "primary" | "secondary" | "ghost";
  children: React.ReactNode;
  className?: string;
};

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonAsAnchor = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const buttonClass = (variant: string, className: string) =>
  `${styles.button} ${styles[variant]} ${className}`.trim();

const motionProps = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
};

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  if ("href" in props && props.href) {
    const { href, target, rel } = props;
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        className={buttonClass(variant, className)}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }
  return (
    <motion.button
      type="button"
      className={buttonClass(variant, className)}
      {...motionProps}
      {...(props as ComponentProps<typeof motion.button>)}
    >
      {children}
    </motion.button>
  );
}
