import styles from "./Header.module.css";

import background from "../../assets/images/infoPoly_main_bg_desktop 3.png";
import logo from "../../assets/images/infoPoly_logo 1.png";
const Header = () => {
  return (
    <div className={styles.container}>
      <img src={background} className={styles.background} alt={"background"} />
      <div className={styles.topbar}>
        <img src={logo} className={styles.logo} alt={"logo"} />
        <div className={styles.headermenu}>
          <div className={styles.headermenuNav}>Home</div>
          <div className={styles.headermenuNav}>Contacts</div>
          <button className={styles.headermenuBtn}>Contact us</button>
        </div>
      </div>

      <div className={styles.infoContainer}>
        <h1 className={styles.text}>
          Experts in managing and manipulating data
        </h1>
        <span className={styles.description}>
          A highly skilled agency specialising in the management of data for
          companies of all sizes. We can help you manage your full data
          life-cycle from retrieval to presentation.
        </span>
        <button className={styles.infoBtn}>Consult today</button>
      </div>
    </div>
  );
};

export default Header;
