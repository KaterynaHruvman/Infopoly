import { Link, NavLink } from 'react-router-dom';
import Container from "../Container/Container";
import logo from "../../assets/images/infoPoly_logo.svg";
import { StyledEngineProvider } from '@mui/material/styles';
import MenuComponent from '../Menu/Menu';
import styles from './Header.module.css'

const link = {
    textAlign: 'center',
    borderRadius: 55,
    color: "black",
    fontWeight: "500",
    pointerEvents: "",
    backgroundColor: "transparent"
}
const activeLink = {
    textAlign: "center",
    borderRadius: 55,
    color: "black",
    fontWeight: "800",
    pointerEvents: "none",
};
const Header = () => {

    return (
        <section className={styles.header}>
                <Container>

                    <div className={styles.appbar}>

                        <NavLink to='/'>
                            <img src={logo} className={styles.logo} alt={"logo"} />
                        </NavLink>
                        <div className={styles.headermenuNav}>
                            <NavLink
                                className={styles.link}
                                style={({ isActive }) => isActive ? activeLink : link}
                                to="/"
                            >
                                Home
                      </NavLink>
                            <NavLink
                                className={styles.link}
                                style={({ isActive }) => isActive ? activeLink : link}
                                to="/aboutus"
                            >
                                About us
                      </NavLink>

                            {/* <NavLink
                            className={styles.link}
                            style={({ isActive }) => isActive ? activeLink : link}
                            to="/contactus"
                        >
                            Contact us
                      </NavLink> */}
                            <NavLink to="/contactus">
                                <button className={styles.headermenuBtn} type="button">
                                    Contact us
                      </button>
                            </NavLink>
                        </div>
                        <StyledEngineProvider injectFirst>
                            <MenuComponent />
                        </StyledEngineProvider>
                    </div>

                </Container>
        </section >
    );
};

export default Header;
