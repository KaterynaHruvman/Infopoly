import styles from './Contacts.module.css'
import Container from '../Container/Container';
import logo from "../../assets/images/infoPoly_logo.svg";
import photo from '../../assets/images/corporate_portrait-64.jpg'
// import { SubtitlesOutlined } from '@mui/icons-material';
const Contacts = ()=>{
    return (
        <section className={styles.contacts}>
        <Container>
        <img src={logo} className={styles.logo} alt={"logo"} />
            <h2 className={styles.title}> GET IN TOUCH</h2>
            <h3> We are looking forward to start work with you.</h3>

            
            <div className={styles.list}>
                <ul>
                    <li className={styles.listItem}>
                       <a className={styles.email}  href="tel:+44 207 175 5616"> Phone: +44 207 175 5616 </a> 
                    </li>
                    <li className={styles.listItem}>
                    <a className={styles.email} href="e-mail: info@infopoly.com"> E-mail: info@infopoly.com </a>  
                    </li>
                    <li className={styles.listItem}> 
                        Adress: .....

                    </li>
                    <li className={styles.listItem}>
                    Linked In 

                    </li>

                    
                </ul>
               

            </div>
           
            {/* <img src={photo} className={styles.photo} ></img> */}
           </Container>
        </section>
    )
}

export default Contacts