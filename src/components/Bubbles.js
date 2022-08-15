import React, {useState} from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Dimensions } from "react-native";

const {width, height} = Dimensions.get('window');

const Bubbles = ({data, setSize, style}) => {
  const [selected, setSelected] = useState();
  return (
    <View style={[styles.container, style]}>
      <FlatList 
        data={data}
        keyExtractor={(item) => item}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        renderItem={({item})=>{
          return (
            <TouchableOpacity onPress={() => {
                setSize(selected == item ? null : item); 
                setSelected(selected == item ? null : item)
              }}>
              <View style={[styles.bubble, selected == item ? {backgroundColor: 'white', borderColor: '#343f7f'} : null]}>
                <Text style={[styles.text, selected == item ? {color: '#343f7f'} : null]}>{item}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  },
  bubble:{
    width: width/5,
    paddingVertical: height/110,

    borderWidth: 1,
    borderRadius: 22,
    borderColor: 'rgba(0,72,255,0.2)',

    marginLeft: 14
  },
  text:{
    color: 'rgba(0,72,255,0.2)',
    textAlign: 'center'
  },
});

export default Bubbles;