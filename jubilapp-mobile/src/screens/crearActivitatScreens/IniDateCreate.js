import React from 'react';
import {
    changeCreateActivityFormProperty,
    errorCreateActivityFormProperty,
    resetErrorCreateActivityFormProperty
} from "../../actions/index";
import connect from "react-redux/es/connect/connect";
import DateScreenBase from "../../components/baseScreens/DateScreenBase";
import {Actions} from "react-native-router-flux";


class IniDateCreate extends React.Component {
    constructor(props) {
        super(props)

        this.changeIniDateHandler = this.changeIniDateHandler.bind(this)
    }

    changeIniDateHandler() {
        if (!this.props.dateIni.dateString) {
            this.props.errorFormDateIni('Debes escojer un día')
            setTimeout(() => {
                this.props.resetErrorFormDateIni()
            }, 3000)
        } else {
            Actions.finDate()
        }
    }

    render() {
        return(
            <DateScreenBase date={this.props.dateIni}
                            changeFormDate={this.props.changeFormDateIni}
                            buttonText = "Siguiente"
                            previousScreen={() => Actions.ubi()}
                            nextScreen={this.changeIniDateHandler}
                            titleName= "Define el inicio de la actividad"
                            headerName = "Crear Actividad"
                            error={this.props.error}/>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        dateIni: state.createActivityForm.dateIni,
        error: state.createActivityForm.errors.dateIni
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeFormDateIni: (value) => dispatch(changeCreateActivityFormProperty("dateIni", value)),
        errorFormDateIni: (error) => dispatch(errorCreateActivityFormProperty("dateIni", error)),
        resetErrorFormDateIni: () => dispatch(resetErrorCreateActivityFormProperty("dateIni"))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IniDateCreate);
