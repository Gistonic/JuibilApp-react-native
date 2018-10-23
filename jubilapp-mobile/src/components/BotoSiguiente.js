import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native'

const BotoSiguiente = (props) => {
    return (
        <View style = {styles.container}>
           <TouchableOpacity onPress= {props.path}>
              <Text style = {styles.button}>
              {props.buttonText}
              </Text>
           </TouchableOpacity>
        </View>
     )
  };
  
  const styles = {
     container: {
        flex: 1,
        alignItems: 'center',
     },
     button: {
        borderWidth: 3,
        padding: 8,
        borderColor: '#864EE8',
        color: '#864EE8',
        borderRadius: 30,
        fontSize: 30
     }
  }
export default BotoSiguiente;