import styles from './OurClient.module.css'
import coeus from '../../assets/images/COEUS Solutions Logo CMYK 1.png'
import trendelie from '../../assets/images/NEW TREND LOGO-2 1.png'


const OurClient = () => {
    return (
        <div className={styles.container}>
            
            <h2 className={styles.title}> Our Clients</h2>

            <div className={styles.clients}>
                <img src={coeus} className={styles.coeus} alt={"coeus"} />
                <img src={trendelie} className={styles.trendelie} alt={"trendalise"}  />
              </div>
        </div>
    );
}

export default OurClient;