import React, {useContext} from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";

import { HomeFLow, CategoryFLow, CartFlow, SearchFlow } from "./stack";

import { Context } from "../context/CartContext";


const Tab = createBottomTabNavigator();

const Tabs = () => {
  const {state} = useContext(Context);
  return (
    <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false}}>
      <Tab.Screen name='HomeFLow' component={HomeFLow} options={{
        tabBarIcon: ({color, size}) => {
          return <AntDesign name="home" color={color} size={size} />
        }
      }}/>
      <Tab.Screen name='CategoryFLow' component={CategoryFLow} options={{
        tabBarIcon: ({color, size}) => {
          return <AntDesign name="appstore-o" color={color} size={size} />
        }
      }}/>
      <Tab.Screen name='SearchFlow' component={SearchFlow} options={{
        tabBarIcon: ({color, size}) => {
          return <Ionicons name="search" color={color} size={size} />
        }
      }}/>
      <Tab.Screen name='CartFlow' component={CartFlow} options={{
        tabBarBadge: state.length == 0 ? null : state.length,
        tabBarIcon: ({color, size}) => {
          return <Ionicons name="ios-cart-outline" color={color} size={size} />
        }
      }}/>
    </Tab.Navigator>
  )
}

export default Tabs;