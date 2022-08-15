import React, {useContext} from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';

import Logo from "../components/reusable/Logo";
import DateT from "../components/home/Date";
import ProductSlider from "../components/reusable/ProductSlider"
import CategorySlider from "../components/home/CategorySlider";

import { Context } from "../context/CatalogueContext";


const HomeScreen = ({navigation}) => {
  const {state: {products}} = useContext(Context);
  const paddingLeft = 15;
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Logo style={{paddingLeft}}/>
        <DateT style={{paddingLeft}}/>
          <ProductSlider
            data={products}
            style={{marginTop: 25}}
            horizontal={true}
          />
          <CategorySlider
            style={{paddingLeft, marginVertical: 25}}
          />
          {/* Featured Products Heading */}
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingLeft}}>
            <Text style={{fontSize: 22, fontWeight: 'bold', color: 'black', marginBottom: 17}}>Featured Products</Text>
            <TouchableOpacity>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{fontSize: 12, color: 'black'}}>Show All</Text>
                <Icon name='right' size={12} color={'black'}/>
              </View>
            </TouchableOpacity>
          </View>
          {/* Featured Products */}
          <ProductSlider
            data={products}
            style = {{paddingBottom: 20}}
            horizontal={true}
          />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: 'white'
  },
});

export default HomeScreen;