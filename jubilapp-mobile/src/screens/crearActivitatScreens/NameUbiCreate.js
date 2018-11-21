import React from 'react';
import { Actions } from 'react-native-router-flux';
import {changeCreateActivityFormProperty} from "../../actions/index";
import connect from "react-redux/es/connect/connect";
import NameUbiScreenBase from "../../components/baseScreens/NameUbiScreenBase";

class NameUbiCreate extends React.Component {
    render() {
        return (
            <NameUbiScreenBase changeFormName = {this.props.changeFormName}
                               changeFormLocation = {this.props.changeFormLocation}
                               name = {this.props.name}
                               location = {this.props.location}
                               buttonNext = "Siguiente"
                               nextScreen={() => Actions.iniDate()}
                               previousScreen={() => Actions.home()}
                               enabledLocation = {true}
                               enabledName = {true}/>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        name: state.createActivityForm.name,
        location: state.createActivityForm.location
    }
}

const  mapDispatchToProps = (dispatch)=>{
    return {
        changeFormName: (value)=>dispatch(changeCreateActivityFormProperty("name", value)),
        changeFormLocation: (value)=>dispatch(changeCreateActivityFormProperty("loaction", value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NameUbiCreate);
