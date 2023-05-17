import RouteData from "./RouteData";

import {Routes, Route} from "react-router-dom";
import RouteDataType from "./type";
import { RouteConstants } from "../Utility/RouteConstantUtility";
import Login from "../Components/Login/Login";
import Public from "./RouteTypes/Public";
import Private from "./RouteTypes/Private";

export const RouteDataProp: {[key:string]: RouteDataType} ={
    base:{
        path: RouteConstants.base,
        component: Login,
        isPrivate:false,
        menuText:  'login'
    }
}

const WebRoutes = ()=>{
    
    return(
        <>       
         <Routes> 
            {
                Object.keys(RouteData).map((route_name,index)=>{
                    let route = RouteData[route_name]
                    return <Route key={route_name} 
                            path={route.path} element={route.isPrivate ?(<Private element={route.component}/>):(<Public element={route.component}/>)}/>
                })
            }
        </Routes>
        </>

    );
}


export default WebRoutes;