
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
import { createActivity } from '../../actions/index';
import {pressPopup} from "../../pressPopup";

class SelectTypeCreate extends React.Component {
    constructor(props) {
        super(props)
        this.onNextPressed = this.onNextPressed.bind(this)
    }

    selectType(){
            if(this.props.selected_Arte) {
                this.props.changeTipus('art');
                return 'art';
            }
            if(this.props.selected_Deporte) {
                this.props.changeTipus('sports');
                return 'sports';
            }
            if(this.props.selected_Cultura) {
                this.props.changeTipus('culture');
                return 'culture';
            }
            if(this.props.selected_Excursiones) {
                this.props.changeTipus('trips');
                return 'trips';
            }
            if(this.props.selected_Talleres) {
                this.props.changeTipus('workshops');
                return 'workshops';
            }
            if(this.props.selected_Ocio) {
                this.props.changeTipus('leisure');
                return 'leisure';
            }
    }


    onNextPressed() {
        const activityInfo = {

            name: this.props.name,
            //location:this.props.Location,
            type:this.selectType(),
            startDate:new Date(this.props.dateIni.year, this.props.dateIni.month, this.props.dateIni.day, this.props.hourIni, this.props.minuteIni),
            endDate:new Date(this.props.dateEnd.year, this.props.dateEnd.month, this.props.dateEnd.day, this.props.hourEnd, this.props.minuteEnd),
            description:this.props.description,
            longitude: this.props.longitude,
            latitude: this.props.latitude,
        };

        this.props.createActivity(activityInfo)
    }

    render() {
        const {viewStyle, container, container1, viewInteressos} = styles;
        const { changeArte, selected_Arte, changeCultura, selected_Cultura, changeDeporte,selected_Deporte, changeExcursiones, selected_Excursiones, changeTalleres, selected_Talleres, changeOcio, selected_Ocio} = this.props;
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
                <View style = {viewInteressos} >
                    <View style = {container}>
                        <TouchableOpacity style={styles.buttonStyle}
                                          onPress={ () => {
                                              changeArte(!selected_Arte);
                                          }}>
                            <ImageBackground source={require('../../images/artPES2.jpg')} style={styles.imageStyle}/>
                            <CheckBox title = 'Arte' checked = {selected_Arte} style = {styles.checkBoxStyle}
                                      onPress = {() => changeArte( !selected_Arte)}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonStyle}
                                          onPress={ () => {
                                              changeDeporte( !selected_Deporte);
                                          }}>
                            <ImageBackground source={require('../../images/esportPES2.jpg')} style={styles.imageStyle}/>
                            <CheckBox title = 'Deporte' checked = {selected_Deporte} style = {styles.checkBoxStyle}
                                      onPress = {() =>changeDeporte(!selected_Deporte)}
                            />
                        </TouchableOpacity>

                    </View>

                    <View style = {container}>
                        <TouchableOpacity style={styles.buttonStyle}
                                          onPress={ () => {
                                              changeCultura( !selected_Cultura);
                                          }}>
                            <ImageBackground source={require('../../images/culturaPES2.jpg')} style={styles.imageStyle}/>
                            <CheckBox title = 'Cultura' checked = {selected_Cultura} style = {styles.checkBoxStyle}
                                      onPress = {() => changeCultura(!selected_Cultura)}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonStyle}
                                          onPress={ () => {
                                              changeExcursiones(!selected_Excursiones);
                                          }}>
                            <ImageBackground source={require('../../images/excursionesPES2.jpg')} style={styles.imageStyle}/>
                            <CheckBox title = 'Excursiones' checked = {selected_Excursiones} style = {styles.checkBoxStyle}
                                      onPress = {() => changeExcursiones( !selected_Excursiones)}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style = {container}>
                        <TouchableOpacity style={styles.buttonStyle}
                                          onPress={ () => {
                                              changeTalleres(!selected_Talleres);
                                          }}>
                            <ImageBackground source={require('../../images/talleresPES2.jpg')} style={styles.imageStyle}/>
                            <CheckBox title = 'Talleres' checked = {selected_Talleres} style = {styles.checkBoxStyle}
                                      onPress = {() => changeTalleres(!selected_Talleres)}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonStyle}
                                          onPress={ () => {
                                              changeOcio(!selected_Ocio);
                                          }}>
                            <ImageBackground source={require('../../images/ocioPES3.jpg')} style={styles.imageStyle}/>
                            <CheckBox title = 'Ocio' checked = {selected_Ocio} style = {styles.checkBoxStyle}
                                      onPress = {() => changeOcio( !selected_Ocio)}
                            />
                        </TouchableOpacity>
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
    container: {
        width: '100%',
        height: '20%',
        flex:1,
        flexDirection: 'row'
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
        height: '100%',
        width: '50%',
        paddingLeft: '5%',
        paddingRight: '5%',
        paddingBottom: '2%',
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
        selected_Arte: state.createActivityForm.selected_Arte,
        selected_Deporte: state.createActivityForm.selected_Deporte,
        selected_Cultura: state.createActivityForm.selected_Cultura,
        selected_Excursiones: state.createActivityForm.selected_Excursiones,
        selected_Talleres: state.createActivityForm.selected_Talleres,
        selected_Ocio: state.createActivityForm.selected_Ocio,
        type: state.createActivityForm.type,
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

    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        changeArte: (value) => dispatch(changeCreateActivityFormProperty("selected_Arte", value)),
        changeDeporte: (value) => dispatch(changeCreateActivityFormProperty("selected_Deporte", value)),
        changeCultura: (value) => dispatch(changeCreateActivityFormProperty("selected_Cultura", value)),
        changeExcursiones: (value) => dispatch(changeCreateActivityFormProperty("selected_Excursiones", value)),
        changeTalleres: (value) => dispatch(changeCreateActivityFormProperty("selected_Talleres", value)),
        changeOcio: (value) => dispatch(changeCreateActivityFormProperty("selected_Ocio", value)),
        changeTipus: (value) => dispatch(changeCreateActivityFormProperty("type", value)),
        createActivity: (activityInfo)=> dispatch(createActivity(activityInfo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectTypeCreate);