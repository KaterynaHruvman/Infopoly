import { useEffect, useState } from "react";
import styles from "./OurTeam.module.css";
import getTeamMembers from "./getTeamMembers";
import TeamMember from "./TeamMember/TeamMember";

import background from "../../assets/images/Rectangle 20.png";
import background2 from "../../assets/images/Rectangle 24.png";
import Container from "../Container/Container";

const teamMembers = getTeamMembers()

const OurTeam = () => {
  const [members, setMembers] = useState([]);
  const [activeTab, setActiveTab] = useState('Founder');
  useEffect(() => {
    //fetching JSON from server
    setMembers(teamMembers)
  }, [])
  return (
    <div className={styles.teamWrapper}>
    <Container>
      <h1 className={styles.title}>Meet Our Team</h1>
      <img className={styles.background} src={background} alt={'rectangle'}/>
      <img className={styles.background2} src={background2} alt={'rectangle'}/>
      <div className={styles.navigation}>
        <div onClick={()=>setActiveTab('Founder')} className={activeTab==="Founder" && styles.activeTab}>Founders</div>
        <div onClick={() => setActiveTab('Designer')} className={activeTab==="Designer" && styles.activeTab}>Designers</div>
        <div onClick={() => setActiveTab('Developer')} className={activeTab==="Developer" && styles.activeTab}>Developers</div>
        <div onClick={() => setActiveTab('Data Analyst')} className={activeTab === "Data Analyst" && styles.activeTab}>Data Analyst</div>
         <div onClick={() => setActiveTab('Data Architect')} className={activeTab==="Data Architect" && styles.activeTab}>Data Architects</div>
      </div>
      <div className={styles.membersContainer}>
        {
          members.filter(e=>e.job_title===activeTab).map(member => {
            return <TeamMember key={member.id} member={member}/>
          })
        }
      </div>
    </Container>
    </div>
  );
};

export default OurTeam;
