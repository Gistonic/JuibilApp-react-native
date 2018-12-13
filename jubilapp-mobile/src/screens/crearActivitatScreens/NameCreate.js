import React from 'react';
import { Actions } from 'react-native-router-flux';
import {changeCreateActivityFormProperty} from "../../actions/index";
import connect from "react-redux/es/connect/connect";
import NameScreenBase from "../../components/baseScreens/NameScreenBase";

class NameCreate extends React.Component {
    render() {
        return (
            <NameScreenBase changeFormName = {this.props.changeFormName}
                            name = {this.props.name}
                            buttonNext = "Siguiente"
                            nextScreen={() => Actions.ubi()}
                            previousScreen={() => Actions.home()}
                            enabledLocation = {true}
                            enabledName = {true}
                            headerName = "Crear Actividad"
                            hideUbi = {false} />
        )
    }
}
const mapStateToProps = (state) => {
    return {
        name: state.createActivityForm.name,
    }
}

const  mapDispatchToProps = (dispatch)=>{
    return {
        changeFormName: (value)=>dispatch(changeCreateActivityFormProperty("name", value)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NameCreate);
