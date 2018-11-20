import React from 'react';
import {View} from 'react-native';
import HeaderIcon from '../components/HeaderIcon';
import {APP_COLORS} from "../constants/colors";

import { Actions } from 'react-native-router-flux';
import ConfigurationButton from "../components/ConfigurationButton";

export default class HomeScreen extends React.Component {
    render() {
        const {viewStyle, viewButtons} = styles;
        return (
            <View style = {viewStyle}>
            <HeaderIcon headerText = {'JubilApp'}
                    iconName={ 'user'}
                    colorName={ APP_COLORS.color_neutral}
                        size = {75}
                        textSize = {35}
                        path={() => Actions.modificaractivitat()}
            />
                <View style = {viewButtons}>
                    <ConfigurationButton iconName={ 'md-search'}
                                colorName={ APP_COLORS.color_button_1}
                                heightStyle={150}
                                fontsizeStyle= {27}
                                widthStyle = {200}
                                         isEvilType = {false}
                                buttonText = {'BUSCAR ACTIVIDADES'}
                    />
                    <ConfigurationButton iconName={ 'md-eye'}
                                colorName={ APP_COLORS.color_header}
                                heightStyle={150}
                                fontsizeStyle= {27}
                                widthStyle = {200}
                                         isEvilType = {false}
                                buttonText = {'VISUALIZAR ACTIVIDADES'}/>

                    <ConfigurationButton iconName={'md-add-circle'}
                                colorName={ APP_COLORS.color_next}
                                heightStyle={150}
                                fontsizeStyle= {27}
                                widthStyle = {200}
                                buttonText = {'CREAR ACTIVIDAD'}
                                path={() => Actions.nameUbi()}
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