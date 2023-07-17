import { useTranslation } from "next1/i18n";
import styles from "./CharacterCard.module.css";

const CharacterCard = ({ character }) => {
  const { t } = useTranslation();

  return (
    <div className={styles["character-card"]}>
      <img
        src={character.image}
        alt="characters"
        className={styles["character-card__image"]}
      />
      <p className={styles["character-card__title"]}>{character.name}</p>
      <div className={styles["character-card__details-container"]}>
        <span className={styles["character-card__species"]}>
          {t(`harryPotter.ancestry.${character.ancestry.toLowerCase()}`)}
        </span>
        <span className={styles["character-card__status"]}>
          {t(`harryPotter.gender.${character.gender.toLowerCase()}`)}
        </span>
      </div>
    </div>
  );
};

export default CharacterCard;