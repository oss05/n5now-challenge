import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import styles from "../styles/Home.module.css";
import CharacterCard from "@/components/CharacterCard/CharacterCard";
import characterService from "../services/CharacterService";

const MainLayout = dynamic(() => import("next1/mainLayout"), {
  ssr: false,
  suspense: true,
});

export default function Home() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const charactersData = await characterService.getCharacters();
      setCharacters(charactersData);
    }
    fetchData();
  }, []);

  return (
    <MainLayout>
      <h1>Personajes de Rick y Morty</h1>
      <div className={styles.cards__container}>
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </MainLayout>
  );
}
