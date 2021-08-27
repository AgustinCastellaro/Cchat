import React from 'react';
import styles from '../styles/notification.module.scss';

function Notification({ image, name, message }) {
    return (
        <div className={styles.notification}>
            <img src={image} alt="" />
            <div className={styles.data}>
                <p className={styles.message}><name>{name}</name> {message}</p>
                <p className={styles.date}>2 minutes ago</p>
                <button className={styles.add}>Añadir</button>
                <button className={styles.delete}>Eliminar</button>
            </div>
        </div>
    )
}

export default Notification
