import React from 'react';
import { View, TextInput}  from 'react-native';
import Description from './Description';

const Formulari = (props) => {
    const {viewStyle, textInputStyle} = styles;
    const { value, onChangeText } = props
    return (
        <View style = {[viewStyle, {height: props.altura}]}>
            <Description textExpl = {props.textExplicatiu}/>
            <TextInput placeholder = {props.textPlaceHolder} keyboardType= {props.tipusTeclat} underlineColorAndroid='black'
                       secureTextEntry={props.psswCodificada}
                       style = {textInputStyle} value={value} onChangeText={onChangeText}
                       editable = {props.enabled}/>
        </View>
    );

};
const styles ={
    viewStyle: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInputStyle:{
        height: 40,
        fontSize: 30,
        width: 200,
        marginTop: 20,
    }
}
export default Formulari;
//tipus teclat per android:
//default, number-pad, decimal-pad, numeric, email-address, phone-pad
//phone-pad: per posar telefon
//email-address: per posar el correu
//default: pels altres