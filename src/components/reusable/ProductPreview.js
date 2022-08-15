import React from "react";
import { View, Text, Dimensions, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const {width, height} = Dimensions.get('window');

const ProductPreview = ({style, id, source, name, price, discounted, width}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={()=>{navigation.navigate('Product', {id})}}>
      <View style={[styles.container, style]}>
        <Image
          source={source}
          style={styles.img}
        />
        <View style={styles.label}>
          <View style={styles.lbl}>
            <Text style={[styles.text, {fontSize: 21}]}>{name}</Text>
            <View style={styles.price}>
              <Text style={[styles.text, {fontSize: 18, marginRight: 4}]}>${discounted.toFixed(2)}</Text>
              <Text style={[styles.text, {fontSize: 13, textDecorationLine: 'line-through', textDecorationStyle: 'solid'}]}>${price.toFixed(2)}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    height: height/2.8,
    width: (width/1.77),
    
    borderRadius: 13,

    paddingHorizontal: 15,
    
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  img: {
    flex: 1,
    resizeMode: 'contain',
    width: width/2.2,
    height: height/2.5,
  },
  label: {
    flex: 1, 
    position: 'absolute', 
    height: height/2.8,
    flexDirection: 'row', 
    alignItems: 'flex-end',
    marginLeft: 6, 
  },
  price: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  text: {
    color: 'white',
  },
});

export default ProductPreview;