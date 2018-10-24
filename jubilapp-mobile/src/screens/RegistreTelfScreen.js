import React from 'react';
import {View} from 'react-native';
import Formulari from '../components/Formulari';
import Header from '../components/Header';
import BotoSiguiente from '../components/BotoSiguiente';
import BotoAtras from '../components/BotoAtras';
import { Actions } from 'react-native-router-flux';

export default class RegistreTelfScreen extends React.Component {
    render() {
        const {viewStyle, vista1Style, container} = styles;
        return (
            
            <View style = {viewStyle}>
              <Header headerText = {'JubilApp'}/>
              <View style = {vista1Style}></View>
              <Formulari textExplicatiu = {'Introduce tu número de teléfono (es opcional)'} textPlaceHolder = {'Teléfono'} tipusTeclat = {'phone-pad'}/>
              <View style = {vista1Style}></View>
              <View style = {container}>
                <BotoAtras buttonText = {'Atrás'}
                path = {() => Actions.r3()}/>
                <BotoSiguiente buttonText = {'Siguiente'}
                path = {() => Actions.welcome()}/>
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