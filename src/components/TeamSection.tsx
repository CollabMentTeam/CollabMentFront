import { FunctionComponent } from "react";
import FrameComponent from "./FrameComponent10";
import GroupComponent from "./GroupComponent4";
import styles from "./TeamSection.module.css";

interface TeamSectionType {
  teams: any;
  handleModal: any;
}

const TeamSection: FunctionComponent<TeamSectionType> = ({teams, handleModal}) => {
  return (
    <div className={styles.teamsection}>
      <div className={styles.frameParent}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.joinTeamButtonWrapper}>
            <div className={styles.joinTeamButton}>
              <h1
                className={styles.findYourTeam}
              >{`Find your team here and implement the ideas! `}</h1>
              <h2 className={styles.createYourPerfect}>
                Create your perfect team here!
              </h2>
            </div>
          </div>
          <button className={styles.ouimlCreateSingleMetricJoParent} onClick={() => window.location.href = "/createTeam"}>
            <img
              className={styles.ouimlCreateSingleMetricJoIcon}
              alt=""
              src="/ouimlcreatesinglemetricjob1.svg"
            />
            <div className={styles.teamCreator} >
              <div className={styles.createATeam}>Create a team</div>
            </div>
          </button>
          
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.frameItem} />
          <div className={styles.findJobsButton}>
            <img className={styles.icon} alt="" src="/1713351244373-1@2x.png" />
            <h1 className={styles.createYourTeam}>Create your team today!</h1>
          </div>
        </div>
      </div>
      <main className={styles.jobSearchBoxParent}>
        <section className={styles.jobSearchBox}>
          <div className={styles.frameGroup}>
            {/* <FrameComponent rectangle34624192="/rectangle-34624192@2x.png" /> */}
            {teams.map((team: any) => (
            <GroupComponent rectangle34624192={team.image}
             companyName={team.name}
              id={team.id}
              investment_amount_needed={team.investment_amount_needed} 
              membersCount={team.members.length}
              contactEmail={team.contactEmail}
              handleModal={() => handleModal(team)}
              />
          ))}
            {/* <GroupComponent rectangle34624192="/rectangle-34624192-2@2x.png" /> */}
          </div>
        </section>
        <section className={styles.frameContainer}>
          {/* <FrameComponent rectangle34624192="/rectangle-34624192-3@2x.png" /> */}
          {/* <GroupComponent rectangle34624192="/rectangle-34624192-4@2x.png" />
          <GroupComponent rectangle34624192="/rectangle-34624192-5@2x.png" /> */}
        </section>
      </main>
    </div>
  );
};

export default TeamSection;
