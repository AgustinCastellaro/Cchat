import React, { useState, useEffect } from 'react'
import styles from '../styles/contacts.module.scss';
import Search from './Search';
import Contact from './Contact';
import { db } from '../firebase';

const user = "C7dGLsmZRIQnO9Q0mScw";

function Contacts() {
    const [rooms, setRoooms] = useState([])
    
    useEffect(() => {
        db.collection('room')
            .where("friends", "array-contains", user)
            .get().then(snapshot => {
                setRoooms(
                    snapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data(),
                    }))
                )
            })
    }, [])

    return (
        <div className={styles.contacts}>
            <Search />
            <div className={styles.contacts__List}>
                {rooms.map(room => (
                    <Contact key={room.id} id={room.id} name={room.data.name[0] + " " + room.data.name[1]} />
                ))}
            </div>
        </div>
    )
}

export default Contacts
