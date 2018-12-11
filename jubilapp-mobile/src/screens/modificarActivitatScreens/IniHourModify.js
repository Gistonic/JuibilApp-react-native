import React from 'react';

import { Actions } from 'react-native-router-flux';
import {
    changeActivityValue,
    changeCreateActivityFormProperty,
    fetchActivityValue,
    patchActivityValue
} from "../../actions/index";
import connect from "react-redux/es/connect/connect";
import HourScreenBase from "../../components/baseScreens/HourScreenBase";

class IniHourModify extends React.Component {
    componentWillMount() {
        this.props.fetchActivityStartDate(this.props.id)
    }
    render() {
        return (
            <HourScreenBase changeFormHour={(value)=>this.props.changeActivityHourIni(value, this.props.startDate)}
                            changeFormMinute={(value)=>this.props.changeActivityMinuteIni(value, this.props.startDate)}
                            _hour={ new Date(this.props.startDate).getHours()}
                            _minute={ new Date(this.props.startDate).getMinutes()}
                            titleName="inicio"
                            buttonNext = "Aceptar"
                            nextScreen={() => this.props.patchActivityStartDate(this.props.id, this.props.startDate)}
                            previousScreen={() => Actions.modificaractivitat()}/>
        )
    }

}

const mapStateToProps = (state) => {
    console.log(state.listActivities.modifyActivityId)
    return {
        id: state.listActivities.modifyActivityId,
        startDate: state.modifyActivity.value,
        isFetching: state.modifyActivity.isFetching,
        isPatching: state.modifyActivity.isPatching
    }
}

const  mapDispatchToProps = (dispatch)=>{
    return {
        changeActivityHourIni: (value, startDate)=>{
            let date=new Date(startDate)
            date.setHours(value)
            dispatch(changeActivityValue(value))
        },
        changeActivityMinuteIni: (value, startDate)=>{
            let date=new Date(startDate)
            date.setMinutes(value)
            dispatch(changeActivityValue(value))
        },
        patchActivityStartDate: (id, value) => dispatch(patchActivityValue("startDate", id, value)),
        fetchActivityStartDate: (id) => dispatch(fetchActivityValue("startDate",id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IniHourModify);
