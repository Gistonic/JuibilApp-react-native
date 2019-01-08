import {LOGIN_FORM_ACTIONS} from "../constants/actions";
import {Actions} from "react-native-router-flux";
import { AsyncStorage } from "react-native";
import {reportPushToken} from "../pushNotifications";
import { showError } from './errorActions'


export const changeLoginFormProperty=(propertyName, value) =>{
    return {
        type:LOGIN_FORM_ACTIONS.ChangeProperty,
        payload:{
            propertyName,
            value
        }
    }
};

/*const _storeData = async () => {
    try {
        await AsyncStorage.setItem('token', token);
    } catch (error) {
        // Error saving data
    }
} */
const tokens = "";
const receiveLogin = (token) => {
    //localstorage("token", token);
    //_storeData();

    AsyncStorage.setItem('token', token, (err) => {
        if (err) {
            console.log('Error saving token: ' + token)
        }
        reportPushToken();
        Actions.welcome({textExpl: 'Siguiente', paths: () => Actions.home()});
    });
    return {
        type: LOGIN_FORM_ACTIONS.ReceiveLogin,
        payload: token
    }
};


export const login = (userInfo) => {
    return (dispatch) => {
        const url = 'http://ordinadorcasa.no-ip.org:4100/auth/login/';
        //const url = 'http://httpstat.us/401';
        fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userInfo)
        }).then(response => {
            if (response.ok) {
                return response.json().then(json => {
                    dispatch(receiveLogin(json.token))
                })
            } else {
                console.log('Error sending login. Status: ' + response.status);

                dispatch(showError('Usuario y/o contraseña erróneos'))
            }
        }).catch(err => {
            console.log(err)
        })
    }
}