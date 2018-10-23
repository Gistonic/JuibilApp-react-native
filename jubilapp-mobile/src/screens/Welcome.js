import React from 'react';
import {View} from 'react-native';
import TextExplicatiu from '../components/TextExplicatiu';

export default class Welcome extends React.Component {
    render() {
        const {viewStyle} = styles;
        return (
            <View style = {viewStyle}>
              <TextExplicatiu textExpl = {'¡Bienvenido a JubilApp!'}/>
            </View>   
        );
    }
  }
  const styles ={
    viewStyle: {
        backgroundColor: '#FFE5EE',
        width: '100%', 
        height: '100%',
        justifyContent: 'center'
    }
}