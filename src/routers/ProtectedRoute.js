import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ render: RenderComponent }) => {
    const navigate = useNavigate();

    const checkUserToken = () => {
        const userToken = localStorage.getItem("user-token");
        if (!userToken || userToken === "undefined") {
            return false;
        }
        return true;
    };

    useEffect(() => {
        if (!checkUserToken()) {
            const redirectPath = checkUserRegistered() ? "/login" : "/register";
            navigate(redirectPath);
        }
    }, []);

    const checkUserRegistered = () => {
        const isUserRegistered = localStorage.getItem("user-registered");
        return isUserRegistered === "true";
    };

    return checkUserToken() ? <RenderComponent /> : null;
};

export default ProtectedRoute;
