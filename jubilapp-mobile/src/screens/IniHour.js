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
import HourScreenBase from "../components/HourScreenBase";

class IniHour extends React.Component {
    render() {
        return (
            <HourScreenBase changeFormHour={this.props.changeFormHourIni}
                            changeFormMinute={this.props.changeFormMinuteIni}
                            _hour={this.props.hourIni}
                            _minute={this.props.minuteIni}
                            titleName="inicio"
                            nextScreen={() => Actions.finHour()}
                            previousScreen={() => Actions.finDate()}/>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        hourIni: state.createActivityForm.hourIni,
        minuteIni: state.createActivityForm.minuteIni

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeFormHourIni: (value) => dispatch(changeCreateActivityFormProperty("hourIni", value)),
        changeFormMinuteIni: (value) => dispatch(changeCreateActivityFormProperty("minuteIni", value)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IniHour);
