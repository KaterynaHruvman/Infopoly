import styles from './Footer.module.css'
import logo from '../../assets/images/infoPoly_logo 1.png';
import Container from '../Container/Container';
const Footer = () => {
    return (
        <section className={styles.footer}>
           <Container>
               <div className={styles.wrapper}>
                   <div className={styles.info}>
                       <img src={logo} className={styles.logo} alt="logo" />
                       <p className={styles.infoText}>
                           A highly skilled agency specialising in the management of data for companies 
                           of all sizes. We can help you manage your full data life-cycle from retrieval 
                           to presentation.
                       </p>                
                    </div>

                    <div className={styles.navigation}> 
                        <div className={styles.company}>
                            <h3 className={styles.title}>Company</h3>
                            <span className={styles.companyNav}>About</span>
                        </div>

                        <div className={styles.region}>
                           <h3 className={styles.title}>Region</h3>
                           <span className={styles.regionNav}>United Kingdom</span>
                           <span className={styles.regionNav}>Australia</span>
                           <span className={styles.regionNav}>Ukraine</span>
                           <span className={styles.regionNav}>Sri Lanka</span>
                        </div>

                        <div className={styles.help}>
                            <h3 className={styles.title}>Help</h3>
                            <span className={styles.helpNav}>Contact support</span> 
                        </div>
                   </div>
                </div>
            <span className={styles.policy}>©InfoPoly LTD 2020. All rights reserved</span>

            
           </Container>
        </section>
    )
}

export default Footer;