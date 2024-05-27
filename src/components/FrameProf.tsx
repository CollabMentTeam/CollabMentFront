import { FunctionComponent } from "react";
import AdditionalDetails from "./AdditionalDetails2";
import styles from "./FrameProf.module.css";

interface profProps {
  image: string;
  vector: string;
  bgcolor: string;
  icon1: string;
  icon2: string;
  icon3: string;
  type1?: string;
  type2?: string;
  type3?: string;
  email?: string;
  phone?: string;
  languages?: string;
}

const FrameProf: FunctionComponent<profProps> = ({ image, vector,bgcolor, icon1, icon2, icon3 , type1, type2, type3, email, phone , languages}) => {
  return (
    <div className={styles.additionalDetailsParent}>
      <AdditionalDetails bgcolor={bgcolor} icon1={icon1} icon2={icon2} icon3={icon3} type1={type1} type2={type2} type3={type3} email={email} phone={phone} languages={languages}/>
      <section className={styles.wrapperShapeContainerParent}>
        <div className={styles.wrapperShapeContainer}>
          <img
            className={styles.shapeContainerIcon}
            loading="lazy"
            alt=""
            src={vector}
          />
        </div>
        <img className={styles.icon} alt="" src={image} />
      </section>
    </div>
  );
};

export default FrameProf;
