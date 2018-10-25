import React from 'react';
import {View} from 'react-native';
import Formulari from '../components/Formulari';
import Header from '../components/Header';
import BotoSiguiente from '../components/BotoSiguiente';
import ButtonBack from '../components/ButtonBack';
import Interes from '../components/Interes';
import { Actions } from 'react-native-router-flux';

export default class InteressosScreen extends React.Component {
    render() {
        const {viewStyle, vista1Style, container} = styles;
        return (
            
            <View style = {viewStyle}>
              <View style = {container}>
                <Interes name = 'Arrte' ></Interes>
                <Interes name = 'Deporte' ></Interes>
              </View>
            </View>   
        );
    }
  }
  const styles ={
    viewStyle: {
        backgroundColor: '#FFE5EE',
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