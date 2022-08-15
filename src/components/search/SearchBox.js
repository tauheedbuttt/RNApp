import React, {useState} from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

const SearchBox = ({style, search, setSearch}) => {
  return (
    <View style={[styles.container, style]}>
      <Icon name="ios-search-outline" size={25} color='black' style={{marginRight: 6}}/>
      <TextInput 
        placeholder="Search"
        placeholderTextColor={'rgba(0,0,0,0.3)'}
        style={styles.box}
        value={search}
        onChangeText={(value)=>{setSearch(value == "" ? null : value)}}
      />
      <TouchableOpacity onPress={() => setSearch(null)}>
        <Icon name="close-outline" size={25} color='rgba(0,0,0,0.6)' style={{marginRight: 6}}/>
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="options-outline" size={25} color='rgba(0,0,0,0.6)' style={{marginRight: 15}}/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,

    height: 50,

    borderWidth: 3,
    borderRadius: 30,
    borderColor: '#EAEAEA',
    backgroundColor: 'white',

    marginBottom: 20,
  },
  box:{
    flex: 1,
    fontSize: 14,
    color: 'black',
  },
});

export default SearchBox;