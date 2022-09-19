import styles from './ConsaltUs.module.css'


const BackGround = ({ setShowForm }) => {
    return <div onClick={() => setShowForm(false)} className={styles.container} />
}

export default BackGround