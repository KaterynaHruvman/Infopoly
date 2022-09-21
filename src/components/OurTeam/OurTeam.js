import { useEffect, useState } from "react";
import styles from "./OurTeam.module.css";
import getTeamMembers from "./getTeamMembers";
import TeamMember from "./TeamMember/TeamMember";

import Container from "../Container/Container";

const teamMembers = getTeamMembers()

const OurTeam = () => {
  const [members, setMembers] = useState([]);
  const [activeTab, setActiveTab] = useState('Finance');
  useEffect(() => {
    setMembers(teamMembers)
  }, [])

  return (
    <section className={styles.team}>
      <Container>
        <div className={styles.teamWrapper}>
          <h1 className={styles.title}>Meet Our Team</h1>
          <div className={styles.navigation}>
            {/* <div onClick={() => setActiveTab('Founder')} className={activeTab === "Founder" ? styles.activeTab : ''}>Founders</div> */}
            <div onClick={() => setActiveTab('Finance Team')} className={activeTab === "Finance Team" ? styles.activeTab : ''}>Finance</div>
            <div onClick={() => setActiveTab('Data Science')} className={activeTab === "Data Science" ? styles.activeTab : ''}>Data Science</div>
            <div onClick={() => setActiveTab('Web/App Design')} className={activeTab === "Web/App Design" ? styles.activeTab : ''}>Web/App Design</div>
            <div onClick={() => setActiveTab('Data Engineering')} className={activeTab === "Data Engineering" ? styles.activeTab : ''}>Data Engineering</div>


          </div>
          <div className={styles.membersContainer}>
            {
              members.filter(e => e.job_title === activeTab).map(member => {
                return <TeamMember key={member.id} member={member} />
              })
            }
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurTeam;
