import styles from './Contacts.module.css'
import Container from '../Container/Container';
import logo from "../../assets/images/infoPoly_logo.svg";
import photo from '../../assets/images/corporate_portrait-64.jpg'
import { Link, NavLink } from 'react-router-dom';
import linkdin from '../../assets/images/free-icon-linkedin-220343.png'
import upwork from '../../assets/images/upwork_logo_icon_170310.png'
// import { SubtitlesOutlined } from '@mui/icons-material';
const Contacts = ()=>{
    return (
        <section className={styles.contacts}>
        <Container>
        <NavLink to="/"> <img src={logo} className={styles.logo} alt={"logo"} /></NavLink> 
       
            <h2 className={styles.title}> GET IN TOUCH</h2>
            <h3 className={styles.text}> We are looking forward to start work with you.</h3>

            
            <div className={styles.list}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>
                       <a className={styles.email}  href="tel:+44 207 175 5616"> Phone: +44 207 175 5616 </a> 
                    </li>
                    <li className={styles.listItem}>
                    <a className={styles.email} href="e-mail: contact@infopoly.com"> E-mail: contact@infopoly.com </a>  
                    </li>
                    <li className={styles.listItem}> 
                        Adress: .....

                    </li>
                    <li className={styles.listItem}>
                    <a href="https://www.linkedin.com/company/infopoly-ltd/?original_referer=https%3A%2F%2Fwww.infopoly.com%2F"><img src={linkdin} className={styles.linkdin}/></a>

                    </li>
                    <li className={styles.listItem}>
                    <a href='https://www.upwork.com/nx/wm/client/dashboard'><img src={upwork} className={styles.linkdin}/></a>

                    </li>
                    
                </ul>
               

            </div>
           
            {/* <img src={photo} className={styles.photo} ></img> */}
           </Container>
        </section>
    )
}

export default Contacts