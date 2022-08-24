import { useEffect, useState } from "react";
import styles from "./OurTeam.module.css";
import getTeamMembers from "./getTeamMembers";
import TeamMember from "./TeamMember/TeamMember";

import Container from "../Container/Container";

const teamMembers = getTeamMembers()

const OurTeam = () => {
  const [members, setMembers] = useState([]);
  const [activeTab, setActiveTab] = useState('Founder');
  useEffect(() => {
    setMembers(teamMembers)
  }, [])

  return (
    <section className={styles.team}>
    <Container>
      <div className={styles.teamWrapper}>
      <h1 className={styles.title}>Meet Our Team</h1>
      <div className={styles.navigation}>
        <div onClick={()=>setActiveTab('Founder')} className={activeTab==="Founder" ? styles.activeTab : ''}>Founders</div>
        <div onClick={() => setActiveTab('Data scientist')} className={activeTab === "Data Analyst" ? styles.activeTab : ''}>Data scientist</div>
        <div onClick={() => setActiveTab('Designer')} className={activeTab==="Designer" ? styles.activeTab : ''}>Designers</div>
        <div onClick={() => setActiveTab('Developer')} className={activeTab==="Developer" ? styles.activeTab : ''}>Developers</div>
       
         
      </div>
      <div className={styles.membersContainer}>
        {
          members.filter(e=>e.job_title===activeTab).map(member => {
            return <TeamMember key={member.id} member={member}/>
          })
        }
      </div>
    </div>
    </Container>
    </section>
  );
};

export default OurTeam;
