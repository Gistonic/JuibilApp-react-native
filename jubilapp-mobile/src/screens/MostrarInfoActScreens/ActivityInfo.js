import React from 'react';
import ActivityInfoBase from "../../components/baseScreens/ActivityInfoBase";
import {changeActivityIDProperty, fetchActivity, deleteAct} from "../../actions/infoActivityActions";
import {attend, notAttend} from "../../actions/buscarActivityActions";
import connect from "react-redux/es/connect/connect";
import Geocoder from "react-native-geocoding";
import {MAPS_KEY} from "../../constants";

class ActivityInfo extends React.Component {
    componentWillMount(){
        this.props.changeID(this.props.id);
        this.props.fetchActivity(this.props.id);
        Geocoder.init(MAPS_KEY.key, {language: 'es'});
    }
    getLocationfromCoords() {
        Geocoder.from({lat: this.props.activityReceived.latitude, lng: this.props.activityReceived.longitude})
            .then(json => {
                this.props.changeUbicacioActual(json.results[0].formatted_address);
            });
    }
    render() {
        this.getLocationfromCoords();
        return (
           <ActivityInfoBase nomActivitat = {this.props.activityReceived.name}
                             descripcio = {this.props.activityReceived.description}
                             tipus = {this.props.activityReceived.type}
                             dataIni = {this.props.activityReceived.startDate}
                             dataFi = {this.props.activityReceived.endDate}
                             screen = {this.props.screen}
                             att = {this.props.att}
                             deleteAct = {this.props.deleteAct}
                             attend = {this.props.attend}
                             notAttend = {this.props.notAttend}
                             ubicacioactual = {this.props.ubicacioactual}
                             id = {this.props.id}
           />
        );
    }
}
const mapStateToProps = (state) => {
    return {
        idActivity: state.activityInfoForm.idActivity,
        activityReceived: state.activityInfoForm.activityReceived,
        ubicacioactual: state.activityInfoForm.ubicacioactual,
    }
}

const  mapDispatchToProps = (dispatch)=>{
    return {
        changeID: (value)=>dispatch(changeActivityIDProperty("idActivity", value)),
        fetchActivity: (value) => dispatch(fetchActivity(value)),
        deleteAct: (value) => dispatch(deleteAct(value)),
        attend: (value) => dispatch(attend(value)),
        notAttend: (value) => dispatch(notAttend(value)),
        changeUbicacioActual: (value) => dispatch(changeActivityIDProperty("ubicacioactual", value))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivityInfo)
