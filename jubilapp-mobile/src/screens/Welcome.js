import React from 'react';
import {View} from 'react-native';
import Desctription from '../components/Desctription';
import NextButton from '../components/NextButton';

import { Actions } from 'react-native-router-flux';

export default class Welcome extends React.Component {
    render() {
        const {viewStyle, viewBig} = styles;
        return (
            <View style = {viewBig}>
                <View style = {viewStyle}>
                <Desctription textExpl = {'¡Bienvenido a JubilApp!'}/>
                </View>   
                <View style = {viewStyle}>
                    <NextButton buttonText = {'Continuar'}
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