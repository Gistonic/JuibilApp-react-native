import {ACTIVITY_INFO_ACTIONS} from "../constants/actions";
import {AsyncStorage} from "react-native";
import moment from "moment-timezone";
import {request} from "../request";

const receiveActivity =(activity)=>{
    console.log(activity.startDate);
    const activityWithTimezone = {
        ...activity,
        startDate: moment(activity.startDate).tz('Europe/Madrid'),
        endDate: moment(activity.endDate).tz('Europe/Madrid')
    };
    console.log(activityWithTimezone.startDate);
    return {
        type: ACTIVITY_INFO_ACTIONS.ReceiveActivity,
        payload: activityWithTimezone
    }
}

export const changeActivityIDProperty = (propertyName, value) => {
    return {
        type: ACTIVITY_INFO_ACTIONS.ChangeProperty,
        payload: {
            propertyName,
            value
        }
    }
}

export const deleteAct = (id) => {
    return () => {
        const url = '/event/';
        const final = url + id;
        request(final, 'DELETE');
    }
}

const requestActivitats = () =>{
    return{
        type: ACTIVITY_INFO_ACTIONS.RequestActivitats
    }
}

export const fetchActivity = (id) => {
    return (dispatch) => {
        dispatch(requestActivitats());
        AsyncStorage.getItem('token').then((token) => {
            const baseUrl = 'http://ordinadorcasa.no-ip.org:4100/event/';
            const finalPath = baseUrl + id;
            fetch(finalPath, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + token,

                },
                dataType: 'json',
            }).then((resp) =>
                resp.json().then((body) =>
                    dispatch(receiveActivity(body.event))))
        });
    }
}

const activityMock = {
    id: 0,
    name: 'yoga',
    description: 'clase de yoga super guay',
    type: 'sports',
    startDate: Date,
    endDate: Date
}