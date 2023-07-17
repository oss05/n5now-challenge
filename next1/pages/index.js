import React from 'react';
import CardButton from '../components/CardButton/CardButton';
import styles from '../styles/Home.module.css';
import { useTranslation } from 'react-i18next';
import MainLayout from '@/layouts/mainLayout';

const Home = () => {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <h1 className={styles.home__title}>{t('shared.title')}</h1>
      <div className={styles.cards__container}>
        <CardButton
          title="Rick and Morty"
          image="rick-and-morty-thumbnail.png"
          link="/rickAndMorty"
        />
        <CardButton
          title="Harry Potter"
          image="harry-potter-thumbnail.jpeg"
          link="/harryPotter"
        />
      </div>
    </MainLayout>
  );
};

export default Home;