import React from 'react';
import {View, ScrollView} from 'react-native';
import Formulari from '../components/basicComponents/Formulari';
import Header from '../components/basicComponents/Header';
import StartButton from '../components/basicComponents/StartButton';
import Description from '../components/basicComponents/Description';
import { Actions } from 'react-native-router-flux';
import {APP_COLORS} from "../constants/colors";
import connect from "react-redux/es/connect/connect";
import {changeLoginFormProperty, login, showError} from "../actions";

class LoginScreen extends React.Component {
    constructor(props) {
        super(props)

        this.onLoginPressed = this.onLoginPressed.bind(this)
    }
    onLoginPressed() {
        const userInfo = {
            email: this.props.email,
            password: this.props.password
        };

        this.props.login(userInfo)
    }
    render() {
        const {viewStyle, viewStyle1} = styles;
        const {email, changeFormEmail, password, changeFormPassword}=this.props;

        return (
                <View style = {viewStyle}>
                    <Header headerText = {'JubilApp'}/>
                    <ScrollView>
                        <View style = {{paddingBottom: '13%'}}>
                    <View style = {viewStyle1}>
                        <Formulari textExplicatiu = {'Introduce correo y contraseña'}
                                   textPlaceHolder = {'correo'}
                                   tipusTeclat = {'email-address'}
                                   value = {email}
                                   onChangeText={(text) => changeFormEmail(text)}/>
                        <Formulari textPlaceHolder = {'contraseña'}
                                   tipusTeclat = {'default'}
                                   psswCodificada = {true}
                                   value = {password}
                                   onChangeText={(text) => changeFormPassword(text)}/>
                    </View>
                    <StartButton buttonText = {'Entrar'}
                                 path = {this.onLoginPressed}/>
                        </View>
                    <View style = {{paddingBottom: '5%'}}>
                    <Description textExpl = {'No tienes cuenta?'}/>
                    <StartButton buttonText = {'Regístrate!'}
                                 path = {() => Actions.r1()}/>
                    </View>
                    </ScrollView>
                </View>
        );
    }
}
const styles ={
    viewStyle: {
        backgroundColor: APP_COLORS.color_neutral,
        width: '100%',
        height: '100%',
        flex:1,
    },
    viewStyle1: {
        paddingTop: '10%',
        flex:1,
    }

}
const mapStateToProps = (state) => {
    return {
        email: state.loginForm.email,
        password: state.loginForm.password
    }
}

const  mapDispatchToProps = (dispatch)=>{
    return {
        changeFormEmail: (value)=>dispatch(changeLoginFormProperty("email", value)),
        changeFormPassword: (value)=>dispatch(changeLoginFormProperty("password", value)),
        login: (userInfo) => dispatch(login(userInfo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)