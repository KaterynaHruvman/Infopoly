import { useEffect, useState } from "react";
import styles from "./OurTeam.module.css";
import TeamMember from "./TeamMember/TeamMember";
import Dariush from "../../assets/images/team/corporate_portrait-100.jpg"
import Matthew from "../../assets/images/team/corporate_portrait-96.jpg"
import Isabela from "../../assets/images/team/Isabela.jpeg"
import Kateryna from "../../assets/images/IMG_3326.jpeg"
import background from "../../assets/images/Rectangle 20.png";
const teamMembers = [
  {id: 1, img: Dariush, name: 'Dariush Bielak', job_title: 'Founder', bio: 'Bio'},
  {id: 2, img: Matthew, name: 'Matthew Thrower', job_title: 'Founder', bio: 'Bio'},
  {id: 3, img: Isabela, name: 'Isabela Cinca', job_title: 'Data Analyst', bio: 'Bio'},
  {id: 4, img: Kateryna, name: 'Kateryna Hruvman', job_title: 'Developer', bio: 'Bio'},
]

const OurTeam = () => {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    //fetching JSON from server
    setMembers(teamMembers)
  }, [])
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Meet Our Team</h1>
      <img className={styles.background} src={background} alt={'rectangle'}/>
      <div className={styles.navigation}>
        <div>Founders</div>
        <div>Designers</div>
        <div>Developers</div>
        <div>Data Analyst</div>
      </div>
      <div className={styles.membersContainer}>
        {
          members.map(member => {
            return <TeamMember key={member.id} member={member}/>
          })
        }
      </div>
    </div>
  );
};

export default OurTeam;
