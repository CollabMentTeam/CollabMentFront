import { FunctionComponent } from "react";
import FrameComponent from "./FrameComponent9";
import styles from "./AboutComponent.module.css";
import {ProfileData} from "../pages/ProfilePageAbout"

interface AboutComponentProps {
  userProfileData: ProfileData; 
}

const AboutComponent: FunctionComponent<AboutComponentProps> = ({ userProfileData }) => {
  return (
    <div className={styles.aboutcomponent}>
      <header className={styles.about}>
        <div className={styles.aboutChild} />
        <b className={styles.professionalField}>Professional Field</b>
        <div className={styles.aboutInner}>
          <div className={styles.frameParent}>
            <img
              className={styles.frameChild}
              alt=""
              src="/group-1000003204.svg"
            />
            <div className={styles.imMoreExperiencedInEcommeWrapper}>
              <div className={styles.imMoreExperienced}>
                {userProfileData.professional_field}
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className={styles.aboutcomponentInner}>
        <div className={styles.frameGroup}>
          <textarea className={styles.frameItem} rows={16} cols={21} />
          <div className={styles.frameContainer}>
            <div className={styles.personalDetailsWrapper}>
              <b className={styles.personalDetails}>Personal Details</b>
            </div>
            <div className={styles.frameDiv}>
              <img
                className={styles.frameInner}
                loading="lazy"
                alt=""
                src="/group-1000003206.svg"
              />
              <div className={styles.frameWrapper}>
                <div className={styles.educationalLevelParent}>
                  <div className={styles.educationalLevel}>
                    Educational level
                  </div>
                  <div className={styles.workWithClientsAndWebStudWrapper}>
                    <div className={styles.workWithClients}>
                      {userProfileData.education}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <FrameComponent
              globe="/globe.svg"
              namesOfTheInstitution="Names of the institution"
              value={userProfileData.name_institution}
            />
            <FrameComponent
              globe="/globe-1.svg"
              namesOfTheInstitution="Date of study"
              propPadding="0px 0px var(--padding-7xs)"
              propDisplay="inline-block"
              propMinWidth="91px"
              value={userProfileData.education_date}
            />
          </div>
          <textarea className={styles.frameTextarea} rows={16} cols={21} />
          <div className={styles.frameParent1}>
            <div className={styles.jobInformationWrapper}>
              <b className={styles.jobInformation}>Job Information</b>
            </div>
            <div className={styles.frameParent2}>
              <div className={styles.frameParent3}>
                <img
                  className={styles.groupIcon}
                  loading="lazy"
                  alt=""
                  src="/group-1000003209.svg"
                />
                <div className={styles.frameWrapper1}>
                  <div className={styles.desiredPositionParent}>
                    <div className={styles.desiredPosition}>
                      Desired position
                    </div>
                    <div className={styles.workWithClientsAndWebStudContainer}>
                      <div className={styles.workWithClients1}>
                        {userProfileData.desired_position}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameWrapper2}>
                <div className={styles.lineParent}>
                  <div className={styles.line} />
                  <div className={styles.frameWrapper3}>
                    <div className={styles.frameParent4}>
                      <img
                        className={styles.frameChild1}
                        loading="lazy"
                        alt=""
                        src="/group-1000003210.svg"
                      />
                      <div className={styles.frameWrapper4}>
                        <div className={styles.typeOfWorkParent}>
                          <div className={styles.typeOfWork}>Type of work</div>
                          <div className={styles.conditionSplitter}>
                            <div className={styles.workWithClients2}>
                              {userProfileData.type_of_work}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.outputMerger}>
                <div className={styles.errorHandler} />
                <div className={styles.outputMergerInner}>
                  <div className={styles.frameParent5}>
                    <div className={styles.rectangleParent}>
                      <div className={styles.rectangleDiv} />
                      <img
                        className={styles.globeIcon}
                        loading="lazy"
                        alt=""
                        src="/globe-2.svg"
                      />
                    </div>
                    <div className={styles.frameWrapper5}>
                      <div className={styles.operatingModeParent}>
                        <div className={styles.operatingMode}>
                          Operating mode
                        </div>
                        <div className={styles.workWithClientsAndWebStudFrame}>
                          <div className={styles.workWithClients3}>
                            {userProfileData.operating_mode}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.aboutcomponentChild}>
        <div className={styles.rectangleGroup}>
          <div className={styles.frameChild2} />
          <div className={styles.workExperienceWrapper}>
            <b className={styles.workExperience}>Work experience</b>
          </div>
          <div className={styles.frameParent6}>
            <div className={styles.frameWrapper6}>
              <div className={styles.frameParent7}>
                <div className={styles.frameParent8}>
                  <img
                    className={styles.frameChild3}
                    loading="lazy"
                    alt=""
                    src="/group-1000003212.svg"
                  />
                  <div className={styles.frameWrapper7}>
                    <div className={styles.nameOfTheOrganizationParent}>
                      <div className={styles.nameOfThe}>
                        Name of the organization
                      </div>
                      <div className={styles.workWithClientsAndWebStudWrapper1}>
                        <div className={styles.workWithClients4}>
                          {userProfileData.name_organization}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent9}>
                  <img
                    className={styles.frameChild4}
                    loading="lazy"
                    alt=""
                    src="/group-1000003214.svg"
                  />
                  <div className={styles.frameWrapper8}>
                    <div className={styles.passageTimeParent}>
                      <div className={styles.passageTime}>Passage time </div>
                      <div className={styles.workWithClientsAndWebStudWrapper2}>
                        <div className={styles.workWithClients5}>
                          {userProfileData.passage_time}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.lineGroup}>
              <div className={styles.line1} />
              <div className={styles.line2} />
            </div>
            <div className={styles.frameWrapper9}>
              <div className={styles.frameParent10}>
                <div className={styles.frameParent11}>
                  <img
                    className={styles.frameChild5}
                    loading="lazy"
                    alt=""
                    src="/group-1000003213.svg"
                  />
                  <div className={styles.frameWrapper10}>
                    <div className={styles.workExperienceParent}>
                      <div className={styles.workExperience1}>
                        Work experience
                      </div>
                      <div className={styles.workWithClientsAndWebStudWrapper3}>
                        <div className={styles.workWithClients6}>
                          {userProfileData.experience_name}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent12}>
                  <img
                    className={styles.frameChild6}
                    loading="lazy"
                    alt=""
                    src="/group-1000003215.svg"
                  />
                  <div className={styles.frameWrapper11}>
                    <div className={styles.positionParent}>
                      <div className={styles.position}>Position</div>
                      <div className={styles.workWithClientsAndWebStudWrapper4}>
                        <div className={styles.workWithClients7}>
                          {userProfileData.position}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper12}>
            <div className={styles.frameParent13}>
              <div className={styles.lineContainer}>
                <div className={styles.line3} />
                <div className={styles.line4} />
              </div>
              <div className={styles.frameParent14}>
                <img
                  className={styles.frameChild7}
                  loading="lazy"
                  alt=""
                  src="/group-1000003216.svg"
                />
                <div className={styles.frameWrapper13}>
                  <div className={styles.writeAboutYourWorkExperienParent}>
                    <div className={styles.writeAboutYour}>
                      Write about your work experience
                    </div>
                    <div className={styles.newExperienceWithUpworkSysWrapper}>
                      <div className={styles.newExperienceWith}>
                       {userProfileData.experience}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.rectangleContainer}>
        <div className={styles.frameChild8} />
        <div className={styles.contactsWrapper}>
          <b className={styles.contacts}>Contacts</b>
        </div>
        <div className={styles.frameParent15}>
          <div className={styles.frameParent16}>
            <div className={styles.frameWrapper14}>
              <div className={styles.frameParent17}>
                <img
                  className={styles.frameChild9}
                  loading="lazy"
                  alt=""
                  src="/group-1000003212-1.svg"
                />
                <div className={styles.frameWrapper15}>
                  <div className={styles.locationParent}>
                    <div className={styles.location}>Location </div>
                    <div className={styles.newExperienceWithUpworkSysContainer}>
                      <div className={styles.newExperienceWith1}>
                        {userProfileData.location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.line5} />
          </div>
          <div className={styles.frameWrapper16}>
            <div className={styles.frameParent18}>
              <div className={styles.frameParent19}>
                <img
                  className={styles.frameChild10}
                  loading="lazy"
                  alt=""
                  src="/group-1000003213-1.svg"
                />
                <div className={styles.frameWrapper17}>
                  <div className={styles.citizenshipParent}>
                    <div className={styles.citizenship}>Citizenship  </div>
                    <div className={styles.workWithClientsAndWebStudWrapper5}>
                      <div className={styles.workWithClients8}>
                        {userProfileData.citizenship}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameParent20}>
                <div className={styles.groupDiv}>
                  <div className={styles.frameChild11} />
                  <img
                    className={styles.globeIcon1}
                    loading="lazy"
                    alt=""
                    src="/globe-3.svg"
                  />
                </div>
                <div className={styles.frameWrapper18}>
                  <div className={styles.cityOrDistrictParent}>
                    <div className={styles.cityOrDistrict}>
                      City or district
                    </div>
                    <div className={styles.workWithClientsAndWebStudWrapper6}>
                      <div className={styles.workWithClients9}>
                        {userProfileData.city}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.aboutWrapper}>
        <div className={styles.about1}>
          <div className={styles.aboutItem} />
          <b className={styles.personalQualities}>Personal qualities</b>
          <div className={styles.aboutInner1}>
            <div className={styles.frameParent21}>
              <img
                className={styles.frameChild12}
                loading="lazy"
                alt=""
                src="/group-1000003229.svg"
              />
              <div className={styles.newExperienceWithUpworkSysFrame}>
                <div className={styles.newExperienceWith2}>
                  {userProfileData.personal_qualities}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutComponent;
