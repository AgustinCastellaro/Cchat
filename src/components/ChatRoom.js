import React, { useState, useEffect, useRef } from 'react'
import { auth, db } from '../firebase'
import SendMessage from './SendMessage';
import '../styles/chatRoom.scss';

function ChatRoom() {
    const [messages, setMessages] = useState([]);
    const scroll = useRef()

    useEffect(() => {
        db.collection('messages')
            .orderBy('createdAt')
            .limit(50)
            .onSnapshot(snapshot => {
                setMessages(snapshot.docs.map(doc => doc.data()))
            });
    }, [])
    
    console.log(messages)

    return (
        <div className="chatRoom">
            <div className="messages" ref={scroll}>
                {messages.map((message) => 
                    <div key={message.id} className={`message ${message.uid == auth.currentUser.uid ? 'transmitter' : 'receiver'}`}>
                        <div className="image">
                            <img src={process.env.PUBLIC_URL + "/img/user/" + message.photoURL} alt="" />
                        </div>
                        <div className="data">
                            <p className="name">{ message.name }</p>
                            <div className="messageText">
                                <p className="text">{ message.text }</p>
                                <p className="createdAt">
                                    { new Date(message.createdAt?.toDate()).toLocaleTimeString() }
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <SendMessage scroll={scroll} />
        </div>
    )
}

export default ChatRoom
