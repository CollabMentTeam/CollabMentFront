import styles from "./MainContainer.module.css";

const MainContainer = ({ className = "" , message, link, onDelete }) => {
  return (
    <div className={[styles.mainContainer, className].join(" ")}>
      <section className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameItem} />
        <div className={styles.frameWrapper}>
          <div className={styles.noteParent}>
            <div className={styles.note}>Note</div>
            <div className={styles.callToAction}>
              <div className={styles.responseArea}>
                <div className={styles.userInputField}>
                  <div className={styles.responseToThe}>
                    {message}
                  </div>
                </div>
                {/* <div className={styles.userid}>@userid</div> */}
              </div>
              <button className={styles.deleteButton} onClick={onDelete}>
                  <div className={styles.deleteText}>&times;</div>
                </button>
              <button className={styles.learnMoreLink} onClick={() => window.location.replace(link, "_blank")}>
                <div className={styles.learnMore}>Learn more</div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};


export default MainContainer;
