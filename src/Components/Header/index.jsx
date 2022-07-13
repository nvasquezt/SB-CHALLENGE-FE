import React from 'react'
import styles from './Header.module.css';

const Header = () => {
  const handleClick = () => {
    sessionStorage.removeItem('token');
    window.location.href = '/';
  }
  return (
    <div className={styles.header}>
        <span className={styles.signout} onClick={handleClick}>Sign Out</span>
    </div>
  )
}

export default Header