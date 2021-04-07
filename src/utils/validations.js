const regexEmail = new RegExp(
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
);

const regexPassword = new RegExp(
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!*^?+-_@#$%&]{8,}$/,
);

const validateLoginForm = (email, password) => {
  let dataIsValid = true;

  if (!email || !password) {
    dataIsValid = false;
  }

  if (!regexEmail.test(email)) {
    dataIsValid = false;
  }

  if (!regexPassword.test(password)) {
    dataIsValid = false;
  }
  return dataIsValid;
};

const validateRegisterForm = (email, password, repeatPassword) => {
  let dataIsValid = true;

  if (!email || !password || !repeatPassword) {
    dataIsValid = false;
  }

  if (password !== repeatPassword) {
    dataIsValid = false;
  }

  if (!regexEmail.test(email)) {
    dataIsValid = false;
  }

  if (!regexPassword.test(password)) {
    dataIsValid = false;
  }
  return dataIsValid;
};

module.exports = {
  regexEmail,
  regexPassword,
  validateLoginForm,
  validateRegisterForm,
};
