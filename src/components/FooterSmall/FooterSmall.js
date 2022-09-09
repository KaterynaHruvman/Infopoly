import styles from './FooterSmall.module.css'
import logo from '../../assets/images/infoPoly_logo 1.png';
import Container from '../Container/Container';
import { NavLink } from 'react-router-dom';
const FooterSmall = () => {
    return (
        <section className={styles.footer}>
            <NavLink to="/"> <img src={logo} className={styles.logo} alt={"logo"} /></NavLink>
            <span className={styles.policy}>©InfoPoly LTD 2022. All rights reserved</span>
        </section>
    )
}

export default FooterSmall;