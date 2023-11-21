import * as React from 'react';
import {View , Text, TouchableOpacity, StyleSheet} from 'react-native';
import { ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({navigation}){
    return( 
            <View style={styles.container}>
                    <Text style={styles.welcome}> Welcome to our app </Text>
                <TouchableOpacity title='explore' onPress={()=>navigation.navigate("TextWiz")} style={styles.button}>
                        <Text style={styles.buttonText}>Enter & Explore </Text>
                </TouchableOpacity>
            <View style={styles.footer}>
                 <Text style={styles.footerText}>© TextWiz. All rights reserved.</Text>
            </View>
            </View>
    );
}
const styles = StyleSheet.create({
    welcome:{
        fontSize:30,
        justifyContent:'center',
        alignContent:'space-between',
        paddingBottom:40,
    },
    image: {
      flex: 1,
      resizeMode: 'stretch',
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon:{
        color:'white',
        fontSize:17,

    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: '#B0A695',
      
    },
    button: {
      backgroundColor: '#1F1717',
      paddingHorizontal: 20,
      paddingVertical: 15,
      borderRadius: 15,
      elevation: 10,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    
    },
    footer: {
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
  },
  footerText: {
    color: 'white',
    fontSize: 12,
  },
  });