import { FunctionComponent } from "react";
import styles from "./FrameComponent5.module.css";

const FrameComponent5: FunctionComponent = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.featherBookmarkInstanceWrapper}>
        <div className={styles.featherBookmarkInstance}>
          <h2 className={styles.findYourDream}>Find your dream job here!</h2>
          <div className={styles.exploreTheLatest}>
            Explore the latest job openings and apply for the best job
            opportunities available today!
          </div>
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.mapPinInstanceWrapper}>
          <div className={styles.mapPinInstance}>
            <img
              className={styles.frameIcon}
              loading="lazy"
              alt=""
              src="/frame1.svg"
            />
            <div className={styles.clockIconInstance}>
              <div className={styles.searchJob}>Search Job</div>
            </div>
          </div>
        </div>
        <button className={styles.searchWrapper}>
          <div className={styles.search}>Search</div>
        </button>
      </div>
    </div>
  );
};

export default FrameComponent5;
