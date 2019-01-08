import React from 'react';
import {KeyboardAvoidingView, View, TextInput, Alert, ScrollView} from 'react-native';
import HeaderIcon from '../../components/basicComponents/HeaderIcon';
import ButtonBack from '../../components/basicComponents/ButtonBack';
import Description from "../../components/basicComponents/Description";
import {APP_COLORS} from "../../constants/colors";
import {pressPopup} from "../../pressPopup";



export default class ActDescriptionScreenBase extends React.Component {
    render() {
        const {viewStyle, container, viewStyle1, textStyle} = styles;
        return (
            <KeyboardAvoidingView behavior="position">
                <View style = {viewStyle}>
                    <HeaderIcon headerText = {this.props.headerName}
                                iconName={ 'home'}
                                colorName={ APP_COLORS.color_neutral}
                                size = {75}
                                textSize = {35}
                                onPress={() => pressPopup('Salir', 'Desea ir al menú principal y perder todos los cambios?')}
                    />
                    <View style = {viewStyle1}>
                        <Description textExpl = "Describe la actividad"/>
                        <TextInput multiline = {true}
                                   placeholder = "Escribe aquí..."
                                   style = {textStyle}
                                   maxLength = {180}
                                   value = {this.props.description}
                                   onChangeText={(text) => this.props.changeFormDescription(text)}
                        />
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
        backgroundColor: APP_COLORS.color_neutral,
        width: '100%',
        height: '100%',
    },
    viewStyle1: {
        flex:1,
        justifyContent: 'space-between',
        paddingTop: '10%',
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: '5%',
        paddingLeft: '5%',

    },
    textStyle: {
        color: 'black',
        fontFamily: 'open-sans-bold',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        height: 300,
        paddingBottom: '10%',
        paddingRight: '5%',
        paddingLeft: '5%',
        borderWidth: 1,
        borderColor: APP_COLORS.color_button_1
    }
}