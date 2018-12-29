import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {APP_COLORS} from "../../constants/colors"

const StartButton = (props) => {
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
        textAlign:'center',
        backgroundColor: APP_COLORS.color_button_1,
         color:APP_COLORS.color_neutral,
         borderColor:APP_COLORS.color_button_1,
        borderRadius: 10,
        fontSize: 30,
        height: 60,
        width: 300,
         marginTop: 15,
         fontFamily: 'open-sans-bold',
     }
  }
export default StartButton;