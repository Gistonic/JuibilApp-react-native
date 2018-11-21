import React from 'react';
import {View, Button} from 'react-native';
import Logo from '../components/basicComponents/Logo';
import {APP_COLORS} from "../constants/colors";

import { Actions } from 'react-native-router-flux';


export default class Inici extends React.Component {
    componentDidMount(){
        this.timeoutHandle = setTimeout(()=>{
            Actions.login()
        }, 2000);
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
        backgroundColor: APP_COLORS.color_header,
        width: '100%', 
        height: '100%',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    }
}