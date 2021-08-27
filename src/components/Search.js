import React from 'react';
import styles from '../styles/search.module.scss';
import { BiSearch } from 'react-icons/bi';

function Search() {
    return (
        <div className={styles.search}>
            <div className={styles.bar}>
                <input type="text" className={styles.input} placeholder="Buscar un chat..." />
                <BiSearch className={styles.icon} />
            </div>
        </div>
    )
}

export default Search
