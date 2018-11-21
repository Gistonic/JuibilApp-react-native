import React from 'react';

import { Actions } from 'react-native-router-flux';
import {changeCreateActivityFormProperty} from "../../actions/index";
import connect from "react-redux/es/connect/connect";
import HourScreenBase from "../../components/baseScreens/HourScreenBase";

class IniHourModify extends React.Component {
    render() {
        return (
            <HourScreenBase changeFormHour={this.props.changeFormHourIni}
                            changeFormMinute={this.props.changeFormMinuteIni}
                            _hour={this.props.hourIni}
                            _minute={this.props.minuteIni}
                            titleName="inicio"
                            buttonNext = "Siguiente"
                            nextScreen={() => Actions.finHourMod()}
                            previousScreen={() => Actions.modificaractivitat()}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(IniHourModify);
