
import styles from './Map.module.css'
import mapBg from '../../assets/images/infopoly_map_bg_desktop_1 3.png'
import map from '../../assets/images/infopoly_map 2.png'
const Map = () => {
    return (
        <div className={styles.container}>
            
            <h2 className={styles.title}>Our company has united international team all around the world </h2>

            <div className={styles.mapBg}>
                <img src={mapBg} className={styles.mapbg} alt={"mapbg"} />
            </div>
            <div>
                <img src={map} className={styles.map} alt={"map"}  />
              </div>
        </div>
    );
}

export default Map;