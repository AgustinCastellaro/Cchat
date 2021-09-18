import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';
import { auth } from '../firebase';
import styles from '../styles/userSubmenu.module.scss';

function UserSubmenu() {
    const Logout = () => {
        auth.signOut();
        window.location.reload()
    }
    
    return (
        <div className={styles.UserSubmenu}>
            <div className={styles.content}>
                <Link to="/profile" className={styles.link}>
                    <AiOutlineUser className={styles.icon}/>
                    Mi Perfil
                </Link>
                <button onClick={Logout}>
                    <FiLogOut className={styles.icon}/>
                    Salir
                </button>
            </div>
        </div>
    )
}

export default UserSubmenu
