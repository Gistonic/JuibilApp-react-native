import React from 'react';
import {View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {APP_COLORS} from "../../constants/colors";

import {Actions} from 'react-native-router-flux';

import Header from "../basicComponents/Header";
import Description from "../basicComponents/Description";
import ButtonBack from "../basicComponents/ButtonBack";
import NextButton from "../basicComponents/NextButton";
import {LocaleConfig} from 'react-native-calendars';
import {changeCreateActivityFormProperty} from "../../actions/index";
import connect from "react-redux/es/connect/connect";
import Formulari from "../basicComponents/Formulari";

LocaleConfig.locales['es'] = {
    monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    monthNamesShort: ['Ene.', 'Feb.', 'Mar.', 'Abr.', 'May.', 'Jun.', 'Jul.', 'Ago', 'Sep.', 'Oct.', 'Nov.', 'Dic.'],
    dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    dayNamesShort: ['Do.', 'Lu.', 'Ma.', 'Mi.', 'Ju.', 'Vi.', 'Sa.']
};

LocaleConfig.defaultLocale = 'es';

export default class DateScreenBase extends React.Component {

    select(day) {
        const { changeFormDate} = this.props;
        changeFormDate(day.dateString)
    }

    render() {
        const {viewStyle, viewButtons, container, calendarStyle} = styles;
        const {date} = this.props;
        const markedDay = {
            [date]: {
                selected: true,
                marked: true,
                customStyles: {
                    container: {
                        backgroundColor: APP_COLORS.color_button_1,
                    },
                    text: {
                        color: APP_COLORS.color_neutral,
                    },
                },
            }
        }
        return (
            <View style={viewStyle}>
                <Header headerText={this.props.headerName}/>
                <View style={viewButtons}>
                    <View style={{paddingLeft: '8%', paddingRight: '8%'}}>
                        <Description textExpl={`Define el ${this.props.titleName} de la actividad`}/>
                    </View>
                    <Calendar style={calendarStyle}
                              onDayPress={this.select.bind(this)}
                              markingType={'custom'}
                              markedDates={markedDay}
                              minDate={Date()}
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
                <View style={container}>
                    <ButtonBack buttonText={'Atrás'}
                                path={this.props.previousScreen}/>
                    <NextButton buttonText={this.props.buttonNext}
                                path={this.props.nextScreen}/>
                </View>
            </View>
        );
    }
}

const styles = {
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

