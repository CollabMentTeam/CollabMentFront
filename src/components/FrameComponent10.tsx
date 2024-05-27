import { FunctionComponent } from "react";
import styles from "./FrameComponent10.module.css";

export type FrameComponentType = {
  rectangle34624192?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  rectangle34624192,
}) => {
  return (
    <div className={styles.frameWrapper}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <img
          className={styles.frameItem}
          loading="lazy"
          alt=""
          src={rectangle34624192}
        />
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.collabmentTeamParent}>
              <b className={styles.collabmentTeam}>Collabment Team</b>
              <div className={styles.findAJob}>
                Find a job through your community
              </div>
            </div>
            <img
              className={styles.frameInner}
              loading="lazy"
              alt=""
              src="/vector-12111.svg"
            />
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <div className={styles.frameParent1}>
                <div className={styles.solarwalletMoneyOutlineWrapper}>
                  <img
                    className={styles.solarwalletMoneyOutlineIcon}
                    loading="lazy"
                    alt=""
                    src="/solarwalletmoneyoutline2.svg"
                  />
                </div>
                <div className={styles.findJobsTeam}>
                  <div className={styles.investment}>Investment:</div>
                </div>
                <div className={styles.div}>{`500 000 `}</div>
              </div>
              <div className={styles.usersParent}>
                <img
                  className={styles.usersIcon}
                  loading="lazy"
                  alt=""
                  src="/users-21.svg"
                />
                <div className={styles.participantsWrapper}>
                  <div className={styles.participants}>Participants:</div>
                </div>
                <div className={styles.findJobCommunity}>5</div>
              </div>
            </div>
            <button className={styles.learnMoreWrapper}>
              <div className={styles.learnMore}>Learn more</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
