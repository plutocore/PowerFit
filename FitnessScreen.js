//import React from 'react'; 
import {Button, StyleSheet, Text, View} from 'react-native'
const FitnessScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Exercises</Text>
            <Button
                title='Home'
            />
        </View>
    )
}
export default FitnessScreen 

const styles = StyleSheet.create({
    container:{ 
        flex: 1, 
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center', 
    },

});