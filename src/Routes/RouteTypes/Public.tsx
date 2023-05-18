import React,{ComponentType} from "react";
import AuthTemplate from "../../Components/Template/AuthTemplate";

interface Props {
    element:ComponentType<any>;
}

const Public:React.FC<Props> =({element:Element}) =>{
    return (<AuthTemplate>
    <Element/>
</AuthTemplate>);
}

export default Public;