import React from 'react';
import {View, Button} from 'react-native';
import Logo from '../components/Logo';

import { Actions } from 'react-native-router-flux';


export default class Inici extends React.Component {
    componentDidMount(){
        this.timeoutHandle = setTimeout(()=>{
            Actions.login()
        }, 20);
    }
    render() {
        const {viewStyle} = styles;
        return (
            <View style = {viewStyle}>
              <Logo/>
            </View>   
        );
    }
  };

  const styles ={
    viewStyle: {
        backgroundColor: '#864EE8',
        width: '100%', 
        height: '100%',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    }
}