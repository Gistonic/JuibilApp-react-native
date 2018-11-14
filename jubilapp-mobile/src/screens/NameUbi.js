import React from 'react';
import {View, Text, KeyboardAvoidingView} from 'react-native';
import Formulari from '../components/Formulari';
import Header from '../components/Header';
import NextButton from '../components/NextButton';
import ButtonBack from '../components/ButtonBack';
import { Actions } from 'react-native-router-flux';
import {changeCreateActivityFormProperty} from "../actions";
import connect from "react-redux/es/connect/connect";

class NameUbi extends React.Component {
    render() {
        const {viewStyle, vista1Style, container, formStyle, viewStyle1} = styles;
        const{name, changeFormName, location, changeFormLocation}=this.props
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
                                           value = {name}
                                           onChangeText={(text) => changeFormName(text)}
                                />
                            </View>
                            <Formulari textExplicatiu = {'Introduce la ubicación'}
                                        textPlaceHolder = {'Ubicación'}
                                       tipusTeclat = {'default'}
                                       value = {location}
                                       onChangeText={(text) => changeFormLocation(text)}/>
                        </View>
                        <View style = {container}>
                            <ButtonBack buttonText = {'Atrás'}
                                        path = {() => Actions.home()}/>
                            <NextButton buttonText = {'Siguiente'}
                                        path = {() => Actions.iniDate()}/>
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
const mapStateToProps = (state) => {
    return {
        name: state.createActivityForm.name,
        location: state.createActivityForm.location
    }
}

const  mapDispatchToProps = (dispatch)=>{
    return {
        changeFormName: (value)=>dispatch(changeCreateActivityFormProperty("name", value)),
        changeFormLocation: (value)=>dispatch(changeCreateActivityFormProperty("loaction", value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NameUbi);
