

const validator = require("validator");

const isEmptyHelper = require("../helpers/isEmptyHelper");

let validateLoginInput = (bodyData) => {

  let errors = {

    email: null,
    password: null

  };

  let email = bodyData.email;
  let password = bodyData.password;

  //I have to check if it is null/empty and convert to string if it is because
  //validator can only validate strings.
  email = isEmptyHelper(email) ? "" : email;

  password = isEmptyHelper(password) ? "" : password;

  if (validator.isEmpty(email)) {
    errors.email = "Email field is required.";
  } else if (!validator.isEmail(email)) {
    errors.email = "Email is invalid";
  }

  if (validator.isEmpty(password)) {
    errors.password = "password field is required.";
  }
  //return the errors object and a boolean that is true if errors is empty/null
  return {
    errors,
    isvalid: isEmptyHelper(errors)
  };


};

module.exports = validateLoginInput;