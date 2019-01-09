import React from 'react';
import { Actions } from 'react-native-router-flux';
import {changeCreateActivityFormProperty, showError} from "../../actions";
import connect from "react-redux/es/connect/connect";
import UbiScreenBase from "../../components/baseScreens/UbiScreenBase";
import Geocoder from "react-native-geocoding";
import {MAPS_KEY} from "../../constants";

class UbiCreate extends React.Component {
    componentWillMount(){
        if (this.props.latitude != null) {
            Geocoder.init(MAPS_KEY.key, {language: 'es'});
            Geocoder.from({lat: this.props.latitude, lng: this.props.longitude})
                .then(json => {
                    this.props.changeFormUbi(json.results[0].formatted_address);
                });
        }
    }
    constructor(props) {
        super(props)

        this.changeFormUbiHandler = this.changeFormUbiHandler.bind(this)
    }

    changeFormUbiHandler() {

        const { ubi, longitude, latitude } = this.props
        if ( longitude == null||typeof longitude === "undefined" || latitude==null ||typeof longitude === "undefined") {
            this.props.errorFormUbi('La ubicación no puede estar vacía')
        } else {
            Actions.iniDate()
        }
    }
    ubi () {
        if (this.props.ubi !== "") return this.props.ubi;
        else return "Ubicación";
    }
    render() {
        return (
            <UbiScreenBase changeFormLatitude = {this.props.changeFormLatitude}
                            changeFormLongitude = {this.props.changeFormLongitude}
                            latitude = {this.props.latitude}
                            longitude = {this.props.longitude}
                            buttonNext = "Siguiente"
                            nextScreen= {this.changeFormUbiHandler}
                            previousScreen={() => Actions.name()}
                            headerName = "Crear Actividad"
                           ubic = {this.ubi()}
            />
        )
    }
}
const mapStateToProps = (state) => {
    return {
        latitude: state.createActivityForm.latitude,
        longitude: state.createActivityForm.longitude,
        ubi: state.createActivityForm.ubi
    }
}

const  mapDispatchToProps = (dispatch)=>{
    return {
        changeFormLatitude: (value)=>dispatch(changeCreateActivityFormProperty("latitude", value)),
        changeFormLongitude: (value)=>dispatch(changeCreateActivityFormProperty("longitude", value)),
        changeFormUbi: (value) => dispatch(changeCreateActivityFormProperty("ubi",value)),
        errorFormUbi: (error) => dispatch(showError(error))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UbiCreate);
