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
const requestActivities =(activities)=>{
    return {
        type: LIST_ACTIVITIES_ACTIONS.RequestActivities,
        payload: activities
    }
}

export const deleteActivity = (id) => {
    return () => {
        const url = '/event/';
        const final = url + id;
        request(final, 'DELETE');
        Actions.home();
    }
}

export const fetchActivities = (tipus) => {
    return (dispatch) => {
        AsyncStorage.getItem('token').then((token) => {
            const baseUrl = 'http://ordinadorcasa.no-ip.org:4100/event';
            const finalPath = baseUrl + tipus;
            fetch(finalPath, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + token,

                },
                dataType: 'json',
            }).then((resp) =>
                resp.json().then((body) => dispatch(requestActivities(body.events))))
        });
    }
}

export const fetchActivitiesOld = () => {
    return(dispatch)=>{
      //  dispatch(requestActivities())


        setTimeout(() => {
            dispatch(recieveActivities(activitiesMock))
        }, 1000)
        // fetch('URL').then(response=>{
        //     if(response.ok){
        //         return response.json()
        //     }
        // }).then(json => {
        //     dispatch(recieveActivities(json))
        // })
    }
}





const activitiesMock = [
    {
        id: 0,
        name:'yoga',
        description: 'clase de yoga super guay',
        type: 'sports',
        startDate: Date,
        endDate: Date

    },
    {
        id: 1,
        name:'mirar obras',
        description: 'mirar las obras de la sagrada familia',
        type: 'leisure',
        startDate: Date,
        endDate: Date
    }

]