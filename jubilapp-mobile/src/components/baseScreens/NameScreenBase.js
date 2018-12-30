import React from 'react';
import {View, KeyboardAvoidingView,Alert} from 'react-native';
import Formulari from '../basicComponents/Formulari';
import HeaderIcon from '../basicComponents/HeaderIcon';
import ButtonBack from '../basicComponents/ButtonBack';
import {APP_COLORS} from "../../constants/colors";
import { Actions } from 'react-native-router-flux';
import {pressPopup} from "../../pressPopup";
import Description from "../basicComponents/Description";

export default class NameScreenBase extends React.Component {
    render() {
        const {viewStyle, vista1Style, container, formStyle, viewStyle1} = styles;
        return (
            <KeyboardAvoidingView behavior = 'position'>
                <View style = {viewStyle}>
                <HeaderIcon headerText = {this.props.headerName}
                                iconName={ 'home'}
                                colorName={ APP_COLORS.color_neutral}
                                size = {75}
                                textSize = {35}
                                path={() => pressPopup('Salir', 'Desea ir al menú principal y perder todos los cambios?')}
                />
                    <View style = {viewStyle1}>
                            <View style = {formStyle}>
                                <Formulari textExplicatiu = {`Introduce el nombre de la${"\n"}actividad`}
                                           altura = {150}
                                           textPlaceHolder = {'Nombre'}
                                           tipusTeclat = {'default'}
                                           value = {this.props.name}
                                           onChangeText={(text) => this.props.changeFormName(text)}
                                           enabled = {this.props.enabledName}
                                />
                            </View>
                        <View style = {container}>
                            <ButtonBack buttonText = {'Atrás'}
                                        path = {this.props.previousScreen}
                                        colorBoto = {APP_COLORS.color_back}/>
                            <ButtonBack buttonText = {this.props.buttonText}
                                        path = {this.props.nextScreen}
                                        colorBoto = {APP_COLORS.color_next}/>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles ={
    viewStyle: {
        backgroundColor: '#FFF',
        width: '100%',
        height: '100%',
    },
    viewStyle1: {
        flex:1,
        justifyContent: 'space-between'
    },
    vista1Style: {
        flex:1,
        paddingTop: '15%',
    },
    container: {
        flexDirection: 'row',
        paddingBottom: '7%',
        justifyContent: 'space-between',
        paddingRight: '5%',
        paddingLeft: '5%',

    },
    formStyle: {
        marginTop: '40%',
        paddingLeft: '10%',
        paddingRight: '10%',
    }
}

