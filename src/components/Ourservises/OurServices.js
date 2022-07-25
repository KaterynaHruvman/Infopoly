import styles from './OurServices.module.css';
import integration from '../../assets/images/Integration.png'
import warehousing from '../../assets/images/Warehousing.png'
import infrastructure from '../../assets/images/Infrastructure.png'
import self from '../../assets/images/Self.png'
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
        <div className={styles.container}>
            <h1 className={styles.title}>Our IT services</h1>
            <h5 className={styles.text}>We provide to you the best choiches for you. Adjust it to your needs and make sure
            you get full lifecycle management from design, development, implementation and maintenance.
                We can help and advise the most suitable technology for your requirements.</h5>
            <div className={styles.cardContainer}>
                {serviceData.map(service => {
                    return <ServiceCard key={service.id} service={service}/>
                })
                
                }
            </div>
        </div>
)
}
export default OurServices;