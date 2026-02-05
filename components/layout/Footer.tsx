import Image from "next/image";
import styles from "./Footer.module.scss";

const contactLinks = [
  {
    href: "https://www.linkedin.com/in/pradyumnsoni/",
    label: "LinkedIn",
  },
  {
    href: "https://wa.me/919667656325",
    label: "WhatsApp",
  },
  {
    href: "mailto:pradyumnsoni@gmail.com",
    label: "Email",
  },
];

const menuLinks = [
  { href: "#featured-work", label: "Projects" },
  { href: "#community-education", label: "Teaching" },
  { href: "#freelance", label: "Freelance" },
];

export function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.nameRow} aria-label="Pradyumn footer wordmark">
        <div className={styles.nameWrap}>
          <Image
            src="/FooterName.svg"
            alt="Pradyumn"
            fill
            className={styles.nameImg}
            priority
          />
        </div>
      </div>

      <div className={styles.contentRow}>
        <div className={styles.contentInner}>
          <div className={styles.recordColumn} aria-hidden>
            <div className={styles.recordWrap}>
              <Image
                src="/PradyCD.png"
                alt=""
                fill
                className={styles.recordImg}
                sizes="250px"
                unoptimized
              />
            </div>
          </div>

          <div className={styles.contactColumn}>
            <p className={styles.columnHeading}>Contact</p>
            <ul className={styles.linkColumn} role="list">
              {contactLinks.map(({ href, label }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.menuColumn}>
            <p className={styles.columnHeading}>Menu</p>
            <ul className={styles.linkColumn} role="list">
              {menuLinks.map(({ href, label }) => (
                <li key={label}>
                  <a href={href}>{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.summaryColumn}>
            <p className={styles.summary}>
              Open to full-time roles, contracts, and conversations.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
