import React from 'react';
import {changeBuscarActivityFormProperty} from "../../actions/index";
import connect from "react-redux/es/connect/connect";
import DateScreenBase from "../../components/baseScreens/DateScreenBase";
import {Actions} from "react-native-router-flux";


class SelectToDate extends React.Component {
    render(){
        return(
            <DateScreenBase date={this.props.toDate}
                            changeFormDate={this.props.changeFormtoDate}
                            buttonText = "Siguiente"
                            previousScreen={() => Actions.fromDate()}
                            nextScreen={() => Actions.buscar()}
                            titleName="Selecciona el fin de búsqueda"
                            headerName = "Buscar Actividad"/>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        toDate: state.buscarActivity.toDate,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeFormtoDate: (value) => dispatch(changeBuscarActivityFormProperty("toDate", value)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectToDate);
