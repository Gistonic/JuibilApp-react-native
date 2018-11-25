import React from 'react';

import {View, Text} from 'react-native';
import {APP_COLORS} from "../constants/colors";
import {EvilIcons} from "@expo/vector-icons";
import {Actions} from "react-native-router-flux";

const ActivitatItem = (props) => {
    return(
        <View style = {styles.viewStyle}>
            <Text style = {styles.textStyle} >{props.nomActivitat}</Text>
            <EvilIcons name='eye' size={30} color= {APP_COLORS.color_button_1}  style = {styles.iconStyle}/>
            <EvilIcons name='pencil' size={30} color= {APP_COLORS.color_next} style = {styles.iconStyle} onPress= { () => {Actions.modificaractivitat()}}/>
            <EvilIcons name='trash' size={30} color= {APP_COLORS.color_header} style = {styles.iconStyle}/>
        </View>
    );
};

const styles = {
    viewStyle: {
        height: 100,
        width: '90%',
        paddingRight: '5%',
        paddingTop: '5%',
        flexDirection: 'row',
        borderColor: APP_COLORS.color_button_1,
        borderWidth: 2,
        marginTop: '5%',
        marginStart:'5%',
        marginEnd:'5%',
        borderRadius: 10
    },

    iconStyle: {
        paddingRight: '8%'
    },
    textStyle: {
        paddingLeft: '8%',
        paddingRight: '8%',
        backgroundColor: APP_COLORS.color_neutral,
        color: APP_COLORS.text_color,
        fontFamily: 'sans-serif-condensed',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    }
}

export default ActivitatItem;

