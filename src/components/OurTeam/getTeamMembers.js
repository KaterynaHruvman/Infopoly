import TeamMember from "./TeamMember/TeamMember";
import Dariush from "../../assets/images/team/dariusz-bielak.jpg"
import Matthew from "../../assets/images/team/matthew-thrower.jpg"
import Isabela from "../../assets/images/team/isabela.jpg"
import Kateryna from "../../assets/images/team/58801E8E-90C8-4833-8BB4-E7DC8A170669.jpg"
import Mario from "../../assets/images/team/mariolima.jpg"
import CJ from "../../assets/images/team/cj.jpg"
import Slavik from "../../assets/images/team/yaroslav-maniukh.jpg"
import Roman from "../../assets/images/team/roman.jpg"

const getTeamMembers = () => {

  return [
    {id: 1, img: Dariush, name: 'Dariusz Bielak', job_title: 'Founder', bio: 'I enjoy building technology focused teams. Leading by example and challenging my colleagues to become best possible versions of themselves either in work or in life. In my career I always find myself outside my comfort zone, either in internally or customer focus roles. My experience covers traditional Data Warehouse, BigData solutions, DevOps and Data Engineering.I believe in leading by example and futility of long-term planning.'},
    {id: 2, img: Matthew, name: 'Matthew Thrower', job_title: 'Founder', bio: 'I have worked with data for all my career and love liaising with my clients to bring their ideas to life and give them insights into their data they had previously thought impossible. Although the technologies, datasets and methods may change these values still underpin my work.'},
    {id: 3, img: Isabela, name: 'Isabela Cinca', job_title: 'Data scientist', bio: 'Bio'},
    { id: 4, img: Kateryna, name: 'Kateryna Hruvman', job_title: 'Designer', bio: 'Bio' },
  { id: 5, img: Mario, name: 'Mario Costa', job_title: 'Data scientist', bio: 'I have a graduate degree in Intelligent Decision Support Systems and have been building solutions to transform unstructured data into meaningful dashboards since 2007. I love helping companies measure performance, understand customer preferences and optimize routines' },
    { id: 6, img: CJ, name: 'CJ Andrews', job_title: 'Data scientist', bio: 'Business Analyst/Data Architect with over 25 years of expertise in software engineering, data architecture, business analysis, project management, enterprise modernization efforts, technical architecture planning, and technical writing' },
    { id: 7, img: Slavik, name: 'Yaroslav Maniukh', job_title: 'Developer', bio: 'Bio' },
  { id: 8, img: Roman, name: 'Roman Khramtsov', job_title: 'Developer', bio: 'I specialize in implementing best-in-class enterprise BI solutions using the MS SQL Server Toolkit (T-SQL, SSIS, SSAS, SSRS).I am an experienced developer with significant experience in data processing of any complexity. I can take on any role in a Business Intelligence project.' },
  ]
}

export default getTeamMembers