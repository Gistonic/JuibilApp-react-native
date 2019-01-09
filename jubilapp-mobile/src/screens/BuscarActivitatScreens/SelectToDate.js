import React from 'react';
<<<<<<< HEAD
import {
    changeBuscarActivityFormProperty,
    showError
} from "../../actions/index";
=======
import {changeBuscarActivityFormProperty} from "../../actions/index";
>>>>>>> 6daa4955a8f57c422a9a6b9b05836b5f278ef054
import connect from "react-redux/es/connect/connect";
import DateScreenBase from "../../components/baseScreens/DateScreenBase";
import {Actions} from "react-native-router-flux";


class SelectToDate extends React.Component {
<<<<<<< HEAD
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

=======
>>>>>>> 6daa4955a8f57c422a9a6b9b05836b5f278ef054
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
<<<<<<< HEAD
                            minDate={minDate}
=======
>>>>>>> 6daa4955a8f57c422a9a6b9b05836b5f278ef054
            />
        )
    }
}
const mapStateToProps = (state) => {
    return {
        toDate: state.buscarActivity.toDate,
<<<<<<< HEAD
        fromDate: state.buscarActivity.fromDate
=======
>>>>>>> 6daa4955a8f57c422a9a6b9b05836b5f278ef054
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeFormtoDate: (value) => dispatch(changeBuscarActivityFormProperty("toDate", value)),
<<<<<<< HEAD
        errorFormToDate: (error) => dispatch(showError(error))
=======
>>>>>>> 6daa4955a8f57c422a9a6b9b05836b5f278ef054
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectToDate);
