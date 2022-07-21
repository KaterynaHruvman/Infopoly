
import styles from './Map.module.css'
import mapBg from '../../assets/images/infopoly_map_bg_desktop_1 3.png'

const Map = () => {
    return (
        <div className={styles.container}>
            
            <h2 className={styles.title}>Our company has united international team all around the world </h2>

            <div className={styles.mapBg}>
                <img src={mapBg} className={styles.mapbg} alt={"mapbg"} />
            </div  >
            <div className={styles.map} >
            <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_id7t4gvx.json" background="transparent" speed="1" loop
                autoplay></lottie-player>
            </div>
              
        </div>
    );
}

export default Map;