import {MODIFICAR_ACTIVITY_ACTIONS} from "../constants/actions";
import {Actions} from "react-native-router-flux";
import {AsyncStorage} from "react-native";


export const changeActivityValue = (value) => {
    return {
        type: MODIFICAR_ACTIVITY_ACTIONS.ChangeActivityValue,
        payload: value
    }
};


const requestPatchActivityValue = () => {
    return {
        type: MODIFICAR_ACTIVITY_ACTIONS.RequestPatchActivityValue
    }
};

const receivePatchActivityValue = () => {
    return {
        type: MODIFICAR_ACTIVITY_ACTIONS.ReceivePatchActivityValue
    }
};

export const patchActivityValue = (propertyName, eventId, value) => {
    return (dispatch) => {
        AsyncStorage.getItem('token').then((token) => {
            console.log('Token: ' + token);
            const baseUrl = 'http://ordinadorcasa.no-ip.org:4100/event/';
            const finalPath = baseUrl + eventId;
            dispatch(requestActivityValue())
            const event = {
                [propertyName]:value

            }

            fetch(finalPath, {
                method: 'PATCH',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + token
                },
                dataType: 'json',
                body: JSON.stringify(event)

            }).then((resp) => {
                resp.json().then((body) => {
                    console.log(body)
                    dispatch(receivePatchActivityValue())
                })
            })
        });
    }
};


const requestActivityValue = () => {
    return {
        type: MODIFICAR_ACTIVITY_ACTIONS.RequestActivityValue
    }
};

const receiveActivityValue = (value) => {
    return {
        type: MODIFICAR_ACTIVITY_ACTIONS.ReceiveActivityValue,
        payload: value
    }
};

export const fetchActivityValue = (propertyName, eventId) => {
    return (dispatch) => {
        AsyncStorage.getItem('token').then((token) => {
            console.log('Token: ' + token);
            const baseUrl = 'http://ordinadorcasa.no-ip.org:4100/event/';
            const finalPath = baseUrl + eventId;
            dispatch(requestActivityValue())
            fetch(finalPath, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + token
                },
                dataType: 'json',
            }).then((resp) => {
                resp.json().then((body) => {
                    console.log(body)
                    dispatch(receiveActivityValue(body.event[propertyName]))
                })
            })
        });
    }

};


