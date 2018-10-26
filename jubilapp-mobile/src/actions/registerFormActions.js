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
        fetch('http://ordinadorcasa.no-ip.org:4100/auth/register', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userInfo)
        }).then(response => {
            console.log(response)
            if (response.ok) {
                console.log(response.ok)

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