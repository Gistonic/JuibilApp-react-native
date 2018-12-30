import React from 'react';
import { Actions } from 'react-native-router-flux';
import {changeCreateActivityFormProperty} from "../../actions/index";
import connect from "react-redux/es/connect/connect";
import HourScreenBase from "../../components/baseScreens/HourScreenBase";

class FinHourCreate extends React.Component {
    render() {
        return (
            <HourScreenBase changeFormHour={this.props.changeFormHourEnd}
                            changeFormMinute={this.props.changeFormMinuteEnd}
                            _hour={(this.props.hourEnd)%24}
                            _minute={this.props.minuteEnd}
                            titleName="fin"
                            buttonText = "Siguiente"
                            headerName = "Crear Actividad"
                            previousScreen={() => Actions.iniHour()}
                            nextScreen={() => Actions.actdescr()}
                            changeFormFinHour={this.props.changeFormHourEnd}
                            changeFormFinMin={this.props.changeFormMinuteEnd}
                            _inih = {this.props.hourIni}
                            _inim = {this.props.minuteIni}
            />

        );
    }
}

const mapStateToProps = (state) => {
    return {
        hourEnd: state.createActivityForm.hourEnd,
        minuteEnd: state.createActivityForm.minuteEnd,
        hourIni: state.createActivityForm.hourIni,
        minuteIni: state.createActivityForm.minuteIni,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeFormHourEnd: (value) => dispatch(changeCreateActivityFormProperty("hourEnd", value)),
        changeFormMinuteEnd: (value) => dispatch(changeCreateActivityFormProperty("minuteEnd", value)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FinHourCreate);

