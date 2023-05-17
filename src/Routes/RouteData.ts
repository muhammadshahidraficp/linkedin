import Login from "../Components/Login/Login";
import Signup from "../Components/Signup/Signup";
import { RouteConstants } from "../Utility/RouteConstantUtility";
import RouteDataType from "./type";

const RouteData: { [key: string]: RouteDataType } = {
  base: {
    path: RouteConstants.base,
    component: Login,
    isPrivate: false,
    menuText: "/",
  },
  login: {
    path: RouteConstants.login,
    component: Login,
    isPrivate: false,
    menuText: "Login",
  },
  signup: {
    path: RouteConstants.signup,
    component: Signup,
    isPrivate: false,
    menuText: "Signup",
  },
  feed: {
    path: RouteConstants.feed,
    component: Signup,
    isPrivate: true,
    menuText: "Feed",
  },
};

export default RouteData;
