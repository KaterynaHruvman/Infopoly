import { Link, NavLink } from 'react-router-dom';
import Container from "../Container/Container";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from "../../assets/images/infoPoly_logo.svg";
import menu from "../../assets/images/menu.svg";
import ConsaltUs from '../Form/ConsaltUs';
import { useState } from 'react';
import BackGround from '../Form/Background';
import styles from './Header.module.css'
import { StyledEngineProvider } from '@mui/material/styles';
import MenuComponent from '../Menu/Menu';

const Header = () => {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const toastHandler = ()=>{
    toast("Thanks! 👌🏻 Your message has been sent!");

  }
  return (
      <section className={styles.header}>
        <ToastContainer 
            theme="light"
            
            position="top-center"
             autoClose={3000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover/>
          {showForm && <BackGround setShowForm={setShowForm} />}
          {showForm && (
              <ConsaltUs
                  toastHandler={toastHandler}
                  setShowForm={setShowForm}
                  name={name}
                  setName={setName}
                  phone={phone}
                  setPhone={setPhone}
                  email={email}
                  setEmail={setEmail}
                  subject={subject}
                  setSubject={setSubject}
                  message={message}
                  setMessage={setMessage}
              />
          )}
          <Container>
              <div className={styles.appbar}>
                  <img src={logo} className={styles.logo} alt={"logo"} />
                  <div className={styles.headermenuNav}>
                      <NavLink
                          className={styles.link}
                          style={({ isActive }) => ({
                              color: isActive ? "152A3D" : "5D9081",
                              fontWeight: isActive ? "700" : "300",
                              pointerEvents: isActive ? "none" : "",
                          })}
                          to="/"
                      >
                          Home
                      </NavLink>
                      <NavLink
                          className={styles.link}
                          style={({ isActive }) => ({
                              color: isActive ? "152A3D" : "5D9081",
                              fontWeight: isActive ? "700" : "300",
                              pointerEvents: isActive ? "none" : "",
                          })}
                          to="/aboutus"
                      >
                          About us
                      </NavLink>
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

              <div className={styles.infoContainer}>
                  <h1 className={styles.heading}>Experts in managing and manipulating data</h1>
                  <p className={styles.description}>
                      A highly skilled agency specialising in the management of data for companies
                      of all sizes. We can help you manage your full data life-cycle from retrieval
                      to presentation.
                  </p>

                  <button
                      onClick={() => setShowForm((prev) => !prev)}
                      className={styles.btn + " " + styles.btnGreen + " " + styles.btnAnimate}
                      type="button"
                  >
                      Consult
                  </button>
            </div>
          </Container>
      </section>
  );
};

export default Header;
