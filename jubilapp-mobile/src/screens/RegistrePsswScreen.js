import React from 'react';
import {View} from 'react-native';
import Formulari from '../components/Formulari';
import Header from '../components/Header';
import BotoSiguiente from '../components/BotoSiguiente';
import BotoAtras from '../components/BotoAtras';
import { Actions } from 'react-native-router-flux';
import {changeRegisterFormProperty} from "../actions";
import connect from "react-redux/es/connect/connect";

class RegistrePsswScreen extends React.Component {
    constructor(props) {
        super(props)

        this.nextScreen = this.nextScreen.bind(this)
    }
    nextScreen() {
        if (this.props.password === this.props.confirmPassword)
            Actions.r4()
        else {
            //TODO: Missatge d'error
        }
    }
    render() {
        const {viewStyle, vista1Style, container} = styles;
        const{password, confirmPassword, changePassword, changeConfirmPassword}=this.props
        return (
            
            <View style = {viewStyle}>
              <Header headerText = {'JubilApp'}/>
              <View style = {vista1Style}></View>
              <Formulari textExplicatiu = {'Introduce la contraseña (mínimo 8 carácteres)'}
                         textPlaceHolder = {'Contraseña'}
                         tipusTeclat = {'default'}
                         value = {password}
                         onChangeText={(text) => changePassword(text)}/>
              <Formulari textExplicatiu = {'Repite la misma contraseña'}
                         textPlaceHolder = {'Contraseña repetida'}
                         tipusTeclat = {'default'}
                         value = {confirmPassword}
                         onChangeText={(text) => changeConfirmPassword(text)}/>
              <View style = {vista1Style}></View>
              <View style = {container}>
                <BotoAtras buttonText = {'Atrás'}
                path = {() => Actions.r2()}/>
                <BotoSiguiente buttonText = {'Siguiente'}
                path = {() => this.nextScreen()}/>
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
        height: '10%'
    },
    container: {
        flex:1,
        flexDirection: 'row'
    }
  }
const mapStateToProps = (state) => {
    return {
        password: state.registerForm.password,
        confirmPassword: state.registerForm.confirmPassword
    }
}

const  mapDispatchToProps = (dispatch)=>{
    return {
        changePassword: (value)=>dispatch(changeRegisterFormProperty("password", value)),
        changeConfirmPassword: (value)=>dispatch(changeRegisterFormProperty("conformPassword", value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrePsswScreen)
