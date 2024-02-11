import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import welcomepagescreen from './Screens/HomeScreen';
import HomeScreen from './Screens/HomeScreen';

const Stack = createNativeStackNavigator ()

// view -> UIView
export default function App() {
  //const handlePress = () => console.log ("Text pressed");

  
  return (
   <NavigationContainer> 
      <Stack.Navigator> 
        <Stack.Screen
          name = 'Home'
          component = {HomeScreen}
        
        /> 
        <Stack.Screen
          name = 'Fitness'
          component = {FitnessScreen}
        
        /> 
      </Stack.Navigator>
   </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f0a31',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
