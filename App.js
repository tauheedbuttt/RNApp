import React from "react";
import {View, Text, Button} from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AuthStack from './src/navigation/AuthStack';

// context
import { Provider as CartProvider } from "./src/context/CartContext";
import { Provider as CatalogueProvider } from "./src/context/CatalogueContext";

const App = () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  )
}

export default () => {
  return (
    <CatalogueProvider>
      <CartProvider>
        <App/>
      </CartProvider>
    </CatalogueProvider>
  );
}