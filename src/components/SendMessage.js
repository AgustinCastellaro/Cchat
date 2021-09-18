import React, { useState } from 'react';
import { db, auth } from '../firebase';
import firebase from 'firebase';
import { IoSendSharp } from 'react-icons/io5';
import '../styles/sendMessage.scss';

function SendMessage({ scroll }) {
    const [message, setMessage] = useState('');

    async function sendMessage(e){
        e.preventDefault();
        const { uid, photoURL, displayName } = auth.currentUser;
        await db.collection('messages').add({
            text: message,
            photoURL,
            uid,
            name: displayName, 
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        setMessage('');
        console.log(scroll.current);
        scroll.current.scrollTo(0, document.body.scrollHeight);
    }

    return (
        <div className="sendMessage">
            <form onSubmit={sendMessage}>
                <input 
                    type="text" 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)} 
                    placeholder="Type your message..." 
                />
                <button type="submit">
                    <IoSendSharp className="icon" />
                </button>
            </form>
        </div>
    )
}

export default SendMessage
