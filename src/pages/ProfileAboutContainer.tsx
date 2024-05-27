import { FunctionComponent } from "react";
import Navigation1 from "../components/Navigation1";
import Footer from "../components/Footer";
import styles from "./ProfilePage.module.css";
import { useParams } from "react-router-dom"; 
import ProfilePageAbout from "./ProfilePageAbout";

const ProfilePageContainer: FunctionComponent = () => {

  const { username } = useParams<{ username: string }>();


  return (
    <div className={styles.profilePage}>
      <div className={styles.columns}>
        <div className={styles.main} />
        <div className={styles.sidebar} />
      </div>
      <main className={styles.group}>
        <Navigation1 />
        <ProfilePageAbout username={username || ''} />
      </main>
      <div className={styles.profilePageChild} />
      <Footer />
    </div>
  );
};

export default ProfilePageContainer;
