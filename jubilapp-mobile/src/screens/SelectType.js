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
        const {viewStyle, container, container1, viewInteressos} = styles;
        return (
            <View style = {viewStyle}>

                <Header headerText = {'JubilApp'}/>
                <Description textExpl = {'Selecciona el tipo'}/>
                <View style = {viewInteressos} >
                    <View style = {container}>
                        <TouchableOpacity style={styles.buttonStyle}
                                          onPress={ () => {
                                              this.setState({
                                                  selected_Arte: !this.state.selected_Arte,
                                                  selected_Deporte: false,
                                                  selected_Cultura: false,
                                                  selected_Excursiones: false,
                                                  selected_Talleres: false,
                                                  selected_Ocio: false,
                                              });
                                          }}>
                            <ImageBackground source={require('../images/artPES.jpg')} style={styles.imageStyle}/>
                            <CheckBox title = 'Arte' checked = {this.state.selected_Arte} style = {styles.checkBoxStyle}
                                      onPress = {() => this.setState({
                                          selected_Arte: !this.state.selected_Arte,
                                          selected_Deporte: false,
                                          selected_Cultura: false,
                                          selected_Excursiones: false,
                                          selected_Talleres: false,
                                          selected_Ocio: false,
                                      })}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonStyle}
                                          onPress={ () => {
                                              this.setState({
                                                  selected_Arte: false,
                                                  selected_Deporte: !this.state.selected_Deporte,
                                                  selected_Cultura: false,
                                                  selected_Excursiones: false,
                                                  selected_Talleres: false,
                                                  selected_Ocio: false,
                                              });
                                          }}>
                            <ImageBackground source={require('../images/esportPES.jpg')} style={styles.imageStyle}/>
                            <CheckBox title = 'Deporte' checked = {this.state.selected_Deporte} style = {styles.checkBoxStyle}
                                      onPress = {() => this.setState({
                                          selected_Arte: false,
                                          selected_Deporte: !this.state.selected_Deporte,
                                          selected_Cultura: false,
                                          selected_Excursiones: false,
                                          selected_Talleres: false,
                                          selected_Ocio: false,
                                      })}
                            />
                        </TouchableOpacity>

                    </View>

                    <View style = {container}>
                        <TouchableOpacity style={styles.buttonStyle}
                                          onPress={ () => {
                                              this.setState({
                                                  selected_Arte: false,
                                                  selected_Deporte: false,
                                                  selected_Excursiones: false,
                                                  selected_Talleres: false,
                                                  selected_Ocio: false,
                                                  selected_Cultura: !this.state.selected_Cultura
                                              });
                                          }}>
                            <ImageBackground source={require('../images/culturaPES.png')} style={styles.imageStyle}/>
                            <CheckBox title = 'Cultura' checked = {this.state.selected_Cultura} style = {styles.checkBoxStyle}
                                      onPress = {() => this.setState({
                                          selected_Arte: false,
                                          selected_Deporte: false,
                                          selected_Excursiones: false,
                                          selected_Talleres: false,
                                          selected_Ocio: false,
                                          selected_Cultura: !this.state.selected_Cultura
                                      })}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonStyle}
                                          onPress={ () => {
                                              this.setState({
                                                  selected_Arte: false,
                                                  selected_Deporte: false,
                                                  selected_Cultura: false,
                                                  selected_Talleres: false,
                                                  selected_Ocio: false,
                                                  selected_Excursiones: !this.state.selected_Excursiones
                                              });
                                          }}>
                            <ImageBackground source={require('../images/excursionsPES.jpg')} style={styles.imageStyle}/>
                            <CheckBox title = 'Excursiones' checked = {this.state.selected_Excursiones} style = {styles.checkBoxStyle}
                                      onPress = {() => this.setState({
                                          selected_Arte: false,
                                          selected_Deporte: false,
                                          selected_Cultura: false,
                                          selected_Talleres: false,
                                          selected_Ocio: false,
                                          selected_Excursiones: !this.state.selected_Excursiones
                                      })}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style = {container}>
                        <TouchableOpacity style={styles.buttonStyle} style={styles.buttonStyle}
                                          onPress={ () => {
                                              this.setState({
                                                  selected_Arte: false,
                                                  selected_Deporte: false,
                                                  selected_Cultura: false,
                                                  selected_Excursiones: false,
                                                  selected_Ocio: false,
                                                  selected_Talleres: !this.state.selected_Talleres
                                              });
                                          }}>
                            <ImageBackground source={require('../images/tallersPES.jpg')} style={styles.imageStyle}/>
                            <CheckBox title = 'Talleres' checked = {this.state.selected_Talleres} style = {styles.checkBoxStyle}
                                      onPress = {() => this.setState({
                                          selected_Arte: false,
                                          selected_Deporte: false,
                                          selected_Cultura: false,
                                          selected_Excursiones: false,
                                          selected_Ocio: false,
                                          selected_Talleres: !this.state.selected_Talleres
                                      })}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonStyle}
                                          onPress={ () => {
                                              this.setState({
                                                  selected_Arte: false,
                                                  selected_Deporte: false,
                                                  selected_Cultura: false,
                                                  selected_Excursiones: false,
                                                  selected_Talleres: false,
                                                  selected_Ocio: !this.state.selected_Ocio
                                              });
                                          }}>
                            <ImageBackground source={require('../images/ocioPES.jpg')} style={styles.imageStyle}/>
                            <CheckBox title = 'Ocio' checked = {this.state.selected_Ocio} style = {styles.checkBoxStyle}
                                      onPress = {() => this.setState({
                                          selected_Arte: false,
                                          selected_Deporte: false,
                                          selected_Cultura: false,
                                          selected_Excursiones: false,
                                          selected_Talleres: false,
                                          selected_Ocio: !this.state.selected_Ocio
                                      })}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style = {container1}>
                    <ButtonBack buttonText = {'Atrás'}
                                path = {() => Actions.actdescr()}/>
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
    },
    buttonStyle:{
        justifyContent: 'center',
        alignItems: 'center', //horizontal
        height: '100%',
        width: '50%',
        paddingLeft: '5%',
        paddingRight: '5%',
        paddingBottom: '2%',
    },
    imageStyle: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        borderColor: APP_COLORS.color_header,
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
        center:true,
    },
    viewInteressos: {
        flex: 6,
        flexDirection:'column',
        justifyContent: 'space-between',
    }
}