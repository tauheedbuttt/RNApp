import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
const {width, height} = Dimensions.get('window');

import AntDesign from 'react-native-vector-icons/AntDesign';

const Counter = ({count, setCount, min, max}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setCount(count+1 > max ? max : count+1)}  style={{padding: 8}}>
        <AntDesign name="caretup" size={15} color={'silver'}/>
      </TouchableOpacity>
      <Text style={styles.text}>{count}</Text>
      <TouchableOpacity onPress={() => setCount(count-1 < min ? min : count-1)} style={{padding: 8}}>
        <AntDesign name="caretdown" size={15} color={'silver'}/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.06)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 7,
    borderRadius: 20,
  },
  text: {
    color: 'black',
    fontSize: 20,
  }
});

export default Counter;