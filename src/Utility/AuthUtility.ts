import auth from "../firebase";

async function isLoggedIn() {
  return auth.currentUser ? true : false;
}

async function LogOut() {
  return auth.signOut();
}

const AuthFunctions = { isLoggedIn, LogOut };

export default AuthFunctions;
