import React from 'react';
import styles from "../styles/searchUsers.module.scss";

function SearchUsers() {
    return (
        <div className={styles.searchUsers}>
            <div className={styles.scroll}>
                <div className={styles.user}>
                    <img src={process.env.PUBLIC_URL + "/img/user/user2.jpg"} alt="" />
                    <p className={styles.name}>Javier Diaz</p>
                    <button>Enviar Mensaje</button>
                </div>
                <div className={styles.user}>
                    <img src={process.env.PUBLIC_URL + "/img/user/user2.jpg"} alt="" />
                    <p className={styles.name}>Leandro Perez</p>
                    <button>Enviar Mensaje</button>
                </div>
                <div className={styles.user}>
                    <img src={process.env.PUBLIC_URL + "/img/user/user2.jpg"} alt="" />
                    <p className={styles.name}>Johnson Johnson</p>
                    <button>Enviar Mensaje</button>
                </div>
                <div className={styles.user}>
                    <img src={process.env.PUBLIC_URL + "/img/user/user2.jpg"} alt="" />
                    <p className={styles.name}>Javier Diaz</p>
                    <button>Enviar Mensaje</button>
                </div>
                <div className={styles.user}>
                    <img src={process.env.PUBLIC_URL + "/img/user/user2.jpg"} alt="" />
                    <p className={styles.name}>Leandro Perez</p>
                    <button>Enviar Mensaje</button>
                </div>
                <div className={styles.user}>
                    <img src={process.env.PUBLIC_URL + "/img/user/user2.jpg"} alt="" />
                    <p className={styles.name}>Johnson Johnson</p>
                    <button>Enviar Mensaje</button>
                </div>
                <div className={styles.user}>
                    <img src={process.env.PUBLIC_URL + "/img/user/user2.jpg"} alt="" />
                    <p className={styles.name}>Javier Diaz</p>
                    <button>Enviar Mensaje</button>
                </div>
                <div className={styles.user}>
                    <img src={process.env.PUBLIC_URL + "/img/user/user2.jpg"} alt="" />
                    <p className={styles.name}>Leandro Perez</p>
                    <button>Enviar Mensaje</button>
                </div>
                <div className={styles.user}>
                    <img src={process.env.PUBLIC_URL + "/img/user/user2.jpg"} alt="" />
                    <p className={styles.name}>Johnson Johnson</p>
                    <button>Enviar Mensaje</button>
                </div>
            </div>
        </div>
    )
}

export default SearchUsers
