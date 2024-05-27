import { FunctionComponent } from "react";
import styles from "./GroupComponent4.module.css";

export type GroupComponentType = {
  rectangle34624192?: string;
  companyName?: string;
  id?: string;
  investment_amount_needed: number;
  membersCount: number;
  handleModal: any;
  contactEmail?: string;
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  rectangle34624192,
  companyName,
  id,
  investment_amount_needed,
  contactEmail,
  membersCount,
  handleModal,
}) => {
  return (
    <div className={styles.rectangleParent} key={id}>
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
            <b className={styles.collabmentTeam}>{companyName}</b>
            <div className={styles.findAJob}>
              {contactEmail}
              {/* Find a job through your community */}
            </div>
          </div>
          <img
            className={styles.learnMoreLink}
            loading="lazy"
            alt=""
            src="/vector-12111.svg"
          />
        </div>
        <div className={styles.tEXT}>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <div className={styles.solarwalletMoneyOutlineWrapper}>
                <img
                  className={styles.solarwalletMoneyOutlineIcon}
                  loading="lazy"
                  alt=""
                  src="/solarwalletmoneyoutline2.svg"
                />
              </div>
              <div className={styles.investmentWrapper}>
                <div className={styles.investment}>Investment:</div>
              </div>
              <div className={styles.div}>{investment_amount_needed}</div>
            </div>
            <div className={styles.usersParent}>
              <img className={styles.usersIcon} alt="" src="/users-21.svg" />
              <div className={styles.participantsWrapper}>
                <div className={styles.participants}>Participants:</div>
              </div>
              <div className={styles.div1}>{membersCount}</div>
            </div>
          </div>
          <button className={styles.learnMoreWrapper} onClick={handleModal}>
            <div className={styles.learnMore}>Learn more</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
