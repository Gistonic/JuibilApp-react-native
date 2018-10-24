import React from 'react';
import {View} from 'react-native';
import Formulari from '../components/Formulari';
import Logo from '../components/Logo';
import Header from '../components/Header';
import BotoRegLog from '../components/BotoRegLog';
import TextExplicatiu from '../components/TextExplicatiu';
import { Font } from 'expo';
import { Actions } from 'react-native-router-flux';

export default class RegLogScreen extends React.Component {
    render() {
        const {viewStyle, vista1Style} = styles;
        return (
            <View style = {viewStyle}>
              <Header headerText = {'JubilApp'}/>
              <Formulari textExplicatiu = {'Introduce correo y contraseña'} textPlaceHolder = {'correo'} tipusTeclat = {'email-address'}/>
              <Formulari textPlaceHolder = {'contraseña'} tipusTeclat = {'default'}/>
              <BotoRegLog buttonText = {'Entrar'}/>
              <TextExplicatiu textExpl = {'No tienes cuenta? Regístrate!'}/>
              <View style = {vista1Style}></View>
              <BotoRegLog buttonText = {'Regístrate'}
                          path = {() => Actions.r1()}/>
            </View>   
        );
    }
  }
  const styles ={
    viewStyle: {
        backgroundColor: '#FFF',
        width: '100%', 
        height: '100%'
    },
    vista1Style: {
      width: '100%',
      height: '5%'
    }
  }