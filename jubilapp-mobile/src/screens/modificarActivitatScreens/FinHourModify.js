import React from 'react';
import { Actions } from 'react-native-router-flux';
import {
    changeActivityValue,
    fetchActivityValue,
    patchActivityValue
} from "../../actions/index";
import { connect } from "react-redux";
import HourScreenBase from "../../components/baseScreens/HourScreenBase";

class FinHourModify extends React.Component {
    componentWillMount() {
        this.props.fetchActivityEndDate(this.props.id)
    }
    render() {
        return (
            <HourScreenBase changeFormHour={(value) => this.props.changeActivityHourEnd(value, this.props.endDate)}
                            changeFormMinute={(value) => this.props.changeActivityMinuteEnd(value, this.props.endDate)}
                            _hour={ new Date(this.props.endDate).getHours()}
                            _minute={ new Date(this.props.endDate).getMinutes()}
                            titleName="fin"
                            buttonText = "Aceptar"
                            previousScreen={() => this.props.navigation.goBack()}
                            nextScreen={() => {
                                this.props.patchActivityEndDate(this.props.id, this.props.endDate)
                                this.props.navigation.goBack() // TODO: Do for other modify screens
                            }}/>

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
        changeActivityHourEnd: (value, endDate)=>{
            console.log('EndDate: ' + endDate + ', New Hour: ' + value)
            let date=new Date(endDate)
            date.setHours(value)
            dispatch(changeActivityValue(date))
        },
        changeActivityMinuteEnd: (value, endDate)=>{
            let date=new Date(endDate)
            date.setMinutes(value)
            dispatch(changeActivityValue(date))
        },
        patchActivityEndDate: (id, value) => dispatch(patchActivityValue("endDate", id, value)),
        fetchActivityEndDate: (id) => dispatch(fetchActivityValue("endDate",id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FinHourModify);

