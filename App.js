import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import CompletionScreen from './screens/CompletionSceen';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing Screen" screenOptions={{headerTitleAlign:'center' }}>
          <Stack.Screen name="Landing Screen" component={HomeScreen} options={{headerTitleStyle: styles.headerTitle, headerShown:false}} />
          <Stack.Screen name="TextWiz" component={AboutScreen}  options={{
            headerTitleStyle:styles.headerTitle,
            headerRight: () => (
              <View style={{ marginRight: 15 }}>
                <Ionicons name="person" size={24} color="black" />
              </View>
            ),
          }} />
          <Stack.Screen name="Model" options={{headerTitleStyle:styles.headerTitle}} component={CompletionScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
  },
  headerTitle:{
    fontWeight: 'bold',
    fontSize: 20,
    color: '#040D12',
    textAlign: 'center',
    // fontFamily: 'Quicksand-Light'
  },
  
});