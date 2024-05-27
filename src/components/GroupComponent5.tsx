import { FunctionComponent, useEffect, useState } from "react";
import styles from "./GroupComponent5.module.css";

const API_URL = 'http://127.0.0.1:8000/api/user/profile';

interface userData {
  id: number;
  name: string;
  email: string;
  profile_photo: string;
  first_name: string;
  last_name: string;
  user_type: string;
}

const GroupComponent: FunctionComponent = () => {

  const [userData, setUserData] = useState<userData | null>(null);

  const getUserData = async (username: any) => {
    try {
        const response = await fetch(`${API_URL}s/${username}/`);
        if (response.ok) {
            const userData = await response.json();
            return userData;
        } else {
            // Обработка ошибок
            console.error('Failed to fetch user data:', response.status);
            return null;
        }
    } catch (error) {
        console.error('Error fetching user data:', error);
        return null;
    }
};

  useEffect(() => {
    const username = localStorage.getItem('username');
    getUserData(username).then((data) => {
      setUserData(data);
    });
  }, []);

  

  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.ellipseParent}>
            <div className={styles.frameItem} />
            <div className={styles.ayaGazizovaParent}>
              <div className={styles.ayaGazizova}>{userData?.first_name} {userData?.last_name}</div>
              <div className={styles.employer}>{userData?.user_type}</div>
            </div>
          </div>
        </div>
        <img
          className={styles.frameInner}
          loading="lazy"
          alt=""
          src="/group-10000031561@2x.png"
        />
      </div>
      <button className={styles.ouimlCreateSingleMetricJoParent} onClick={() => window.location.href = "/create-vacancy"}>
        <img
          className={styles.ouimlCreateSingleMetricJoIcon}
          alt=""
          src="/ouimlcreatesinglemetricjob.svg"
        />
        <div className={styles.createAVacancyWrapper}>
          <div className={styles.createAVacancy}>Create a vacancy</div>
        </div>
      </button>
      <img className={styles.icon} alt="" src="/1712673113279-2@2x.png" />
    </div>
  );
};

export default GroupComponent;
