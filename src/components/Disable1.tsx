import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Disable1.module.css";

export type Disable1Type = {
  rss?: string;
  feed?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propPadding1?: CSSProperties["padding"];
  propMinWidth?: CSSProperties["minWidth"];
};

const Disable1: FunctionComponent<Disable1Type> = ({
  rss,
  feed,
  propPadding,
  propPadding1,
  propMinWidth,
}) => {
  const disable6Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const feed4Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={styles.disable} style={disable6Style}>
      <div className={styles.disableChild} />
      <div className={styles.rssWrapper} style={frameDivStyle}>
        <img className={styles.rssIcon} alt="" src={rss} />
      </div>
      <div className={styles.feed} style={feed4Style}>
        {feed}
      </div>
    </div>
  );
};

export default Disable1;
