import * as React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';



export default function AboutScreen({navigation}) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Introduction</Text>
        <ScrollView>
          <Text style={styles.content}>
            Welcome to our Text Completion App powered by Natural Language Processing (NLP)! 🚀
          </Text>
          <Text style={styles.content}>
            This application leverages the power of NLP technology to help enhance your writing experience. Whether you're crafting an essay, composing an email, or simply jotting down notes, our app assists you by suggesting accurate and contextually relevant word predictions, phrases, or sentences as you type.
          </Text>
          <Text style={styles.heading2}>Use Cases</Text>
        <Text style={styles.content}>
          {"\u2022"} Writing essays and articles
        </Text>
        <Text style={styles.content}>
          {"\u2022"} Drafting emails and messages
        </Text>
        <Text style={styles.content}>
          {"\u2022"} Study and research purposes
        </Text>
          <Text style={styles.heading2}>Key Feature</Text>
          <Text style={styles.content}>
            <Text style={styles.boldText}>User-Friendly Interface:</Text> Our app offers an intuitive and easy-to-use interface, making it seamless for users to navigate and utilize its functionalities.
          </Text>
          <Text style={styles.heading2}>Technology Stack</Text>
        <Text style={styles.content}>
          {"\u2022"} React Native
        </Text>
        <Text style={styles.content}>
          {"\u2022"} JavaScript
        </Text>
        <Text style={styles.content}>
          {"\u2022"} Natural Language Processing (NLP)
        </Text>
        <Text style={styles.heading2}>Team Members</Text>
        <Text style={styles.content_name}>
          -{">"}Akshat Sharma 
        </Text>
        <Text style={styles.content_name}>
        -{">"}Anchit Gedekar 
        </Text>
        <Text style={styles.content_name}>
        -{">"}Ankur Sinha 
        </Text>
        {/* <Ionicons name="person-circle-outline" size={24} color="black" /> */}
        </ScrollView>
        <TouchableOpacity title="Go to Main Page"  onPress={()=>navigation.navigate("Model")} style={styles.button} >
            <Text style={styles.buttonText} >Try our model </Text>
        </TouchableOpacity>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 20,
      backgroundColor: '#FAF6F0',
    },
    title: {
      fontSize: 34,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    content: {
      textAlign: 'justify',
      lineHeight: 24,
      fontSize: 18,
      marginBottom: 10,
    },
    content_name:{
        fontSize:15,
        fontWeight: '500',
    },
    heading2: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 15,
    },
    boldText: {
      fontWeight:'500'
    },
    button: {
        backgroundColor: '#1F1717',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 20, 
      },
      buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
  });
  