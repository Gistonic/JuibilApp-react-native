import React from 'react';
import {View} from 'react-native';
import Formulari from '../components/Formulari';
import Header from '../components/Header';
import NextButton from '../components/NextButton';
import ButtonBack from '../components/ButtonBack';
import { Actions } from 'react-native-router-flux';
import {changeRegisterFormProperty} from "../actions";
import connect from "react-redux/es/connect/connect";

class RegistreCorreoScreen extends React.Component {

    render() {
        const {viewStyle, vista1Style, container, viewStyle1, formStyle} = styles;
        const{email, changeFormEmail}=this.props
        return (
            <View style = {viewStyle}>
              <Header headerText = {'JubilApp'}/>
                <View style = {viewStyle1}>
                    <View style = {vista1Style}>
                        <View style = {formStyle}>
                          <Formulari textExplicatiu = {'Introduce correo electrónico'}
                                     textPlaceHolder = {'Correo'}
                                     tipusTeclat = {'email-address'}
                                     value = {email}
                                     onChangeText={(text) => changeFormEmail(text)}/>
                        </View>
                    </View>
                  <View style = {container}>
                    <ButtonBack buttonText = {'Atrás'}
                                path = {() => Actions.r1()}/>
                    <NextButton buttonText = {'Siguiente'}
                                path = {() => Actions.r3()}/>
                  </View>
                </View>
            </View>   
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
          paddingTop: '45%',
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
          paddingRight: '10%'
      }
  }
const mapStateToProps = (state) => {
    return {
        name: state.registerForm.email,
    }
}

const  mapDispatchToProps = (dispatch)=>{
    return {
        changeFormEmail: (value)=>dispatch(changeRegisterFormProperty("email", value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistreCorreoScreen)
