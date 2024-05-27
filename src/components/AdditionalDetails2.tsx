import { FunctionComponent } from "react";
import styles from "./AdditionalDetails2.module.css";

interface AdditionalDetailsType {
  bgcolor: string;
  icon1?: string;
  icon2?: string;
  icon3?: string;
  type1?: string;
  type2?: string;
  type3?: string;
  email?: string;
  phone?: string;
  languages?: string;
}

const AdditionalDetails: FunctionComponent<AdditionalDetailsType> = ({bgcolor, icon1, icon2, icon3 , type1, type2, type3, email, phone, languages}) => {
  return (
    <section className={styles.additionalDetails} style={{backgroundColor: bgcolor}}>
      <div className={styles.additionalDetailsParent}>
        <div className={styles.additionalDetails1}>Additional Details</div>
        <div className={styles.button}>
          <img className={styles.icon} loading="lazy" alt="" src="/icon3.svg" />
        </div>
      </div>
      <div className={styles.email}>
        <img
          className={styles.icon1}
          loading="lazy"
          alt=""
          src={icon1}
        />
        <div className={styles.content}>
          <div className={styles.email1}>{type1}</div>
          <div className={styles.gazizovaemailcom}>{email}</div>
        </div>
      </div>
      <div className={styles.email2}>
        <img
          className={styles.icon2}
          loading="lazy"
          alt=""
          src={icon2}
        />
        <div className={styles.content1}>
          <div className={styles.phone}>{type2}</div>
          <div className={styles.div}>{phone}</div>
        </div>
      </div>
      <div className={styles.email3}>
        <img
          className={styles.icon3}
          loading="lazy"
          alt=""
          src={icon3}
        />
        <div className={styles.content2}>
          <div className={styles.languages}>{type3}</div>
          <div
            className={styles.kazakhEnglishRussian}
          >{languages}</div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalDetails;
