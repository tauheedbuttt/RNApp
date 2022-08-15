import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

const {width, height} = Dimensions.get('window');

const SearchItem = ({id, name, price, source}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Product', {id})}>
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image source={source} style={styles.image}/>
        </View>
        <View style={{marginLeft: 10, justifyContent: 'space-between'}}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.price}>${price.toFixed(2)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 20,
    paddingBottom: 5,
    borderBottomColor: 'rgba(0,0,0,0.2)',
    borderBottomWidth: 2
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
    fontSize: 20,
  },
  price: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 23
  }
});

export default SearchItem;