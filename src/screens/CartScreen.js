import React, {useContext} from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import CartItem from '../components/cart/CartItem';
import { Context } from "../context/CartContext";

const CartScreen = () => {
  const {state} = useContext(Context);

  const total = state.map((item) => item.discounted*item.quantity).reduce((partialSum, a) => partialSum + a, 0);
  // state.map((item)=>{console.log(item); console.log('-------')})

  return (
    <View style={styles.container}>
      <View style={styles.price}>
        <Text style={[styles.text]}>Total Price: </Text>
        <Text style={[styles.text, {color: '#00BCD8'}]}>${total.toFixed(2)}</Text>
      </View>
      <FlatList
        data={state}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator = {false}
        renderItem = {({item})=>{
            return(
              <CartItem
                id={item.id}
                name={item.name}
                source={item.source}
                price={item.discounted * item.quantity}
                quantity={item.quantity}
              />
            );
          }
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  },
  price: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginHorizontal: 12,
    marginVertical: 18,
  },
  text: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold'
  },
});

export default CartScreen;