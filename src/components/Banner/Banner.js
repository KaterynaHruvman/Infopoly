import styles from './Banner.module.css';
import Container from '../Container/Container';
// import { Swiper, SwiperSlide } from "swiper/react";

import Marquee from "react-fast-marquee";
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';


// const Bunner = () => {
//    return (
//       <section className={styles.bunnerWrapper}>
//          <Container>

//             <div className={styles.marqueeWrapper}>

//                <Marquee loop="20" gradient='false'>
//                   <span className={styles.title}>  We are against War</span>
//                   <span className={styles.title}>  #StandWithUkraine</span>
//                   <button className={styles.button}><a href="https://war.ukraine.ua/">Support</a></button>

//                </Marquee>
//             </div>
//          </Container>
//       </section >
//    );
// }

// export default Bunner;

const Banner = () => {
   const [open, setOpen] = useState(true)

   const onCloseClick = () => {
     setOpen(false)
   }

   return (
      <section className={open ? styles.themeBannerOpen : styles.themeBannerClosed}>
         <IconButton 
            aria-label="cancel" 
            className='closeButton' 
            size="small"
            onClick={onCloseClick}
            sx={{
              position: 'absolute',
              right: '20px',
            }}>
            
              <CloseIcon />
            </IconButton>

         <div className={styles.themeBannerWrapper}>            
            <span className={styles.title}> We are against War #StandWithUkraine</span>
            <button className={styles.button}><a href="https://war.ukraine.ua/">Support</a></button>               
         </div>
      </section >
   );
}

export default Banner;
