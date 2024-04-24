import { FunctionComponent } from "react";

import FrameComponent11 from "../components/FrameComponent11";
import styles from "./TeamNew.module.css";

const TeamNew: FunctionComponent = () => {
  return (
    <div className={styles.team}>
      
      <section className={styles.teamInner}>
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.frameContainer}>
                <div className={styles.findYourTeamHereAndImplemParent}>
                  <h1
                    className={styles.findYourTeam}
                  >{`Find your team here and implement the ideas! `}</h1>
                  <h2 className={styles.createYourPerfect}>
                    Create your perfect team here!
                  </h2>
                </div>
              </div>
              <button className={styles.ouimlCreateSingleMetricJoParent}>
                <img
                  className={styles.ouimlCreateSingleMetricJoIcon}
                  alt=""
                  src="/ouimlcreatesinglemetricjob1.svg"
                />
                <div className={styles.createATeamWrapper}>
                  <div className={styles.createATeam}>Create a team</div>
                </div>
              </button>
            </div>
          </div>
          <FrameComponent11 />
        </div>
      </section>
      <section className={styles.desktop30Parent}>
        <img className={styles.desktop30} alt="" src="/desktop--30.svg" />
        <div className={styles.rectangleGroup}>
          <div className={styles.frameItem} />
          <div className={styles.parent}>
            <img className={styles.icon} alt="" src="/1713351244373-1@2x.png" />
            <h1 className={styles.createYourTeam}>Create your team today!</h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamNew;
