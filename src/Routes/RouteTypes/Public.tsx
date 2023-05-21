import React, { ComponentType, useEffect } from "react";
import AuthTemplate from "../../Components/Template/AuthTemplate";
import { useNavigate } from "react-router-dom";
import AuthFunctions from "../../Utility/AuthUtility";
import { RouteConstants } from "../../Utility/RouteConstantUtility"

interface Props {
    element: ComponentType<any>;
}

const Public: React.FC<Props> = ({ element: Element }) => {

    const navigate = useNavigate();
    useEffect(() => {
        async function checkLoggedIn() {
            const isLogged = await AuthFunctions.isLoggedIn();

            console.log(isLogged);
            if (isLogged) {
                //await AuthFunctions.LogOut();
                navigate(RouteConstants.feed);
            }
        }
        checkLoggedIn();
    });

    return (<AuthTemplate>
        <Element />
    </AuthTemplate>);
}

export default Public;