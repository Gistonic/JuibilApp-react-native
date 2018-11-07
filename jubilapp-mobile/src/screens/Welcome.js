import React from 'react';
import {View} from 'react-native';
import Description from '../components/Description';
import NextButton from '../components/NextButton';
import {APP_COLORS} from "../constants/colors";

import { Actions } from 'react-native-router-flux';

export default class Welcome extends React.Component {
    render() {
        const {viewStyle, viewBig} = styles;
        return (
            <View style = {viewBig}>
                <View style = {viewStyle}>
                <Description textExpl = {'¡Bienvenido a JubilApp!'}/>
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
        backgroundColor: APP_COLORS.color_neutral,
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
        backgroundColor: APP_COLORS.color_neutral,
        width: '100%', 
        height: '100%',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
}