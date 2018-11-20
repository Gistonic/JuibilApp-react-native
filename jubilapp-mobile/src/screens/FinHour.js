import React from 'react';
import { Actions } from 'react-native-router-flux';
import {changeCreateActivityFormProperty} from "../actions";
import connect from "react-redux/es/connect/connect";
import HourScreenBase from "../components/HourScreenBase";

class FinHour extends React.Component {
    render() {
        return (
            <HourScreenBase changeFormHour={this.props.changeFormHourEnd}
                            changeFormMinute={this.props.changeFormMinuteEnd}
                            _hour={(this.props.hourIni+1)%24}
                            _minute={this.props.minuteIni}
                            titleName="fin"
                            nextScreen={() => Actions.iniHour()}
                            previousScreen={() => Actions.actdescr()}/>

        );
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
