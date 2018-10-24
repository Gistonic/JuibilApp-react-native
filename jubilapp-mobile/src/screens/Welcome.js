import React from 'react';
import {View} from 'react-native';
import TextExplicatiu from '../components/TextExplicatiu';
import BotoSiguiente from '../components/BotoSiguiente';

import { Actions } from 'react-native-router-flux';

export default class Welcome extends React.Component {
    render() {
        const {viewStyle, viewBig} = styles;
        return (
            <View style = {viewBig}>
                <View style = {viewStyle}>
                <TextExplicatiu textExpl = {'¡Bienvenido a JubilApp!'}/>
                </View>   
                <View style = {viewStyle}>
                    <BotoSiguiente buttonText = {'Continuar'}
                    path = {() => Actions.km()}/>
                </View> 
            </View>
        );
    }
  }
  const styles ={
    viewStyle: {
        backgroundColor: '#FFE5EE',
        width: '100%', 
        height: '50%',
        padding: 50,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    viewBig: {
        flexDirection: 'column',
        flex: 2,
        backgroundColor: '#FFE5EE',
        width: '100%', 
        height: '100%',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
}