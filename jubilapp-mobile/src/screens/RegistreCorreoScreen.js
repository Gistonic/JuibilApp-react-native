import React from 'react';
import {View} from 'react-native';
import Formulari from '../components/Formulari';
import Header from '../components/Header';
import BotoSiguiente from '../components/BotoSiguiente';
import BotoAtras from '../components/BotoAtras';
import { Actions } from 'react-native-router-flux';
import {changeRegisterFormProperty} from "../actions";
import connect from "react-redux/es/connect/connect";

class RegistreCorreoScreen extends React.Component {

    render() {
        const {viewStyle, vista1Style, container} = styles;
        const{email, changeFormEmail}=this.props
        return (
            
            <View style = {viewStyle}>
              <Header headerText = {'JubilApp'}/>
              <View style = {vista1Style}></View>
              <Formulari textExplicatiu = {'Introduce correo electrónico'}
                         textPlaceHolder = {'Correo'}
                         tipusTeclat = {'email-address'}
                         value = {email}
                         onChangeText={(text) => changeFormEmail(text)}/>
              <View style = {vista1Style}></View>
              <View style = {container}>
                <BotoAtras buttonText = {'Atrás'}
                path = {() => Actions.r1()}/>
                <BotoSiguiente buttonText = {'Siguiente'}
                path = {() => Actions.r3()}/>
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
        name: state.registerForm.email,
    }
}

const  mapDispatchToProps = (dispatch)=>{
    return {
        changeFormEmail: (value)=>dispatch(changeRegisterFormProperty("email", value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistreCorreoScreen)
