import styles from './OurServices.module.css';
import Container from "../Container/Container";
import ServicesDta from './ServicesData';
import ServiceCard from './ServiceCard/ServiceCard';

const serviceData = ServicesDta()
const OurServices = () => {

    return (
        <section className={styles.servicesWrapper}>
            <Container>
                <h1 className={styles.title}>Our IT services</h1>
                <p className={styles.text}>
                    We provide you the best choice. Adjust it to your needs and make sure
                    you get full lifecycle management from design, development, implementation and maintenance.
                    We can help and advise the most suitable technology for your requirements.
            </p>
                <div className={styles.cardContainer}>
                    {serviceData.map(service => {
                        return <ServiceCard key={service.id} service={service} />
                    })

                    }
                </div>
            </Container>
        </section>
    )
}
export default OurServices;