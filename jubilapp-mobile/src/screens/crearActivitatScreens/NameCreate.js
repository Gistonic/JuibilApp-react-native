import React from 'react';
import { Actions } from 'react-native-router-flux';
import {
    changeCreateActivityFormProperty,
    errorCreateActivityFormProperty,
    resetErrorCreateActivityFormProperty
} from "../../actions/index";
import connect from "react-redux/es/connect/connect";
import NameScreenBase from "../../components/baseScreens/NameScreenBase";

class NameCreate extends React.Component {
    constructor(props) {
        super(props)

        this.changeFormNameHandler = this.changeFormNameHandler.bind(this)
    }
    changeFormNameHandler() {

        const { name } = this.props
        if (!name || name === ' ') {
            this.props.errorFormName('El nombre no puede estar vacío')
            setTimeout(() => {
                this.props.resetErrorFormName()
            }, 3000)
        } else {
            Actions.ubi()
        }
    }
    render() {
        return (
            <NameScreenBase changeFormName = {this.props.changeFormName}
                            name = {this.props.name}
                            buttonText = "Siguiente"
                            nextScreen={this.changeFormNameHandler}
                            previousScreen={() => Actions.home()}
                            enabledLocation = {true}
                            enabledName = {true}
                            headerName = "Crear Actividad"
                            hideUbi = {false}
                            error = {this.props.error}
            />
            
            
        )
    }
}
const mapStateToProps = (state) => {
    return {
        name: state.createActivityForm.name,
        error: state.createActivityForm.errors.name
    }
}

const  mapDispatchToProps = (dispatch)=>{
    return {
        changeFormName: (value)=>dispatch(changeCreateActivityFormProperty("name", value)),
        errorFormName: (error) => dispatch(errorCreateActivityFormProperty("name", error)),
        resetErrorFormName: () => dispatch(resetErrorCreateActivityFormProperty("name"))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NameCreate);
