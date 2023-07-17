import { useTranslation } from "next1/i18n";
import styles from "./CharacterCard.module.css";

const CharacterCard = ({ character }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.characterCard}>
      <img
        src={character.image}
        alt="characters"
        className={styles.cardImage}
      />
      <p className={styles.cardTitle}>{character.name}</p>
      <div className={styles.detailsContainer}>
        <span className={styles.species}>
          {t(`harryPotter.ancestry.${character.ancestry.toLowerCase()}`)}
        </span>
        <span className={styles.status}>
          {t(`harryPotter.gender.${character.gender.toLowerCase()}`)}
        </span>
      </div>
    </div>
  );
};

export default CharacterCard;