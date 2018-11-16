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

class FinHour extends React.Component {

    onPressUpHour = () => {
        const { changeFormHourEnd, hourEnd} = this.props;
        const hour = (hourEnd + 1) % 24;
        changeFormHourEnd( hour);
    }
    onPressDownHour = () => {
        const { changeFormHourEnd,hourEnd } = this.props;
        const hour = (hourEnd - 1 + 24) % 24;
        changeFormHourEnd( hour);
    }
    onPressUpMin = () => {
        const { changeFormMinuteEnd,minuteEnd } = this.props;
        const minute = (minuteEnd + 5) % 60;
        changeFormMinuteEnd( minute);
    }
    onPressDownMin = () => {
        const { changeFormMinuteEnd,minuteEnd } = this.props;
        const minute = (minuteEnd - 5 + 60) % 60;
        changeFormMinuteEnd(minute);
    }
    render() {
        const {viewStyle, viewButtons, container, upsDownsStyle, fullHourStyle} = styles;
        const { hourEnd,minuteEnd } = this.props;
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
                            {hourEnd< 10? <Text style={{fontSize: 100}}>0{hourEnd}</Text>: <Text style={{fontSize: 100}}>{hourEnd}</Text> }
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
                            {minuteEnd < 10? <Text style={{fontSize: 100}}>0{minuteEnd}</Text>: <Text style={{fontSize: 100}}>{minuteEnd}</Text> }
                            <TouchableOpacity onPress={this.onPressDownMin}
                                              style = {{paddingLeft: '10%'}}>
                                <FontAwesome name = 'chevron-circle-down' size={100}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style = {container}>
                    <ButtonBack buttonText = {'Atrás'}
                                path = {() => Actions.iniHour()}/>
                    <NextButton buttonText = {'Siguiente'}
                                path = {() => Actions.actdescr()}/>
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
        hourIni: state.createActivityForm.hourIni,
        minuteIni: state.createActivityForm.minuteIni,
        hourEnd: state.createActivityForm.hourEnd,
        minuteEnd: state.createActivityForm.minuteEnd

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeFormHourEnd: (value) => dispatch(changeCreateActivityFormProperty("hourEnd", value)),
        changeFormMinuteEnd: (value) => dispatch(changeCreateActivityFormProperty("minuteEnd", value)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FinHour);

