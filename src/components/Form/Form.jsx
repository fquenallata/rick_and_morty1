import { useLocation } from "react-router-dom";
import styles from "./Form.module.css";
import portada from "./portada.png";
import { useState } from "react";
import validation from "./validation.js";

export default function Form(props) {
  //onsole.log(useLocati on());
  const [userData, setUserData] = useState({ username: "", password: "" });

  const [errors, setErrors] = useState({ username: "", password: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    setErrors(validation({ ...userData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.login(userData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={styles.formContainer}>
          <div className={styles.dataContainer}>
            <img className={styles.img} src={portada} alt="portada" />
            <div className={styles.labelContainer}>
              <label>Usuario:</label>
            </div>
            <input
              type="text"
              name="username"
              value={userData.username}
              placeholder="ingrese usuario..."
              onChange={handleInputChange}
            />
            <p className={styles.warning}>
              {errors.username && errors.username}
            </p>
            <div className={styles.labelContainer}>
              <label>Contraseña:</label>
            </div>
            <input
              type="password"
              name="password"
              value={userData.password}
              placeholder="ingrese contraseña..."
              onChange={handleInputChange}
            />
            <p className={styles.warning}>
              {errors.password && errors.password}
            </p>
            <button>Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}
