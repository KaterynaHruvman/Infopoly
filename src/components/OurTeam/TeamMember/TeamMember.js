import { useRef, useState } from 'react';
import { IconButton } from '@mui/material';
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";
import styles from './TeamMember.module.css';
import { useEffect } from 'react';

const TeamMember = (props) => {
    const { img, name, job_occupation, bio, job_title } = props.member
    const [open, setOpen] = useState(false)

    return (
        <div className={styles.theCard}>
            <div className={styles.theFront}>
                <div className={styles.imgWrapper}>
                    <img src={img} className={styles.img} alt={img} />

                    <div className={open ? styles.theBackOpen : styles.theBackClosed}>
                        <span className={styles.bio}>{bio}</span>
                    </div>

                    <div className={styles.label}>
                        <button
                            className={styles.expandBtn}
                            type="button"
                            onClick={() => {
                                setOpen(!open)
                            }}
                        >
                            {open ? (
                                <RemoveCircleRoundedIcon fontSize="medium" />
                            ) : (
                                    <AddCircleRoundedIcon fontSize="medium" />
                                )}
                        </button>
                        <h1 className={styles.name}>{name}</h1>
                        <h2 className={styles.jobTitle}>{job_occupation ? job_occupation : job_title}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeamMember;