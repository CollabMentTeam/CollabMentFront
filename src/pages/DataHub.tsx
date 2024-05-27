import { FunctionComponent } from "react";
import GroupComponent1 from "../components/GroupComponent11";
import GroupComponent from "../components/GroupComponent5";
import FrameComponent1 from "../components/FrameComponent12";
import FrameComponent from "../components/FrameComponent13";
import styles from "./DataHub.module.css";

const DataHub: FunctionComponent = () => {
  return (
    <div className={styles.dataHub}>
      <section className={styles.conditionalSplit}>
        <div className={styles.frameParent}>
          <GroupComponent1 />
          <GroupComponent />
        </div>
      </section>
      <div className={styles.frameGroup}>
        <div className={styles.lineWrapper}>
          <img className={styles.lineIcon} loading="lazy" alt="" />
        </div>
        <div className={styles.sortByNewContainer}>
          <span>{`Sort by: `}</span>
          <span className={styles.new}>New</span>
        </div>
        <div className={styles.lineContainer}>
          <div className={styles.line} />
        </div>
      </div>
      <section className={styles.frameContainer}>
        <FrameComponent1 />
        <FrameComponent />
        <FrameComponent1 />
      </section>
    </div>
  );
};

export default DataHub;
