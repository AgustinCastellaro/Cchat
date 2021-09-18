import React, { useState, useEffect } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md'
import { auth } from '../firebase';
import UserSubmenu from './UserSubmenu';
import { Link } from 'react-router-dom';
import styles from '../styles/header.module.scss';

function Header() {
    const [hiddenUserSubmenu, setHiddenUserSubmenu] = useState(true)        
    const [hiddenNotifications, setHiddenNotifications] = useState(true)
    const [hiddenSearch, setHiddenSearch] = useState(true)
    const [searchValue, setSearchValue] = useState("");

    const subMenuUsers = () => {setHiddenUserSubmenu(!hiddenUserSubmenu)};
    
    const subMenuNotifications = () => {setHiddenNotifications(!hiddenNotifications)};

    //Si hay un cambio en el input, se muestra el dropdown de usuarios.
    useEffect(() => {
        (searchValue.length > 0) ? setHiddenSearch(false) : setHiddenSearch(true);
    })
    
    return (
        <div className={styles.header}>
            <nav>
                <Link to="/" className={styles.logo}>
                    <img src={process.env.PUBLIC_URL + '/img/logo/primaryLogo.svg'} alt="" className={styles.iconLogo} />
                    <p>Cchat</p>
                </Link>
                <ul>
                    <li className={styles.user}>
                        <img src={process.env.PUBLIC_URL + "/img/user/" + auth.currentUser.photoURL} alt="" />
                        <button type="button" className={styles.userDropdown} onClick={subMenuUsers}>
                            <p>{auth.currentUser.displayName}</p>
                            <MdKeyboardArrowDown className={styles.icon} />
                        </button>
                        <div hidden={hiddenUserSubmenu}>
                            <UserSubmenu />
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
