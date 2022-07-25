import styles from './OurServices.module.css';
import Container from "../Container/Container";
import integration from '../../assets/images/it_services/data-integration_icon.svg'
import warehousing from '../../assets/images/it_services/data-warehoising_icon.svg'
import infrastructure from '../../assets/images/it_services/cloud-infrostructure.svg'
import self from '../../assets/images/it_services/self-srvices.svg'
import ServiceCard from './ServiceCard/ServiceCard';

const serviceData=[
    {
        id: 1, img: integration, title: 'Data Integration',
        description: 'Lorem insum lorem insum lorem insum lorem insum'
    },
    {
        id: 2, img: warehousing, title: 'Data Warehousing & Analytics',
        description: 'Free consultation with our proffesionals and get the best recomendations'
    },
    {
        id: 3, img: infrastructure, title: 'Cloud Infrastructure Automation',
        description: 'Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum '
    },
    {
        id: 4, img: self, title: 'Self Service BI',
        description: 'Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum Lorem imsum '
    },
]

const OurServices = () => {

    return (
        <Container>
        <section className={styles.servicesWrapper}>
            <h1 className={styles.title}>Our IT services</h1>
            <p className={styles.text}>
              We provide to you the best choices for you. Adjust it to your needs and make sure
              you get full lifecycle management from design, development, implementation and maintenance.
              We can help and advise the most suitable technology for your requirements.
            </p>
            <div className={styles.cardContainer}>
                {serviceData.map(service => {
                    return <ServiceCard service={service}/>
                })
                
                }
            </div>
        </section>
        </Container>
)
}
export default OurServices;