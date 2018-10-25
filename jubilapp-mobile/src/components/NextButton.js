import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native'
import {APP_COLORS} from "../constants/colors"

const NextButton = (props) => {
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
        borderColor: APP_COLORS.color_back,
        color: APP_COLORS.color_neutral,
        borderRadius: 10,
        fontSize: 30,
         height: 60,
         width: 200,
     }
  }
export default NextButton;