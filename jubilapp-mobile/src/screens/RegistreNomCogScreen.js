import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux'
import Formulari from '../components/Formulari';
import Header from '../components/Header';
import NextButton from '../components/NextButton';
import BotoAtras from '../components/BotoAtras';
import { Actions } from 'react-native-router-flux';
import {changeRegisterFormProperty} from "../actions";

class RegistreNomCogScreen extends React.Component {
    render() {
        const {viewStyle, vista1Style, container} = styles;
        const{name, surname, changeFormName, changeFormSurname}=this.props
        console.log("Render: " + name + " " + surname);
        return (
            <View style = {viewStyle}>
              <Header headerText = {'JubilApp'}/>
              <View style = {vista1Style}></View>
              <Formulari textExplicatiu = {'Introduce nombre y apellidos'}
                         textPlaceHolder = {'Nombre'}
                         tipusTeclat = {'default'}
                         value = {name}
                         onChangeText={(text) => changeFormName(text)}/>
              <Formulari textPlaceHolder = {'Apellidos'}
                         tipusTeclat = {'default'}
                         value = {surname}
                         onChangeText={(text) => changeFormSurname(text)}/>
              <View style = {container}>
                <BotoAtras buttonText = {'Atrás'}
                path = {() => Actions.login()}/>
                <NextButton buttonText = {'Siguiente'}
                            path = {() => Actions.r2()}/>
              </View>
            </View>   
        );
    }
}

const styles ={
    viewStyle: {
        backgroundColor: '#FFF',
        width: '100%', 
        height: '100%',
        alignContent: 'center'
    },
    vista1Style: {
        width: '100%',
        height: '15%'
    },
    container: {
        flex:1,
        flexDirection: 'row'
    }
}
const mapStateToProps = (state) => {
    return {
        name: state.registerForm.name,
        surname: state.registerForm.surname
    }
}

const  mapDispatchToProps = (dispatch)=>{
    return {
        changeFormName: (value)=>dispatch(changeRegisterFormProperty("name", value)),
        changeFormSurname: (value)=>dispatch(changeRegisterFormProperty("surname", value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistreNomCogScreen)
