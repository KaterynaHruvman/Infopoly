import styles from './Contacts.module.css'
import Container from '../Container/Container';
import photo from '../../assets/images/corporate_portrait-64.jpg'
import { Link, NavLink } from 'react-router-dom';
import linkdin from '../../assets/images/Social-35-Linkedin-Outline_icon-icons.com_66384.png'
import upwork from '../../assets/images/upwork_icon_130799.png'
import FooterSmall from '../FooterSmall/FooterSmall';
import phone from '../../assets/images/auricular-phone-symbol-in-a-circle_icon-icons.com_56570.svg'
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
// import { SubtitlesOutlined } from '@mui/icons-material';
const Contacts = () => {
    return (
        <>
            <section className={styles.contacts}>
                <Container>

                    <h2 className={styles.title}> GET IN TOUCH</h2>
                    <h3 className={styles.text}> We look forward to start working with you.</h3>

                    <ul className={styles.list}>
                        <li className={styles.listItem}>

                            <PhoneIcon className={styles.icon} />
                            <a className={styles.contact} href="tel:+44 207 175 5616"> +44 207 175 5616 </a>
                        </li>
                        <li className={styles.listItem}>
                            <EmailIcon className={styles.icon} />
                            <a className={styles.contact} href="e-mail: contact@infopoly.com">contact@infopoly.com </a>
                        </li>
                        <li className={styles.listItem}>
                            <LocationOnIcon className={styles.icon}/>  221B Baker Street, London


                         </li>
                        <div className={styles.socials}>
                            <li className={styles.listItem}>
                                <a href="https://www.linkedin.com/company/infopoly-ltd/?original_referer=https%3A%2F%2Fwww.infopoly.com%2F" className={styles.listItemA}><img src={linkdin} className={styles.listItemImg} /></a>

                            </li>
                            <li className={styles.listItem}>
                                <a href='https://www.upwork.com/nx/wm/client/dashboard' className={styles.listItemA}><img src={upwork} className={styles.listItemImg} /></a>
                            </li>
                        </div>

                    </ul>
                    {/* <img src={phone} className={styles.phoneImg} /> */}

                    {/* <img src={photo} className={styles.photo} /> */}
                </Container>
            </section>
            <FooterSmall />
        </>
    )
}


export default Contacts