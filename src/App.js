import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import React, { useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Form from "./components/Form/Form";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Favorites from "./components/Favorites/Favorites.jsx";

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const EMAIL = "quenallatafranco@gmail.com";
  const PASSWORD = "12112001";
  const navigate = useNavigate();

  function login(userData) {
    if (userData.username === EMAIL && userData.password === PASSWORD) {
      setAccess(true);
      navigate("/home");
    }
  }
  //console
  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  }

  function onClose(id) {
    setCharacters(characters.filter((char) => char.id !== id));
  }

  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar onSearch={onSearch} />}
      <Routes>
        <Route path="/favorites" element={<Favorites onClose={onClose} />} />
        <Route exact path="/" element={<Form login={login} />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/detail/:detailId" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
