import React from 'react';
import {View} from 'react-native';
import HeaderIcon from '../components/basicComponents/HeaderIcon';
import {APP_COLORS} from "../constants/colors";

import { Actions } from 'react-native-router-flux';
import ConfigurationButton from "../components/basicComponents/ConfigurationButton";
import {
    changeBuscarActivityFormProperty,
} from "../actions";
import connect from "react-redux/es/connect/connect";

class HomeScreen extends React.Component {
    componentDidMount() {
        this.props.changeProp("fromDate", {});
        this.props.changeProp("toDate", {});
    }
    render() {
        const {viewStyle, viewButtons} = styles;
        return (
            <View style = {viewStyle}>
            <HeaderIcon headerText = {'JubilApp'}
                    iconName={ 'user'}
                    colorName={ APP_COLORS.color_neutral}
                    size = {75}
                    textSize = {35}
                    path={() => Actions.perfil()}
                    iconName2 = {'star'}
                    path2={() => Actions.veurevaloracions()}
                    size2 = {67}
                    iconSecond = {true}
            />
                <View style = {viewButtons}>
                    <ConfigurationButton iconName={ 'md-search'}
                                colorName={ APP_COLORS.color_button_1}
                                         colorIconName={ APP_COLORS.color_button_1}
                                heightStyle={150}
                                fontsizeStyle= {27}
                                widthStyle = {200}
                                isEvilType = {false}
                                path={() => Actions.fromDate()}
                                buttonText = {'BUSCAR ACTIVIDADES'}
                    />
                    <ConfigurationButton iconName={ 'md-eye'}
                                colorName={ APP_COLORS.color_header}
                                         colorIconName={ APP_COLORS.color_header}
                                heightStyle={150}
                                fontsizeStyle= {27}
                                widthStyle = {200}
                                path={() => Actions.llistesActs()}
                                isEvilType = {false}
                                buttonText = {'VISUALIZAR ACTIVIDADES'}/>

                    <ConfigurationButton iconName={'md-add-circle'}
                                colorName={ APP_COLORS.color_next}
                                         colorIconName={ APP_COLORS.color_next}
                                heightStyle={150}
                                fontsizeStyle= {27}
                                widthStyle = {200}
                                buttonText = {'CREAR ACTIVIDAD'}
                                path={() => Actions.name()}
                                         isEvilType = {false}
                    />
                </View>
            </View>
        );
    }
}
const styles ={
    viewStyle: {
        backgroundColor: APP_COLORS.color_neutral,
        width: '100%',
        height: '100%',
    },
    viewButtons: {
        flexDirection: 'column',
        flex: 2,
        backgroundColor: APP_COLORS.color_neutral,
        width: '100%',
        height: '100%',
        justifyContent: 'space-between'
    }
}

const mapStateToProps = (state) => {
    return {
        fromDate: state.buscarActivity.fromDate,
        toDate: state.buscarActivity.toDate,
    }
}

const  mapDispatchToProps = (dispatch)=>{
    return {
        changeProp: (name,value) => dispatch(changeBuscarActivityFormProperty(name, value)),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen)