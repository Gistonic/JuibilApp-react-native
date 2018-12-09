import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {APP_COLORS} from "../../constants/colors";
import { EvilIcons, Ionicons } from '@expo/vector-icons';

const ConfigurationButton = (props) => {
    return (
        <View style = {styles.viewStyle}>
            <TouchableOpacity onPress= {props.path}
                              style={[styles.touchableOpacityStyle,{borderColor: props.colorName},{height: props.heightStyle}]}>
                <Text style = {[styles.buttonTextStyle, {fontSize: props.fontsizeStyle}, {width: props.widthStyle}]}>
                    {props.buttonText}
                </Text>
                {props.isEvilType ? <EvilIcons name={props.iconName} size={40} color= {props.colorIconName}
                                               style = {styles.iconStyle}/>:
                    <Ionicons name={props.iconName} size={75} color= {props.colorIconName}
                              style = {styles.iconStyle}/>}
            </TouchableOpacity>
        </View>
    )
};

const styles = {
    viewStyle: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 10,
    },
    buttonTextStyle: {
        paddingLeft: '8%',
        backgroundColor: APP_COLORS.color_neutral,
        color: APP_COLORS.text_color,
    },
    iconStyle: {
        paddingRight: '8%',
        paddingLeft: '2%'
    },
    touchableOpacityStyle: {
        borderWidth:3,
        justifyContent:'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 10
    }
}
export default ConfigurationButton;