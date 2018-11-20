import React from 'react';
import {View} from 'react-native';
import {APP_COLORS} from "../constants/colors";
import Header from "../components/Header";
import ActivitatItem from "../components/ActivitatItem";
import {Actions} from "react-native-router-flux";
import HeaderIcon from "../components/HeaderIcon";

export default class ActivitatListScreen extends React.Component {
    render() {
        const {viewStyle,activitatStyle} = styles;
        return (
            <View style = {viewStyle}>

                <HeaderIcon headerText = { 'Activitats Creades'}
                            iconName={ 'home'}
                            colorName={ APP_COLORS.color_neutral}
                            path={() => Actions.home()}
                            size = {60}
                            textSize = {31}
                            isEvilType = {true}
                />
                <ActivitatItem nomActivitat = {'Café Casa Maria'} style = {activitatStyle}/>
                <ActivitatItem nomActivitat = {'Café Casa Maria'} style = {activitatStyle}/>
                <ActivitatItem nomActivitat = {'Café Casa Maria'} style = {activitatStyle}/>
                <ActivitatItem nomActivitat = {'Café Casa Maria'} style = {activitatStyle}/>

            </View>
        );
    }
}
const styles ={
    viewStyle: {
        backgroundColor: APP_COLORS.color_neutral,
        width: '100%',
        height: '100%'
    },
    activitatStyle: {
        paddingTop: '5%'
    }
}