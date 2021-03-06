// import {useState} from 'react'
import styles from './TeamMember.module.css';

const TeamMember = (props) => {
    const {img, name, job_title, bio} = props.member
    return (
        
            <div className={styles.theCard}>
                <div className={styles.theFront}>
                    <div className={styles.imgWrapper}>
                    <img src={img} className={styles.img} alt={img} />
                    <div className={styles.label}>
                    <h1 className={styles.name}>{name}</h1>
                    <h2 className={styles.jobTitle}>{job_title}</h2>
                    </div>
                    </div>
                    
                </div>
                <div className={styles.theBack}>
                    {/* <h1 className={styles.name}>{name}</h1>
                    <h2 className={styles.jobTitle}>{job_title}</h2> */}
                    <span className={styles.bio}>{bio}</span>
                </div>
            </div>
          )
}

export default TeamMember;