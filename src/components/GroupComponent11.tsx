import { FunctionComponent } from "react";
import styles from "./GroupComponent11.module.css";

const GroupComponent1: FunctionComponent = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.connectionPoint}>
        <div className={styles.parentContainer}>
          <h1 className={styles.findYourDream}>Find your dream job here!</h1>
          <h2 className={styles.applyForThe}>
            Apply for the best job opportunities available today!
          </h2>
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <img
              className={styles.frameIcon}
              loading="lazy"
              alt=""
              src="/frame2.svg"
            />
            <div className={styles.searchJobWrapper}>
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

export default GroupComponent1;
