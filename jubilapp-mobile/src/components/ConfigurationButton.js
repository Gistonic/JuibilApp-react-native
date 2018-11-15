import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {APP_COLORS} from "../constants/colors";
import { EvilIcons } from '@expo/vector-icons';

const ConfigurationButton = (props) => {
    return (
        <View style = {styles.viewStyle}>
            <TouchableOpacity onPress= {props.path}
                              style={{
                                  borderWidth:3,
                                  borderColor: props.colorName,
                                  justifyContent:'space-between',
                                  alignItems: 'center',
                                  flexDirection: 'row',
                                  height: '75%',
                                  borderRadius: 10,
                              }}>
                <Text style = {styles.buttonTextStyle}>
                    {props.buttonText}
                </Text>
                <EvilIcons name={props.iconName} size={40} color= {props.colorName}
                                               style = {styles.iconStyle}/>
            </TouchableOpacity>
        </View>
    )
};

const styles = {
    viewStyle: {
        flex: 1,
        alignItems: 'center',
        paddingTop: '5%',
    },
    buttonTextStyle: {
        paddingLeft: '8%',
        backgroundColor: APP_COLORS.color_neutral,
        color: APP_COLORS.text_color,
        fontSize: 15,
        width: '60%',
    },
    iconStyle: {
        paddingRight: '8%',
        paddingLeft: '2%'
    }
}
export default ConfigurationButton;