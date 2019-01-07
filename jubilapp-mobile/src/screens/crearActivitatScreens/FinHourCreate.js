import React from 'react';
import { Actions } from 'react-native-router-flux';
import {
    changeCreateActivityFormProperty,
    errorCreateActivityFormProperty,
    resetErrorCreateActivityFormProperty
} from "../../actions/index";
import connect from "react-redux/es/connect/connect";
import HourScreenBase from "../../components/baseScreens/HourScreenBase";

class FinHourCreate extends React.Component {
    constructor(props) {
        super(props)

        this.compareDates = this.compareDates.bind(this)
        this.changeFormHourEndHandler = this.changeFormHourEndHandler.bind(this)
    }

    compareDates() {
        const { dateIni, dateEnd, hourIni, hourEnd, minuteIni, minuteEnd } = this.props

        if (dateIni !== dateEnd)
            return -1
        
        if (hourIni < hourEnd)
            return -1
        
        if (minuteIni < minuteEnd)
            return -1
        
        if (minuteIni > minuteEnd)
            return 1
        
        return 0
    }

    changeFormHourEndHandler() {
        if (this.compareDates() >= 0) {
            this.props.errorFormHourEnd('La fecha de fin debe ser posterior a la de inicio')
            setTimeout(() => {
                this.props.resetErrorFormHourEnd()
            }, 3000)
        } else {
            Actions.actdescr()
        }
    }

    render() {
        return (
            <HourScreenBase changeFormHour={this.props.changeFormHourEnd}
                            changeFormMinute={this.props.changeFormMinuteEnd}
                            _hour={this.props.hourEnd}
                            _minute={this.props.minuteEnd}
                            titleName="fin"
                            buttonText = "Siguiente"
                            headerName = "Crear Actividad"
                            previousScreen={() => Actions.iniHour()}
                            nextScreen={this.changeFormHourEndHandler}
                            changeFormFinHour={this.props.changeFormHourEnd}
                            changeFormFinMin={this.props.changeFormMinuteEnd}
                            _inih = {this.props.hourIni}
                            _inim = {this.props.minuteIni}
                            error={this.props.error}
            />

        );
    }
}

const mapStateToProps = (state) => {
    return {
        hourEnd: state.createActivityForm.hourEnd % 24,
        minuteEnd: state.createActivityForm.minuteEnd % 60,
        hourIni: state.createActivityForm.hourIni % 24,
        minuteIni: state.createActivityForm.minuteIni % 60,
        error: state.createActivityForm.errors.hourEnd
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeFormHourEnd: (value) => dispatch(changeCreateActivityFormProperty("hourEnd", value)),
        changeFormMinuteEnd: (value) => dispatch(changeCreateActivityFormProperty("minuteEnd", value)),
        errorFormHourEnd: (error) => dispatch(errorCreateActivityFormProperty("hourEnd", error)),
        resetErrorFormHourEnd: () => dispatch(resetErrorCreateActivityFormProperty("hourEnd"))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FinHourCreate);

