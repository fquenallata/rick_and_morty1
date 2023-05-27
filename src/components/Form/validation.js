const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPass = new RegExp("[0-9]");

export default function validation(input) {
  const errors = {};

  if (!regexEmail.test(input.username)) {
    errors.username = "Debe ser un correo electrónico";
  }
  if (!input.username) {
    errors.username = "El username es obligatorio";
  }
  if (!input.username.length > 35) {
    errors.username = "Maximo 35 caracteres";
  }

  if (!regexPass.test(input.password)) {
    errors.password = "Almenos un numero";
  }
  if (!(input.password.length >= 6 && input.password.length <= 10)) {
    errors.password = "Entre 6 y 10 caracteres";
  }
  return errors;
}
