import {REGISTER_FORM_ACTIONS} from "../constants/actions";
import {Actions} from "react-native-router-flux";

export const changeRegisterFormProperty=(propertyName, value) =>{
    return {
        type:REGISTER_FORM_ACTIONS.ChangeProperty,
        payload:{
            propertyName,
            value
        }
    }
};

const receiveRegister = (token) => {
    Actions.welcome();
    return {
        type: REGISTER_FORM_ACTIONS.ReceiveRegister,
        payload: token
    }
};

export const register = (userInfo) => {
    return (dispatch) => {
        fetch('http://jubilapp.serveo.net/register/', {
            method: 'POST',
            body: JSON.stringify(userInfo)
        }).then(response => {
            if (response.ok) {

                return response.json()

                /*
                {
                    "token": "123nahibrih123g13ugi217g"
                }

                */
            } else {
                console.log('Error sending register')
            }
        }).then(json => {
            dispatch(receiveRegister(json.token))
        }).catch(err => {
            console.log(err)
        })
    }
}