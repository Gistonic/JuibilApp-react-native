import React from 'react';
import {View, KeyboardAvoidingView} from 'react-native';
import Formulari from '../basicComponents/Formulari';
import Header from '../basicComponents/Header';
import NextButton from '../basicComponents/NextButton';
import ButtonBack from '../basicComponents/ButtonBack';

export default class NameUbiScreenBase extends React.Component {
    render() {
        const {viewStyle, vista1Style, container, formStyle, viewStyle1} = styles;
        return (
            <KeyboardAvoidingView behavior = 'position'>
                <View style = {viewStyle}>
                    <Header headerText = {'Crear Actividad'}/>
                    <View style = {viewStyle1}>
                        <View style = {vista1Style}>
                            <View style = {formStyle}>
                                <Formulari textExplicatiu = {'Introduce el nombre de la actividad'}
                                           textPlaceHolder = {'Nombre'}
                                           tipusTeclat = {'default'}
                                           value = {this.props.name}
                                           onChangeText={(text) => this.props.changeFormName(text)}
                                           enabled = {this.props.enabledName}
                                />
                            </View>
                            <Formulari textExplicatiu = {'Introduce la ubicación'}
                                       textPlaceHolder = {'Ubicación'}
                                       tipusTeclat = {'default'}
                                       value = {this.props.location}
                                       onChangeText={(text) => this.props.changeFormLocation(text)}
                                       enabled = {this.props.enabledLocation}/>
                        </View>
                        <View style = {container}>
                            <ButtonBack buttonText = {'Atrás'}
                                        path = {this.props.previousScreen}/>
                            <NextButton buttonText = {this.props.buttonNext}
                                        path = {this.props.nextScreen}/>
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
        paddingLeft: '10%',
        paddingRight: '10%',
        paddingBottom: '10%',
        paddingTop: '10%',
    }
}

