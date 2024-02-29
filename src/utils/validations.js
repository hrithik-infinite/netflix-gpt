export const checkValidSignInData = (email, pswd) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const pswdRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  const isEmailValid = emailRegex.test(email);
  const isPswdValid = pswdRegex.test(pswd);

  if (!isEmailValid && !isPswdValid) {
    return "Email and password are not valid";
  } else if (!isEmailValid) {
    return "Email is not valid";
  } else if (!isPswdValid) {
    return "Password is not valid";
  }

  return null;
};
