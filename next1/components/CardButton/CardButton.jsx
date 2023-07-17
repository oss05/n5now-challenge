import React from 'react';
import Link from 'next/link';
import styles from './CardButton.module.css';
import { useTranslation } from 'react-i18next';

const CardButton = ({ title, image, link }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.card}>
      <img src={`/images/${image}`} alt={title} className={styles.card__image} />
      <h3 className={styles.card__title}>{title}</h3>
      <Link href={link} className={styles.card__button}>
        {t('shared.more')}
      </Link>
    </div>
  );
};

export default CardButton;