import React from 'react';
import { Actions } from 'react-native-router-flux';
import connect from "react-redux/es/connect/connect";
import NameUbiScreenBase from "../../components/baseScreens/NameUbiScreenBase";
import {changeActivityValue, patchActivityValue, fetchActivityValue} from "../../actions/modifyActivityActions";

class NameModify extends React.Component {
    componentWillMount() {
        this.props.fetchActivityName()
    }
    render() {
        return (
            <NameUbiScreenBase changeFormName = {this.props.changeActivityName}
                               name = {this.props.name}
                               location = {this.props.location}
                               buttonNext= "Aceptar"
                               nextScreen={() => this.props.patchActivityName(this.props.name)}
                               previousScreen={() => Actions.modificaractivitat()}
                               enabledName = {!this.props.isFetching && !this.props.isPatching}
                               hideUbi = {true} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        name: state.modifyActivity.value,
        isFetching: state.modifyActivity.isFetching,
        isPatching: state.modifyActivity.isPatching
    }
}

const  mapDispatchToProps = (dispatch)=>{
    return {
        changeActivityName: (value)=>dispatch(changeActivityValue(value)),
        patchActivityName: (value) => dispatch(patchActivityValue("name", value)),
        fetchActivityName: () => fetchActivityValue("name")
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NameModify);
