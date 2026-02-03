"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Icon from "@mdi/react";
import { mdiEmail, mdiWhatsapp } from "@mdi/js";
import styles from "./Header.module.scss";

const SCROLL_THRESHOLD = 60;

const navLinks = [
  { href: "#beyond-projects", label: "About" },
  { href: "#featured-work", label: "Featured Projects" },
  { href: "#contact", label: "Community" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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

  return (
    <header
      className={`${styles.header} ${visible ? "" : styles.headerHidden}`}
      role="banner"
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
                onClick={() => setMenuOpen(false)}
                onKeyDown={(e) => e.key === "Enter" && setMenuOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className={styles.icons}>
          <a
            href="https://wa.me/"
            className={styles.iconLink}
            aria-label="WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon path={mdiWhatsapp} className={styles.iconSvg} size="1.25rem" aria-hidden />
          </a>
          <a
            href="mailto:"
            className={styles.iconLink}
            aria-label="Email"
          >
            <Icon path={mdiEmail} className={styles.iconSvg} size="1.25rem" aria-hidden />
          </a>
        </div>
      </nav>
    </header>
  );
}
