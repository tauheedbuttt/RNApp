import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen";
import Tabs from "./tabs";

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions ={{headerShown: false}}>
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='mainFlow' component={Tabs} options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}

export default AuthStack;
