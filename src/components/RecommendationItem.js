import styles from "./RecommendationItem.module.css";

const RecommendationItem = ({ className = "" ,  users, addFriend }) => {

  console.log(users)
  
  return (
    <div className={[styles.recommendationItem, className].join(" ")}>
      <div className={styles.recommendationItemChild} />
      <button className={styles.recommendationHeader}>
        <div className={styles.recommendationHeaderChild} />
        <div className={styles.recommendation}>Recommendation</div>
      </button>
      <div className={styles.teamMember}>
        <div className={styles.leadProfile}>

        {users.map(user => (

          <div className={styles.leadPhotoGrid} key={user.id}>
            <div className={styles.leadPhotoGridChild} />
            <div className={styles.leadPhotoRowOne}>
              <div className={styles.leadPhotoPairOne}>
              {user && user.profile && (

                <img
                  className={styles.photoIcon}
                  loading="lazy"
                  alt=""
                  src={`https://collabmentteam.pythonanywhere.com/` + user.profile.profile_photo}
                />

              )}
                <div className={styles.leadPhotoPairTwo}>
                  <div className={styles.audreyAlexanderParent}>
                    <b className={styles.audreyAlexander}>{user.first_name} {user.last_name}</b>
                    <div className={styles.teamLeadAt}>{user.email}</div>
                  </div>
                </div>
              </div>
            </div>
            <button className={styles.leadSubscribeButtons} onClick={() => addFriend(user.username)} >
              <div className={styles.subscribe}>Subscribe</div>
            </button>
          </div>
                ))}


          
          {/* <div className={styles.leadPhotoGrid1}>
            <div className={styles.leadPhotoGridItem} />
            <div className={styles.photoParent}>
              <img className={styles.photoIcon1} alt="" src="/photo-1@2x.png" />
              <div className={styles.leadPhotoRowTwo}>
                <div className={styles.teamMemberNames}>
                  <b className={styles.darleneBlack}>Darlene Black</b>
                  <div className={styles.hrManager}>HR-manager</div>
                </div>
              </div>
            </div>
            <div className={styles.leadPhotoGridInner}>
              <button className={styles.subscribeWrapper}>
                <div className={styles.subscribe1}>Subscribe</div>
              </button>
            </div>
          </div> */}
          {/* <div className={styles.leadPhotoGrid2}>
            <div className={styles.rectangleDiv} />
            <div className={styles.photoGroup}>
              <img className={styles.photoIcon2} alt="" src="/photo-2@2x.png" />
              <div className={styles.frameWrapper}>
                <div className={styles.kyleFisherParent}>
                  <b className={styles.kyleFisher}>Kyle Fisher</b>
                  <div
                    className={styles.productDesigner}
                  >{`Product designer `}</div>
                </div>
              </div>
            </div>
            <button className={styles.subscribeContainer}>
              <div className={styles.subscribe2}>Subscribe</div>
            </button>
          </div>
          <div className={styles.leadPhotoGrid3}>
            <div className={styles.leadPhotoGridChild1} />
            <img className={styles.photoIcon3} alt="" src="/photo-3@2x.png" />
            <div className={styles.frameDiv}>
              <div className={styles.eduardoRussellParent}>
                <b className={styles.eduardoRussell}>Eduardo Russell</b>
                <div className={styles.fullStackDeveloper}>
                  Full stack developer at Yandex
                </div>
              </div>
            </div>
            <button className={styles.leadSubscribePairTwo}>
              <div className={styles.subscribe3}>Subscribe</div>
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default RecommendationItem;
