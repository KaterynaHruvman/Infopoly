
import Map from "../Map/Map";
import OurClient from "../OurClient/OurClient";
import OurServices from "../Ourservises/OurServices";
import OurTeam from "../OurTeam/OurTeam";
import Header from '../Header/Header';
import HeroSection from "../HeroSection/HeroSection";
import Footer from "../Footer/Footer";
import styles from './MainPage.module.css'
import CookieConsent, { Cookies, getCookieConsentValue } from "react-cookie-consent";
import { colors } from "@mui/material";

const MainPage = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  return(
    <>
    <HeroSection />
    <OurServices />
    <Map />
    <OurTeam />
    <OurClient />
    <CookieConsent location="bottom"
      cookieName="myAwesomeCookieName3"
      expires={999} overlay enableDeclineButton buttonStyle={{ backgroundColor: "#07DA62", borderRadius: "15px", }}
      declineButtonStyle={{
        backgroundColor: "#4a4d50",
        color: "black",
        borderRadius: "15px",
      }}
      declineButtonText="DECLINE"
      buttonText="ACCEPT"
      flipButtons>
      This website uses cookies to provide services at the highest level.  By continuing to use the site, you agree to their use
</CookieConsent>
    <Footer />
  </>
  )
  

};

export default MainPage;