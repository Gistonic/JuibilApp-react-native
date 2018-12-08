import React from 'react';
import {View} from 'react-native';
import HeaderIcon from '../components/basicComponents/HeaderIcon';
import {APP_COLORS} from "../constants/colors";
import ConfigurationButton from '../components/basicComponents/ConfigurationButton';

import { Actions } from 'react-native-router-flux';
import Description from "../components/basicComponents/Description";
import ButtonBack from "../components/basicComponents/ButtonBack";
import NextButton from "../components/basicComponents/NextButton";


const botonsModificar= [
    {
        id:0,
        typeName: 'NOMBRE ACTIVIDAD', path: 'Actions.nameMod()', icon: 'pencil'
    },
    {
        id:1,
        typeName: 'DESCRIPCION ACTIVIDAD', path: 'Actions.actdescrMod()', icon: 'comment'
    },
    {
        id:2,
        typeName: 'FECHA ACTIVIDAD', path: 'Actions.iniDateMod()', icon: 'calendar'
    },
    {
        id:3,
        typeName: 'HORA ACTIVIDAD', path: 'Actions.iniHourMod()', icon: 'clock'
    }
]


const dibuixarBotons = (num) => {
        //el num es per distingir a quina columna aniran, la dreta es per tots aquells que tenen id parell i lesquerra pels ids imparells
    return botonsModificar.map((totsID)=> {
        if((totsID.id %2) == num) {
            return  (
                <ConfigurationButton key = {totsID.id} iconName={totsID.icon}
                    colorName={ APP_COLORS.color_button_1}
                                     colorIconName={ APP_COLORS.color_button_1}
                    heightStyle={'90%'}
                    fontsizeStyle= {19}
                    widthStyle = {'63%'}
                    buttonText = {totsID.typeName}
                    isEvilType = {true}/>
            );
        }
    }
    );
}


export default class ModificarActivitatScreen extends React.Component {
    render() {
        const {viewStyle, viewButtons,container,container1} = styles;
        return (
            <View style = {viewStyle}>

                <HeaderIcon headerText = { 'Modificar Activitat'}
                            iconName={ 'home'}
                            colorName={ APP_COLORS.color_neutral}
                            path={() => Actions.home()}
                            size = {60}
                            textSize = {31}
                            isEvilType = {true}
                />
                <Description textExpl = {'Que quieres modificar?'}/>

                <View style = {viewButtons}>
                    <View style = {container}>
                        {dibuixarBotons(0)}
                    </View>
                    <View style = {container}>
                        {dibuixarBotons(1)}
                    </View>
                    
                        
                </View>
                <View style = {container1}>
                    <ButtonBack buttonText = {'Cancelar'}
                                path = {() => Actions.home()}/>
                    <NextButton buttonText = {'Finalizar'}
                                path = {() => Actions.home()}/>
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
    container1: {
        flexDirection: 'row',
        paddingBottom: '7%',
        justifyContent: 'space-between',
        paddingRight: '5%',
        paddingLeft: '5%',
        paddingTop: '8%'
    },
    viewButtons: {
        flexDirection: 'row',
        flex: 2,
        backgroundColor: APP_COLORS.color_neutral
    },
    container: {
        flex:3,
        backgroundColor: APP_COLORS.color_neutral,
        flexDirection: 'column',
        width: '100%',
        height: '100%'
    }
}