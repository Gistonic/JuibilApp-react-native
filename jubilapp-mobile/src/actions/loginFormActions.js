import {LOGIN_FORM_ACTIONS} from "../constants/actions";
import {Actions} from "react-native-router-flux";

export const changeLoginFormProperty=(propertyName, value) =>{
    return {
        type:LOGIN_FORM_ACTIONS.ChangeProperty,
        payload:{
            propertyName,
            value
        }
    }
};

const receiveLogin = (token) => {
    Actions.welcome();
    return {
        type: LOGIN_FORM_ACTIONS.ReceiveLogin,
        payload: token
    }
};

export const login = (userInfo) => {
    return (dispatch) => {
        fetch('URL_LOGIN', {
            method: 'POST',
            body: JSON.stringify(userInfo)
        }).then(response => {
            console.log(userInfo)
            if (response.ok) {
                return response.json()

                /*
                {
                    "token": "123nahibrih123g13ugi217g"
                }

                */
            } else {
                console.error('Error sending register')
            }
        }).then(json => {
            dispatch(receiveLogin(json.token))
        }).catch(err => {
            console.log(err)
        })
    }
}