import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Header from '../components/Header';
import Desctription from '../components/Desctription';
import BotoSiguiente from '../components/BotoSiguiente';
import BotoAtras from '../components/BotoAtras';
import Numbers from '../components/Numbers';

import {Actions} from 'react-native-router-flux';

export default class KilometreScreen extends React.Component {
    constructor(props){
        super(props);
          this.state={
            button_1 : false,
            button_2 : false,
            button_3 : false,
            button_4 : false,
            button_5 : false,
            button_6 : false,
        }
    }
    render() {
        const {viewStyle, vista1Style, container, container2} = styles;
        return (
            <View style = {viewStyle}>
              <Header headerText = {'JubilApp'}/>
              <Desctription textExpl= {'Escoge el radio de kilómetros'}/>
              <View style = {{flex: 6, flexDirection:'column'}}>
                  <View style = {container2}>
                    <TouchableOpacity style = {styles.tStyle}
                    onPress={() => {
                        this.setState({
                             button_1: !this.state.button_1,
                             button_2: false,
                             button_3: false,
                             button_4: false,
                             button_5: false,
                             button_6: false
                               });
                     }}
                    >
                        <Numbers buttonText = '5'
                        backcolor = {this.state.button_1 ? '#864EE8' : "gray"}></Numbers>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.tStyle}
                    onPress={() => {
                        this.setState({
                             button_1: false,
                             button_2: !this.state.button_2,
                             button_3: false,
                             button_4: false,
                             button_5: false,
                             button_6: false
                               });
                     }}
                    >
                        <Numbers buttonText = '10'
                        backcolor = {this.state.button_2 ? '#864EE8' : "gray"}></Numbers>
                    </TouchableOpacity>
                 </View>
                <View style = {container2}>
                    <TouchableOpacity style = {styles.tStyle}
                    onPress={() => {
                        this.setState({
                             button_1: false,
                             button_2: false,
                             button_3: !this.state.button_3,
                             button_4: false,
                             button_5: false,
                             button_6: false
                               });
                     }}
                    >
                        <Numbers buttonText = '15'
                        backcolor = {this.state.button_3 ? '#864EE8' : "gray"}></Numbers>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.tStyle}
                    onPress={() => {
                        this.setState({
                             button_1: false,
                             button_2: false,
                             button_3: false,
                             button_4: !this.state.button_4,
                             button_5: false,
                             button_6: false
                               });
                     }}
                    >
                        <Numbers buttonText = '20'
                        backcolor = {this.state.button_4 ? '#864EE8' : "gray"}></Numbers>
                    </TouchableOpacity>
                </View>
                <View style = {container2}>
                    <TouchableOpacity style = {styles.tStyle}
                    onPress={() => {
                        this.setState({
                             button_1: false,
                             button_2: false,
                             button_3: false,
                             button_4: false,
                             button_5: !this.state.button_5,
                             button_6: false
                               });
                     }}
                    >
                        <Numbers buttonText = '25'
                        backcolor = {this.state.button_5 ? '#864EE8' : "gray"}></Numbers>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.tStyle}
                    onPress={() => {
                        this.setState({
                             button_1: false,
                             button_2: false,
                             button_3: false,
                             button_4: false,
                             button_5: false,
                             button_6: !this.state.button_6
                               });
                     }}
                    >
                        <Numbers buttonText = '30'
                        backcolor = {this.state.button_6 ? '#864EE8' : "gray"}></Numbers>
                    </TouchableOpacity>
                </View>
                </View>
              <View style = {container}>
                <BotoAtras buttonText = {'Atrás'}
                path = {() => Actions.welcome()}/>
                <BotoSiguiente buttonText = {'Siguiente'}/>
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
    tStyle: {
        width: 130,
        height: 130,
        paddingLeft: '10%',
    },
    container: {
        flex:1,
        flexDirection: 'row'
    },
    container2: {
        flex: 2,
        padding: 20,
        paddingLeft: '10%',
        paddingRight: '20%',
        flexDirection: 'row',
        justifyContent:'space-between'
    }
  }