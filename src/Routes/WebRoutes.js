import RouteData from "./RouteData";

import {Routes, Route} from "react-router-dom";

const WebRoutes = ()=>{
    
    return(
        <Routes > {Object.keys(RouteData).map((route_name,index)=>{
            let route = RouteData[route_name]
            return <Route key={route_name} path={route.path} element={<route.component/>}/>
            })}
        </Routes>
    );
}


export default WebRoutes;