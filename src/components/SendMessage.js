import React, { useState } from 'react';
import { IoSendSharp } from 'react-icons/io5';
import { BsFillImageFill } from 'react-icons/bs';
import styles from '../styles/sendMessage.module.scss';

function SendMessage() {
    const [message, setMessage] = useState();
    
    const submit = (e) => {
        e.preventDefault();
        console.log(message);
        setMessage("");
    }

    return (
        <div className={styles.sendMessage}>
            <form onSubmit={submit}>
                <button className={styles.image}>
                    <BsFillImageFill />
                </button>
                <input 
                    type="text" 
                    placeholder="Escribe un mensaje..." 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)} 
                    />
                <button className={styles.send}>
                    <IoSendSharp />
                </button>
            </form>
        </div>
    )
}

export default SendMessage
