import styles from './ServiceCard.module.css'

const ServiceCard = (props) => {
    const { img, title, description } = props.service;
    return (
        
            <div className={styles.theCard}>
                <div className={styles.theFront}>
                    <img src={img} className={styles.img} alt={img} />
                    <span className={styles.title}>{title}</span>
                    <span className={styles.description}>{description}</span>
                </div>
                <div className={styles.theBack}>
                    {/* <h1 className={styles.name}>{name}</h1>
                    <h2 className={styles.jobTitle}>{job_title}</h2> */}
                    <span className={styles.backDescription}>{description}</span>
                </div>
            </div>
      
    )
}

export default ServiceCard;