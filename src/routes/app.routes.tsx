import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Home from "../screens/Home";

export default function AppRoutes(){
    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator
            screenOptions={{ gestureEnabled: false, headerShown: false }}
            initialRouteName="login"
        >
            <Stack.Screen name="login" component={Login}/>
            <Stack.Screen name="home" component={Home}/>
        </Stack.Navigator>
    )
}