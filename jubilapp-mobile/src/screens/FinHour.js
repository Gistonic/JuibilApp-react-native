import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {APP_COLORS} from "../constants/colors";

import { Actions } from 'react-native-router-flux';
import { FontAwesome } from '@expo/vector-icons';

import Header from "../components/Header";
import Description from "../components/Description";
import ButtonBack from "../components/ButtonBack";
import NextButton from "../components/NextButton";

export default class FinHour extends React.Component {
    constructor(props) {
        super(props)
        this.state = { hour: 0 , min: 0}
    }
    onPressUpHour = () => {
        if (this.state.hour == 23) {
            this.setState({
                hour: 0
            })
        }
        else {
            this.setState({
                hour: this.state.hour + 1
            })
        }
    }
    onPressDownHour = () => {
        if (this.state.hour == 0) {
            this.setState({
                hour: 23
            })
        }
        else {
            this.setState({
                hour: this.state.hour - 1
            })
        }
    }
    onPressUpMin = () => {
        if (this.state.min == 55) {
            this.setState({
                min: 0
            })
        }
        else {
            this.setState({
                min: this.state.min + 5
            })
        }
    }
    onPressDownMin = () => {
        if (this.state.min == 0) {
            this.setState({
                min: 55
            })
        }
        else {
            this.setState({
                min: this.state.min - 5
            })
        }
    }
    render() {
        const {viewStyle, viewButtons, container, upsDownsStyle, fullHourStyle} = styles;
        return (
            <View style = {viewStyle}>
                <Header headerText = {'Crear Actividad'}/>
                <View style = {viewButtons}>
                    <View style={{paddingLeft: '8%', paddingRight: '8%'}}>
                        <Description textExpl={ 'Define la hora de fin de la actividad'}/>
                    </View>
                    <View style = {fullHourStyle}>
                        <View style = {upsDownsStyle}>
                            <TouchableOpacity onPress={this.onPressUpHour}
                                              style = {{paddingLeft: '10%'}}>
                                <FontAwesome name = 'chevron-circle-up' size={100}/>
                            </TouchableOpacity>
                            {this.state.hour < 10? <Text style={{fontSize: 100}}>0{this.state.hour}</Text>: <Text style={{fontSize: 100}}>{this.state.hour}</Text> }
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
                            {this.state.min < 10? <Text style={{fontSize: 100}}>0{this.state.min}</Text>: <Text style={{fontSize: 100}}>{this.state.min}</Text> }
                            <TouchableOpacity onPress={this.onPressDownMin}
                                              style = {{paddingLeft: '10%'}}>
                                <FontAwesome name = 'chevron-circle-down' size={100}/>
                            </TouchableOpacity>
                        </View>
                        <View style = {upsDownsStyle}>
                            <Text style = {{fontSize: 100}}>h</Text>
                        </View>
                    </View>
                </View>
                <View style = {container}>
                    <ButtonBack buttonText = {'Atrás'}
                                path = {() => Actions.iniHour()}/>
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
