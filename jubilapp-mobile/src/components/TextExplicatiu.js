import React from 'react';
import { View, TextInput, Text}  from 'react-native';

const TextExplicatiu = (props) => {
    const {textStyle} = styles;
    return (
        <Text style = {textStyle}>{props.textExpl}</Text>
    );

};
const styles ={
    textStyle:{
        fontSize:20,
        color: '#A537FD',
        fontFamily: 'sans-serif-condensed',
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center'
    }
}
export default TextExplicatiu;