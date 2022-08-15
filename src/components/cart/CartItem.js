import React, {useState, useContext, useEffect} from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Ionicons from 'react-native-vector-icons/Ionicons';

import Counter from "./Counter";
import { Context } from "../../context/CartContext";

const {width, height} = Dimensions.get('window');

const CartItem = ({id, name, price, source, quantity}) => {
  const [count, setCount] = useState(quantity);
  const {setQuantity, removeItem} = useContext(Context);

  const navigation = useNavigation();

  useEffect(()=>{
    setQuantity(id, count);
  },[count])

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Product', {id})}>
        <View style={styles.item}>
          <View style={styles.imgContainer}>
            <Image source={source} style={styles.image}/>
          </View>
          <View style={{marginLeft: 10, justifyContent: 'space-between'}}>
            <Text style={styles.name}>{name}</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start'}}>
              <Text style={styles.price}>${price.toFixed(2)}</Text>
              <TouchableOpacity style={{padding: 8}} onPress={() => removeItem(id)}>
                <Ionicons name='trash-outline' size={25} color='rgba(0,0,0,0.4)' />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <View style={{justifyContent: 'center', alignItems: 'center',flex: 1, marginVertical: 10}}>
        <Counter count={count} setCount={setCount} min={0} max={999} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'space-between',
    
    paddingBottom: 5,
    
    borderBottomColor: 'rgba(0,0,0,0.2)',
    borderBottomWidth: 2,
  },
  item: {
    flexDirection: 'row',
  },
  image: {
    width: width/3.5,
    height: width/3.5,
  },
  imgContainer: {
    backgroundColor: 'white',
    borderRadius: 15,
  },
  name: {
    flex: 1,
    color: 'rgba(0,0,0,0.7)',
    flexWrap: 'wrap',
    fontSize: 18,
  },
  price: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 23
  }
});

export default CartItem;