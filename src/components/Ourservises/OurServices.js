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
                    We are flexible based on your requirements and budget. We adjust the engagement to your suit your needs and make sure you get the highest value from our design, development, implementation and maintenance. We can help and advise the most suitable technology and services for your requirements.
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