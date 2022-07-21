import styles from './ServiceCard.module.css'

const ServiceCard = (props) => {
    const { img, title, description } = props.service;
    return (
        <div className={styles.mainContainer}>
            <div className={styles.theCard}>
                <div className={styles.theFront}>
                    <img src={img} className={styles.img} alt={img} />
                    <h1 className={styles.title}>{title}</h1>
                    <h2 className={styles.description}>{description}</h2>
                </div>
                <div className={styles.theBack}>
                    {/* <h1 className={styles.name}>{name}</h1>
                    <h2 className={styles.jobTitle}>{job_title}</h2> */}
                    <span className={styles.backDescription}>{description}</span>
                </div>
            </div>
       </div>
    )
}

export default ServiceCard;