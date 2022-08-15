import React, {useState} from "react";
import { View, Text, StyleSheet } from "react-native";

import Button from "../components/login/Button";
import Form from "../components/login/Form";

const LoginScreen = ({navigation: {navigate}}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Welcome Back</Text>
      <Text style={styles.subtitle}>Track your orders with Sushi App</Text>
      <Form
        onEmail={(value) => {setEmail(value)}}
        onPassword={(value) => {setPassword(value)}}
        style={styles.form}
      />
      <Button 
        text={'Continue Login'} 
        onPress={()=>{navigate('mainFlow');}}
        />
      <Button 
        text={'Continue as Guest'} 
        onPress={()=>{navigate('mainFlow');}}
        reverse
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',


    padding: 20,
    marginTop: 70,

    backgroundColor: '#F7F7F7'
  },
  h1: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 17,
    color: 'black',
    marginBottom: 20
  },
  form: {
    marginBottom: 15
  },
});

export default LoginScreen;