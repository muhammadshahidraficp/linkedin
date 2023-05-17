import auth from "../firebase";

async function isLoggedIn() {
  return auth.currentUser ? true : false;
}

const AuthFunctions = { isLoggedIn };

export default AuthFunctions;
