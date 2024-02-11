//import React from 'react'; 
import {Button, StyleSheet, Text, View} from 'react-native'; 
const HomeScreen = ({navigation}) => {
    return (
        <View style = {styles.container}>
            <Text>Welcome, Halee!</Text>
            <Button
            title='Fitness'
            onPress={()=> navigation.navigate("Fitness")}
            />
        </View>
    )
}
export default HomeScreen 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1f0a31',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });