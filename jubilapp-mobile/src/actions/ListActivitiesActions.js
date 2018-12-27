import {LIST_ACTIVITIES_ACTIONS} from "../constants/actions";
import {request} from "../request";
import {AsyncStorage} from "react-native";
import {Actions} from "react-native-router-flux";


const recieveActivities =(activities)=>{
    return {
        type: LIST_ACTIVITIES_ACTIONS.ReceiveActivities,
        payload: activities
    }
}
const requestActivities =()=>{
    return {
        type: LIST_ACTIVITIES_ACTIONS.RequestActivities
    }
}

export const deleteActivity = (id) => {
    return () => {
        const url = '/event/';
        const final = url + id;
        request(final, 'DELETE');
    }
}

export const setModifyActivityId =(id)=>{
    return{
        type: LIST_ACTIVITIES_ACTIONS.SetModifyActivityId,
        payload: id

    }
}

export const fetchActivities = (tipus, att) => {
    return (dispatch) => {
        AsyncStorage.getItem('token').then((token) => {
            console.log('Token: ' + token);
            const baseUrl = 'http://ordinadorcasa.no-ip.org:4100/event';
            const finalPath = baseUrl + tipus;

            dispatch(requestActivities())

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
                    if (tipus === "/own") dispatch(recieveActivities(body.events));
                    else {
                        if (att === "yes") dispatch(recieveActivities(body.events.yes));
                        else dispatch(recieveActivities(body.events.no));
                    }
                })
            })
        });
    }
}



