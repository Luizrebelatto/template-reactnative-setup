import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";

export default function AuthRoutes(){
    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator
            screenOptions={{ gestureEnabled: false, headerShown: false }}
            initialRouteName="login"
        >
            <Stack.Screen name="login" component={Login}/>
        </Stack.Navigator>
    )
}