import React from 'react';
import {View} from 'react-native';
import HeaderIcon from '../components/HeaderIcon';
import {APP_COLORS} from "../constants/colors";
import IconButton from '../components/IconButton';

import { Actions } from 'react-native-router-flux';

export default class HomeScreen extends React.Component {
    render() {
        const {viewStyle, viewButtons} = styles;
        return (
            <View style = {viewStyle}>
            <HeaderIcon headerText = {'JubilApp'}
                    iconName={ 'user'}
                    colorName={ APP_COLORS.color_neutral}
                        path={() => Actions.modificaractivitat()}
            />
                <View style = {viewButtons}>
                    <IconButton iconName={ 'md-search'}
                                colorName={ APP_COLORS.color_button_1}
                                buttonText = {'BUSCAR ACTIVIDADES'}
                    />
                    <IconButton iconName={ 'md-eye'}
                                colorName={ APP_COLORS.color_header}
                                buttonText = {'VISUALIZAR ACTIVIDADES'}/>
                    <IconButton iconName={'md-add-circle'}
                                colorName={ APP_COLORS.color_next}
                                buttonText = {'CREAR ACTIVIDAD'}
                                path={() => Actions.nameUbi()}
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