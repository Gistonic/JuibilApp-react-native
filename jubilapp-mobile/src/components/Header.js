import React from 'react';
import {Text, View } from 'react-native';

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
        backgroundColor:'#A537FD',
        justifyContent: 'center',
        alignItems: 'center', //horizontal
        height: 100,
        paddingTop: 40
     

    },
    textStyle:{
        color: '#FFE5EE',
        fontFamily: 'sans-serif-condensed',
        fontSize: 35,
        fontWeight: 'bold'
    }
}

export default Header;