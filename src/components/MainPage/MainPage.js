
import Map from "../Map/Map";
import OurClient from "../OurClient/OurClient";
import OurServices from "../Ourservises/OurServices";
import OurTeam from "../OurTeam/OurTeam";
import Header from '../Header/Header';
import HeroSection from "../HeroSection/HeroSection";
import Footer from "../Footer/Footer";
const MainPage = () => (
  <>
    <HeroSection />
    <OurServices />
    <Map />
    <OurTeam />
    <OurClient />
    <Footer />
  </>
);

export default MainPage;