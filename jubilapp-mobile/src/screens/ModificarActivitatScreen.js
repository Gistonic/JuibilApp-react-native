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

                <HeaderIcon headerText = { 'Modificar Actividad'}
                            iconName={ 'user'}
                            colorName={ APP_COLORS.color_neutral}
                            path={() => Actions.home()}
                />
                <Description textExpl = {'Que quieres modificar?'}/>

                <View style = {viewButtons}>
                    <View style = {container}>
                        <ConfigurationButton iconName={ 'md-search'}
                                    colorName={ APP_COLORS.color_next}
                                    buttonText = {'NOMBRE ACTIVIDAD'}
                                    path={() => Actions.nameUbi()}
                        />
                        <ConfigurationButton iconName={ 'ios-pin'}
                                    colorName={ APP_COLORS.color_next}
                                    buttonText = {'UBICACION ACTIVIDAD'}
                                    path={() => Actions.nameUbi()}
                        />
                    </View>
                    <View style = {container}>
                        <ConfigurationButton iconName={'md-add-circle'}
                                    colorName={ APP_COLORS.color_next}
                                    buttonText = {'FECHA ACTIVIDAD'}
                                    path={() => Actions.iniDate()}
                        />
                        <ConfigurationButton iconName={'md-add-circle'}
                                    colorName={ APP_COLORS.color_next}
                                    buttonText = {'HORA ACTIVIDAD'}
                                    path={() => Actions.iniHour()}
                        />
                    </View>
                    <View style = {container}>
                        <ConfigurationButton iconName={'md-add-circle'}
                                    colorName={ APP_COLORS.color_next}
                                    buttonText = {'INTERES ACTIVIDAD'}
                                    path={() => Actions.seltype()}
                        />
                        <ConfigurationButton iconName={'md-add-circle'}
                                    colorName={ APP_COLORS.color_next}
                                    buttonText = {'DESCRIPCION ACTIVIDAD'}
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