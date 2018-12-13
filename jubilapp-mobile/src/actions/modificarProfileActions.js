import {Actions} from "react-native-router-flux";
import {PROFILE_ACTIONS} from "../constants/actions";
import { AsyncStorage } from "react-native";
import {request} from "../request";

const receiveName =(value)=>{
    console.log(value);
    return {
        type: PROFILE_ACTIONS.ReceiveName,
        payload: value
    }
}


export const fetchName = () => {
    return (dispatch) => {
        AsyncStorage.getItem('token').then((token) => {
            fetch('http://ordinadorcasa.no-ip.org:4100/profile', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + token,

                },
                dataType: 'json',
            }).then((resp) =>
                resp.json().then((body) => dispatch(receiveName(body.name))))
        });
    }
}