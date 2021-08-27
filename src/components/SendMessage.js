import React from 'react';
import styles from '../styles/sendMessage.module.scss';
import { IoSendSharp } from 'react-icons/io5';
import { BsFillImageFill } from 'react-icons/bs';

function SendMessage() {
    return (
        <div className={styles.sendMessage}>
            <button className={styles.image}>
                <BsFillImageFill />
            </button>
            <input type="text" placeholder="Escribe un mensaje..." />
            <button className={styles.send}>
                <IoSendSharp />
            </button>
        </div>
    )
}

export default SendMessage
