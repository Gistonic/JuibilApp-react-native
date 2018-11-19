import React from 'react';
import {LocaleConfig} from 'react-native-calendars';
import {changeCreateActivityFormProperty} from "../actions";
import connect from "react-redux/es/connect/connect";
import Formulari from "../components/Formulari";
import DateScreenBase from "../components/DateScreenBase";
import {Actions} from "react-native-router-flux";


class IniDate extends React.Component {
    render(){
        return(
            <DateScreenBase date={this.props.dateIni} changeFormDate={this.props.changeFormDateIni} nextScreen={() => Actions.finDate()} titleName="inicio"/>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        dateIni: state.createActivityForm.dateIni,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeFormDateIni: (value) => dispatch(changeCreateActivityFormProperty("dateIni", value)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IniDate);
