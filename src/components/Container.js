import React from 'react';
import styles from '../styles/container.module.scss';
import Chat from './Chat';
import Contacts from './Contacts';

function Container() {
    return (
        <div className={styles.container}>
            <Contacts />
            <Chat />
        </div>
    )
}

export default Container
