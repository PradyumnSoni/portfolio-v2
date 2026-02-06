"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Icon from "@mdi/react";
import { mdiEmail, mdiWhatsapp, mdiLinkedin } from "@mdi/js";
import { useFirstLoadReady } from "@/app/PageClient";
import { useReducedMotionContext } from "@/contexts/ReducedMotionContext";
import styles from "./Header.module.scss";

const SCROLL_THRESHOLD = 60;

const navLinks = [
  { href: "#featured-work", label: "Featured Projects" },
  { href: "#about", label: "About" },
  { href: "#community-education", label: "Community" },
];

const headerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const, delay: 0.1 },
  },
};

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [contactOpen, setContactOpen] = useState(false);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const isReady = useFirstLoadReady();
  const reducedMotion = useReducedMotionContext();

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      if (y > lastScrollY && y > SCROLL_THRESHOLD) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(y);
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        contactRef.current &&
        !contactRef.current.contains(event.target as Node)
      ) {
        setContactOpen(false);
      }
    };

    const handleScroll = () => {
      setContactOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      className={`${styles.header} ${visible ? "" : styles.headerHidden}`}
      role="banner"
      initial={reducedMotion ? undefined : "hidden"}
      animate={reducedMotion ? undefined : isReady ? "visible" : "hidden"}
      variants={reducedMotion ? undefined : headerVariants}
    >
      <nav className={styles.nav} aria-label="Main">
        <a href="#hero" className={styles.logo} aria-label="Pradyumn home">
          <Image
            src="/pradyhead.png"
            alt=""
            width={40}
            height={40}
            className={styles.logoImage}
            priority
            unoptimized
          />
          <span className={styles.logoText}>Pradyumn</span>
        </a>
        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className={styles.menuIcon} aria-hidden>
            {menuOpen ? "✕" : "☰"}
          </span>
        </button>
        <ul
          id="main-nav"
          className={`${styles.links} ${menuOpen ? styles.linksOpen : ""}`}
          role="list"
        >
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => {
                  setMenuOpen(false);
                  setContactOpen(false);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    setMenuOpen(false);
                    setContactOpen(false);
                  }
                }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className={styles.contactWrapper} ref={contactRef}>
          <button
            type="button"
            className={styles.contactButton}
            aria-haspopup="true"
            aria-expanded={contactOpen}
            onClick={() => setContactOpen((open) => !open)}
          >
            Contact
          </button>
          {contactOpen && (
            <div className={styles.contactMenu} role="menu">
              <a
                href="https://www.linkedin.com/in/pradyumnsoni/"
                target="_blank"
                rel="noopener noreferrer"
                role="menuitem"
              >
                <Icon
                  path={mdiLinkedin}
                  className={styles.contactMenuIcon}
                  size="1rem"
                  aria-hidden
                />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://wa.me/919667656325"
                target="_blank"
                rel="noopener noreferrer"
                role="menuitem"
              >
                <Icon
                  path={mdiWhatsapp}
                  className={styles.contactMenuIcon}
                  size="1rem"
                  aria-hidden
                />
                <span>WhatsApp</span>
              </a>
              <a
                href="mailto:pradyumnsoni@gmail.com"
                role="menuitem"
              >
                <Icon
                  path={mdiEmail}
                  className={styles.contactMenuIcon}
                  size="1rem"
                  aria-hidden
                />
                <span>Email</span>
              </a>
            </div>
          )}
        </div>
      </nav>
    </motion.header>
  );
}
