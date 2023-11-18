import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing Screen" screenOptions={{headerTitleAlign:'center' }}>
          <Stack.Screen name="Landing Screen" component={HomeScreen} options={{headerTitleStyle: styles.headerTitle}} />
          <Stack.Screen name="About Us" component={AboutScreen}  options={{headerTitleStyle: styles.headerTitle}} />
        </Stack.Navigator>
      </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerTitle:{
    fontWeight: 'bold',
    fontSize: 20,
    color: '#706233', // Default color
    textAlign:'center',
  },
  
});