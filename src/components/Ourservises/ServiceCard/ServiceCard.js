import styles from './ServiceCard.module.css'

const ServiceCard = (props) => {
    const { img, title, description } = props.service;
    return (
        <div className={styles.container}>
            <img src={img} alt={img} />
            <h1>{title}</h1>
            <span>{description}</span>
        </div>
    )
}

export default ServiceCard;