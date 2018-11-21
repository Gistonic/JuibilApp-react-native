import React from 'react';
import {KeyboardAvoidingView, View, TextInput} from 'react-native';
import Header from '../../components/basicComponents/Header';
import NextButton from '../../components/basicComponents/NextButton';
import ButtonBack from '../../components/basicComponents/ButtonBack';
import { Actions } from 'react-native-router-flux';
import Description from "../../components/basicComponents/Description";
import {APP_COLORS} from "../../constants/colors";


export default class ActDescriptionScreenBase extends React.Component {
    render() {
        const {viewStyle, container, viewStyle1, textStyle} = styles;
        return (
            <KeyboardAvoidingView behavior = 'position'>
                <View style = {viewStyle}>
                    <Header headerText = {'JubilApp'}/>
                    <View style = {viewStyle1}>
                        <Description textExpl = "Describe la actividad"/>
                        <TextInput multiline = {true}
                                   style = {textStyle}
                                   maxLength = {200}
                                   value = {this.props.description}
                                   onChangeText={(text) => this.props.changeFormDescription(text)}
                        />
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
    container: {
        flexDirection: 'row',
        paddingBottom: '7%',
        justifyContent: 'space-between',
        paddingRight: '5%',
        paddingLeft: '5%',

    },
    textStyle: {
        color: 'black',
        fontFamily: 'sans-serif-condensed',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        height: 330,
        paddingBottom: '10%',
        paddingRight: '5%',
        paddingLeft: '5%',
        borderWidth: 1,
        borderColor: APP_COLORS.color_button_1
    }
}