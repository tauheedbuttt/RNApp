import React from "react";
import { View, FlatList, StyleSheet, Dimensions } from "react-native";

import ProductPreview from "./ProductPreview";
const {width} = Dimensions.get('window');

const ProductSlider = ({navigation, style, data, horizontal}) => {
  return (
    <View style={style}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        horizontal={horizontal}
        showsHorizontalScrollIndicator={false}
        renderItem={({item})=>{
          return (
              <ProductPreview
                id = {item.id}
                source = {item.source}
                name = {item.name}
                price = {item.price}
                discounted = {item.discounted}
                style = {[{marginLeft: 15}, !horizontal ? {marginTop: 15, marginLeft: 0, width: width/1.2} : null]}
                navigation={navigation}
              />
          );
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  
});

export default ProductSlider;