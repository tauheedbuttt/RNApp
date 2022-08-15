import React, {useContext, useState, useEffect} from "react";
import { View, Text, Image, ScrollView, StyleSheet, Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

// context
import { Context as CartContext } from "../context/CartContext";
import { Context as CatalogueContext } from "../context/CatalogueContext";

import Bubbles from "../components/Bubbles";
import ProductDetail from "../components/ProductDetail";
import ProductButtonBar from "../components/ProductButtonBar";
import { TouchableOpacity } from "react-native-gesture-handler";

const {width, height} = Dimensions.get('window');

const ProductScreen = ({navigation: {navigate}, route: {params}}) => {
  const {id} = params;
  
  const {state: {products}} = useContext(CatalogueContext);
  const {addItem} = useContext(CartContext);

  const product = products.find((product) => product.id == id);

  const [size, setSize] = useState();
  const reviewAvg = product.reviews.map((review) => review.star).reduce((partialSum, a) => partialSum + a, 0) / product.reviews.length;
  var reviews = []
  for (let i=0 ; i<reviewAvg ; i++){
    reviews.push(<Icon name='star' size={30} color='orange'/>)
  }

  return (
    <View style={{flexDirection:'column-reverse'}}>
      <View style={styles.container}>
        <ScrollView>
          <Image source={product.source} style={styles.image} />
          <Bubbles data={product.sizes} setSize={setSize} style={{marginVertical: 25}}/>
          <Text style={[styles.text, styles.title]}>{product.name}</Text>
          <View style={styles.price}>
            <Text style={[styles.text, {fontSize: 18, marginRight: 4}]}>${product.discounted.toFixed(2)}</Text>
            <Text style={[styles.text, {fontSize: 13, textDecorationLine: 'line-through', textDecorationStyle: 'solid'}]}>${product.price.toFixed(2)}</Text>
          </View>
          <View style={[styles.price, {marginBottom: 40}]}>
            {
              reviews.map((star) => star)
            }
            <Text style={[styles.text, {paddingLeft: 2}]}>({product.reviews.length})</Text>
            <Text style={[styles.text, {paddingLeft: 6}]}>Review</Text>
          </View>
          <ProductDetail
            product={product}
            />
        </ScrollView>
      </View>
      <View style={styles.btnArea}>
        <ProductButtonBar 
          product={{...product, size}}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: height/12
  },
  image: {
    width: "100%",
    height: height/2.3,
    resizeMode: 'contain',
    backgroundColor: 'white'
  },
  price: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    alignSelf: 'center',
    marginBottom: 10
  },
  text: {
    color: 'black',
    textAlign: 'center'
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 10
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    width: width,
    height: height/12,
  }
});

export default ProductScreen;