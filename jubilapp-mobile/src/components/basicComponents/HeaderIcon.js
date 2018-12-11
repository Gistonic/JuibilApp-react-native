import React from 'react';
import {Text, View, TouchableOpacity, Alert } from 'react-native';
import {APP_COLORS} from "../../constants/colors";
import {Actions} from "react-native-router-flux";
import { FontAwesome } from '@expo/vector-icons';


const HeaderIcon = (props) => {

    const pressPopup = () =>{
        Alert.alert(
            'Salir de Crear Actividad',
            'Desea cancelar la creación de esta actividad y perder todos los cambios?',
            [
                {text: 'No'},
                {text: 'Sí', onPress: () => Actions.home()},
            ],
            { cancelable: false }
        );    
    }
    
    const {textStyle,viewStyle} = styles;
    return(
        <View style = {viewStyle}>
            <TouchableOpacity onPress= {props.path}>
                <FontAwesome name={props.iconName} size={props.size} color= {props.colorName}
                style={ styles.iconStyle}/>
            </TouchableOpacity>
            <Text style = {[styles.textStyle, {fontSize: props.textSize}]}> {props.headerText} </Text>
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
        fontFamily: 'sans-serif-condensed',
        fontWeight: 'bold',
        paddingRight: '33%',
    },
    iconStyle: {
        paddingLeft: '2%'
    }
}

export default HeaderIcon;