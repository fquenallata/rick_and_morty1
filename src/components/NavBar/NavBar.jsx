import SearchBar from "../SearchBar/SearchBar.jsx";
import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

function Nav(props) {
  return (
    <nav className={styles.navContainer}>
      <div>
        <NavLink to="/favorites">
          <button>Favorites</button>
        </NavLink>
        <NavLink to="/about">
          <button>About</button>
        </NavLink>
        <NavLink to="/home">
          <button>Home</button>
        </NavLink>
      </div>
      <SearchBar onSearch={props.onSearch} />
    </nav>
  );
}

function mapStateToProp(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStateToProp, null)(Nav);
