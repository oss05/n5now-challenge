import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import styles from '../styles/MainLayout.module.css';

const MainLayout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.wrapper}>{children}</main>
    </div>
  );
};

export default MainLayout;