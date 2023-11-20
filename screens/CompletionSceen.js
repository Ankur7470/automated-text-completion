import React  from 'react';
import {useState} from 'react';
import { View, TextInput, Text , TouchableOpacity, StyleSheet } from 'react-native';

export default function TextCompletionScreen({ navigation }) {
  const [inputText, setInputText] = useState('');

  const handleTextSubmit = () => {
    console.log('Entered text:', inputText);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your text here"
        value={inputText}
        onChangeText={(text) => setInputText(text)}
        multiline
      />
      <TouchableOpacity title="Complete Text" style={styles.button} onPress={handleTextSubmit}>
        <Text style={styles.buttonText}>Complete Text</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#FAF6F0',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  button:{
    backgroundColor: '#1F1717',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20, 
  },buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
