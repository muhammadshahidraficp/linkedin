

import  Login  from "../Components/Login/Login";
import Signup from "../Components/Signup/Signup";
// import Dashboard from "../components/dashboard/Dashboard";

const RouteData = {
    root: {path:"/", component:Login, isPrivate:false, menuText: "/"},
    Login: {path:"login", component:Login, isPrivate:false, menuText: "Login"},
    Signup: {path:"signup", component:Signup, isPrivate:false, menuText: "Signup"},
   // Feed: {path:"dashboard", component:Dashboard, isPrivate:true, menuText: "Dashboard"}
}

export default RouteData;