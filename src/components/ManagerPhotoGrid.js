import styles from "./ManagerPhotoGrid.module.css";

const ManagerPhotoGrid = ({ className = "", friend}) => {

  console.log(friend);
  
  return (
    <div className={[styles.managerPhotoGrid, className].join(" ")}>
      <div className={styles.managerPhotoRowOne}>
        <div className={styles.managerPhotoRowOneChild} />

        {friend && friend.profile && (
                <img
                    className={styles.photoIcon}
                    alt={`${friend.username}'s profile`}
                    src={`http://127.0.0.1:8000/` + friend.profile.profile_photo}
                />
            )}
        
        <div className={styles.managerNameRowOneWrapper}>
          <div className={styles.managerNameRowOne}>
            <b className={styles.darleneBlack}>{friend.first_name} {friend.last_name}</b>
            <div className={styles.hrManager}>{friend.email}</div>
          </div>
        </div>
        <button className={styles.managerUnsubscribeRowOne}>
          <div className={styles.unsubscribe}>Unsubscribe</div>
        </button>
      </div>
      {/* <div className={styles.managerPhotoRowTwo}>
        <div className={styles.managerPhotoRowTwoChild} />
        <div className={styles.photoParent}>
          <img className={styles.photoIcon1} alt="" src="/photo-1@2x.png" />
          <div className={styles.managerNameRowTwo}>
            <div className={styles.managerNameListTwo}>
              <b className={styles.darleneBlack1}>Darlene Black</b>
              <div className={styles.hrManager1}>HR-manager</div>
            </div>
          </div>
        </div>
        <button className={styles.managerUnsubscribeRowTwo}>
          <div className={styles.unsubscribe1}>Unsubscribe</div>
        </button>
      </div> */}
    </div>
  );
};


export default ManagerPhotoGrid;
