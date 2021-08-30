import React, { useState, useEffect } from 'react';
import { FiMoreHorizontal } from 'react-icons/fi';
import { useParams } from 'react-router';
import { db } from '../firebase';
import styles from '../styles/chatHeader.module.scss';

function ChatHeader() {
    const [chatName, setChatName] = useState("");
    const { userId } = useParams();

    useEffect(() => {
        if(userId){
            db.collection("room")
                .doc(userId)
                .onSnapshot(snapshot => (
                    setChatName(snapshot.data().name)
                ))
      }

    }, [userId])

    return (
        <div className={styles.chatHeader}>
            <img src={process.env.PUBLIC_URL + "/img/user/user2.jpg"} alt="" />
                <a href="" className={styles.name}>{ chatName }</a>
            <button >
                <FiMoreHorizontal className={styles.icon} title="Mas opciones" />
            </button>
        </div>
    )
}

export default ChatHeader
