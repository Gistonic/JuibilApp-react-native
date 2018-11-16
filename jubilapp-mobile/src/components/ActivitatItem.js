import React from 'react';

import {View, Text} from 'react-native';
import {APP_COLORS} from "../constants/colors";
import {EvilIcons} from "@expo/vector-icons";

const ActivitatItem = (props) => {
    return(
        <View style = {styles.viewStyle}>
            <Text style = {styles.textStyle} >{props.nomActivitat}</Text>
            <EvilIcons name='eye' size={20} color= {APP_COLORS.color_button_1}  style = {styles.iconStyle}/>
            <EvilIcons name='pencil' size={20} color= {APP_COLORS.color_next} style = {styles.iconStyle}/>
            <EvilIcons name='trash' size={20} color= {APP_COLORS.color_header} style = {styles.iconStyle}/>
        </View>
    );
};

const styles = {
    viewStyle: {
        height: '10%',
        width: '100%',
        paddingLeft: '5%',
        paddingRight: '5%',
        flexDirection: 'row',
        borderColor: APP_COLORS.color_button_1
    },

    iconStyle: {
        paddingRight: '8%',
        paddingLeft: '2%'
    },
    textStyle: {
        paddingLeft: '8%',
        backgroundColor: APP_COLORS.color_neutral,
        color: APP_COLORS.text_color,
        fontFamily: 'sans-serif-condensed',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center'
    }
}

export default ActivitatItem;

