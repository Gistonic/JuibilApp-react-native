import {Actions} from "react-native-router-flux";
import {CREATE_ACTIVITY_FORM_ACTIONS} from "../constants/actions";
import { AsyncStorage } from "react-native";

const token= null;

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
    return () => {
        AsyncStorage.getItem('token').then((data) => {
            this.token = data
            console.log("HOLAAAAAAAA5" + this.token);
        });
        console.log("HOLAAAAAAAA2" + this.token);
        fetch('http://ordinadorcasa.no-ip.org:4100/event', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + this.token

            },
            body: JSON.stringify(activityInfo)
        }).then(response => {
            console.log("HOLAAAAAAAA11" + this.token);
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
    }
}