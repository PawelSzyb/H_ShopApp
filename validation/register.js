const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  // ***** NAME *****
  if (!Validator.isLength(data.name, { min: 2, max: 20 })) {
    errors.name = "Imię musi posiadać od dwóch do trzydziestu znaków.";
  }
  if (Validator.isEmpty(data.name)) {
    errors.name = "Imię jest wymagane.";
  }
  // ***** EMAIL *****
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email jest wymagany.";
  }
  if (!Validator.isEmail(data.email)) {
    errors.email = "Nieprawidłowy email.";
  }
  // ***** PASSWORD *****
  if (Validator.isEmpty(data.password)) {
    errors.password = "Hasło jest wymagane.";
  }
  if (!Validator.isLength(data.password, { min: 6, max: 20 })) {
    errors.password = "Hasło musi posiadać od 6 do 30 znaków.";
  }
  // ***** PSSWORD2 *****
  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Hasła nie mogą się różnić.";
  }
  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Potwierdzenie hasła jest wymagane.";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
