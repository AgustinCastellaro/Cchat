import React from 'react'
import styles from '../styles/chat.module.scss';
import ChatHeader from './ChatHeader';
import Messages from './Messages';

function Chat() {
    return (
        <div className={styles.chat}>
            <ChatHeader />
            <Messages />
        </div>
    )
}

export default Chat
