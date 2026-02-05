"use client";

import Link from "next/link";
import styles from "./DispatchProjectContent.module.scss";

const DISPATCH_PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.harshdispatch.dispatchrider.v2";

export function DispatchProjectContent() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <img
          className={styles.appIcon}
          src="https://play-lh.googleusercontent.com/0-O1SkPwsIDzH7oriGNfoN225Vf2gaoGKkR8YyLHDHMJzJSEbqSw81kxO3cm9j69BcK9fLqqXqA5SD608FzZUA=w240-h480-rw"
          alt="Dispatch rider app icon"
          loading="lazy"
        />
        <div className={styles.titleRow}>
          <h1 className={styles.title}>Dispatch Delivery Partner App</h1>
          <Link
            href={DISPATCH_PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primaryLink}
          >
            View app on Play Store
          </Link>
        </div>
        <p className={styles.subtitle}>
          Dispatch Rider App is a mobile application used by delivery riders to complete food and
          everyday-essentials deliveries within a city. Riders use the app to onboard, receive
          delivery tasks, navigate orders, and confirm completion. Incentives and lightweight
          feedback help encourage consistent performance and reliability.
        </p>
        <div className={styles.badges}>
          <span className={styles.badge}>
            <span className={styles.pulsingDot} aria-hidden="true" />
            Live on Play Store
          </span>
          <span className={styles.badge}>Pre-launch build</span>
          <span className={styles.badge}>Full app launching soon</span>
        </div>
      </section>

      <section>
        <div className={styles.screens}>
          <div className={styles.screen}>
            <img
              src="https://play-lh.googleusercontent.com/Uk01GWNKVSpQRfUAEIZ_qDTpEx7g-VD-g_2bAaK3bPAr9TPy7cuA6qwxHz1se07xm3YW0L-hNdoIEuRmDJpnAQ=w2560-h1440-rw"
              alt="Dispatch app onboarding screenshot"
              loading="lazy"
            />
          </div>
          <div className={styles.screen}>
            <img
              src="https://play-lh.googleusercontent.com/LzVnwzp_UqdLO2AjjCDgioiSUTXHf4vrsdh0WWOIL4MdgpI2eukl8M_wEAd7cEQuOcC9gmdk5c3SFWdSpIbRKg=w2560-h1440-rw"
              alt="Dispatch app deliveries screenshot"
              loading="lazy"
            />
          </div>
          <div className={styles.screen}>
            <img
              src="https://play-lh.googleusercontent.com/LqdfzXF-Xzunro6P_6PWx0EqkeCK2Jvn7r1NjOVxnws7wow3Bbw9q4Pi3LnVWL2CSyqg9wS9Tr6jhsj5xtwsYR4=w2560-h1440-rw"
              alt="Dispatch app earnings screenshot"
              loading="lazy"
            />
          </div>
          <div className={styles.screen}>
            <img
              src="https://play-lh.googleusercontent.com/ApxkeKfjdMhgmLaKIwtS-TLbMh9W3La4eAsOjEl7UgZSzSaTOeepz79dANhqj7XLNU75Veq-wuS_xKvL6K7PYA=w2560-h1440-rw"
              alt="Dispatch app incentives screenshot"
              loading="lazy"
            />
          </div>
        </div>
        <p className={styles.label}>
          This is an early pilot version of the app; the final UI has been lightly masked to
          protect the privacy of the app.
        </p>
      </section>

      <section className={styles.roleSection}>
        <h2 className={styles.roleTitle}>My role</h2>
        <p className={styles.roleText}>
          End-to-end ownership across research, product design, UI, development, brand, and launch
          – including on-ground rider research, flow and system design, mobile app development, Play
          Store release, analytics setup, and operational decision support.
        </p>
        <Link
          href={DISPATCH_PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.primaryLink}
        >
          See live app on the Play Store (early version)
        </Link>
      </section>
    </div>
  );
}

