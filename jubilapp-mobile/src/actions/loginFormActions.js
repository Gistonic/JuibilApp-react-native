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
    //localstorage("token", token);
    Actions.welcome();
    return {
        type: LOGIN_FORM_ACTIONS.ReceiveLogin,
        payload: token
    }
};

export const login = (userInfo) => {
    return (dispatch) => {
        fetch('http://ordinadorcasa.no-ip.org:4100/auth/login/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
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
                console.log('Error sending login')
                console.log(response)
            }
        }).then(json => {
            dispatch(receiveLogin(json.token))
        }).catch(err => {
            console.log(err)
        })
    }
}