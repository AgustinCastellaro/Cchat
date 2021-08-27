import React, { useState, useEffect } from 'react'
import styles from '../styles/contacts.module.scss';
import Search from './Search';
import Contact from './Contact';
import { query } from "../query/Query";


function Contacts() {
    const [users, setUsers] = useState([])

    useEffect(() => {
      query().then(data => {
          setUsers(data.results);
          console.log(users)
      })
    }, [])

    return (
        <div className={styles.contacts}>
            <Search />
            <div className={styles.contacts__List}>
                {users.map(user => (
                    <Contact key={user.id} name={user.name.first + " " + user.name.last} image={user.picture.thumbnail} />
                ))}
            </div>
        </div>
    )
}

export default Contacts
