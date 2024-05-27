import { FunctionComponent, useState } from "react";
import styles from "./GroupComponent2.module.css";
import { Job } from "../../pages/types";

interface GroupComponent2Props {
  key: number;
  job: Job;
  className?: string; // Добавляется как опциональное свойство
}
const GroupComponent2: React.FC<GroupComponent2Props> = ({ key, job, className }) => {

  const [applied, setApplied] = useState(false);

  const handleApply = async () => {
    try {
        const username = localStorage.getItem('username');
        if (!username) {
            throw new Error('Имя пользователя не найдено в localStorage');
        }

        const response = await fetch('https://collabmentteam.pythonanywhere.com/api/job-applications/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                job: job.id,
                username: username,
            }),
        });

        if (!response.ok) {
            throw new Error('Ошибка при отправке отклика на вакансию');
        }
        setApplied(true);
    } catch (error) {
        console.error('Ошибка:', error);
    }
};


const sendNotifications = async (members: any) => {
  try {
    const viewerUsername = localStorage.getItem('username');
      const response = await fetch('https://collabmentteam.pythonanywhere.com/api/create-notification/', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              usernames: members,
              message: 'New applied! from ' + viewerUsername,
              link : '/video'
          }),
      });
      if (!response.ok) {
          throw new Error('Ошибка при отправке уведомления');
      }
      console.log('Уведомления отправлены успешно');
  } catch (error) {
      console.error('Ошибка:', error);
  }
};



  
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.usersThreeInstanceWrapper}>
            <div className={styles.usersThreeInstance} />
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.frameContainer}>
              <div className={styles.seniorFrontendDeveloperWrapper}>
                <b className={styles.seniorFrontendDeveloper}>
                  {/* Senior Frontend Developer */}
                  {job.position}
                </b>
              </div>
              <div className={styles.kaspiKazakhstan}>{job.company_name}</div>
            </div>
          </div>
          <img
            className={styles.featherIconsBookmark}
            loading="lazy"
            alt=""
            src="/feather-icons--bookmark1.svg"
          />
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.frameParent1}>
            <div className={styles.frameParent2}>
              <div className={styles.frameParent3}>
                <div className={styles.frameParent4}>
                  <div className={styles.phosphorIconsClockParent}>
                    <img
                      className={styles.phosphorIconsClock}
                      loading="lazy"
                      alt=""
                      src="/phosphor-icons--clock.svg"
                    />
                    <div className={styles.fullTime}>{job.job_type}</div>
                  </div>
                  <div className={styles.frameWrapper1}>
                    <div className={styles.iconWorkExperienceParent}>
                      <img
                        className={styles.iconWorkExperience}
                        loading="lazy"
                        alt=""
                        src="/icon-work-experience.svg"
                      />
                      <div className={styles.yearWrapper}>
                        <div className={styles.year}>{job.experience}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameWrapper2}>
                  <div className={styles.almatyCityParent}>
                    <div className={styles.almatyCity}>{job.description}</div>
                    {/* <div className={styles.almatyCity1}>gfrege</div> */}
                  </div>
                </div>
              </div>
              <div className={styles.phoneIconInstanceWrapper}>
                <div className={styles.phoneIconInstance}>
                  <img
                    className={styles.featherIconsMapPin}
                    loading="lazy"
                    alt=""
                    src="/feather-icons--mappin.svg"
                  />
                  <div className={styles.locationIconInstance}>
                    <div className={styles.almatyCity2}>{job.location}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.december2023Wrapper}>
              <div className={styles.december2023}>{job.publish_date}</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.searchIconWrapper}>
        <div className={styles.searchIcon}>
          <div className={styles.kaspiLogo}>
            <img
              className={styles.kaspiLogoChild}
              loading="lazy"
              alt=""
              src="/vector-1211.svg"
            />
          </div>
          <div className={styles.verticalDivider}>
            <div className={styles.seniorDevLabel}>
              <div className={styles.locationLabel}>
                <div className={styles.clockIcon}>
                  <div className={styles.fulltimeLabel}>
                    <img
                      className={styles.solarwalletMoneyOutlineIcon}
                      loading="lazy"
                      alt=""
                      src="/solarwalletmoneyoutline.svg"
                    />
                    <div className={styles.verticalDivider1}>
                      <div className={styles.tg}>{job.salary} tg.</div>
                    </div>
                  </div>
                </div>
                <div className={styles.socialMediaLinksParent}>
                  <div className={styles.socialMediaLinks}>
                    <img
                      className={styles.phosphorIconsUsersthree}
                      loading="lazy"
                      alt=""
                      src="/phosphor-icons--usersthree.svg"
                    />
                  </div>
                  <div className={styles.appliedLabel}>
                    <div className={styles.div}>{job.applications_count}</div>
                  </div>
                  <div className={styles.appliedWrapper}>
                    <div className={styles.applied}>Applied</div>
                  </div>
                </div>
              </div>
            </div>
            <button className={styles.locationMarker}>
            {!applied && <div className={styles.applyNow} onClick={handleApply}>Apply Now</div>}
            {applied && <div className={styles.applied}>Applied</div>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent2;
