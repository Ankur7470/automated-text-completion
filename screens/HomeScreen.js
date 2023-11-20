import * as React from 'react';
import {View , Text, TouchableOpacity, StyleSheet} from 'react-native';
import { ImageBackground } from 'react-native';

export default function HomeScreen({navigation}){
    return(  
        <ImageBackground source={require('../images/landing.png')}
        style={styles.image}>
            <View style={styles.container}>
                <TouchableOpacity title='explore' onPress={()=>navigation.navigate("TextWiz")} style={styles.button}>
                    <Text style={styles.buttonText}>Explore</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    image: {
      flex: 1,
      resizeMode: 'stretch',
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      backgroundColor: '#1F1717',
      paddingHorizontal: 20,
      paddingVertical: 15,
      borderRadius: 15,
      elevation: 10, // Add elevation for Android shadow effect
    //   shadowColor: 'black', // Add shadow color for iOS shadow effect
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });