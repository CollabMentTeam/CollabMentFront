import { FunctionComponent } from "react";
import styles from "./Homepage.module.css";

export type HomepageType = {
  className?: string;
};

const Homepage: FunctionComponent<HomepageType> = ({ className = "" }) => {
  return (
    <div className={styles.homepage1}>
    <div className={[styles.homepage, className].join(" ")}>
      <div className={styles.withMoreThan}>
        With more than half of all top-tier VC deals run through the platform,
        Collabment is at the heart of venture investing. This exposure gives
        Collabment the insight to identify gaps in the VC market and build the
        solutions that bridge them.
      </div>
      <div className={styles.fromThePlay}>*from the play store</div>
      <div className={styles.mobileApp}>
        <div className={styles.appContent}>
          <div className={styles.appImage} />
          <div className={styles.downloadOurMobileContainer}>
            <span>
              <span className={styles.downloadOur}>{`Download our `}</span>
              <span className={styles.mobileApp1}>mobile app</span>
              <span>{` and find a like-minded people! `}</span>
            </span>
          </div>
        </div>
      </div>
      <button className={styles.downloadButton}>
        <div className={styles.download}>{` Download `}</div>
      </button>
      <section className={styles.phoneImages}>
        <img
          className={styles.galleryImageIcon}
          alt=""
          src="/gallery-image@2x.png"
        />
        <img
          className={styles.iphone12ProWoodenHands}
          loading="lazy"
          alt=""
          src="/iphone-12-pro-wooden-hands@2x.png"
        />
        <img
          className={styles.blankImageIcon}
          alt=""
          src="/blank-image@2x.png"
        />
      </section>
    </div>
    </div>
  );
};

export default Homepage;
