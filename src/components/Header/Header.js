import { Link, NavLink } from 'react-router-dom';

import Container from "../Container/Container";

import styles from "./Header.module.css";

import logo from "../../assets/images/infoPoly_logo.svg";
import menu from "../../assets/images/menu.svg";
const Header = () => {
  return (
    <section className={styles.header}>
      <Container>      
        <div className={styles.appbar}>
          <img src={logo} className={styles.logo} alt={"logo"} />
          <div className={styles.headermenuNav}>
            <NavLink className={styles.link} to='/'>Home</NavLink>
            <NavLink className={styles.link} to='/'>About us</NavLink>
            <button className={styles.headermenuBtn} type='button'>Contact us</button>
          </div>
            <button className={styles.menuBtn}>
              <img className={styles.menuSvg} src={menu} height='16px' alt="menu"/>
            </button>
        </div>

      <div className={styles.infoContainer}>
        <h1 className={styles.heading}>
          Experts in managing and manipulating data
        </h1>
        <span className={styles.description}>
          A highly skilled agency specialising in the management of data for
          companies of all sizes. We can help you manage your full data
          life-cycle from retrieval to presentation.
        </span>
        
        <button className={styles.btn+ ' ' +styles.btnGreen+ ' ' +styles.btnAnimate} type='button'>Consult</button>
       
      </div>
    </Container>
      </section>
  );
};

export default Header;
