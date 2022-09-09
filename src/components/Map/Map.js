import Container from '../Container/Container';

import styles from './Map.module.css'

const Map = () => {
    return (
        <section className={styles.map}>
            <Container>

                <h2 className={styles.title}>Our company has a united, globally distributed team </h2>

                <div className={styles.mapWrapper} >
                    <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_rcxmtcew.json" background="transparent" speed="1" loop
                        autoplay></lottie-player>
                </div>

            </Container>
        </section>
    );
}

export default Map;