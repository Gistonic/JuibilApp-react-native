import React from 'react';
import { Actions } from 'react-native-router-flux';
import {
    changeActivityValue,
    fetchActivityValue,
    patchActivityValue
} from "../../actions/index";
import connect from "react-redux/es/connect/connect";
import HourScreenBase from "../../components/baseScreens/HourScreenBase";

class FinHourModify extends React.Component {
    componentWillMount() {
        this.props.fetchActivityEndDate(this.props.id)
    }
    render() {
        return (
            <HourScreenBase changeFormHour={this.props.changeActivityHourEnd}
                            changeFormMinute={this.props.changeActivityMinuteEnd}
                            _hour={ new Date(this.props.endDate).getHours()+1%24}
                            _minute={ new Date(this.props.endDate).getMinutes()}
                            titleName="fin"
                            buttonNext = "Aceptar"
                            previousScreen={() => this.props.patchActivityEndDate(this.props.id, this.props.startDate)}
                            nextScreen={() => Actions.modificaractivitat()}/>

        );
    }
}

const mapStateToProps = (state) => {
    console.log(state.listActivities.modifyActivityId)
    return {
        id: state.listActivities.modifyActivityId,
        endDate: state.modifyActivity.value,
        isFetching: state.modifyActivity.isFetching,
        isPatching: state.modifyActivity.isPatching
    }
}

const  mapDispatchToProps = (dispatch)=>{
    return {
        changeActivityHourEnd: (value, startDate)=>{
            let date=new Date(startDate)
            date.setHours(value)
            dispatch(changeActivityValue(value))
        },
        changeActivityMinuteEnd: (value, startDate)=>{
            let date=new Date(startDate)
            date.setMinutes(value)
            dispatch(changeActivityValue(value))
        },
        patchActivityEndDate: (id, value) => dispatch(patchActivityValue("endDate", id, value)),
        fetchActivityEndDate: (id) => dispatch(fetchActivityValue("endDate",id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FinHourModify);

