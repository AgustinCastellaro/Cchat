import React from 'react'
import styles from '../styles/chat.module.scss';
import ChatUser from './ChatUser';
import Messages from './Messages';
import SendMessage from './SendMessage';

function Chat() {
    return (
        <div className={styles.chat}>
            <ChatUser />
            <Messages />
        </div>
    )
}

export default Chat
