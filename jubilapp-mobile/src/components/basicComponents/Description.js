import React from 'react';
import { View, TextInput, Text}  from 'react-native';
import {APP_COLORS} from "../../constants/colors"

const Description = (props) => {
    const {textStyle} = styles;
    return (
        <Text style = {textStyle}>{props.textExpl}</Text>
    );

};
const styles ={
    textStyle:{
        color:APP_COLORS.text_color ,
        fontFamily: 'sans-serif-condensed',
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 30,
    }
}
export default Description;