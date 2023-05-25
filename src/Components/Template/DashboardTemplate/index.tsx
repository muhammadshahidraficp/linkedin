import React from "react";
import HeaderOrganism from "../../Organisms/Header";

type Props = {
    children:React.ReactNode
}

const DashboardTemplate:React.FC<Props> = ({children}) =>{
    return(<div className="h-full">
         <HeaderOrganism />
     {children}
    </div>);
 }
 
 export default DashboardTemplate;