import React from 'react';
import {View} from 'react-native';
import HeaderIcon from '../components/HeaderIcon';
import {APP_COLORS} from "../constants/colors";
import ConfigurationButton from '../components/ConfigurationButton';

import { Actions } from 'react-native-router-flux';
import Description from "../components/Description";
import ButtonBack from "../components/ButtonBack";
import NextButton from "../components/NextButton";

export default class HomeScreen extends React.Component {
    render() {
        const {viewStyle, viewButtons,container,container1} = styles;
        return (
            <View style = {viewStyle}>

                <HeaderIcon headerText = { 'Modificar'}
                            iconName={ 'home'}
                            colorName={ APP_COLORS.color_neutral}
                            path={() => Actions.home()}
                />
                <Description textExpl = {'Que quieres modificar?'}/>

                <View style = {viewButtons}>
                    <View style = {container}>
                        <ConfigurationButton iconName={ 'pencil'}
                                    colorName={ APP_COLORS.color_button_1}
                                             heightStyle={'75%'}
                                             fontsizeStyle= {15}
                                             widthStyle = {'60%'}
                                    buttonText = {'NOMBRE ACTIVIDAD'}

                                    path={() => Actions.nameUbi()}
                        />
                        <ConfigurationButton iconName={ 'location'}
                                    colorName={ APP_COLORS.color_button_1}
                                    buttonText = {'UBICACION ACTIVIDAD'}
                                             heightStyle={'75%'}
                                             fontsizeStyle= {15}
                                             widthStyle = {'60%'}
                                    path={() => Actions.nameUbi()}
                        />
                    </View>
                    <View style = {container}>
                        <ConfigurationButton iconName={'calendar'}
                                    colorName={ APP_COLORS.color_button_1}
                                    buttonText = {'FECHA ACTIVIDAD'}
                                             heightStyle={'75%'}
                                             fontsizeStyle= {15}
                                             widthStyle = {'60%'}
                                    path={() => Actions.iniDate()}
                        />
                        <ConfigurationButton iconName={'clock'}
                                    colorName={ APP_COLORS.color_button_1}
                                    buttonText = {'HORA ACTIVIDAD'}
                                             heightStyle={'75%'}
                                             fontsizeStyle= {15}
                                             widthStyle = {'60%'}
                                    path={() => Actions.iniHour()}
                        />
                    </View>
                    <View style = {container}>
                        <ConfigurationButton iconName={'gear'}
                                    colorName={ APP_COLORS.color_button_1}
                                    buttonText = {'INTERES ACTIVIDAD'}
                                             heightStyle={'75%'}
                                             fontsizeStyle= {15}
                                             widthStyle = {'60%'}
                                    path={() => Actions.seltype()}
                        />
                        <ConfigurationButton iconName={'comment'}
                                    colorName={ APP_COLORS.color_button_1}
                                    buttonText = {'DESCRIPCION ACTIVIDAD'}
                                             heightStyle={'75%'}
                                             fontsizeStyle= {15}
                                             widthStyle = {'60%'}
                                    path={() => Actions.actdescr()}
                        />
                    </View>
                </View>
                <View style = {container1}>
                    <ButtonBack buttonText = {'Cancelar'}
                                path = {() => Actions.home()}/>
                    <NextButton buttonText = {'Finalizar'}
                                path = {() => Actions.home()}/>
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

    },
    container1: {
        flexDirection: 'row',
        paddingBottom: '7%',
        justifyContent: 'space-between',
        paddingRight: '5%',
        paddingLeft: '5%',
        paddingTop: '8%'
    },
    viewButtons: {
        flexDirection: 'column',
        flex: 2,
        backgroundColor: APP_COLORS.color_neutral
    },
    container: {
        flex:3,
        backgroundColor: APP_COLORS.color_neutral,
        flexDirection: 'row',
        width: '100%',
        height: '10%'
    }
}