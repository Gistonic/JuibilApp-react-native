import React from 'react';
import {
    changeBuscarActivityFormProperty,
    errorBuscarActivityFormProperty,
    resetErrorBuscarActivityFormProperty
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
            setTimeout(() => {
                this.props.resetErrorFormToDate()
            }, 3000)
        } else {
            Actions.buscar()
        }
    }

    render(){
        const minDate = this.props.fromDate.dateString ? this.props.fromDate : new Date()
        return(
            <DateScreenBase date={this.props.toDate}
                            changeFormDate={this.props.changeFormtoDate}
                            buttonText = "Siguiente"
                            previousScreen={() => Actions.fromDate()}
                            nextScreen={this.changeToDateHandler}
                            titleName="Selecciona el fin de búsqueda"
                            headerName = "Buscar Actividad"
                            to = {true}
                            error={this.props.error}
                            minDate={minDate}
            />
        )
    }
}
const mapStateToProps = (state) => {
    return {
        toDate: state.buscarActivity.toDate,
        fromDate: state.buscarActivity.fromDate,
        error: state.buscarActivity.errors.toDate
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeFormtoDate: (value) => dispatch(changeBuscarActivityFormProperty("toDate", value)),
        errorFormToDate: (error) => dispatch(errorBuscarActivityFormProperty("toDate", error)),
        resetErrorFormToDate: () => dispatch(resetErrorBuscarActivityFormProperty("toDate"))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectToDate);
