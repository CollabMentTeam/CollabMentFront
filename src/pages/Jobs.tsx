import { FunctionComponent, Key, useEffect, useState } from "react";
import FrameComponent5 from "../components/jobs/FrameComponent5";
import GroupComponent2 from "../components/jobs/GroupComponent2";
import GroupComponent1 from "../components/GroupComponent5";
import GroupComponent from "../components/GroupComponent11";
import styles from "./Jobs.module.css";
import Navigation1 from "../components/Navigation1";
import { Job } from "./types";
import FooterV2 from "../components/FooterV2";
import DataHub from "./DataHub";
import FrameComponent1 from "../components/FrameComponent12";


const Jobs: FunctionComponent = () => {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('https://collabmentteam.pythonanywhere.com/api/jobs/');
        const data = await response.json();
        setJobs(data);
        console.log(data);
      } catch (error) {
        console.error('Ошибка при получении вакансий:', error);
      }
    };

    fetchJobs();
  }, []);

  
  return (
    <div className={styles.jobsParent}>
      <Navigation1/>
      
    {/* <div className={styles.jobs}>
      
    <div className={styles.containerForCreate}>
            <button className={styles.createBtn} onClick={() => window.location.href = "/create-vacancy"}> Create Vacancy </button>
            </div>
      <div className={styles.frameParent}>
        <FrameComponent5 />
        <div className={styles.frameGroup}>
          
        {jobs.map(job => (
          <GroupComponent2 className={styles.jobCard} key={job.id} job={job} />
          ))}
          
        </div>
      </div>
    </div> */}

<div className={styles.dataHub} style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
      <div className={styles.frameParent}>
      <GroupComponent />
        <GroupComponent1 />
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.lineWrapper}>
          <img className={styles.lineIcon} loading="lazy" alt="" />
        </div>
        <div className={styles.sortByNewContainer}>
          <span>{`Sort by: `}</span>
          <span className={styles.new}>New</span>
        </div>
        <div className={styles.lineContainer}>
          <div className={styles.line} />
        </div>
      </div>
      <div className={styles.frameContainer}>
      {jobs.map(job => (
          <GroupComponent2 className={styles.jobCard} key={job.id} job={job} />
          ))}
      </div>
    </div>
    <FooterV2/>
    </div>
  );
};

export default Jobs;
