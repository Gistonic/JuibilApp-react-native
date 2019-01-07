import React from 'react';
import {View} from 'react-native';
import HeaderIcon from '../../components/basicComponents/HeaderIcon';
import {APP_COLORS} from "../../constants/colors";


import { Actions } from 'react-native-router-flux';
import ConfigurationButton from "../../components/basicComponents/ConfigurationButton";
import ButtonBack from "../../components/basicComponents/ButtonBack";

export default class ListsActivitiesScreen extends React.Component {
    render() {
        const {viewStyle, viewButtons} = styles;
        return (
            <View style = {viewStyle}>
                <HeaderIcon headerText = {'Visualizar'}
                            iconName={ 'home'}
                            colorName={ APP_COLORS.color_neutral}
                            size = {75}
                            textSize = {35}
                            path={() => Actions.home()}
                />
                <View style = {viewButtons}>
                    <ConfigurationButton iconName={ 'ios-checkmark-circle'}
                                         colorName={ APP_COLORS.color_next}
                                         colorIconName={ APP_COLORS.color_next}
                                         heightStyle={120}
                                         fontsizeStyle= {28}
                                         widthStyle = {200}
                                         isEvilType = {false}
                                         buttonText = {'APUNTADAS'}
                                         path={() => Actions.activitatlist({url: "/attending", att: "yes", headerText: "Apuntadas"})}
                    />
                    <ConfigurationButton iconName={ 'ios-close-circle'}
                                         colorName={ APP_COLORS.color_header}
                                         colorIconName={ APP_COLORS.color_header}
                                         heightStyle={120}
                                         fontsizeStyle= {28}
                                         widthStyle = {200}
                                         isEvilType = {false}
                                         buttonText = {'NO'+ '\n'+'APUNTADAS'}
                                         path={() => Actions.activitatlist({url: "/attending", att: "no", headerText: "Rechazadas"})}
                    />

                    <ConfigurationButton iconName={'ios-add-circle'}
                                         colorName={ APP_COLORS.color_button_1}
                                         colorIconName={ APP_COLORS.color_button_1}
                                         heightStyle={120}
                                         fontsizeStyle= {28}
                                         widthStyle = {200}
                                         buttonText = {'CREADAS'}
                                         path={() => Actions.activitatlist({url: "/own", headerText: "Creadas"})}
                                         isEvilType = {false}
                    />
                    <ButtonBack path = {() => Actions.home()}
                                colorBoto = {APP_COLORS.color_header}
                                buttonText = {"Finalizar"}
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
        backgroundColor: APP_COLORS.color_neutral,
        width: '100%',
        height: '100%',
        justifyContent: 'space-between',
        paddingBottom: '5%'
    }
}