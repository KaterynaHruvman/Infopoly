import { useEffect, useState } from "react";
import styles from "./OurTeam.module.css";
import TeamMember from "./TeamMember/TeamMember";
import Dariush from "../../assets/images/team/corporate_portrait-100.jpg"
import Matthew from "../../assets/images/team/corporate_portrait-96.jpg"
import Isabela from "../../assets/images/Isabela.png"
import Kateryna from "../../assets/images/IMG_3326.jpeg"
import Mario from "../../assets/images/mariolima.jpg"
import CJ from "../../assets/images/profile_picture.png"
import Slavik from "../../assets/images/MicrosoftTeams-image (3).png"
import Roman from "../../assets/images/MicrosoftTeams-image (3).jpeg"
import background from "../../assets/images/Rectangle 20.png";
import background2 from "../../assets/images/Rectangle 24.png";
const teamMembers = [
  {id: 1, img: Dariush, name: 'Dariusz Bielak', job_title: 'Founder', bio: 'I enjoy building technology focused teams. Leading by example and challenging my colleagues to become best possible versions of themselves either in work or in life. In my career I always find myself outside my comfort zone, either in internally or customer focus roles. My experience covers traditional Data Warehouse, BigData solutions, DevOps and Data Engineering.I believe in leading by example and futility of long-term planning.'},
  {id: 2, img: Matthew, name: 'Matthew Thrower', job_title: 'Founder', bio: 'I have worked with data for all my career and love liaising with my clients to bring their ideas to life and give them insights into their data they had previously thought impossible. Although the technologies, datasets and methods may change these values still underpin my work.'},
  {id: 3, img: Isabela, name: 'Isabela Cinca', job_title: 'Data Analyst', bio: 'Bio'},
  { id: 4, img: Kateryna, name: 'Kateryna Hruvman', job_title: 'Designer', bio: 'Bio' },
{ id: 5, img: Mario, name: 'Mario Costa', job_title: 'Data Architect', bio: 'I have a graduate degree in Intelligent Decision Support Systems and have been building solutions to transform unstructured data into meaningful dashboards since 2007. I love helping companies measure performance, understand customer preferences and optimize routines' },
  { id: 6, img: CJ, name: 'CJ Andrews', job_title: 'Data Architect', bio: 'Business Analyst/Data Architect with over 25 years of expertise in software engineering, data architecture, business analysis, project management, enterprise modernization efforts, technical architecture planning, and technical writing' },
  { id: 7, img: Slavik, name: 'Yaroslav Maniukh', job_title: 'Developer', bio: 'Bio' },
{ id: 8, img: Roman, name: 'Roman Khramtsov', job_title: 'Developer', bio: 'I specialize in implementing best-in-class enterprise BI solutions using the MS SQL Server Toolkit (T-SQL, SSIS, SSAS, SSRS).I am an experienced developer with significant experience in data processing of any complexity. I can take on any role in a Business Intelligence project.' },
]

const OurTeam = () => {
  const [members, setMembers] = useState([]);
  const [activeTab, setActiveTab] = useState('Founder');
  useEffect(() => {
    //fetching JSON from server
    setMembers(teamMembers)
  }, [])
  return (
    <div className={styles.container}>
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
    </div>
  );
};

export default OurTeam;
