import React from 'react';
import { View, TextInput, Text}  from 'react-native';
import Desctription from './Desctription';

const Formulari = (props) => {
    const {viewStyle, textStyle, textInputStyle} = styles;
    const { value, onChangeText } = props
    return (
        <View style = {viewStyle}>
            <Desctription textExpl = {props.textExplicatiu}/>
            <TextInput placeholder = {props.textPlaceHolder} keyboardType= {props.tipusTeclat}
            style = {textInputStyle} value={value} onChangeText={onChangeText}/>
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
        color: '#A537FD',
        fontFamily: 'sans-serif-condensed',
        fontSize: 55,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    textInputStyle:{
        height: 40,
        fontSize: 30,
        width: 200,
        marginTop: 20
    }
}
export default Formulari;
//tipus teclat per android:
//default, number-pad, decimal-pad, numeric, email-address, phone-pad
//phone-pad: per posar telefon
//email-address: per posar el correu
//default: pels altres