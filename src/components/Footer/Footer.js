import styles from './Footer.module.css'
import background from '../../assets/images/infoPoly_main_bg_desktop 4.png'
import logo from '../../assets/images/infoPoly_logo 1.png';
const Footer = () => {
    return (
        <div className={styles.container}>
            <img src={background} className={styles.background} alt="background" />
            <div className={styles.info}>
                <img src={logo} className={styles.logo} alt="logo" />
                <div className={styles.infoText}>
                    A highly skilled agency specialising in the management of data for companies 
                    of all sizes. We can help you manage your full data life-cycle from retrieval 
                    to presentation.
                </div>
                <div className={styles.policy}>©InfoPoly LTD 2020. All rights reserved</div>
            </div>
            <div className={styles.navigation}>
                <div className={styles.company}>
                    <div className={styles.companyTitle}>Company</div>
                    <div className={styles.companyNav}>About</div>
                </div>
                <div className={styles.region}>
                    <div className={styles.regionTitle}>Region</div>
                    <div className={styles.regionNav}>Indonesia</div>
                    <div className={styles.regionNav}>Singapore</div>
                    <div className={styles.regionNav}>Hong Kong</div>
                    <div className={styles.regionNav}>Canada</div>
                </div>
                <div className={styles.help}>
                    <div className={styles.helpTitle}>Help</div>
                    <div className={styles.helpNav}>Help center</div>
                    <div className={styles.helpNav}>Contact support</div> 
                    <div className={styles.helpNav}>Instruction</div> 
                    <div className={styles.helpNav}>How it works</div> 
                </div>
            </div>
        </div>
    )
}

export default Footer;