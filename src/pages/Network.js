import GroupComponent from "../components/GroupComponent1-1";
import RecommendationItem from "../components/RecommendationItem";
import ManagerProfile from "../components/ManagerProfile";
import styles from "./NetworkV2.module.css";

const Network = () => {
  return (
    <div>
    <div className={styles.network}>
      <GroupComponent />
      <section className={styles.recommendations}>
        <RecommendationItem />
        <div className={styles.memberProfile}>
          <ManagerProfile />
        </div>
      </section>
      
    </div>
    </div>
  );
};

export default Network;
