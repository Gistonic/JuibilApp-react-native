import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

const BotoRegLog = (props) => {
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
        borderWidth: 1,
        padding: 8,
        backgroundColor: '#68CE3B',
        borderColor: '#68CE3B',
        color: 'white',
        borderRadius: 30,
        fontSize: 30
     }
  }
export default BotoRegLog;