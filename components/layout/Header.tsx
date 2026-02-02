"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Header.module.scss";

const SCROLL_THRESHOLD = 60;

const navLinks = [
  { href: "#beyond-projects", label: "About" },
  { href: "#featured-work", label: "Featured Projects" },
  { href: "#contact", label: "Community" },
  { href: "#selected-projects", label: "Client Projects" },
];

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" />
    </svg>
  );
}

function EmailIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

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
            <WhatsAppIcon className={styles.iconSvg} />
          </a>
          <a
            href="mailto:"
            className={styles.iconLink}
            aria-label="Email"
          >
            <EmailIcon className={styles.iconSvg} />
          </a>
        </div>
      </nav>
    </header>
  );
}
