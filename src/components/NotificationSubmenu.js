import React, { useState, useEffect } from 'react';
import Notification from './Notification';
import styles from '../styles/notificationSubmenu.module.scss';

import { query } from '../query/Query';

function NotificationSubmenu() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        query().then(data => {
              setUsers(data.results);
        })
      }, [])

    return (
        <div className={styles.NotificationSubmenu}>
            <div className={styles.triangle}></div>
                <div className={styles.notificationsContent}>
                    <p className={styles.title}>Notificaciones</p>
                    <div className={styles.notifications}>
                        {users.map(user => (
                            <Notification 
                                key={user.id} 
                                image={user.picture.thumbnail} 
                                name={user.name.first + " " + user.name.last} 
                                message="quiere ser tu amigo" 
                            />
                        ))}
                    </div>
                </div>
        </div>
    )
}

export default NotificationSubmenu
