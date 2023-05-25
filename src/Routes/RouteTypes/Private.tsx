import React, { ComponentType, useEffect } from "react";
import DashboardTemplate from "../../Components/Template/DashboardTemplate";
import { useNavigate } from "react-router-dom";
import AuthFunctions from "../../Utility/AuthUtility";
import { RouteConstants } from "../../Utility/RouteConstantUtility"
import { getAuth, onAuthStateChanged } from "firebase/auth";

interface Props {
    element: ComponentType<any>;
}

const Private: React.FC<Props> = ({ element: Element }) => {
    const navigate = useNavigate();
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
          if (!user) {
            navigate('/');
          }
        });
        return () => unsubscribe();
      });

    return (
        <DashboardTemplate>
            <Element />
        </DashboardTemplate>
    );
}

export default Private;