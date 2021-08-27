import React from 'react';
import styles from '../styles/messagesBox.module.scss';

function MessagesBox() {
    return (
        <div className={styles.messagesBox} id={styles.received}>
            <div className={styles.message}>
                <p className={styles.text}>Si</p>
                <p className={styles.date}>09:57</p>
            </div>
            <div className={styles.message} id={styles.received}>
                <p className={styles.text}>Holaaaa 😎</p>
                <p className={styles.date}>00:00</p>
            </div>
            <div className={styles.message} id={styles.received}>
                <p className={styles.text}>teadfadfst test test test test 👀👀👀</p>
                <p className={styles.date}>13:46</p>
            </div>
            <div className={styles.message} id={styles.sender}>
                <p className={styles.text}>afadfasdadasdfyliyhgziuvhnzlivuhdflnviuzhfdlbviufzh zliufghfdliubzh</p>
                <p className={styles.date}>19:35</p>
            </div>
            <div className={styles.message} id={styles.received}>
                <p className={styles.text}>:V 🙃</p>
                <p className={styles.date}>19:35</p>
            </div>
            <div className={styles.message} id={styles.sender}>
                <p className={styles.text}>zl iufghfd liubzh</p>
                <p className={styles.date}>19:35</p>
            </div>
            <div className={styles.message} id={styles.sender}>
                <p className={styles.text}>👍</p>
                <p className={styles.date}>23:47</p>
            </div>
            <div className={styles.message} id={styles.sender}>
                <p className={styles.text}>holaaaaaaa</p>
                <p className={styles.date}>16:00</p>
            </div>
        </div>
    )
}

export default MessagesBox
