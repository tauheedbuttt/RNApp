import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";

const {width, height} = Dimensions.get('window');

const Logo = ({style}) => {
  return (
    <View style={[styles.container, style]}>
      <Image source={require('../../../assets/logo.png')} style={styles.img}/>
      <Text style={styles.text}>MSTORE</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 5
  },
  text: {
    fontSize: 16,
    color: '#71A3B2',
  },
  img: {
    width: width/7,
    height: width/7,
  }
});

export default Logo;