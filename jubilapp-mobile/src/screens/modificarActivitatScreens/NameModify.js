import React from 'react';
import { Actions } from 'react-native-router-flux';
import connect from "react-redux/es/connect/connect";
import NameScreenBase from "../../components/baseScreens/NameScreenBase";
import {changeActivityValue, patchActivityValue, fetchActivityValue} from "../../actions";


class NameModify extends React.Component {
    componentWillMount() {
        this.props.fetchActivityName(this.props.id)
    }
    render() {

        return (
            <NameScreenBase changeFormName = {this.props.changeActivityName}
                            changeFormLocation = {()=>{}}
                            name = {this.props.name}
                            buttonText= "Aceptar"
                            nextScreen={() => this.props.patchActivityName(this.props.id, this.props.name)}
                            previousScreen={() => Actions.modificaractivitat()}
                            enabledName = {!this.props.isFetching && !this.props.isPatching}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        id: state.listActivities.modifyActivityId,
        name: state.modifyActivity.value,
        isFetching: state.modifyActivity.isFetching,
        isPatching: state.modifyActivity.isPatching
    }
}

const  mapDispatchToProps = (dispatch)=>{
    return {
        changeActivityName: (value)=>dispatch(changeActivityValue(value)),
        patchActivityName: (id, value) => dispatch(patchActivityValue("name", id, value)),
        fetchActivityName: (id) => dispatch(fetchActivityValue("name",id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NameModify);
