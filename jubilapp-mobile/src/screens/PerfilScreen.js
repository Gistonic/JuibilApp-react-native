import React from 'react';
import {View,Text} from 'react-native';
import { Font } from 'expo';
import { Actions } from 'react-native-router-flux';
import {APP_COLORS} from "../constants/colors";
import connect from "react-redux/es/connect/connect";
import {changeLoginFormProperty, login} from "../actions/loginFormActions";
import Description from "../components/basicComponents/Description";
import HeaderIcon from "../components/basicComponents/HeaderIcon";
import { Ionicons, EvilIcons } from '@expo/vector-icons';

import {fetchName} from "../actions/index";

class PerfilScreen extends React.Component {
    constructor(props) {
        super(props)

    }

    componentWillMount() {
        this.props.fetchName()
    }


    render() {
        const {viewStyle, viewStyle1,container,circle,textStyle} = styles;
        const saludos = "Hola "+this.props.name+"!!";
        return (
            <View style = {viewStyle}>
                <HeaderIcon headerText = {'JubilApp'}
                    iconName={ 'home'}
                    colorName={ APP_COLORS.color_neutral}
                        size = {75}
                        textSize = {35}
                        path={() => Actions.home()}
                        
                />
                <View style = {viewStyle1}>
                    <Description textExpl={saludos}/>
                    <Description textExpl={'Que deseas hacer con tu perfil?'}/>
                </View>
                <View style = {container}>
                    <View style = {circle} backgroundColor = {APP_COLORS.color_button_1}>
                        <EvilIcons name='gear' size={95} color= {APP_COLORS.color_neutral} onPress = {()=>Actions.modperfil()} />
                        <Text style={textStyle}>Modificar</Text>
                    </View>
                    <View style = {circle} backgroundColor = {APP_COLORS.color_button_1}>
                        <EvilIcons name='eye' size={95} color= {APP_COLORS.color_neutral} />
                        <Text style={textStyle}>Ver</Text>
                    </View>
                </View>
            </View>
        );
    }
  }
  const styles ={
        textStyle:{
            color: APP_COLORS.color_neutral,
            fontFamily: 'sans-serif-condensed',
            fontSize: 18
        },
        viewStyle: {
            backgroundColor: APP_COLORS.color_neutral,
            width: '100%',
            height: '100%',
        },
        circle:{
            width: 120,
            height: 120,
            borderRadius: 40,
            padding: 12,
            justifyContent: "center",
            alignItems: "center",
            shadowColor: "gray",
            shadowOffset: { width: 1, height: 1 },
            shadowOpacity: 0.18,
            shadowRadius: 2
        },
        container: {
            marginTop: '15%',
            flexDirection: 'row',
            paddingBottom: '7%',
            paddingRight: '5%',
            paddingLeft: '5%',
            paddingTop: '5%',
            justifyContent: 'space-between',
        },
        viewStyle1: {
            paddingTop: '25%'
        }
  }

  const mapStateToProps = (state) => {
    return {
        name: state.modifyPerfil.name
    }
}

const  mapDispatchToProps = (dispatch)=>{
    return {
        fetchName: ()=>dispatch(fetchName())
    }
}

  export default connect (mapStateToProps,mapDispatchToProps)(PerfilScreen);