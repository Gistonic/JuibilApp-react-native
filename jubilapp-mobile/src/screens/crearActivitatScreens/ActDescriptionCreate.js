import React from 'react';
import {changeCreateActivityFormProperty} from "../../actions/index";
import connect from "react-redux/es/connect/connect";
import {Actions} from "react-native-router-flux";
import ActDescriptionScreenBase from "../../components/baseScreens/ActDescriptionScreenBase";


class ActDescriptionCreate extends React.Component {
    render() {
        return (
            <ActDescriptionScreenBase changeFormDescription={this.props.changeFormDescription}
                            description = {this.props.description}
                            buttonText = "Siguiente"
                            previousScreen={() => this.props.navigation.goBack()}
                            nextScreen={() => Actions.seltype()}
                            headerName = "Crear Actividad"/>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        description: state.createActivityForm.description,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeFormDescription: (value) => dispatch(changeCreateActivityFormProperty("description", value)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActDescriptionCreate);
