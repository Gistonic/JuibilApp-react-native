import React from 'react';
import {
    changeBuscarActivityFormProperty,
    showError
} from "../../actions/index";
import connect from "react-redux/es/connect/connect";
import DateScreenBase from "../../components/baseScreens/DateScreenBase";
import {Actions} from "react-native-router-flux";


class SelectToDate extends React.Component {
    constructor(props) {
        super(props)

        this.changeToDateHandler = this.changeToDateHandler.bind(this)
    }

    changeToDateHandler() {
        if (!this.props.toDate.dateString) {
            this.props.errorFormToDate('Debes escoger una fecha')
        } else {
            Actions.buscar()
        }
    }

    render(){
        return(
            <DateScreenBase date={this.props.toDate}
                            changeFormDate={this.props.changeFormtoDate}
                            buttonText = "Siguiente"
                            previousScreen={() => Actions.fromDate()}
                            nextScreen={() => Actions.buscar()}
                            titleName="Selecciona el fin de búsqueda"
                            headerName = "Buscar Actividad"
                            to = {true}
                            minDate={this.props.fromDate}
            />
        )
    }
}
const mapStateToProps = (state) => {
    return {
        toDate: state.buscarActivity.toDate,
        fromDate: state.buscarActivity.fromDate
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeFormtoDate: (value) => dispatch(changeBuscarActivityFormProperty("toDate", value)),
        errorFormToDate: (error) => dispatch(showError(error))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectToDate);
