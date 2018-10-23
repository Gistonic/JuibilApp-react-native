import React from 'react';
import { View, TextInput, Text}  from 'react-native';
import TextExplicatiu from './TextExplicatiu';

const Formulari = (props) => {
    const {viewStyle, textStyle, textInputStyle} = styles;
    return (
        <View style = {viewStyle}>
            <TextExplicatiu textExpl = {props.textExplicatiu}/>
            <TextInput placeholder = {props.textPlaceHolder} keyboardType= {props.tipusTeclat}
            style = {textInputStyle}/>
        </View>
    );

};
const styles ={
    viewStyle: {
        height: 120,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle:{
        fontSize:20,
        color: '#A537FD',
        fontFamily: 'sans-serif-condensed',
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    textInputStyle:{
        height: 40, 
        width: 200
    }
}
export default Formulari;
//tipus teclat per android:
//default, number-pad, decimal-pad, numeric, email-address, phone-pad
//phone-pad: per posar telefon
//email-address: per posar el correu
//default: pels altres