import {LOGIN_FORM_ACTIONS} from "../constants/actions";
import {Actions} from "react-native-router-flux";
import { AsyncStorage } from "react-native";


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
        Actions.welcome({textExpl: 'Continuar', paths: () => Actions.home()});
    });
    return {
        type: LOGIN_FORM_ACTIONS.ReceiveLogin,
        payload: token
    }
};

const receiveLoginError = () => {
    return {
        type: LOGIN_FORM_ACTIONS.ReceiveLoginError
    }
}

const resetLoginError = () => {
    return {
        type: LOGIN_FORM_ACTIONS.ResetLoginError
    }
}


export const login = (userInfo) => {
    return (dispatch) => {
        //const url = 'http://ordinadorcasa.no-ip.org:4100/auth/login/';
        const url = 'http://httpstat.us/401';
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

                dispatch(receiveLoginError())

                setTimeout(() => {
                    dispatch(resetLoginError())
                }, 5000)
            }
        }).catch(err => {
            console.log(err)
        })
    }
}