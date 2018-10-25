import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {APP_COLORS} from "../constants/colors";

const ButtonBack = (props) => {
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
            backgroundColor: APP_COLORS.color_back,
            borderColor: APP_COLORS.color_back,
            color: APP_COLORS.color_neutral,
            borderRadius: 10,
            fontSize: 25,
             height: 55,
             width: 125,
            textAlign:'center'
        }
    }
export default ButtonBack;