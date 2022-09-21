import TeamMember from "./TeamMember/TeamMember";
import Dariush from "../../assets/images/team/dariusz-bielak.jpg"
import Matthew from "../../assets/images/team/matthew-thrower.jpg"
import Isabela from "../../assets/images/team/isabela.jpg"
import Kateryna from "../../assets/images/team/Kateryna htuvman.jpg"
import Mario from "../../assets/images/team/mariolima.jpg"
import CJ from "../../assets/images/team/cj.jpg"
import Slavik from "../../assets/images/team/yaroslav-maniukh.jpg"
import Roman from "../../assets/images/team/roman.jpg"
import Simon from "../../assets/images/team/Simone.jpg"
import Katysha from "../../assets/images/team/torkachenko_kateryna 1.jpg"
import Agata from "../../assets/images/team/Agata.jpg"

const getTeamMembers = () => {

  return [
    { id: 1, img: Dariush, name: 'Dariusz Bielak', job_title: 'Founder', job_occupation: 'Founder', bio: 'I enjoy building technology focused teams. Leading by example and challenging my colleagues to become best possible versions of themselves either in work or in life. In my career I always find myself outside my comfort zone, either in internally or customer focus roles. My experience covers traditional Data Warehouse, BigData solutions, DevOps and Data Engineering.I believe in leading by example and futility of long-term planning.' },
    { id: 9, img: Dariush, name: 'Dariusz Bielak', job_title: 'DevSecOps', job_occupation: 'DevSecOps', bio: 'I am ukrainian' },
    { id: 10, img: Dariush, name: 'Petar Ivanov', job_title: 'DevSecOps', job_occupation: 'DevSecOps', bio: 'I am ukrainian' },
    { id: 11, img: Agata, name: 'Agata Bielak', job_title: 'Finance Team', job_occupation: 'CFO', bio: 'BIO' },
    { id: 2, img: Matthew, name: 'Matthew Thrower', job_title: 'Founder', job_occupation: 'Founder', bio: 'I have worked with data for all my career and love liaising with my clients to bring their ideas to life and give them insights into their data they had previously thought impossible. Although the technologies, datasets and methods may change these values still underpin my work.' },
    { id: 3, img: Isabela, name: 'Isabela Cinca', job_title: 'Data Science', job_occupation: 'Data Science', bio: 'I am a Data Science consultant specializing in solutions across ERP applications, CRM solutions, Product Lifecycle Management (PLM), Business Intelligence (BI), Data Analytics and Cloud solutions. I have experience working for Luxury Brands, Finance and Mining companies such as Maserati, Diesel, Bottega Veneta, Alex Bank and BHP.' },
    { id: 4, img: Kateryna, name: 'Kateryna Hruvman', job_title: 'Web/App Design', bio: 'Bio' },
    { id: 5, img: Mario, name: 'Mario Costa', job_title: 'Data Engineering', job_occupation: 'Data Engineer', bio: 'I have a graduate degree in Intelligent Decision Support Systems and have been building solutions to transform unstructured data into meaningful dashboards since 2007. I love helping companies measure performance, understand customer preferences and optimize routines' },
    { id: 6, img: CJ, name: 'CJ Andrews', job_title: 'Data Engineering', job_occupation: 'Data Architect', bio: 'Business Analyst/Data Architect with over 25 years of expertise in software engineering, data architecture, business analysis, project management, enterprise modernization efforts, technical architecture planning, and technical writing' },
    { id: 7, img: Slavik, name: 'Yaroslav Maniukh', job_title: 'Data Engineering', job_occupation: 'Data Engineer', bio: 'I am python developer, specializing in  writing server-side application logic, connect applications with third-party web services, developing back-end components and support front-end developers with application integration.' },
    { id: 8, img: Roman, name: 'Roman Khramtsov', job_title: 'Data Engineering', job_occupation: 'Database Developer', bio: 'I specialize in implementing best-in-class enterprise BI solutions using the MS SQL Server Toolkit (T-SQL, SSIS, SSAS, SSRS).I am an experienced developer with significant experience in data processing of any complexity. I can take on any role in a Business Intelligence project.' },
    { id: 12, img: Simon, name: 'Simone Gaudotti', job_title: 'Data Science', job_occupation: 'Data Science', bio: '' },
    { id: 13, img: Katysha, name: 'Kateryna Torkachenko', job_title: 'Web/App Design', job_occupation: 'Frontend Developer', bio: 'Bio' },
  ]
}

export default getTeamMembers