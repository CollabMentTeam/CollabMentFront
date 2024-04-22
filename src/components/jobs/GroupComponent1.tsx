import { FunctionComponent } from "react";
import styles from "./GroupComponent1.module.css";

const GroupComponent1: FunctionComponent = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.bookmarkInstance}>
        <div className={styles.mappinIconParent}>
          <div className={styles.mappinIcon}>
            <div className={styles.almatyLabel} />
          </div>
          <div className={styles.datePickerWrapper}>
            <div className={styles.datePicker}>
              <div className={styles.seniorFrontendDeveloperWrapper}>
                <b className={styles.seniorFrontendDeveloper}>
                  Senior Frontend Developer
                </b>
              </div>
              <div className={styles.kaspiKazakhstan}>Kaspi Kazakhstan</div>
            </div>
          </div>
          <img
            className={styles.featherIconsBookmark}
            loading="lazy"
            alt=""
            src="/feather-icons--bookmark1.svg"
          />
        </div>
        <div className={styles.userPhotoInstance}>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.squareShapeParent}>
                <div className={styles.squareShape}>
                  <img
                    className={styles.phosphorIconsClock}
                    loading="lazy"
                    alt=""
                    src="/phosphor-icons--clock.svg"
                  />
                  <div className={styles.fullTime}>Full Time</div>
                </div>
                <div className={styles.frameWrapper}>
                  <div className={styles.iconWorkExperienceParent}>
                    <img
                      className={styles.iconWorkExperience}
                      loading="lazy"
                      alt=""
                      src="/icon-work-experience.svg"
                    />
                    <div className={styles.yearWrapper}>
                      <div className={styles.year}>1-2 Year</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.almatyCityParent}>
                  <div className={styles.almatyCity}>Almaty city</div>
                  <div className={styles.almatyCity1}>Almaty city</div>
                </div>
              </div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.featherIconsMapPinParent}>
                <img
                  className={styles.featherIconsMapPin}
                  loading="lazy"
                  alt=""
                  src="/feather-icons--mappin.svg"
                />
                <div className={styles.almatyCityWrapper}>
                  <div className={styles.almatyCity2}>Almaty city</div>
                </div>
              </div>
            </div>
            <div className={styles.december2023Wrapper}>
              <div className={styles.december2023}>25 December 2023</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.selectMonthBtnWrapper}>
        <div className={styles.selectMonthBtn}>
          <div className={styles.selectMonthBtnInner}>
            <img
              className={styles.frameItem}
              loading="lazy"
              alt=""
              src="/vector-1211.svg"
            />
          </div>
          <div className={styles.frameParent1}>
            <div className={styles.frameWrapper1}>
              <div className={styles.frameParent2}>
                <div className={styles.frameWrapper2}>
                  <div className={styles.solarwalletMoneyOutlineParent}>
                    <img
                      className={styles.solarwalletMoneyOutlineIcon}
                      loading="lazy"
                      alt=""
                      src="/solarwalletmoneyoutline.svg"
                    />
                    <div className={styles.tgWrapper}>
                      <div className={styles.tg}>500 000 tg.</div>
                    </div>
                  </div>
                </div>
                <div className={styles.profilePictureZone}>
                  <div className={styles.phosphorIconsUsersthreeWrapper}>
                    <img
                      className={styles.phosphorIconsUsersthree}
                      loading="lazy"
                      alt=""
                      src="/phosphor-icons--usersthree.svg"
                    />
                  </div>
                  <div className={styles.confirmApplyButton}>
                    <div className={styles.checkmarkIcon}>21</div>
                  </div>
                  <div className={styles.confirmApplyButton1}>
                    <div className={styles.applied}>Applied</div>
                  </div>
                </div>
              </div>
            </div>
            <button className={styles.applyNowWrapper}>
              <div className={styles.applyNow}>Apply Now</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent1;
