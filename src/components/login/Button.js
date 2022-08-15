import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const Button = ({text, onPress, reverse}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, reverse ? {backgroundColor: '#F7F7F7'} : {backgroundColor: '#00BCD8'}]}>
      <Text style = {[styles.text, !reverse ? {color: 'white'} : {color: '#00BCD8'}]}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 10
  },
  text: {
    fontSize: 16
  }
});

export default Button;