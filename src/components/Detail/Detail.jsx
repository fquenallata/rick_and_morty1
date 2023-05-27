import styles from "./Detail.module.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function Detail(props) {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${detailId}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [detailId]);

  return (
    <div className={styles.detailContainer}>
      <div>
        <h3>name: </h3>
        <h3>gender: {character.gender}</h3>
        <h3>species: {character.species}</h3>
        <h3>status {character.status}</h3>
      </div>
      <div>
        <img src={character.image} alt={character.name} />
      </div>
    </div>
  );
}
