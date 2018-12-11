import React from 'react';
import {
    changeActivityValue,
    changeCreateActivityFormProperty,
    fetchActivityValue,
    patchActivityValue
} from "../../actions/index";
import connect from "react-redux/es/connect/connect";
import {Actions} from "react-native-router-flux";
import ActDescriptionScreenBase from "../../components/baseScreens/ActDescriptionScreenBase";


class ActDescriptionModify extends React.Component {
    componentWillMount() {
        this.props.fetchActivityDescription(this.props.id)
    }
    render() {
        return (
            <ActDescriptionScreenBase changeFormDescription={this.props.changeActivityDescription}
                                      description = {this.props.description}
                                      buttonNext = "Aceptar"
                                      previousScreen={() => Actions.modificaractivitat()}
                                      nextScreen={() => this.props.patchActivityDescription(this.props.id, this.props.name)}/>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        id: state.listActivities.modifyActivityId,
        description: state.modifyActivity.value,
        isFetching: state.modifyActivity.isFetching,
        isPatching: state.modifyActivity.isPatching
    }
}

const  mapDispatchToProps = (dispatch)=>{
    return {
        changeActivityDescription: (value)=>dispatch(changeActivityValue(value)),
        patchActivityDescription: (id, value) => dispatch(patchActivityValue("description", id, value)),
        fetchActivityDescription: (id) => dispatch(fetchActivityValue("description",id))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ActDescriptionModify);
