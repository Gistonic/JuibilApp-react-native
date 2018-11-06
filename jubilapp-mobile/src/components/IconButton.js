import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {APP_COLORS} from "../constants/colors";
import { Ionicons } from '@expo/vector-icons';

const IconButton = (props) => {
    return (
        <View style = {styles.viewStyle}>
            <TouchableOpacity onPress= {props.path}
                              style={styles.touchableStyle}>
                <Text style = {styles.buttonTextStyle}>
                    {props.buttonText}
                </Text>
                <Ionicons name={props.iconName} size={75} color= {props.colorName}
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
    touchableStyle: {
        borderWidth:3,
        borderColor: APP_COLORS.color_header,
        justifyContent:'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        height: 150,
        borderRadius: 10
    },
    buttonTextStyle: {
        paddingLeft: '8%',
        backgroundColor: APP_COLORS.color_neutral,
        color: APP_COLORS.text_color,
        fontSize: 27,
        width: 200,
    },
    iconStyle: {
        paddingRight: '8%',
        paddingLeft: '2%'
    }
}
export default IconButton;