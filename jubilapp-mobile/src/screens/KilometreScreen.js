import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {APP_COLORS} from "../constants/colors";
import Header from '../components/basicComponents/Header';
import Description from '../components/basicComponents/Description';
import NextButton from '../components/basicComponents/NextButton';
import ButtonBack from '../components/basicComponents/ButtonBack';
import Numbers from '../components/basicComponents/Numbers';

import {Actions} from 'react-native-router-flux';

export default class KilometreScreen extends React.Component {
    constructor(props){
        super(props);
          this.state={
            button_1 : false,
            button_2 : false,
            button_3 : true,
            button_4 : false,
            button_5 : false,
            button_6 : false,
        }
    }
    render() {
        const {viewStyle, container, container2} = styles;
        return (
            <View style = {viewStyle}>
              <Header headerText = {'JubilApp'}/>
              <Description textExpl= {'Escoge el radio de kilómetros'}/>
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
                        backcolor = {this.state.button_1 ? APP_COLORS.color_button_1 : APP_COLORS.text_color}></Numbers>
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
                        backcolor = {this.state.button_2 ? APP_COLORS.color_button_1 : APP_COLORS.text_color}></Numbers>
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
                        backcolor = {this.state.button_3 ? APP_COLORS.color_button_1 : APP_COLORS.text_color}></Numbers>
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
                        backcolor = {this.state.button_4 ? APP_COLORS.color_button_1 : APP_COLORS.text_color}></Numbers>
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
                        backcolor = {this.state.button_5 ? APP_COLORS.color_button_1 : APP_COLORS.text_color}></Numbers>
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
                        backcolor = {this.state.button_6 ? APP_COLORS.color_button_1 : APP_COLORS.text_color}></Numbers>
                    </TouchableOpacity>
                </View>
                </View>
              <View style = {container}>
                <ButtonBack buttonText = {'Atrás'}
                            path = {() => Actions.interessos()}/>
                <NextButton buttonText = {'Siguiente'}/>
              </View>
            </View>   
        );
    }
  }
  const styles ={
    viewStyle: {
        backgroundColor: APP_COLORS.color_neutral,
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
        flexDirection: 'row',
        paddingBottom: '7%',
        justifyContent: 'space-between',
        paddingRight: '5%',
        paddingLeft: '5%',
        paddingTop: '8%'
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