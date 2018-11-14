import React from 'react';
import {View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {APP_COLORS} from "../constants/colors";

import {Actions} from 'react-native-router-flux';

import Header from "../components/Header";
import Description from "../components/Description";
import ButtonBack from "../components/ButtonBack";
import NextButton from "../components/NextButton";
import {LocaleConfig} from 'react-native-calendars';
import {changeCreateActivityFormProperty} from "../actions";
import connect from "react-redux/es/connect/connect";
import Formulari from "../components/Formulari";

LocaleConfig.locales['es'] = {
    monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    monthNamesShort: ['Ene.', 'Feb.', 'Mar.', 'Abr.', 'May.', 'Jun.', 'Jul.', 'Ago', 'Sep.', 'Oct.', 'Nov.', 'Dic.'],
    dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    dayNamesShort: ['Do.', 'Lu.', 'Ma.', 'Mi.', 'Ju.', 'Vi.', 'Sa.']
};

LocaleConfig.defaultLocale = 'es';

class IniDate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: ""
        }
    }

    select(day) {
        const { changeFormDateIni} = this.props;
        changeFormDateIni(day.dateString)
    }

    render() {
        const {viewStyle, viewButtons, container, calendarStyle} = styles;
        const {dateIni} = this.props;
        const markedDay = {
           [dateIni]: {
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
                <Header headerText={'Crear Actividad'}/>
                <View style={viewButtons}>
                    <View style={{paddingLeft: '8%', paddingRight: '8%'}}>
                        <Description textExpl={'Define el inicio de la actividad'}/>
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
                                path={() => Actions.nameUbi()}/>
                    <NextButton buttonText={'Siguiente'}
                                path={() => Actions.finDate()}/>
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
const mapStateToProps = (state) => {
    return {
        dateIni: state.createActivityForm.dateIni,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeFormDateIni: (value) => dispatch(changeCreateActivityFormProperty("dateIni", value)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IniDate);
