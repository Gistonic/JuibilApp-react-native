import React from 'react';
import ActivityInfoBase from "../components/baseScreens/ActivityInfoBase";
import {changeActivityIDProperty, fetchActivity, deleteAct} from "../actions/infoActivityActions";
import connect from "react-redux/es/connect/connect";

class ActivityInfo extends React.Component {
    componentWillMount(){
        this.props.changeID(this.props.id);
        this.props.fetchActivity(this.props.id)
    }

    render() {
        return (
           <ActivityInfoBase nomActivitat = {this.props.activityReceived.name}
                             descripcio = {this.props.activityReceived.description}
                             tipus = {this.props.activityReceived.type}
                             dataIni = {this.props.activityReceived.startDate}
                             dataFi = {this.props.activityReceived.endDate}
                             screen = {this.props.screen}
                             deleteAct = {this.props.deleteAct}
                             id = {this.props.id}
           />
        );
    }
}
const mapStateToProps = (state) => {
    return {
        idActivity: state.activityInfoForm.idActivity,
        activityReceived: state.activityInfoForm.activityReceived,
    }
}

const  mapDispatchToProps = (dispatch)=>{
    return {
        changeID: (value)=>dispatch(changeActivityIDProperty("idActivity", value)),
        fetchActivity: (value) => dispatch(fetchActivity(value)),
        deleteAct: (value) => dispatch(deleteAct(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivityInfo)
