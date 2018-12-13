import React from 'react';
import {View, KeyboardAvoidingView} from 'react-native';
import Formulari from '../../components/basicComponents/Formulari';
import Header from '../../components/basicComponents/Header';
import NextButton from '../../components/basicComponents/NextButton';
import ButtonBack from '../../components/basicComponents/ButtonBack';
import { Actions } from 'react-native-router-flux';
import {changeRegisterFormProperty} from "../../actions/index";
import connect from "react-redux/es/connect/connect";

class RegistrePsswScreen extends React.Component {
    constructor(props) {
        super(props)

        this.nextScreen = this.nextScreen.bind(this)
    }
    nextScreen() {
        if (this.props.password === this.props.confirmPassword)
            Actions.r4()
        else {
            //TODO: Missatge d'error
        }
    }
    render() {
        const {viewStyle, vista1Style, container, formStyle, viewStyle1} = styles;
        const{password, confirmPassword, changePassword, changeConfirmPassword}=this.props
        return (
            <KeyboardAvoidingView behavior = 'position'>
            <View style = {viewStyle}>
              <Header headerText = {'JubilApp'}/>
                <View style = {viewStyle1}>
                    <View style = {vista1Style}>
                        <View style = {formStyle}>
                          <Formulari textExplicatiu = {'Introduce la contraseña (mínimo 8 carácteres)'}
                                     textPlaceHolder = {'Contraseña'}
                                     tipusTeclat = {'default'}
                                     psswCodificada = {true}
                                     value = {password}
                                     onChangeText={(text) => changePassword(text)}/>
                        </View>
                        <View style = {formStyle}>
                          <Formulari textExplicatiu = {'Repite la misma contraseña'}
                                     textPlaceHolder = {'Contraseña'}
                                     tipusTeclat = {'default'}
                                     psswCodificada = {true}
                                     value = {confirmPassword}
                                     onChangeText={(text) => changeConfirmPassword(text)}/>
                        </View>
                    </View>
                    <View style = {container}>
                        <ButtonBack buttonText = {'Atrás'}
                                        path = {() => Actions.r2()}/>
                        <NextButton buttonText = {'Siguiente'}
                                        path = {() => this.nextScreen()}/>
                    </View>
                </View>
            </View>
            </KeyboardAvoidingView>
        );
    }
  }
  const styles ={
      viewStyle: {
          backgroundColor: '#FFF',
          width: '100%',
          height: '100%',
      },
      viewStyle1: {
          flex:1,
          justifyContent: 'space-between'
      },
      vista1Style: {
          flex:1,
          paddingTop: '10%',
      },
      container: {
          flexDirection: 'row',
          paddingBottom: '7%',
          justifyContent: 'space-between',
          paddingRight: '5%',
          paddingLeft: '5%',

      },
      formStyle: {
          paddingLeft: '10%',
          paddingRight: '10%',
          paddingBottom: '10%',
          paddingTop: '10%'
      },
  }
const mapStateToProps = (state) => {
    return {
        password: state.registerForm.password,
        confirmPassword: state.registerForm.confirmPassword
    }
}

const  mapDispatchToProps = (dispatch)=>{
    return {
        changePassword: (value)=>dispatch(changeRegisterFormProperty("password", value)),
        changeConfirmPassword: (value)=>dispatch(changeRegisterFormProperty("confirmPassword", value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrePsswScreen)
