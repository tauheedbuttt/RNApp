import React from "react";
import {View, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

import Foundation from 'react-native-vector-icons/Foundation';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Logo from "../components/reusable/Logo";

import { createStackNavigator } from "@react-navigation/stack";

// Screens
import HomeScreen from "../screens/HomeScreen";
import ProductScreen from "../screens/ProductScreen";
import CategoryProductsScreen from "../screens/CategoryProductsScreen";
import CategoryScreen from "../screens/CategoryScreen";
import CartScreen from "../screens/CartScreen";
import SearchScreen from '../screens/SearchScreen';

const Stack = createStackNavigator();

const ProductOptions = {
  headerTitle: () => {return <Logo style={{marginLeft: width/7}}/>},
  headerRight: () => {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', width: 80}}>
        <Ionicons name='heart-outline' size={25} color='black' />
        <Ionicons name='ios-cart-outline' size={25} color='black' />
      </View>
    )
  }
};

const CategoryToProduct = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='CategoryProducts' component={CategoryProductsScreen} options={{
        headerTitle: () => {return <Logo style={{marginLeft: width/7}}/>}
      }}/>
      <Stack.Screen name='Product' component={ProductScreen} options={ProductOptions}/>
    </Stack.Navigator>
  )
}

const HomeFLow = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen} options={{
        header: ()=>{
          return (
            <View style={{backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 15, paddingVertical: 15}}>
              <Foundation name="align-left" color={'grey'} size={25} />
              <AntDesign name="appstore-o" color={'grey'} size={25} />
            </View>
          );
        }
        }}
      />
      <Stack.Screen name='Product' component={ProductScreen} options={ProductOptions}/>
      <Stack.Screen name='CatProductFlow' component={CategoryToProduct} options={{headerShown: false}} />
    </Stack.Navigator>
  )
}

const CategoryFLow = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Category' component={CategoryScreen} options={{
        header: ()=>{
          return (
            <View style={{flexDirection: 'row', alignItems: 'center', paddingLeft: 15, paddingRight: 30}}>
              <Foundation name="align-left" color={'grey'} size={25} />
              <Logo style={{justifyContent: 'center', flex: 1}}/>
            </View>
          );
        }
        }}
      />
      <Stack.Screen name='CatProductFlow' component={CategoryToProduct} options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}

const CartFlow = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Cart' component={CartScreen} options={{headerShown: false}}/>
      <Stack.Screen name='Product' component={ProductScreen} options={ProductOptions}/>
    </Stack.Navigator>
  )
}

const SearchFlow = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Search' component={SearchScreen} options={{headerShown: false}}/>
      <Stack.Screen name='Product' component={ProductScreen} options={ProductOptions}/>
    </Stack.Navigator>
  )
}

export {
  HomeFLow
  ,CategoryFLow
  ,CartFlow
  ,SearchFlow
}