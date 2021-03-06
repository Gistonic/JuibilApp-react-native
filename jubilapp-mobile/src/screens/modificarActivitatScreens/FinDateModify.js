import React from 'react';
import {changeCreateActivityFormProperty} from "../../actions/index";
import connect from "react-redux/es/connect/connect";
import DateScreenBase from "../../components/baseScreens/DateScreenBase";
import {Actions} from "react-native-router-flux";


class FinDateCreate extends React.Component {
    render(){
        return(
            <DateScreenBase date={this.props.dateEnd}
                            changeFormDate={this.props.changeFormDateEnd}
                            nextScreen ={() => Actions.modificaractivitat()}
                            previousScreen={() => Actions.iniDateMod()}
                            titleName="Modifica el final de la actividad"
                            buttonText = "Aceptar"/>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        dateEnd: state.createActivityForm.dateEnd,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeFormDateEnd: (value) => dispatch(changeCreateActivityFormProperty("dateEnd", value)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FinDateCreate);