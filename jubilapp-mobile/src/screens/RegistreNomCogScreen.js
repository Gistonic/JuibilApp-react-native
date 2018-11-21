import React from 'react';
import {View, Text, KeyboardAvoidingView} from 'react-native';
import {connect} from 'react-redux'
import Formulari from '../components/basicComponents/Formulari';
import Header from '../components/basicComponents/Header';
import NextButton from '../components/basicComponents/NextButton';
import ButtonBack from '../components/basicComponents/ButtonBack';
import { Actions } from 'react-native-router-flux';
import {changeRegisterFormProperty} from "../actions";

class RegistreNomCogScreen extends React.Component {
    render() {
        const {viewStyle, vista1Style, container, formStyle, viewStyle1} = styles;
        const{name, surname, changeFormName, changeFormSurname}=this.props
        console.log("Render: " + name + " " + surname);
        return (
            <KeyboardAvoidingView behavior = 'position'>
            <View style = {viewStyle}>
              <Header headerText = {'JubilApp'}/>
                <View style = {viewStyle1}>
                    <View style = {vista1Style}>
                  <View style = {formStyle}>
                      <Formulari textExplicatiu = {'Introduce nombre y apellidos'}
                                 textPlaceHolder = {'Nombre'}
                                 tipusTeclat = {'default'}
                                 value = {name}
                                 onChangeText={(text) => changeFormName(text)}
                      />
                  </View>
                  <Formulari textPlaceHolder = {'Apellidos'}
                             tipusTeclat = {'default'}
                             value = {surname}
                             onChangeText={(text) => changeFormSurname(text)}/>
                    </View>
                  <View style = {container}>
                    <ButtonBack buttonText = {'Atrás'}
                    path = {() => Actions.login()}/>
                    <NextButton buttonText = {'Siguiente'}
                                path = {() => Actions.r2()}/>
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
        paddingTop: '35%',
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
