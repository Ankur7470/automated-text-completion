import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';


const SignUpScreen = () => {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      if (userCredential.user) {
        navigation.navigate('TextWiz');
      }
    } catch (error) {
      console.log(error);
    }
  };

    // const handleSignUp = () => {

    // }



  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sign Up</Text>
      
      <TextInput
        style={styles.inputField}
        placeholder="Name"
        value={name}
        onChangeText={(text)=>setName(text)}
        />       

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

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
    textDecorationLine: 'underline',
  },
  linkButton: {
    paddingTop: 20,
  },
});

export default SignUpScreen;
