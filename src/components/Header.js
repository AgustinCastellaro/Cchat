import React, { useState, useEffect } from 'react';
import SearchUsers from './SearchUsers';
import NotificationSubmenu from './NotificationSubmenu';
import { IoIosChatbubbles } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { MdKeyboardArrowDown } from 'react-icons/md'
import { BiSearch } from 'react-icons/bi';
import { auth } from '../firebase';
import styles from '../styles/header.module.scss';

function Header() {
    const [hiddenNotifications, setHiddenNotifications] = useState(true)
    const [hiddenSearch, setHiddenSearch] = useState(true)
    const [searchValue, setSearchValue] = useState("");

    const Logout = () => {
        auth.signOut();
    }

    const subMenuNotifications = () => {setHiddenNotifications(!hiddenNotifications)};

    //Si hay un cambio en el input, se muestra el dropdown de usuarios.
    useEffect(() => {
        console.log(searchValue.length);
        (searchValue.length > 0) ? setHiddenSearch(false) : setHiddenSearch(true);
    })
    
    return (
        <div className={styles.header}>
            <nav>
                <a href="#" className={styles.logo}>
                    <IoIosChatbubbles className={styles.iconLogo} />
                    <p>Cchat</p>
                </a>
                <div className={styles.searchUser}>
                    <input 
                        type="text" 
                        name="searchUser" 
                        placeholder="Buscar un usuario..." 
                        value={searchValue} 
                        onChange={(e) => setSearchValue(e.target.value)} 
                    />
                    <BiSearch className={styles.iconSearch} />
                    <div className={styles.searchUsersDropdown} hidden={hiddenSearch}>
                        <SearchUsers />
                    </div>
                </div>
                <button onClick={Logout}>
                    Logout
                </button>
                <ul>
                    <li>
                        <button 
                            type="button" 
                            onClick={subMenuNotifications} 
                            className={styles.iconBell} 
                            title="Notificaciones"
                        >
                            <FaBell />
                        </button>
                        <div hidden={hiddenNotifications}>
                            <NotificationSubmenu />
                        </div>
                    </li>
                    <li className={styles.user}>
                        <img src={process.env.PUBLIC_URL + "/img/user/user1.jpg"} alt="" />
                        <button type="button" className={styles.userDropdown}>
                            <p>Agustin Castellaro</p>
                            <MdKeyboardArrowDown className={styles.icon} />
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
