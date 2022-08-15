import React, {useContext} from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";

import { Context } from "../context/CartContext";


const {width, height} = Dimensions.get('window');

const ProductButtonBar = ({product}) => {
  const navigation = useNavigation();
  const {addItem, buyItem} = useContext(Context);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.button, {flex: 1}]}>
        <Icon name='share-outline' size={25} color='black'/>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, {flex: 1}]}>
        <Icon name='heart-outline' size={25} color='black'/>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, {flex: 1}]} onPress={() => addItem(product)}>
        <Icon name='ios-cart-outline' size={25} color='black'/>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, {flex: 3, backgroundColor: '#00BCD8'}]} onPress={() => {
          buyItem(product);
          navigation.navigate('CartFlow')}
        }>
        <Text style={styles.text}>Buy Now</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  text: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center'
  },
  button: {
    height: height/12,
    justifyContent: 'center', 
    alignItems: 'center',
  }
})

export default ProductButtonBar;