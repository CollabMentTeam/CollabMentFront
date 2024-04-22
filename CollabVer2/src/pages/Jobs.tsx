import { FunctionComponent, Key, useEffect, useState } from "react";
import FrameComponent5 from "../components/jobs/FrameComponent5";
import GroupComponent2 from "../components/jobs/GroupComponent2";
import GroupComponent1 from "../components/jobs/GroupComponent1";
import styles from "./Jobs.module.css";
import Navigation1 from "../components/Navigation1";
import { Job } from "./types";
import FooterV2 from "../components/FooterV2";

const Jobs: FunctionComponent = () => {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/jobs/');
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
      
    <div className={styles.jobs}>
    <div className={styles.containerForCreate}>
            <button className={styles.createBtn} onClick={() => window.location.href = "/create-vacancy"}> Create Vacancy </button>
            </div>
      <div className={styles.frameParent}>
        <FrameComponent5 />
        <div className={styles.frameGroup}>
          
        {jobs.map(job => (
              <GroupComponent2 key={job.id} job={job} />
            ))}
          
        </div>
      </div>
    </div>
    <FooterV2/>
    </div>
  );
};

export default Jobs;
