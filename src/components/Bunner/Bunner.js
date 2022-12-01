import styles from './Bunner.module.css';
import Container from '../Container/Container';
// import { Swiper, SwiperSlide } from "swiper/react";

import Marquee from "react-fast-marquee";


const Bunner = () => {
   return (
      <section className={styles.bunnerWrapper}>
         <Container>

            <div className={styles.marqueeWrapper}>

               <Marquee loop="20" gradient='false'>
                  <span className={styles.title}>  We are againts War</span>
                  <span className={styles.title}>  #StandWithUkraine</span>
                  <button className={styles.button}><a href="https://war.ukraine.ua/">Support</a></button>

               </Marquee>
            </div>
         </Container>
      </section >
   );
}

export default Bunner;
