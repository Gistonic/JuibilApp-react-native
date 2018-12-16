import React from 'react';
import {View} from 'react-native';
import HeaderIcon from '../../components/basicComponents/HeaderIcon';
import {APP_COLORS} from "../../constants/colors";
import ConfigurationButton from '../../components/basicComponents/ConfigurationButton';

import { Actions } from 'react-native-router-flux';
import Description from "../../components/basicComponents/Description";
import ButtonBack from "../../components/basicComponents/ButtonBack";
import NextButton from "../../components/basicComponents/NextButton";



export default class modificarPerfilScreen extends React.Component {
    constructor(props) {
        super(props)

        this.dibuixarBotons = this.dibuixarBotons.bind(this);
    }

    dibuixarBotons = () => {
        const botonsModificar= [
            {
                id:0,
                typeName: 'KILOMETRAGE', path: this.props.pathkm, icon: 'location'
            },
            {
                id:1,
                typeName: 'INTERESES PERSONALES', path: this.props.pathinteressos, icon: 'heart'
            }
        ];
        return botonsModificar.map((totsID)=> {
                return  (
                    <ConfigurationButton key = {totsID.id} iconName={totsID.icon}
                        colorName={ APP_COLORS.color_button_1}
                        colorIconName={ APP_COLORS.color_button_1}
                        heightStyle={150}
                        fontsizeStyle= {19}
                        widthStyle = {'43%'}
                        buttonText = {totsID.typeName}
                        isEvilType = {true}
                        path={totsID.path}/>
                );
            
        });
    }
    render() {
        const {viewStyle, viewButtons,container,container1} = styles;
        return (
            <View style = {viewStyle}>

                <HeaderIcon headerText = {this.props.textExpl}
                            iconName={ 'home'}
                            colorName={ APP_COLORS.color_neutral}
                            path={() => Actions.home()}
                            size = {60}
                            textSize = {31}
                            isEvilType = {true}
                />
                <Description textExpl = {this.props.fraseExpl}/>

                <View style = {viewButtons}>
                    <View style = {container}>
                        {this.dibuixarBotons()}
                    </View>
         
                </View>
                <View style = {container1}>
                    <ButtonBack buttonText = {'Finalizar'}
                                path = {() => Actions.perfil()}/>

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