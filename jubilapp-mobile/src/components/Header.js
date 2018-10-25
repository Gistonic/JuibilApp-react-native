import React from 'react';
import {Text, View } from 'react-native';
import {APP_COLORS} from "../constants/colors"

const Header = (props) => {
    const {textStyle,viewStyle} = styles;
    return(
        <View style = {viewStyle}>
            <Text style = {textStyle}> {props.headerText} </Text>
        </View>
    );
};
const styles ={
    viewStyle:{
        backgroundColor:APP_COLORS.color_header,
        justifyContent: 'center',
        alignItems: 'center', //horizontal
        height: 100,
        paddingTop: 20
     

    },
    textStyle:{
        color: APP_COLORS.color_back,
        fontFamily: 'sans-serif-condensed',
        fontSize: 35,
        fontWeight: 'bold'
    }
}

export default Header;