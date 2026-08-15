"use client";

import Link from "next/link";
import Icon from "@mdi/react";
import { mdiGooglePlay } from "@mdi/js";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import styles from "./DispatchProjectContent.module.scss";

const DISPATCH_PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.dispatchapp.partner&hl=en_IN";

const ON_GROUND_PHOTOS = [
  {
    src: "/On-ground/IMG_4839.JPG",
    alt: "Speaking with a delivery rider on a motorcycle",
  },
  {
    src: "/On-ground/IMG_4841.JPG",
    alt: "Field conversation with a rider beside parked cars",
  },
  {
    src: "/On-ground/IMG_4822.JPG",
    alt: "Talking with riders sitting by the street",
  },
  {
    src: "/On-ground/IMG_4837.JPG",
    alt: "On-ground rider research",
  },
  {
    src: "/On-ground/IMG_20240729_143928.jpg",
    alt: "Delivering orders during field research",
  },
  {
    src: "/On-ground/IMG_20240731_113059.jpg",
    alt: "Working as a delivery rider",
  },
  {
    src: "/On-ground/IMG_20240806_111056.jpg",
    alt: "On-ground delivery work",
  },
  {
    src: "/On-ground/explaining.jpg",
    alt: "Team discussion during field research",
  },
] as const;

export function DispatchProjectContent() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.titleRow}>
          <div className={styles.brand}>
            <img
              className={styles.appIcon}
              src="/ProjectIconDispatch.jpg"
              alt="Dispatch rider app icon"
              loading="lazy"
            />
            <h1 className={styles.title}>
              Dispatch Delivery
              <br />
              Partner App
            </h1>
          </div>
          <Link
            href={DISPATCH_PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primaryLink}
          >
            <Icon
              path={mdiGooglePlay}
              className={styles.playStoreIcon}
              size="1.15rem"
              aria-hidden
            />
            Google Play Store
          </Link>
        </div>
        <p className={styles.subtitle}>
        From a blank canvas to a live product rated 4.7★. <br /> Doing deliveries myself to understand the industry and the people we were building for, then designing and building the app and working with the team to bring it to life. From the first onboarding flow to a complete product spanning the rider experience, fleet operations, and analytics.
        </p>
      </section>

      <section className={styles.roleSection}>
        <div className={styles.strip} aria-label="On-ground photos from a month spent delivering orders">
          <div className={styles.stripViewport}>
            <div className={styles.stripTrack}>
              <div className={styles.stripSet}>
                {ON_GROUND_PHOTOS.map((photo) => (
                  <img
                    key={photo.src}
                    className={styles.stripPhoto}
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    decoding="async"
                  />
                ))}
              </div>
              <div className={styles.stripSet} aria-hidden="true">
                {ON_GROUND_PHOTOS.map((photo) => (
                  <img
                    key={`${photo.src}-dup`}
                    className={styles.stripPhoto}
                    src={photo.src}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className={styles.stripFade} aria-hidden="true" />
          <div className={styles.stripCopy}>
            <h1 className={styles.roleTitle}>A month in the rider&apos;s seat</h1>
            <p className={styles.stripCaption}>
              Before designing a single pixel, I spent a month delivering orders myself working for
              Blinkit, Zomato, and Shadowfax, while speaking with riders along the way.
            </p>
          </div>
        </div>
      </section>

      <ScrollReveal>
      <section className={styles.storySection}>
        <h2 className={styles.storyHeading}>Then we built.</h2>
        <p className={styles.storyCopy}>
          From getting riders onboarded to helping them find, complete, and earn from every order, I
          designed the core experience end-to-end.
        </p>
        <div className={styles.journey}>
          <figure className={styles.journeyItem}>
            <div className={`${styles.screen} ${styles.screenPhone}`}>
              <img
                src="/WelcomeToDispatch.gif"
                alt="Dispatch onboarding: welcome and start delivering"
                loading="lazy"
              />
            </div>
            <figcaption className={styles.journeyLabel}>Onboarding</figcaption>
          </figure>
          <figure className={styles.journeyItem}>
            <div className={`${styles.screen} ${styles.screenPhone}`}>
              <img
                src="/DispatchWallet.png"
                alt="Dispatch earnings wallet and weekly totals"
                loading="lazy"
              />
            </div>
            <figcaption className={styles.journeyLabel}>Earnings</figcaption>
          </figure>
          <figure className={styles.journeyItem}>
            <div className={`${styles.screen} ${styles.screenPhone}`}>
              <img
                src="/DispatchSupport.png"
                alt="Dispatch support chat about a payout"
                loading="lazy"
              />
            </div>
            <figcaption className={styles.journeyLabel}>Support</figcaption>
          </figure>
          <figure className={styles.journeyItem}>
            <div className={`${styles.screen} ${styles.screenPhone}`}>
              <img
                src="/Reposition.gif"
                alt="Dispatch repositioning: move toward demand for the next order"
                loading="lazy"
              />
            </div>
            <figcaption className={styles.journeyLabel}>Repositioning</figcaption>
          </figure>
        </div>
      </section>
      </ScrollReveal>

      <ScrollReveal>
      <section className={styles.diversity} aria-label="Designed for diverse riders">
        <div className={styles.diversityCopy}>
          <p className={styles.diversityHighlight} aria-label="English, Hindi, and Marathi">
            <span>English</span>
            <span lang="hi">हिंदी</span>
            <span lang="mr">मराठी</span>
          </p>
          <p className={styles.diversityModes}>Day | Night</p>
          <p className={styles.storyCopy}>
            The riders I met didn&apos;t live in one language, one city, or one time of day. Dispatch
            launched in English, Hindi, and Marathi, and in light and dark modes, so the product
            could meet people in the conditions they actually work in, not the ones easiest to design
            for.
          </p>
        </div>
        <div className={styles.diversityVisual}>
          <img
            src="/IspeakLanguages.png"
            alt="Three delivery riders: I use it in Marathi, English, and Hindi"
            loading="lazy"
          />
        </div>
      </section>
      </ScrollReveal>

      <ScrollReveal>
      <section className={styles.reposition}>
        <div className={styles.repositionCopy}>
          <h2 className={styles.storyHeading}>
            Win the riders.
            <br />
            Win the business.
          </h2>
          <p className={styles.storyCopy}>
            We win this business by winning the riders. Riders love a platform when it feels like
            it&apos;s for them, cares for them, and helps them be better. Dispatch looks after them
            between orders, so they aren&apos;t left idle or burning petrol to find work.
          </p>
          <div className={styles.tensions}>
            <p>
              <strong>For them.</strong> Built around how riders actually work.
            </p>
            <p>
              <strong>Cares for them.</strong> The app tells them where they&apos;ll find the next order.
            </p>
            <p>
              <strong>Helps them be better.</strong> Less waiting. Less wasted petrol. More time earning.
            </p>
          </div>
        </div>
        <div className={styles.repositionPhoneWrap}>
          <div className={`${styles.screen} ${styles.screenPhone} ${styles.repositionPhone}`}>
            <img
              src="/Reposition.gif"
              alt="Repositioning recommendation on a map, with incentive and accept-and-navigate"
              loading="lazy"
            />
          </div>
        </div>
      </section>
      </ScrollReveal>

      <ScrollReveal>
      <section className={styles.launch}>
        <div className={styles.launchCopy}>
          <p className={styles.rating} aria-label="Rated 4.7 stars as of August 2026">
            4.7<span className={styles.ratingStar}>★</span>
          </p>
          <p className={styles.ratingAsOf}>Ratings as of August 2026</p>
          <h2 className={styles.storyHeading}>
            Riders showed their love
            <br />
            for the app.
          </h2>
          <Link
            href={DISPATCH_PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.primaryLink} ${styles.primaryLinkAccent}`}
          >
            <Icon
              path={mdiGooglePlay}
              className={styles.playStoreIcon}
              size="1.15rem"
              aria-hidden
            />
            Google Play Store
          </Link>
        </div>
        <div className={styles.launchVisual}>
          <img
            src="/HappyDispatchRiders.png"
            alt="Dispatch delivery partners showing the live app on their phones"
            loading="lazy"
          />
        </div>
      </section>
      </ScrollReveal>
    </div>
  );
}

