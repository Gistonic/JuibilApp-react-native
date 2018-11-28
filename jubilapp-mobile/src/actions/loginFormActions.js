import {LOGIN_FORM_ACTIONS} from "../constants/actions";
import {Actions} from "react-native-router-flux";
import { AsyncStorage } from "react-native";

const tokens= null;

export const changeLoginFormProperty=(propertyName, value) =>{
    return {
        type:LOGIN_FORM_ACTIONS.ChangeProperty,
        payload:{
            propertyName,
            value
        }
    }
};

const _storeData = async () => {
    try {
        await AsyncStorage.setItem('token', token);
    } catch (error) {
        // Error saving data
    }
}

const receiveLogin = (token) => {
    //localstorage("token", token);
    console.log("HOLAAAAAAAA" + token);
    _storeData();
    AsyncStorage.getItem('token').then((data) => {
        this.tokens = data
    });
    console.log("HOLAAAAAAAA1" + this.tokens);
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
                return response.json().then(json => {
                    dispatch(receiveLogin(json.token))
                })
                /*
                {
                    "token": "123nahibrih123g13ugi217g"
                }

                */
            } else {
                console.log('Error sending login')
                console.log(response)
            }
        }).catch(err => {
            console.log(err)
        })
    }
}