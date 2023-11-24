import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import {getAuth,  signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigation } from '@react-navigation/native';
import { auth } from '../../firebase.config';

const LoginScreen = () => {
  const navigation = useNavigation()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async(e) => {
    e.preventDefault()
      try {
        const auth = getAuth()
        const userCredenetial = await signInWithEmailAndPassword(auth ,email, password)

          if(userCredenetial.user){
          navigation.navigate('TextWiz');
    }
      } catch (error) {
        console.log(error)
      }
    
  };
  // const handleLogin = () => {
        // console.log(1234)
  // }

  const navigateToSignUp = () => {
    navigation.navigate("SignUp")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome</Text>

      <TextInput
        style={styles.inputField}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.inputField}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.linkButton} onPress={navigateToSignUp} >
          <Text style={styles.linkText}> Dont have an account </Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#FAF6F0',
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  inputField: {
    width: '90%',
    height: 35,
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    width: '90%',
    height: 40,
    backgroundColor: '#1F1717',
    justifyContent: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  linkText: {
    color: '#706233', 
    textDecorationLine:'underline',
 },
 linkButton:{
  paddingTop:20,
 }
});

export default LoginScreen;
