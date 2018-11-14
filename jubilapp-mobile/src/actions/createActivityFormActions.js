import {Actions} from "react-native-router-flux";
import {CREATE_ACTIVITY_FORM_ACTIONS} from "../constants/actions";


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
        fetch('http://ordinadorcasa.no-ip.org:4100/auth/events', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(activityInfo)
        }).then(response => {
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