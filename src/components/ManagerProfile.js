import ManagerPhotoGrid from "./ManagerPhotoGrid";
import PropTypes from "prop-types";
import styles from "./ManagerProfile.module.css";

const ManagerProfile = ({ className = "" , friends , removeFriend }) => {
  return (
    <div className={[styles.managerProfile, className].join(" ")}>
      <div className={styles.managerProfileChild} />
      <div className={styles.subscriptions}>
        <button className={styles.subscriptionHeader}>
          <div className={styles.subscriptionHeaderChild} />
          <div className={styles.mySubscriptions}>My subscriptions</div>
        </button>
      </div>
      {friends.map(friend => (
      <ManagerPhotoGrid key={friend.id} friend={friend} removeFriend={removeFriend} />
    ))}

    </div>
  );
};

export default ManagerProfile;
