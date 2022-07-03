import {useState} from 'react'
import styles from './TeamMember.module.css';

const TeamMember = (props) => {
    const [isRotated, setIsRotated]= useState(false)
    const {img, name, job_title, bio} = props.member
    return (
        <div className={!isRotated ? styles.container : styles.rotatedContainer} onClick={()=>setIsRotated(prev=>!prev)}>  
          {!isRotated && <img className={styles.img} src={img} alt={name} />}
            <h1 className={styles.name}>{name}</h1>
            <h3 className={styles.jobTitle}>{job_title}</h3>
            {isRotated && <span className={styles.bio}>{bio}</span>}
                   
                    
            
        </div>
    )
}

export default TeamMember;