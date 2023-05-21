import auth from "../firebase";

async function isLoggedIn() {
  console.log(auth.currentUser?.email);
  return auth.currentUser ? true : true;
}

async function LogOut() {
  return auth.signOut();
}

const AuthFunctions = { isLoggedIn, LogOut };

export default AuthFunctions;
