import React, {useState} from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const Form = ({onEmail, onPassword, style}) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.text}>Email</Text>
      <View style={styles.input}>
        <TextInput onChangeText={onEmail} style={styles.inputText}/>
      </View>

      <Text style={styles.text}>Password</Text>
      <View style={styles.input}>
        <TextInput onChangeText={onPassword} secureTextEntry={true} style={styles.inputText}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  },
  text: {
    fontSize: 16,
    color: 'black',
    marginBottom: 10,
  },
  inputText: {
    fontSize: 14,
    color: 'black',
  },
  input:{
    marginBottom: 10,
    height: 50,

    borderWidth: 3,
    borderRadius: 3,
    borderColor: '#EAEAEA',
    backgroundColor: 'white'
  }
});

export default Form;