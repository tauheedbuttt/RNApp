import React, {useContext} from "react";
import { View, Image, Text, FlatList, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

// import {navigate} from '../../navigation/RootNavigation';

const {height, width} = Dimensions.get('window');


// context
import { Context as CatalogueContext } from "../../context/CatalogueContext";

const CategorySlider = ({style}) => {
  const navigation = useNavigation();
  const {state: {categories}} = useContext(CatalogueContext);
  return (
    <View style={style}>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item})=>{
          return (
            <View style={{alignItems: 'center', paddingRight: 10}}>
                <TouchableOpacity onPress={() => {navigation.navigate('CatProductFlow', {screen: 'CategoryProducts',params: {id: item.id}})}}>
                  <Image source={item.icon} style={styles.image}/>
                </TouchableOpacity>
                <Text style={styles.text}>{item.name}</Text>
            </View>
          );
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    resizeMode: 'contain',
    width: width/7,
    height: width/7,
  },
  text: {
    fontSize: 17,
    color: 'black'
  }
});

export default CategorySlider;