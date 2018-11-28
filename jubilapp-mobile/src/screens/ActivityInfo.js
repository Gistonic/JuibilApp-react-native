import React from 'react';
import ActivityInfoBase from "../components/baseScreens/ActivityInfoBase";
import {changeActivityIDProperty} from "../actions/infoActivityActions";
import connect from "react-redux/es/connect/connect";

class ActivityInfo extends React.Component {
    componentWillMount(){
        this.props.changeID(this.props.id)
    }
    render() {
        return (
           <ActivityInfoBase id = {this.props.id}/>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        idActivity: state.activityInfoForm.idActivity,
    }
}

const  mapDispatchToProps = (dispatch)=>{
    return {
        changeID: (value)=>dispatch(changeActivityIDProperty("idActivity", value)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivityInfo)
