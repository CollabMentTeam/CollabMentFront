import { FunctionComponent } from "react";
import FooterInstance from "../components/FooterInstance";
import FooterV2 from "../components/FooterV2";
import styles from "./Chat.module.css";
import Navigation1 from "../components/Navigation1";

const Chat: FunctionComponent = () => {
  return (
    <div>
    <Navigation1 />
    <div className={styles.chat}>
      <div className={styles.columns}>
        <div className={styles.main} />
        <div className={styles.sidebar} />
      </div>
      <FooterInstance />
      <FooterV2 />
    </div>
    </div>
  );
};

export default Chat;
