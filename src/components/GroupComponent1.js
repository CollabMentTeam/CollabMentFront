import styles from "./GroupComponent1.module.css";

const GroupComponent = ({ className = "" }) => {
  return (
    <section className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.teamBuilding}>
        <h1 className={styles.findYourselfA}>
          Find yourself a decent environment
        </h1>
      </div>
      <h3 className={styles.makeFriendsAnd}>
        Make friends and create your own team!
      </h3>
      <img
        className={styles.icon}
        loading="lazy"
        alt=""
        src="/1713369184096-1@2x.png"
      />
    </section>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent;
