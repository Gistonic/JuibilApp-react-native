import React from 'react';
import {
    changeBuscarActivityFormProperty,
    showError
} from "../../actions/index";
import connect from "react-redux/es/connect/connect";
import DateScreenBase from "../../components/baseScreens/DateScreenBase";
import {Actions} from "react-native-router-flux";


class SelectFromDate extends React.Component {
    constructor(props) {
        super(props)

        this.changeFromDateHandler = this.changeFromDateHandler.bind(this)
    }

    changeFromDateHandler() {
        if (!this.props.fromDate.dateString) {
            this.props.errorFormFromDate('Debes escoger una fecha')
        } else {
            Actions.toDate()
        }
    }

    render(){
        return(
            <DateScreenBase date={this.props.fromDate}
                            changeFormDate={this.props.changeFormfromDate}
                            buttonText = "Siguiente"
                            previousScreen={() => Actions.home()}
                            nextScreen={() => Actions.toDate()}
                            titleName="Selecciona el inicio de búsqueda"
                            headerName = "Buscar Actividad"/>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        fromDate: state.buscarActivity.fromDate
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeFormfromDate: (value)=> dispatch(changeBuscarActivityFormProperty("fromDate",value)),
        errorFormFromDate: (error) => dispatch(showError(error))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectFromDate);
