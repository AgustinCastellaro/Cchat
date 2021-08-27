import React from 'react';
import styles from '../styles/chatUser.module.scss';
import { FiMoreHorizontal } from 'react-icons/fi';

function ChatUser() {
    return (
        <div className={styles.chatUser}>
            <img src={process.env.PUBLIC_URL + "/img/user/user2.jpg"} alt="" />
                <a href="" className={styles.name}>Roberto perez</a>
            <button >
                <FiMoreHorizontal className={styles.icon} title="Mas opciones" />
            </button>
        </div>
    )
}

export default ChatUser
