import * as React from 'react';
import {View , Text, TouchableOpacity, StyleSheet} from 'react-native';
import { ImageBackground } from 'react-native';

export default function HomeScreen({navigation}){
    return(  
        <ImageBackground source={require('../images/landing.png')}
        style={styles.image}>
            <View style={styles.container}>
                <TouchableOpacity title='explore' onPress={()=>navigation.navigate("About Us")} style={styles.button}>
                    <Text style={styles.buttonText}>Explore</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    image:{
        flex: 1,
        resizeMode:'stretch',
        justifyContent: 'center', // Adjust as needed
        alignItems: 'center', // Adjust as needed
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    button: {
        backgroundColor: '#1F1717', // Adjust the color and opacity
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
      },  
      buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
})