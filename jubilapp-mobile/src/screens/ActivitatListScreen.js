import React from 'react';
import {View} from 'react-native';
import {APP_COLORS} from "../constants/colors";
import Header from "../components/Header";
import ActivitatItem from "../components/ActivitatItem";

export default class ActivitatListScreen extends React.Component {
    render() {
        const {viewStyle} = styles;
        return (
            <View style = {viewStyle}>

                <Header headerText = {'Activitats Creades'}/>
                <ActivitatItem nomActivitat = {'Café Casa Maria'}/>

            </View>
        );
    }
}
const styles ={
    viewStyle: {
        backgroundColor: APP_COLORS.color_neutral,
        width: '100%',
        height: '100%',

    }
}