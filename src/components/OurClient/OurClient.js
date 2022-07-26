import styles from './OurClient.module.css';
import Container from '../Container/Container';
// import { Swiper, SwiperSlide } from "swiper/react";

import Marquee from "react-fast-marquee";
import coeus from '../../assets/images/clients/coeus_logo.png';
import trendelie from '../../assets/images/clients/trendilize_logo.png';
import tabush from '../../assets/images/clients/tabush_logo.png';


const OurClient = () => {
    return (
      <section className={styles.clientsWrapper}>
<Container>
<h1 className={styles.title}>Our Clients</h1>
<div className={styles.marqueeWrapper}>

 <Marquee>
      <a href="https://coeusconsultinggroup.com/"><img src={coeus} className={styles.coeus + ' ' + styles.logo} alt={"coeus"} /></a>
       <a href="https://www.trendilize.com/"> <img src={trendelie} className={styles.trendelie + ' ' + styles.logo} alt={"trendalise"} /></a>
          <a href="https://www.tabush.com"><img src={tabush} className={styles.tabush + ' ' + styles.logo} alt={"tabush"}  /> </a>
</Marquee>
</div>
        </Container>
        </section>
   );
}

export default OurClient;
