import React, { ComponentType, useEffect } from "react";
import DashboardTemplate from "../../Components/Template/DashboardTemplate";
import { useNavigate } from "react-router-dom";
import AuthFunctions from "../../Utility/AuthUtility";
import { RouteConstants } from "../../Utility/RouteConstantUtility"

interface Props {
    element: ComponentType<any>;
}

const Private: React.FC<Props> = ({ element: Element }) => {
    const navigate = useNavigate();
    useEffect(() => {
        async function checkLoggedIn() {
            const isLogged = await AuthFunctions.isLoggedIn();

            console.log(isLogged);
            if (!isLogged) {
                //await AuthFunctions.LogOut();
                navigate(RouteConstants.base);
            }
        }
        checkLoggedIn();
    });

    return (
        <DashboardTemplate>
            <Element />
        </DashboardTemplate>
    );
}

export default Private;