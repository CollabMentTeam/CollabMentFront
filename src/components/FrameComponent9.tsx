import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent9.module.css";

export type FrameComponentType = {
  globe?: string;
  namesOfTheInstitution?: string;
  value?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  globe,
  namesOfTheInstitution,
  propPadding,
  propDisplay,
  propMinWidth,
  value,
}) => {
  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const namesOfTheStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  return (
    <div className={styles.lineParent}>
      <div className={styles.line} />
      <div className={styles.frameWrapper}>
        <div className={styles.frameParent}>
          <button className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <img className={styles.globeIcon} alt="" src={globe} />
          </button>
          <div className={styles.frameContainer} style={frameDiv2Style}>
            <div className={styles.namesOfTheInstitutionParent}>
              <div className={styles.namesOfThe} style={namesOfTheStyle}>
                {namesOfTheInstitution}
              </div>
              <div className={styles.workWithClientsAndWebStudWrapper}>
                <div className={styles.workWithClients}>
                  {value}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
