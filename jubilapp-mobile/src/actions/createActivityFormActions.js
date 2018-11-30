import {Actions} from "react-native-router-flux";
import {CREATE_ACTIVITY_FORM_ACTIONS} from "../constants/actions";
import { AsyncStorage } from "react-native";
import {request} from "../request";

export const changeCreateActivityFormProperty=(propertyName, value) =>{
    return {
        type:CREATE_ACTIVITY_FORM_ACTIONS.ChangeProperty,
        payload:{
            propertyName,
            value
        }
    }
};

export const createActivity = (activityInfo) => {
    request('/event', 'POST', activityInfo);
}
export const createActivityOld = (activityInfo) => {
    return () => {
        AsyncStorage.getItem('token').then((token) => {

            console.log("HOLAAAAAAAA5" + token);
            fetch('http://ordinadorcasa.no-ip.org:4100/event', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + token

                },
                body: JSON.stringify(activityInfo)
            }).then(response => {
                console.log("HOLAAAAAAAA11" + token);
                console.log(response)
                if (response.ok) {
                    console.log(response.ok)
                    return response.json()
                } else {
                    console.log('Error sending create activity')
                }
            }).catch(err => {
                console.log(err)
            })
        });
    }
}
