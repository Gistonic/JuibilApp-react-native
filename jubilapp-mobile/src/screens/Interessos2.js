import React from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import { CheckBox } from 'react-native-elements';
import {APP_COLORS} from "../constants/colors";
import Header from '../components/basicComponents/Header';

import { Actions } from 'react-native-router-flux';
import Description from "../components/basicComponents/Description";
import ButtonBack from "../components/basicComponents/ButtonBack";
import NextButton from "../components/basicComponents/NextButton";
import {changeCreateActivityFormProperty} from "../actions";
import connect from "react-redux/es/connect/connect";

export default class Interessos2 extends React.Component {
    interessos_info = [
        {
            id:0,
            estat:false,
            icon: require('../images/artPES.jpg'),
            nom:'Arte',
        },
        {
            id:1,
            estat:false,
            icon: require('../images/culturaPES.png'),
            nom:'Cultura',
        },
        {
            id:2,
            estat:false,
            icon: require('../images/esportPES.jpg'),
            nom:'Deporte',
        },
        {
            id:3,
            estat:false,
            icon: require('../images/excursionsPES.jpg'),
            nom:'Excursiones',
        },
        {
            id:4,
            estat:false,
            icon: require('../images/ocioPES.jpg'),
            nom:'Ocio',
        },
        {
            id:5,
            estat:false,
            icon: require('../images/tallersPES.jpg'),
            nom:'Talleres',
        }

    ];
    estats = [true,false,false,false,false,false];
    _onPressButton(interes) {
        //alert(interes.id);
        this.estats[interes.id] = !this.estats[interes.id];
        alert(this.estats[interes.id]);
    }
    dibuixarInteressos(num)
    {
        alert("Estic aqui");
        return this.interessos_info.map(totsID=> {
            if((totsID.id %2) == num) {
                return  (<TouchableOpacity style={styles.buttonStyle} onPress={this._onPressButton.bind(this,totsID)}>
                            <ImageBackground source={totsID.icon} style={styles.imageStyle}/>
                            <CheckBox key={totsID.id} title = {totsID.nom} checked = {this.estats[totsID.id]} style = {styles.checkBoxStyle} onPress={this._onPressButton.bind(this,totsID)}/>
                        </TouchableOpacity>
                        );
            }
        });
    }
    render() {
            const {viewStyle, container, container1, viewInteressos, containerColumna} = styles;
            return (
                <View style={viewStyle}>
                    <Header headerText={'JubilApp'}/>
                    <Description textExpl={'Selecciona tus intereses'}/>
                    <View style = {container}>
                        <View style = {containerColumna}>
                            {this.dibuixarInteressos(0)}
                        </View>
                        <View style = {containerColumna}>
                            {this.dibuixarInteressos(1)}
                        </View>
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

    const styles = {
        viewStyle: {
            backgroundColor: APP_COLORS.color_neutral,
            width: '100%',
            height: '100%',
            flexDirection: 'column'
        },
        containerColumna: {
            width: '50%',
            flexDirection: 'column'
        },
        container: {
            width: '100%',
            flex:1,
            flexDirection: 'row',
            marginTop: '5%'
        },
        checkBoxStyle:{
            center:true,
        },
        container1: {
            flexDirection: 'row',
            paddingBottom: '7%',
            justifyContent: 'space-between',
            paddingRight: '5%',
            paddingLeft: '5%',
        },
        imageStyle: {
            flex: 1,
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'flex-end',
            borderColor: APP_COLORS.color_header,
        },
        buttonStyle:{
            justifyContent: 'center',
            alignItems: 'center', //horizontal
            height: '35%',
            width: '90%',
            paddingLeft: '5%',
            paddingRight: '5%',
            paddingBottom: '2%',
            paddingTop: '2%',
            marginStart: '5%',
            marginEnd: '5%',
        }
    }
