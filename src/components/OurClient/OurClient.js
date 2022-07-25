import styles from './OurClient.module.css'
// import { Swiper, SwiperSlide } from "swiper/react";

import Marquee from "react-fast-marquee";
import coeus from '../../assets/images/COEUS Solutions Logo CMYK 1.png'
import trendelie from '../../assets/images/NEW TREND LOGO-2 1.png'
import tabush from '../../assets/images/TabushGroupLogo-med.jpg'

// const OurClient = () => {
//     return (
//         <div className={styles.container}>
            
//             <h2 className={styles.title}> Our Clients</h2>

//             <div className={styles.clients}>
//                 <img src={coeus} className={styles.coeus} alt={"coeus"} />
//                 <img src={trendelie} className={styles.trendelie} alt={"trendalise"} />
//                 <img src={tabush} className={styles.tabush} alt={"tabush"}  />
//               </div>
//         </div>
//     );
// }

const OurClient = () => {
    return (
        <div className={styles.container}>
  <h2 className={styles.title}> Our Clients</h2>
    <div className={styles.clients}> 
 <Marquee className={styles.marqueeontiner}>
      <a  href="https://coeusconsultinggroup.com/"><img src={coeus} className={styles.coeus} alt={"coeus"} /></a>
       <a href="https://www.trendilize.com/"> <img src={trendelie} className={styles.trendelie} alt={"trendalise"} /></a>
          <a href="https://www.tabush.com"><img src={tabush} className={styles.tabush} alt={"tabush"}  /> </a>
</Marquee>
            </div>     
            </div>
         );
}

export default OurClient;
