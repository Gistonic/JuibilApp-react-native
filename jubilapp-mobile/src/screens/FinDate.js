import React from 'react';
import {View} from 'react-native';
import { Calendar } from 'react-native-calendars';
import {APP_COLORS} from "../constants/colors";

import { Actions } from 'react-native-router-flux';

import Header from "../components/Header";
import Description from "../components/Description";
import ButtonBack from "../components/ButtonBack";
import NextButton from "../components/NextButton";
import {LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['es'] = {
    monthNames: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
    monthNamesShort: ['Ene.','Feb.','Mar.','Abr.','May.','Jun.','Jul.','Ago','Sep.','Oct.','Nov.','Dic.'],
    dayNames: ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'],
    dayNamesShort: ['Do.','Lu.','Ma.','Mi.','Ju.','Vi.','Sa.']
};

LocaleConfig.defaultLocale = 'es';

export default class IniDate extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            markedDay:{}
        }
    }
    select(day) {
        const markedDay = {[day.dateString]:{selected: true, marked: true, customStyles: {
                    container: {
                        backgroundColor: APP_COLORS.color_button_1,
                    },
                    text: {
                        color: APP_COLORS.color_neutral,
                    },
                },}}
        this.setState({markedDay: markedDay})
    }
    render() {
        const {viewStyle, viewButtons, container, calendarStyle} = styles;
        return (
            <View style = {viewStyle}>
                <Header headerText = {'Crear Actividad'}/>
                <View style = {viewButtons}>
                    <View style={{paddingLeft: '8%', paddingRight: '8%'}}>
                    <Description textExpl={ 'Define el final de la actividad'}/>
                    </View>
                    <Calendar style = {calendarStyle}
                              onDayPress={this.select.bind(this)}
                              markingType={'custom'}
                              markedDates={this.state.markedDay}
                              minDate = {Date()}
                              theme={{
                                  textSectionTitleColor: 'black',
                                  selectedDayTextColor: '#ffffff',
                                  todayTextColor: APP_COLORS.color_header,
                                  dayTextColor: 'black',
                                  textDisabledColor: '#d9e1e8',
                                  arrowColor: APP_COLORS.color_header,
                                  monthTextColor: 'black',
                                  textMonthFontWeight: 'bold',
                                  textDayFontSize: 22,
                                  textMonthFontSize: 30,
                                  textDayHeaderFontSize: 18,
                              }}
                    />
                </View>
                <View style = {container}>
                    <ButtonBack buttonText = {'Atrás'}
                                path = {() => Actions.iniDate()}/>
                    <NextButton buttonText = {'Siguiente'}
                                path = {() => Actions.iniHour()}/>
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
    },
    container: {
        flexDirection: 'row',
        paddingBottom: '7%',
        justifyContent: 'space-between',
        paddingRight: '5%',
        paddingLeft: '5%',

    },
    calendarStyle: {
        paddingBottom: '10%',
    }
}
