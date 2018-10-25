import React from 'react';
import {View} from 'react-native';
import Formulari from '../components/Formulari';
import Logo from '../components/Logo';
import Header from '../components/Header';
import StartButton from '../components/StartButton';
import Desctription from '../components/Desctription';
import { Font } from 'expo';
import { Actions } from 'react-native-router-flux';
import {APP_COLORS} from "../constants/colors"

export default class LoginScreen extends React.Component {
    render() {
        const {viewStyle, viewStyle1, viewStyle2} = styles;
        return (
            <View style = {viewStyle}>
              <Header headerText = {'JubilApp'}/>
                <View style = {viewStyle1}>
                  <Formulari textExplicatiu = {'Introduce correo y contraseña'} textPlaceHolder = {'correo'} tipusTeclat = {'email-address'}/>
                  <Formulari textPlaceHolder = {'contraseña'} tipusTeclat = {'default'}/>
                </View>
                  <StartButton buttonText = {'Entrar'}/>
                  <Desctription textExpl = {'No tienes cuenta?'}/>
                  <StartButton buttonText = {'Regístrate!'}
                               path = {() => Actions.r1()}/>
            </View>
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
            paddingTop: '15%'
        }

  }