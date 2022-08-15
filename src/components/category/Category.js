import React from "react";
import { View, Text,Image, TouchableOpacity, Dimensions, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const {height, width} = Dimensions.get('window');

const Category = ({id, name, products, style, right, source}) => {
  const navigation = useNavigation();
  const textAlign = right ? 'right' : 'left';
  const padding = right ? {paddingRight: 18} : {paddingLeft: 18};
  return (
    <TouchableOpacity onPress={() => {navigation.navigate('CatProductFlow', {screen: 'CategoryProducts', params: {id}})}}>
      <View style={[styles.container, style]}>
        <Image
          source={source}
          style={styles.image}
        />
        <View style = {[styles.textContainer, padding]}>
          <Text style={[styles.name, {color: 'white', textAlign}]}>{name}</Text>
          <Text style={[styles.products, {color: 'white', textAlign}]}>{products} Products</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    height: height/5,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  products: {
    fontSize: 12
  },
  name: {
    fontWeight: 'bold',
    fontSize: 23
  },
  image: {
    borderRadius: 15,
    position: 'absolute',
    flex: 1,
    height: height/5.1,
    width: width/1.13,
  }
});

export default Category;