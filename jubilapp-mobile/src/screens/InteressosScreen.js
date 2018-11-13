import React from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import { CheckBox } from 'react-native-elements';
import {APP_COLORS} from "../constants/colors";
import Header from '../components/Header';

import { Actions } from 'react-native-router-flux';
import Description from "../components/Description";
import ButtonBack from "../components/ButtonBack";
import NextButton from "../components/NextButton";

export default class InteressosScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selected_Arte: false,
            selected_Deporte: false,
            selected_Cultura: false,
            selected_Excursiones: false,
            selected_Talleres: false,
            selected_Ocio: false,
        }
    }
    render() {
        const {viewStyle, container, interesStyle, buttonStyle, textStyle, imageStyle, container1} = styles;
        return (
            <View style = {viewStyle}>

                <Header headerText = {'JubilApp'}/>
                <Description textExpl = {'Selecciona tus intereses'}/>
                <View style = {container}>
                    <TouchableOpacity style={styles.buttonStyle}
                                      onPress={ () => {
                                          this.setState({
                                            selected_Arte: !this.state.selected_Arte
                                          });
                                      }}>
                        <ImageBackground source={require('../images/artPES.jpg')} style={styles.imageStyle}/>
                        <View style = {styles.container2}>
                            <CheckBox title = 'Arte' checked = {this.state.selected_Arte} style = {styles.checkBoxStyle}/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyle}
                                      onPress={ () => {
                                          this.setState({
                                              selected_Deporte: !this.state.selected_Deporte
                                          });
                                      }}>
                        <ImageBackground source={require('../images/esportPES.jpg')} style={styles.imageStyle}/>
                        <View style = {styles.container2}>
                            <CheckBox title = 'Deporte' checked = {this.state.selected_Deporte} style = {styles.checkBoxStyle}/>
                        </View>
                    </TouchableOpacity>

                </View>

                <View style = {container}>
                    <TouchableOpacity style={styles.buttonStyle}
                                      onPress={ () => {
                                          this.setState({
                                              selected_Cultura: !this.state.selected_Cultura
                                          });
                                      }}>
                        <ImageBackground source={require('../images/culturaPES.png')} style={styles.imageStyle}/>
                        <View style = {styles.container2}>
                            <CheckBox title = 'Cultura' checked = {this.state.selected_Cultura} style = {styles.checkBoxStyle}/>
                        </View>
                    </TouchableOpacity>

                   <TouchableOpacity style={styles.buttonStyle}
                                     onPress={ () => {
                                         this.setState({
                                             selected_Excursiones: !this.state.selected_Excursiones
                                         });
                                     }}>
                        <ImageBackground source={require('../images/excursionsPES.jpg')} style={styles.imageStyle}/>
                        <View style = {styles.container2}>
                            <CheckBox title = 'Excursiones' checked = {this.state.selected_Excursiones} style = {styles.checkBoxStyle}/>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style = {container}>
                    <TouchableOpacity style={styles.buttonStyle} style={styles.buttonStyle}
                                      onPress={ () => {
                                          this.setState({
                                              selected_Talleres: !this.state.selected_Talleres
                                          });
                                      }}>
                        <ImageBackground source={require('../images/tallersPES.jpg')} style={styles.imageStyle}/>
                        <View style = {styles.container2}>
                            <CheckBox title = 'Talleres' checked = {this.state.selected_Talleres} style = {styles.checkBoxStyle}/>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonStyle}
                                      onPress={ () => {
                                          this.setState({
                                              selected_Ocio: !this.state.selected_Ocio
                                          });
                                      }}>
                        <ImageBackground source={require('../images/ocioPES.jpg')} style={styles.imageStyle}/>
                        <View style = {styles.container2}>

                            <CheckBox title = 'Ocio' checked = {this.state.selected_Ocio} style = {styles.checkBoxStyle}/>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style = {container1}>
                    <ButtonBack buttonText = {'Atrás'}
                                path = {() => Actions.home()}/>
                    <NextButton buttonText = {'Siguiente'}
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
        height: '100%',
        flexDirection: 'column'
    },

    container: {
        width: '100%',
        height: '20%',
        flex:1,
        flexDirection: 'row'
    },
    container1: {
        flexDirection: 'row',
        paddingBottom: '7%',
        justifyContent: 'space-between',
        paddingRight: '5%',
        paddingLeft: '5%',
        paddingTop: '8%'
    },
    buttonStyle:{
        justifyContent: 'center',
        alignItems: 'center', //horizontal
        height: '75%',
        width: '45%',
        marginTop: 5,
        marginStart: 8,
        marginEnd: 8
    },
    imageStyle: {
        width: '73%',
        height: '73%',
        //backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'flex-end',
        borderColor: APP_COLORS.color_header
    },
    textStyle:{
        fontSize:20,
        color: 'black',
        fontFamily: 'sans-serif-condensed',
        fontWeight: 'bold'
    },
    textSelectedStyle: {
        fontSize:17,
        color: APP_COLORS.color_header,
        fontFamily: 'sans-serif-condensed',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    checkBoxStyle:{
        size: 4,
        center:true
    }
}




/*import React from 'react';
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
  }*/