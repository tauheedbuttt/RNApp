import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const ProductDetail = ({title, selected, setSelected}) => {
  const bottomBorder = {
    borderBottomWidth: 3,
    borderBottomColor: '#00e5ff',
  }

  return (
    <TouchableOpacity onPress={() => setSelected(title)} style={[styles.container, selected==title ? bottomBorder : null]}>
      <Text style={styles.heading}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    paddingVertical: 10,
  },
  heading: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
  }
});

export default ProductDetail;