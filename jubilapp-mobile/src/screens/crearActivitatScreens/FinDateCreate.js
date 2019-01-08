import React from 'react';
import {
    changeCreateActivityFormProperty,
    showError
} from "../../actions/index";
import connect from "react-redux/es/connect/connect";
import DateScreenBase from "../../components/baseScreens/DateScreenBase";
import {Actions} from "react-native-router-flux";


class FinDateCreate extends React.Component {
    constructor(props) {
        super(props)

        this.changeEndDateHandler = this.changeEndDateHandler.bind(this)
    }

    changeEndDateHandler() {
        if (!this.props.dateEnd.dateString) {
            this.props.errorFormDateEnd('Debes escojer un día')
        } else {
            Actions.iniHour()
        }
    }

    render(){
        console.log(this.props.error)
        return(
            <DateScreenBase date={this.props.dateEnd}
                            changeFormDate={this.props.changeFormDateEnd}
                            nextScreen ={this.changeEndDateHandler}
                            previousScreen={() => this.props.navigation.goBack()}
                            titleName="Define el final de la actividad"
                            buttonText = "Siguiente"
                            headerName = "Crear Actividad"
                            minDate = {this.props.dateIni} />
        )
    }
}
const mapStateToProps = (state) => {
    return {
        dateIni: state.createActivityForm.dateIni,
        dateEnd: state.createActivityForm.dateEnd
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeFormDateEnd: (value) => dispatch(changeCreateActivityFormProperty("dateEnd", value)),
        errorFormDateEnd: (error) => dispatch(showError(error))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FinDateCreate);