import React from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import { CheckBox } from 'react-native-elements';
import {APP_COLORS} from "../constants/colors";
import Header from '../components/basicComponents/Header';

import { Actions } from 'react-native-router-flux';
import Description from "../components/basicComponents/Description";
import ButtonBack from "../components/basicComponents/ButtonBack";
import NextButton from "../components/basicComponents/NextButton";
import {fetchInteressos, interessosProfile} from "../actions/index";
import connect from "react-redux/es/connect/connect";

class Interessos2 extends React.Component {

    constructor(props) {
        super(props)
        this.onNextPressed = this.onNextPressed.bind(this)


    }

    componentWillMount() {
        this.props.fetchInteressos()
    }

    _onPressButton(interes) {
        //s'ha de fer una copia del vector i modificar la copia perque laltre es com inmutable o nose quin rollo de JS que no es modifica be
        const new_interessos_info = this.props.interessos_info;
        new_interessos_info[interes.id].estat = !new_interessos_info[interes.id].estat;

        this.setState({interessos_info: new_interessos_info}) //aixo no seria aixi no?

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

    onNextPressed() {
        const interessosInfo = [];
        const interessosName = ['art','sports','culture','trips','workshops','leisure'];
        var i;

        for(i = 0; i < 6; i++){
            if(this.props.interessos_info[i].estat){
                interessosInfo.push(interessosName[i]);
            }
        }

        if(interessosInfo.length == 0){
            //console.log(interessosName);
            this.props.interessosProfile(interessosName)
        }
        else{
            //console.log(interessosInfo);
            this.props.interessosProfile(interessosInfo)
        }


    }

    render() {
            const {viewStyle, container, container1, viewInteressos, containerColumna} = styles;
            return (
                <View style={viewStyle}>
                    <Header headerText={'JubilApp'}/>
                    <Description textExpl={'Selecciona tus intereses'}/>
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
                                    path = {() => Actions.home()}/>
                        <NextButton buttonText = {'Siguiente'}
                                    path = {this.onNextPressed}/>
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
        checkBoxStyle:{
            center:true,
        },
        container1: {
            flexDirection: 'row',
            paddingBottom: '7%',
            justifyContent: 'space-between',
            paddingRight: '5%',
            paddingLeft: '5%',
        },
        imageStyle: {
            flex: 1,
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'flex-end',
            borderColor: APP_COLORS.color_header,
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
        }
    }
const mapStateToProps = (state) => {
    return {
        interessos_info: state.interessosProfile.interessos_info
    }
}

const  mapDispatchToProps = (dispatch)=>{
    return {
        interessosProfile: (interessosInfo)=> dispatch(interessosProfile(interessosInfo)),
        fetchInteressos: ()=>dispatch(fetchInteressos())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Interessos2)
