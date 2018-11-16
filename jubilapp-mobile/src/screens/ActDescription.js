import React from 'react';
import {KeyboardAvoidingView, View, TextInput, ScrollView } from 'react-native';
import Formulari from '../components/Formulari';
import Header from '../components/Header';
import NextButton from '../components/NextButton';
import ButtonBack from '../components/ButtonBack';
import { Actions } from 'react-native-router-flux';
import Description from "../components/Description";
import {APP_COLORS} from "../constants/colors";
import {changeCreateActivityFormProperty} from "../actions";
import connect from "react-redux/es/connect/connect";


class ActDescription extends React.Component {
    render() {
        const {viewStyle, vista1Style, container, formStyle, viewStyle1, textStyle} = styles;
        const { changeFormDescription,description } = this.props;
        return (
            <KeyboardAvoidingView behavior = 'position'>
                <View style = {viewStyle}>
                    <Header headerText = {'JubilApp'}/>
                    <View style = {viewStyle1}>
                        <Description textExpl = "Describe la actividad"/>
                        <TextInput multiline = {true}
                                   style = {textStyle}
                                   maxLength = {200}
                                   value = {description}
                                   onChangeText={(text) => changeFormDescription(text)}
                                    />
                        <View style = {container}>
                            <ButtonBack buttonText = {'Atrás'}
                                        path = {() => Actions.finHour()}/>
                            <NextButton buttonText = {'Siguiente'}
                                        path = {() => Actions.seltype()}/>
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
        paddingTop: '45%',
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
        paddingRight: '10%'
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

const mapStateToProps = (state) => {
    return {
        description: state.createActivityForm.description,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeFormDescription: (value) => dispatch(changeCreateActivityFormProperty("description", value)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActDescription);
