import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/contact.module.scss';

function Contact({ id, name }) {
    return (
        <div className={styles.contact}>
            <Link to={"/chat/"+id } className={styles.link}>
                {/* <img src={image} alt="" /> */}
                <div className={styles.data}>
                    <div className={styles.topData}>
                        <p className={styles.name}>{name}</p>
                        <p className={styles.date}>14 h</p>
                    </div>
                    <p className={styles.message}>Hello </p>
                </div>
            </Link>
        </div>
    )
}

export default Contact
