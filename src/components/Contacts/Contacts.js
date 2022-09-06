import styles from './Contacts.module.css'
import Container from '../Container/Container';
import photo from '../../assets/images/corporate_portrait-64.jpg'
import { Link, NavLink } from 'react-router-dom';
import linkdin from '../../assets/images/free-icon-linkedin-220343.png'
import upwork from '../../assets/images/upwork_logo_icon_170310.png'
// import { SubtitlesOutlined } from '@mui/icons-material';
const Contacts = () => {
    return (
        <section className={styles.contacts}>
            <Container>

                <h2 className={styles.title}> GET IN TOUCH</h2>
                <h3 className={styles.text}> We are looking forward to start work with you.</h3>



                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <a className={styles.contact} href="tel:+44 207 175 5616"> Phone: +44 207 175 5616 </a>
                    </li>
                    <li className={styles.listItem}>
                        <a className={styles.contact} href="e-mail: contact@infopoly.com"> E-mail: contact@infopoly.com </a>
                    </li>
                    <li className={styles.listItem}>
                        Adress: 221B Baker Street, London

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




                {/* <img src={photo} className={styles.photo} /> */}
            </Container>
        </section>
    )
}

export default Contacts