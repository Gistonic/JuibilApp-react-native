import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {APP_COLORS} from "../constants/colors";

import { Actions } from 'react-native-router-flux';
import { FontAwesome } from '@expo/vector-icons';

import Header from "../components/Header";
import Description from "../components/Description";
import ButtonBack from "../components/ButtonBack";
import NextButton from "../components/NextButton";
import {changeCreateActivityFormProperty} from "../actions";
import connect from "react-redux/es/connect/connect";

class IniHour extends React.Component {
    constructor(props) {
        super(props);

        const date = new Date();
        const hour = date.getHours();
        const minute = date.getMinutes() - (date.getMinutes() % 5);

        this.state = {
            hour: hour,
            min: minute
        };
    }

    onPressUpHour = () => {
        const hour = (this.state.hour + 1) % 24;
        this.setState({hour: hour});
    }
    onPressDownHour = () => {
        const hour = (this.state.hour - 1 + 24) % 24;
        this.setState({hour: hour});
    }
    onPressUpMin = () => {
        const minute = (this.state.min + 5) % 60;
        this.setState({min: minute});
    }
    onPressDownMin = () => {
        const minute = (this.state.min - 5 + 60) % 60;
        this.setState({min: minute});
    }
    render() {
        const {viewStyle, viewButtons, container, upsDownsStyle, fullHourStyle} = styles;
        return (
            <View style = {viewStyle}>
                <Header headerText = {'Crear Actividad'}/>
                <View style = {viewButtons}>
                    <View style={{paddingLeft: '8%', paddingRight: '8%'}}>
                        <Description textExpl={ 'Define la hora de inicio de la actividad'}/>
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
                    </View>
                </View>
                <View style = {container}>
                    <ButtonBack buttonText = {'Atrás'}
                                path = {() => Actions.finDate()}/>
                    <NextButton buttonText = {'Siguiente'}
                                path = {() => Actions.finHour()}/>
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

const mapStateToProps = (state) => {
    return {
        dateIni: state.createActivityForm.hourIni,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeFormHourIni: (value) => dispatch(changeCreateActivityFormProperty("hourIni", value)),
        changeFormMinuteIni: (value) => dispatch(changeCreateActivityFormProperty("minuteIni", value)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IniHour);
