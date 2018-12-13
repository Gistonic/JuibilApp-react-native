import React from 'react';
import {changeBuscarActivityFormProperty} from "../../actions/index";
import connect from "react-redux/es/connect/connect";
import DateScreenBase from "../../components/baseScreens/DateScreenBase";
import {Actions} from "react-native-router-flux";


class SelectFromDate extends React.Component {
    render(){
        return(
            <DateScreenBase date={this.props.fromDate}
                            changeFormDate={this.props.changeFormfromDate}
                            buttonNext = "Siguiente"
                            previousScreen={() => Actions.home()}
                            nextScreen={() => Actions.toDate()}
                            titleName="Selecciona la fecha de inicio de búsqueda"
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectFromDate);
