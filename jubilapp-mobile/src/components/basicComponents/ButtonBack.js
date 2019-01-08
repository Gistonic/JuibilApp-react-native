import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {APP_COLORS} from "../../constants/colors";

const ButtonBack = (props) => {
    return (
        <View style = {styles.container}>
           <TouchableOpacity onPress= {props.path} style = {styles.touchableStyle}>
                <View style = {styles.btnContainer}>
                    <Text style = {[styles.button,{backgroundColor:props.colorBoto},{borderColor:props.colorBoto}]}>
                        {props.buttonText}
                    </Text>
                </View>

           </TouchableOpacity>

        </View>
     )
  };
  
    const styles = {
        container: {
            flex: 1,
            alignItems: 'center',
        },
        touchableStyle:{
            flexDirection: 'row'
        },
        btnContainer: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'stretch',
            alignSelf: 'stretch',
            borderRadius: 10,
        },
        button: {
            padding: 8,
            backgroundColor: APP_COLORS.color_back,
            borderColor: APP_COLORS.color_back,
            color: APP_COLORS.color_neutral,
            borderRadius: 10,
            fontSize: 25,
             height: 55,
             width: 125,
            textAlign:'center',
            fontFamily: 'open-sans-bold',
            overflow: "hidden",
        }
    }
export default ButtonBack;

/*<Text style = {styles.button}>
    {props.buttonText}
</Text>*/
