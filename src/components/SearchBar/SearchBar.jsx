import style from "./SearchBar.module.css";
import React, { useState } from "react";

export default function SearchBar(props) {
  const [characterID, setCharacterID] = useState("");
  const handleChange = (e) => {
    setCharacterID(e.target.value);
  };

  return (
    <div className={style.container}>
      <input onChange={handleChange} type="search" name="search" id="search" />
      <button onClick={() => props.onSearch(characterID)}>Agregar</button>
    </div>
  );
}
