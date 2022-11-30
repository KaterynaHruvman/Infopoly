
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
const MainPage = () => (
  <>
    <HeroSection />
    <OurServices />
    <Map />
    <OurTeam />
    <OurClient />
    <CookieConsent location="bottom"
      cookieName="myAwesomeCookieName3"
      expires={999} overlay enableDeclineButton buttonStyle={{ backgroundColor: "#07DA62" }}
      declineButtonStyle={{
        backgroundColor: " #FFC403",
        color: "black",
      }}
      declineButtonText="I DECLINE"
      buttonText="I ACCEPT"
      flipButtons>
      This website uses cookies to provide services at the highest level.  By continuing to use the site, you agree to their use
</CookieConsent>
    <Footer />
  </>
);

export default MainPage;