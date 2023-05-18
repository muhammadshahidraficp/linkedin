import React from "react";

type Props = {
    children:React.ReactNode
}

const DashboardTemplate:React.FC<Props> = ({children}) =>{
    return(<div className="h-full">
     {children}
    </div>);
 }
 
 export default DashboardTemplate;