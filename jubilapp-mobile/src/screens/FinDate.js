import React from 'react';
import {changeCreateActivityFormProperty} from "../actions";
import connect from "react-redux/es/connect/connect";
import DateScreenBase from "../components/DateScreenBase";
import {Actions} from "react-native-router-flux";


class FinDate extends React.Component {
    render(){
        return(
            <DateScreenBase date={this.props.dateEnd} changeFormDate={this.props.changeFormDateEnd} nextScreen ={() => Actions.iniHour()} titleName="final"/>
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

export default connect(mapStateToProps, mapDispatchToProps)(FinDate);