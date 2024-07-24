import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppRoutes from "./app.routes";
import AuthRoutes from "./"
import useAuthStore from "../store/authStore";

export default function Routes(){
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

    return(
        <NavigationContainer >
           {isAuthenticated ? <AppRoutes/> : <AuthRoutes/>}
        </NavigationContainer>
    )
}