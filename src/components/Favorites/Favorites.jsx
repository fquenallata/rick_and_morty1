import Card from "../Card/Card.jsx";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  orderCards,
  filterCards,
  removeFav,
} from "../../redux/actions/actions.js";
import styles from "./Favorites.modules.css";

export default function Favorites(props) {
  const dispatch = useDispatch();
  const { myFavorites } = useSelector((state) => state);

  const handleOrder = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    dispatch(orderCards(value));
  };

  const handleFilter = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    dispatch(filterCards(value));
  };

  function closeFavorite(id) {
    props.onClose(id);
    dispatch(removeFav(id));
  }

  return (
    <div className={styles.container}>
      <select
        className={styles.select}
        onChange={handleOrder}
        name="order"
        defaultValue={"DEFAULT"}
      >
        <option value="DEFAULT" disabled>
          Select Order
        </option>
        <option value="Ascendente">Ascendente</option>
        <option value="Descendente">Descendente</option>
      </select>

      <select
        className={styles.select}
        onChange={handleFilter}
        name="filter"
        defaultValue={"DEFAULT"}
      >
        <option value="DEFAULT" disabled>
          Select Filter
        </option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </select>
      <div className={styles.container}>
        {myFavorites.map((character) => (
          <Card
            id={character.id}
            key={character.id}
            name={character.name}
            species={character.species}
            gender={character.gender}
            image={character.image}
            onClose={() => closeFavorite(props.id)}
          />
        ))}
      </div>
    </div>
  );
}

// function mapState(state) {
//   return {
//     myFavorites: state.myFavorites,
//   };
// }
// export default connect(mapState)(Favorites);
