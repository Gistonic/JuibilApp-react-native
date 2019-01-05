import React from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import { CheckBox } from 'react-native-elements';
import {APP_COLORS} from "../../constants/colors";
import HeaderIcon from '../../components/basicComponents/HeaderIcon';

import { Actions } from 'react-native-router-flux';
import Description from "../../components/basicComponents/Description";
import ButtonBack from "../../components/basicComponents/ButtonBack";
import {changeCreateActivityFormProperty} from "../../actions/index";
import connect from "react-redux/es/connect/connect";
import { createActivity, changeType } from '../../actions/index';
import {pressPopup} from "../../pressPopup";

class SelectTypeCreate extends React.Component {
    constructor(props) {
        super(props)
        this.onNextPressed = this.onNextPressed.bind(this)
    }
    _onPressButton(interes) {
        this.props.changeType(interes.id);
    }


    onNextPressed() {
        const activityInfo = {

            name: this.props.name,
            //location:this.props.Location,
            type:this.props.type,
            startDate:new Date(this.props.dateIni.year, this.props.dateIni.month, this.props.dateIni.day, this.props.hourIni, this.props.minuteIni),
            endDate:new Date(this.props.dateEnd.year, this.props.dateEnd.month, this.props.dateEnd.day, this.props.hourEnd, this.props.minuteEnd),
            description:this.props.description,
            longitude: this.props.longitude,
            latitude: this.props.latitude,
        };

        this.props.createActivity(activityInfo)
    }

    dibuixarInteressos(num)
    {
        //el num es per distingir a quina columna aniran, la dreta es per tots aquells que tenen id parell i lesquerra pels ids imparells
        return this.props.interessos_info.map((totsID)=> {
            if((totsID.id %2) == num) {
                return  (<TouchableOpacity key={totsID.id} style={styles.buttonStyle} onPress={this._onPressButton.bind(this,totsID)}>
                            <ImageBackground source={totsID.icon} style={styles.imageStyle}/>
                            <CheckBox key={totsID.id} title = {totsID.nom} checked = {this.props.interessos_info[totsID.id].estat} style = {styles.checkBoxStyle} onPress={this._onPressButton.bind(this,totsID)}/>
                        </TouchableOpacity>
                        );
            }
        });
    }

    render() {
        const {containerColumna,viewStyle, container, container1, viewInteressos} = styles;
        return (
            <View style = {viewStyle}>

                <HeaderIcon headerText = "Crear Actividad"
                                iconName={ 'home'}
                                colorName={ APP_COLORS.color_neutral}
                                size = {75}
                                textSize = {35}
                                path={() => pressPopup('Salir de Crear Actividad', 'Desea cancelar la creación de esta actividad y perder todos los cambios?')}
                />
                <Description textExpl = {'Selecciona el tipo'}/>
                <View style = {container}>
                        <View style = {containerColumna}>
                            {this.dibuixarInteressos(0)}
                        </View>
                        <View style = {containerColumna}>
                            {this.dibuixarInteressos(1)}
                        </View>
                </View>

                <View style = {container1}>
                    <ButtonBack buttonText = {'Atrás'}
                                path = {() => Actions.actdescr()}
                                colorBoto = {APP_COLORS.color_back}/>
                    <ButtonBack buttonText = {'Finalizar'}
                                path = {this.onNextPressed}
                                colorBoto = {APP_COLORS.color_next}/>
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
        flexDirection: 'column'
    },
    containerColumna: {
        width: '50%',
        flexDirection: 'column'
    },
    container: {
        width: '100%',
        flex:1,
        flexDirection: 'row',
        marginTop: '5%'
    },
    container1: {
        flexDirection: 'row',
        paddingBottom: '7%',
        justifyContent: 'space-between',
        paddingRight: '5%',
        paddingLeft: '5%',
    },
    buttonStyle:{
        justifyContent: 'center',
        alignItems: 'center', //horizontal
        height: '35.5%',
        width: '90%',
        paddingLeft: '5%',
        paddingRight: '5%',
        paddingBottom: '2%',
        marginStart: '5%',
        marginEnd: '5%',
    },
    imageStyle: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        borderColor: APP_COLORS.color_header,
    },
    textStyle:{
        fontSize:20,
        color: 'black',
        fontFamily: 'sans-serif-condensed',
        fontWeight: 'bold'
    },
    textSelectedStyle: {
        fontSize:17,
        color: APP_COLORS.color_header,
        fontFamily: 'sans-serif-condensed',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    checkBoxStyle:{
        center:true,
    },
    viewInteressos: {
        flex: 6,
        flexDirection:'column',
        justifyContent: 'space-between',
    }
}
const mapStateToProps = (state) => {
    return {
        name: state.createActivityForm.name,
        latitude:state.createActivityForm.latitude,
        longitude:state.createActivityForm.longitude,
        dateIni: state.createActivityForm.dateIni,
        dateEnd:state.createActivityForm.dateEnd,
        hourEnd:state.createActivityForm.hourEnd,
        minuteEnd: state.createActivityForm.minuteEnd,
        hourIni:state.createActivityForm.hourIni,
        minuteIni: state.createActivityForm.minuteIni,
        description:state.createActivityForm.description,
        token:state.auth.token,
        interessos_info: state.createActivityForm.interessos_info,
        type: state.createActivityForm.type

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        createActivity: (activityInfo)=> dispatch(createActivity(activityInfo)),
        changeType: (id) => dispatch(changeType(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectTypeCreate);
