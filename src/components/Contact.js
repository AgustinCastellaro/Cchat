import React from 'react';
import styles from '../styles/contact.module.scss';

function Contact({ name, image }) {
    return (
        <div className={styles.contact}>
            <img src={image} alt="" />
            <div className={styles.data}>
                <div className={styles.topData}>
                    <p className={styles.name}>{name}</p>
                    <p className={styles.date}>14 h</p>
                </div>
                <p className={styles.message}>Hello </p>
            </div>
        </div>
    )
}

export default Contact
