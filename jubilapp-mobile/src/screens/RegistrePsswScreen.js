import React from 'react';
import {View} from 'react-native';
import Formulari from '../components/Formulari';
import Header from '../components/Header';
import BotoSiguiente from '../components/BotoSiguiente';
import BotoAtras from '../components/BotoAtras';
import { Actions } from 'react-native-router-flux';

export default class RegistrePsswScreen extends React.Component {
    render() {
        const {viewStyle, vista1Style, container} = styles;
        return (
            
            <View style = {viewStyle}>
              <Header headerText = {'JubilApp'}/>
              <View style = {vista1Style}></View>
              <Formulari textExplicatiu = {'Introduce la contraseña (mínimo 8 carácteres)'} textPlaceHolder = {'Contraseña'} tipusTeclat = {'default'}/>
              <Formulari textExplicatiu = {'Repite la misma contraseña'} textPlaceHolder = {'Contraseña repetida'} tipusTeclat = {'default'}/>
              <View style = {vista1Style}></View>
              <View style = {container}>
                <BotoAtras buttonText = {'Atrás'}
                path = {() => Actions.r2()}/>
                <BotoSiguiente buttonText = {'Siguiente'}
                path = {() => Actions.r4()}/>
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