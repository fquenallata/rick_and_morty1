import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/actions/actions";
import { useState, useEffect } from "react";

function Card(props) {
  const [isFav, setIsFav] = useState(false);

  console.log(props, "lo que necesito");

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      props.removeFav(props.id);
    } else {
      setIsFav(true);
      props.addFav(props);
    }
  };

  useEffect(() => {
    props.myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [props.myFavorites]);

  return (
    <div className={styles.container}>
      <div className={styles.btnContainer}>
        <button onClick={props.onClose}>X</button>
      </div>
      <Link className={styles.link} to={`/detail/${props.id}`}>
        <div className={styles.dataContainer}>
          <h2>{props.name}</h2>
          <h2>{props.species}</h2>
          <h2>{props.gender}</h2>
        </div>
        <img className={styles.image} src={props.image} alt="" />
      </Link>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
    </div>
  );
}

function mapDispatchToProp(dispatch) {
  return {
    addFav: (character) => dispatch(addFav(character)),
    removeFav: (id) => dispatch(removeFav(id)),
  };
}

function mapStateToProp(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStateToProp, mapDispatchToProp)(Card);
