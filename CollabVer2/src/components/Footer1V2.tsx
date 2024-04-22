import { FunctionComponent } from "react";
import styles from "./Footer1V2.module.css";

const Footer1: FunctionComponent = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.rectangle} />
      <div className={styles.logoInstanceParent}>
        <div className={styles.logoInstance} />
        <div className={styles.signInLinkListWrapper}>
          <div className={styles.signInLinkList}>
            <div className={styles.logoColl}>
              <img
                className={styles.tablersteamIcon}
                loading="lazy"
                alt=""
                src="/tablersteam-1.svg"
              />
              <div className={styles.collabmentWrapper}>
                <b className={styles.collabment}>COLLABMENT</b>
              </div>
            </div>
            <div className={styles.frameParent}>
              <div className={styles.heading3GetStartedParent}>
                <div className={styles.heading3}>Get started</div>
                <div className={styles.lovedTrustedMobileApp}>
                  <div className={styles.listItem}>Sign in</div>
                  <div className={styles.listItem1}>Sign up</div>
                </div>
              </div>
              <div className={styles.almatyLabel}>
                <div className={styles.navigation}>
                  <div className={styles.navigation1}>Navigation</div>
                  <div className={styles.aboutHowItWorksWhyCollabParent}>
                    <div className={styles.aboutHowItContainer}>
                      <p className={styles.about}>About</p>
                      <p className={styles.howItWorks}>How it works?</p>
                      <p className={styles.whyCollabment}>Why Collabment?</p>
                      <p className={styles.fuelingInnovation}>
                        Fueling innovation
                      </p>
                    </div>
                    <div className={styles.lovedTrustedContainer}>
                      <p
                        className={styles.lovedTrusted}
                      >{`Loved & trusted `}</p>
                      <p className={styles.mobileApp}>Mobile App</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerInner}>
        <div className={styles.shapeContainerWrapper}>
          <div className={styles.shapeContainer}>
            <div className={styles.cLlabment}>C . LLABMENT</div>
            <img
              className={styles.icon}
              loading="lazy"
              alt=""
              src="/1712679887005-2@2x.png"
            />
            <img
              className={styles.icon1}
              loading="lazy"
              alt=""
              src="/1712668833786-2@2x.png"
            />
          </div>
        </div>
      </div>
      <div className={styles.almaty2024}>Almaty, 2024</div>
    </section>
  );
};

export default Footer1;
