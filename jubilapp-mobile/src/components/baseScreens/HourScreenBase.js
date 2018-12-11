import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {APP_COLORS} from "../../constants/colors";

import { FontAwesome } from '@expo/vector-icons';

import HeaderIcon from '../basicComponents/HeaderIcon';
import Description from "../basicComponents/Description";
import ButtonBack from "../basicComponents/ButtonBack";
import NextButton from "../basicComponents/NextButton";
import { Actions } from 'react-native-router-flux';
import {pressPopup} from "../../pressPopup";

export default class HourScreenBase extends React.Component {

    onPressUpHour = () => {
        const { changeFormHour, _hour} = this.props;
        const hour = (_hour + 1) % 24;
        changeFormHour( hour);
    }
    onPressDownHour = () => {
        const { changeFormHour,_hour } = this.props;
        const hour = (_hour - 1 + 24) % 24;
        changeFormHour( hour);
    }
    onPressUpMin = () => {
        const { changeFormMinute,_minute } = this.props;
        const minute = (_minute + 5) % 60;
        changeFormMinute( minute);
    }
    onPressDownMin = () => {
        const { changeFormMinute,_minute} = this.props;
        const minute = (_minute - 5 + 60) % 60;
        changeFormMinute(minute);
    }
    render() {
        const {viewStyle, viewButtons, container, upsDownsStyle, fullHourStyle} = styles;
        const { _hour, _minute } = this.props;
        return (
            <View style = {viewStyle}>
                <HeaderIcon headerText = {this.props.headerName}
                                iconName={ 'home'}
                                colorName={ APP_COLORS.color_neutral}
                                size = {75}
                                textSize = {35}
                                path={() => pressPopup('Salir', 'Desea ir al menú principal y perder todos los cambios?')}
                />
                <View style = {viewButtons}>
                    <View style={{paddingLeft: '8%', paddingRight: '8%'}}>
                        <Description textExpl={`Define la hora de ${this.props.titleName} de la actividad`}/>
                    </View>
                    <View style = {fullHourStyle}>
                        <View style = {upsDownsStyle}>
                            <TouchableOpacity onPress={this.onPressUpHour}
                                              style = {{paddingLeft: '10%'}}>
                                <FontAwesome name = 'chevron-circle-up' size={100}/>
                            </TouchableOpacity>
                            {_hour < 10? <Text style={{fontSize: 100}}>0{_hour}</Text>: <Text style={{fontSize: 100}}>{_hour}</Text> }
                            <TouchableOpacity onPress={this.onPressDownHour}
                                              style = {{paddingLeft: '10%'}}>
                                <FontAwesome name = 'chevron-circle-down' size={100}/>
                            </TouchableOpacity>
                        </View>
                        <View style = {upsDownsStyle}>
                            <Text style = {{fontSize: 100}}>:</Text>
                        </View>
                        <View style = {upsDownsStyle}>
                            <TouchableOpacity onPress={this.onPressUpMin}
                                              style = {{paddingLeft: '10%'}}>
                                <FontAwesome name = 'chevron-circle-up' size={100}/>
                            </TouchableOpacity>
                            {_minute < 10? <Text style={{fontSize: 100}}>0{_minute}</Text>: <Text style={{fontSize: 100}}>{_minute}</Text> }
                            <TouchableOpacity onPress={this.onPressDownMin}
                                              style = {{paddingLeft: '10%'}}>
                                <FontAwesome name = 'chevron-circle-down' size={100}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style = {container}>
                    <ButtonBack buttonText = {'Atrás'}
                                path = {this.props.previousScreen}/>
                    <NextButton buttonText = {this.props.buttonNext}
                                path = {this.props.nextScreen}/>
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
    viewButtons: {
        flexDirection: 'column',
        flex: 2,
        backgroundColor: APP_COLORS.color_neutral,
        width: '100%',
        height: '100%',
        justifyContent: 'space-between'
    },
    container: {
        flexDirection: 'row',
        paddingBottom: '7%',
        justifyContent: 'space-between',
        paddingRight: '5%',
        paddingLeft: '5%',

    },
    upsDownsStyle: {
        flexDirection: 'column',
        justifyContent: 'center',
        paddingBottom: '10%',
        paddingLeft: '2%',
        paddingRight: '2%',

    },
    fullHourStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
    }
}
