import Card from "../Card/Card";
import style from "./Cards.module.css";

export default function Cards(props) {
  const { characters } = props;
  return (
    <div className={style.container}>
      {characters.map((character) => (
        <Card
          id={character.id}
          key={character.id}
          name={character.name}
          species={character.species}
          gender={character.gender}
          image={character.image}
          onClose={() => props.onClose(character.id)}
        />
      ))}
    </div>
  );
}
