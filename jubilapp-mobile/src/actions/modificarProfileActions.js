import {Actions} from "react-native-router-flux";
import {PROFILE_ACTIONS} from "../constants/actions";
import { AsyncStorage } from "react-native";
import {request} from "../request";

const receiveName =(value)=>{
    console.log(value);
    return {
        type: PROFILE_ACTIONS.ReceiveName,
        payload: {
            value
        }
    }
}

const receiveInterests =(value)=>{
    return {
        type: PROFILE_ACTIONS.ReceiveInterests,
        payload: {
            value
        }
    }
}

const receiveKilometres =(value)=>{
    return {
        type: PROFILE_ACTIONS.ReceiveKilometres,
        payload: {
            value
        }
    }
}



export const fetchName = () => {
    return (dispatch) => {
        //receiveInterests(interessosMock);
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
                resp.json().then((body) => {
                    dispatch(receiveInterests(body.interests));
                    dispatch(receiveName(body.name));
                    dispatch(receiveKilometres(body.searchDistance));
                }))
        });
    }
}

const interessosMock = ['art','sports','culture','trips','workshops','leisure'];
const kmMock = 10;
const nameMock = "Elena";

