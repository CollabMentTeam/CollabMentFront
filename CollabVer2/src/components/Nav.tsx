import { FunctionComponent } from "react";
import Disable1 from "./Disable1";
import styles from "./Nav.module.css";

const Nav: FunctionComponent = () => {
  return (
    <div className={styles.nav}>
      <section className={styles.navigation}>
        <div className={styles.base} />
        <div className={styles.logoZone}>
          <div className={styles.base1} />
          <div className={styles.line} />
        </div>
        <div className={styles.logoCollWrapper}>
          <div className={styles.logoColl}>
            <div className={styles.tablersteamWrapper}>
              <img
                className={styles.tablersteamIcon}
                loading="lazy"
                alt=""
                src="/tablersteam1.svg"
              />
            </div>
            <b className={styles.collabment}>COLLABMENT</b>
          </div>
        </div>
        <div className={styles.itemsParent}>
          <div className={styles.items}>
            <div className={styles.itemsInner}>
              <div className={styles.parent}>
                <button className={styles.button}>
                  <div className={styles.active}>
                    <div className={styles.activeChild} />
                    <div className={styles.activeItem} />
                    <img className={styles.rssIcon} alt="" src="/rss.svg" />
                    <div className={styles.feed}>feed</div>
                  </div>
                  <Disable1 rss="/rss-1.svg" feed="feed" />
                </button>
                <button className={styles.button1}>
                  <div className={styles.active1}>
                    <div className={styles.activeInner} />
                    <div className={styles.rectangleDiv} />
                    <img className={styles.usersIcon} alt="" src="/users.svg" />
                    <div className={styles.network}>Network</div>
                  </div>
                  <Disable1
                    rss="/users-1.svg"
                    feed="Network"
                    propPadding="var(--padding-lg) var(--padding-sm) var(--padding-smi) var(--padding-mini)"
                    propPadding1="0px var(--padding-lgi) 0px var(--padding-lg)"
                    propMinWidth="61px"
                  />
                </button>
                <button className={styles.button2}>
                  <div className={styles.active2}>
                    <div className={styles.activeChild1} />
                    <div className={styles.activeChild2} />
                    <img
                      className={styles.briefcaseIcon}
                      alt=""
                      src="/briefcase.svg"
                    />
                    <div className={styles.jobs}>jobs</div>
                  </div>
                  <Disable1
                    rss="/briefcase-1.svg"
                    feed="jobs"
                    propPadding="var(--padding-lg) var(--padding-10xl) var(--padding-smi)"
                    propPadding1="0px var(--padding-9xs)"
                    propMinWidth="32px"
                  />
                </button>
                <button className={styles.button3}>
                  <Disable1
                    rss="/messagesquare.svg"
                    feed="chat"
                    propPadding="var(--padding-lg) var(--padding-9xl) var(--padding-smi) var(--padding-10xl)"
                    propPadding1="0px var(--padding-8xs) 0px var(--padding-9xs)"
                    propMinWidth="33px"
                  />
                  <div className={styles.active3}>
                    <div className={styles.activeChild3} />
                    <div className={styles.activeChild4} />
                    <img
                      className={styles.messageSquareIcon}
                      alt=""
                      src="/messagesquare-1.svg"
                    />
                    <div className={styles.chat}>chat</div>
                  </div>
                  <div className={styles.count}>
                    <div className={styles.rectangle} />
                    <b className={styles.b}>1</b>
                  </div>
                </button>
                <button className={styles.button4}>
                  <Disable1
                    rss="/fluentpeopleteam16regular.svg"
                    feed="Teams"
                    propPadding="var(--padding-lg) var(--padding-5xl) var(--padding-smi)"
                    propPadding1="0px var(--padding-4xs)"
                    propMinWidth="42px"
                  />
                  <div className={styles.active4}>
                    <div className={styles.activeChild5} />
                    <div className={styles.activeChild6} />
                    <img className={styles.bellIcon} alt="" src="/bell-1.svg" />
                    <div className={styles.notices}>notices</div>
                  </div>
                </button>
              </div>
            </div>
            <div className={styles.div}>
              <div className={styles.disable}>
                <div className={styles.disableChild} />
                <div className={styles.bellWrapper}>
                  <img
                    className={styles.bellIcon1}
                    loading="lazy"
                    alt=""
                    src="/bell.svg"
                  />
                </div>
                <div className={styles.notices1}>notices</div>
              </div>
              <div className={styles.active5}>
                <div className={styles.activeChild7} />
                <div className={styles.activeChild8} />
                <img className={styles.bellIcon2} alt="" src="/bell-1.svg" />
                <div className={styles.notices2}>notices</div>
              </div>
              <div className={styles.line1} />
            </div>
          </div>
          <div className={styles.profile}>
            <div className={styles.profileChild} />
            <div className={styles.line2} />
            <div className={styles.profileInner}>
              <div className={styles.rectangleParent}>
                <img
                  className={styles.rectangleIcon}
                  loading="lazy"
                  alt=""
                  src="/rectangle@2x.png"
                />
                <div className={styles.aGazizovaWrapper}>
                  <div className={styles.aGazizova}>A. Gazizova</div>
                </div>
                <div className={styles.youWrapper}>
                  <div className={styles.you}>YOU</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className={styles.other}>
          <div className={styles.otherChild} />
          <div className={styles.line3} />
          <div className={styles.otherInner}>
            <div className={styles.frameParent}>
              <div className={styles.moreHorizontalWrapper}>
                <img
                  className={styles.moreHorizontalIcon}
                  alt=""
                  src="/morehorizontal.svg"
                />
              </div>
              <div className={styles.other1}>other</div>
            </div>
          </div>
          <div className={styles.line4} />
        </button>
      </section>
    </div>
  );
};

export default Nav;
