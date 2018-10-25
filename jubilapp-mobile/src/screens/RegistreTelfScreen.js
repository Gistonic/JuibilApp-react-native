import React from 'react';
import {View} from 'react-native';
import Formulari from '../components/Formulari';
import Header from '../components/Header';
import NextButton from '../components/NextButton';
import ButtonBack from '../components/ButtonBack';
import { Actions } from 'react-native-router-flux';
import {changeRegisterFormProperty} from "../actions";
import connect from "react-redux/es/connect/connect";
import { register } from '../actions'

class RegistreTelfScreen extends React.Component {
    constructor(props) {
        super(props)

        this.onNextPressed = this.onNextPressed.bind(this)
    }
    onNextPressed() {
        const userInfo = {
            email: this.props.email,
            name: this.props.name,
            surname: this.props.surname,
            password: this.props.password,
            phone: this.props.phone,
        };

        this.props.register(userInfo)
    }
    render() {
        const {viewStyle, vista1Style, container, formStyle, viewStyle1} = styles;
        const { phone, changeFormPhone } = this.props;
        return (
            
            <View style = {viewStyle}>
              <Header headerText = {'JubilApp'}/>
                <View style = {viewStyle1}>
                    <View style = {vista1Style}>
                        <View style = {formStyle}>
                              <Formulari textExplicatiu = {'Introduce tu número de teléfono (es opcional)'}
                                         textPlaceHolder = {'Teléfono'}
                                         tipusTeclat = {'phone-pad'}

                                         value = {phone}
                                         onChangeText={(text) => changeFormPhone(text)}

                              />
                        </View>
                    </View>
                          <View style = {container}>
                            <ButtonBack buttonText = {'Atrás'}
                                        path = {() => Actions.r3()}/>
                            <NextButton buttonText = {'Siguiente'}
                                        path = {this.onNextPressed}/>
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
        name: state.registerForm.name,
        surname: state.registerForm.surname,
        email: state.registerForm.email,
        phone: state.registerForm.phone,
        password: state.registerForm.password
    }
}

const  mapDispatchToProps = (dispatch)=>{
    return {
        changeFormPhone: (value)=>dispatch(changeRegisterFormProperty("phone", value)),
        register: (userInfo) => dispatch(register(userInfo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistreTelfScreen)
