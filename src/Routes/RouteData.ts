import Login from "../Components/Login/Login";
import Signup from "../Components/Signup/Signup";
import RouteDataType from "./type";

const RouteData: { [key: string]: RouteDataType } = {
  base: { path: "/", component: Login, isPrivate: false, menuText: "/" },
  login: {
    path: "login",
    component: Login,
    isPrivate: false,
    menuText: "Login",
  },
  signup: {
    path: "signup",
    component: Signup,
    isPrivate: false,
    menuText: "Signup",
  },
};

export default RouteData;
