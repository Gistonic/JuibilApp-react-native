import React from 'react';
import { Actions } from 'react-native-router-flux';
import {changeCreateActivityFormProperty} from "../../actions/index";
import connect from "react-redux/es/connect/connect";
import UbiScreenBase from "../../components/baseScreens/UbiScreenBase";

class UbiCreate extends React.Component {
    render() {
        return (
            <UbiScreenBase changeFormLatitude = {this.props.changeFormLatitude}
                            changeFormLongitude = {this.props.changeFormLongitude}
                            latitude = {this.props.latitude}
                            longitude = {this.props.longitude}
                            buttonNext = "Siguiente"
                            nextScreen={() => Actions.iniDate()}
                            previousScreen={() => Actions.name()}
                            headerName = "Crear Actividad"
            />
        )
    }
}
const mapStateToProps = (state) => {
    return {
        latitude: state.createActivityForm.latitude,
        longitude: state.createActivityForm.longitude,
    }
}

const  mapDispatchToProps = (dispatch)=>{
    return {
        changeFormLatitude: (value)=>dispatch(changeCreateActivityFormProperty("latitude", value)),
        changeFormLongitude: (value)=>dispatch(changeCreateActivityFormProperty("longitude", value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UbiCreate);
