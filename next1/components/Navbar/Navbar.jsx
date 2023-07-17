import React from 'react'
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/">
          <p className={styles.logoTitle}>N5 Now Challenge</p>
        </Link>
        <ul className={styles.menu}>
          <li className={styles.menuItem}>
            {i18n.language === 'es' ? (
                <img
                  className={styles.menuFlag}
                  src="/images/us-flag.png"
                  alt="English"
                  style={{width: 50, height: 50}}
                  onClick={() => changeLanguage('en')}
                />
            ) : (
                <img
                  className={styles.menuFlag}
                  src="/images/mx-flag.png"
                  alt="Español"
                  onClick={() => changeLanguage('es')}
                  style={{width: 50, height: 50}}

                />
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;