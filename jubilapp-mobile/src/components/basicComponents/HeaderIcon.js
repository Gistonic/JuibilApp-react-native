import React from 'react';
import {Text, View, TouchableOpacity, Alert } from 'react-native';
import {APP_COLORS} from "../../constants/colors";
import {Actions} from "react-native-router-flux";
import { FontAwesome } from '@expo/vector-icons';


const HeaderIcon = (props) => {
    
    const {textStyle,viewStyle} = styles;
    return(
        <View style = {viewStyle}>
            <TouchableOpacity onPress= {props.path}>
                <FontAwesome name={props.iconName} size={props.size} color= {props.colorName}
                style={ styles.iconStyle}/>
            </TouchableOpacity>
            <Text style = {[styles.textStyle, {fontSize: props.textSize}]}> {props.headerText} </Text>
            {props.iconSecond ? <TouchableOpacity onPress= {props.path2}>
                <FontAwesome name={props.iconName2} size={props.size2} color= {props.colorName}
                style={ styles.icon2Style}/>
            </TouchableOpacity>:null}
        </View>
    );
};
const styles ={
    viewStyle:{
        backgroundColor:APP_COLORS.color_header,
        alignItems: 'center', //horizontal
        height: 100,
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',


    },
    textStyle:{
        color: APP_COLORS.color_neutral,
        fontFamily: 'open-sans-bold',
        fontWeight: 'bold',
        alignItems: 'flex-start'
    },
    iconStyle: {
        paddingLeft: '2%',
    },
    icon2Style:{
        paddingRight: '2%'
    }
}

export default HeaderIcon;