import React from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import { CheckBox } from 'react-native-elements';
import {APP_COLORS} from "../constants/colors";
import Header from '../components/Header';

import { Actions } from 'react-native-router-flux';
import Description from "../components/Description";
import ButtonBack from "../components/ButtonBack";
import NextButton from "../components/NextButton";
import {changeCreateActivityFormProperty} from "../actions";
import connect from "react-redux/es/connect/connect";

export default class Interessos2 extends React.Component {


    var
    interessos_checked = [false,false,false,false,false,false];
    var
    past_matches_circles =[];
    var
    path_imatges = ['../images/artPES.jpg', '../images/culturaPES.png','../images/esportPES.jpg','../images/excursionesPES.jpg','../images/ocioPES.jpg','../images/tallersPES.jpg'];


    _onPressButton = (id) => {
        alert(id);
    }

    dibuixarInteres(id)
    {
        return  <TouchableOpacity key={id} style={styles.buttonStyle} onPress = {this._onPressButton(id)}>
                    <ImageBackground source={require('../images/artPES.jpg')} style={styles.imageStyle}/>
                    <CheckBox title = 'Arte' onPress = {this._onPressButton(id)}
                      checked = {this.interessos_checked[id]} style = {styles.checkBoxStyle}/>
                </TouchableOpacity>

    }
    dibuixarInteressos()
    {
        for (var i = 0; i < 6; i++) {
            this.past_matches_circles[i] = this.dibuixarInteres(i);
        }
    }
    render() {
            const {viewStyle, container, container1, viewInteressos} = styles;
            return (
                <View style={viewStyle}>
                    <Header headerText={'JubilApp'}/>
                    <Description textExpl={'Selecciona tus intereses'}/>
                    {this.dibuixarInteressos()}
                    <View style = {container}>
                        {this.past_matches_circles[0]}
                        {this.past_matches_circles[1]}
                    </View>
                    <View style = {container}>
                        {this.past_matches_circles[2]}
                        {this.past_matches_circles[3]}
                    </View>
                    <View style = {container}>
                        {this.past_matches_circles[4]}
                        {this.past_matches_circles[5]}
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
        container: {
            width: '100%',
            height: '20%',
            flex:1,
            flexDirection: 'row'
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
            height: '100%',
            width: '50%',
            paddingLeft: '5%',
            paddingRight: '5%',
            paddingBottom: '2%',
        }
    }
