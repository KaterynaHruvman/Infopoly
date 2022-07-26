import Container from '../Container/Container';

import styles from './Map.module.css'

const Map = () => {
    return (
        <section className={styles.map}>
        <Container>
            
            <h2 className={styles.title}>Our company has united international team all around the world </h2>
            
            <div className={styles.mapWrapper} >
            <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_dsb4lxqn.json"  background="transparent" speed="1" loop
                autoplay></lottie-player>
            </div>
              
        </Container>
        </section>
    );
}

export default Map;