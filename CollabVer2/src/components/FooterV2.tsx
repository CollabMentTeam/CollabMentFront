import { FunctionComponent } from "react";
import Footer1V2 from "./Footer1V2";
import styles from "./FooterV2.module.css";

const Footer: FunctionComponent = () => {
  return (
    <div className={styles.footerv2}>
      <Footer1V2 />
    </div>
  );
};

export default Footer;
