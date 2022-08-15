import React, {useContext} from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";

import ProductSlider from "../components/reusable/ProductSlider";
import Logo from "../components/reusable/Logo";

import { Context } from "../context/CatalogueContext";


const CategoryProductsScreen = ({route: {params}}) => {
  const {state} = useContext(Context);
  const {id} = params;
  const products = state.products.filter((product)=> product.catId == id);
  return (
    <View style={styles.container}>
      {
        products.length == 0 
        ? <Text style={styles.text}>No Products in this category available</Text> 
        : <ProductSlider
          data = {products}
          style = {{paddingBottom: 20}}
        />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 30,
    color: 'black',
  }
});

export default CategoryProductsScreen;