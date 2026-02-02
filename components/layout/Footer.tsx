import { LogoMark } from "@/components/ui/LogoMark";
import styles from "./Footer.module.scss";

const leftLinks = [
  { href: "https://linkedin.com", label: "LINKEDIN" },
  { href: "https://dribbble.com", label: "DRIBBBLE" },
  { href: "https://medium.com", label: "MEDIUM" },
  { href: "#", label: "CV/RESUME" },
];

const rightLinks = [
  { href: "https://twitter.com", label: "TWITTER" },
  { href: "https://instagram.com", label: "INSTAGRAM" },
  { href: "mailto:hello@example.com", label: "EMAIL" },
];

export function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.inner}>
        <div className={styles.brand}>
          <LogoMark size="sm" className={styles.logoMark} />
          <h2 className={styles.name}>PRADYUMN</h2>
        </div>
        <nav className={styles.links} aria-label="Footer links">
          <ul className={styles.col} role="list">
            {leftLinks.map(({ href, label }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer">
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <ul className={styles.col} role="list">
            {rightLinks.map(({ href, label }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <p className={styles.copyright}>
          {new Date().getFullYear()} PRADYUMN. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}
