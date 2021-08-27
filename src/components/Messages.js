import React from 'react';
import SendMessage from './SendMessage';
import MessagesBox from './MessagesBox';
import styles from '../styles/messages.module.scss';

function Messages() {
    return (
        <div className={styles.messages}>
            <MessagesBox />
            <SendMessage />
        </div>
    )
}

export default Messages
