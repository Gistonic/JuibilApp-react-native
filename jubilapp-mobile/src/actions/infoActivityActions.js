import {ACTIVITY_INFO_ACTIONS} from "../constants/actions";
import {AsyncStorage} from "react-native";

const receiveActivity =(activity)=>{
    return {
        type: ACTIVITY_INFO_ACTIONS.ReceiveActivity,
        payload: activity
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

export const fetchActivity = () => {
    return(dispatch)=>
    {
        dispatch(receiveActivity(activityMock))
    }
    // return(dispatch)=>{
    //     AsyncStorage.getItem('token').then((data) => {
    //         this.token = data
    //     });
    //     fetch('http://ordinadorcasa.no-ip.org:4100/profile', {
    //         method: 'GET',
    //         headers: {
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json',
    //             Authorization: 'Bearer ' + this.token
    //         }
    //     }).then(response=>{
    //         console.log("HOLAAA" + response.json());
    //         if(response.ok){
    //             return response.json()
    //         }
    //     }).then(json => {
    //         console.log(json);
    //         dispatch(recieveInteressos(json.interests))
    //     })
    //
    // }
//}
}

const activityMock = {
    id: 0,
    name: 'yoga',
    description: 'clase de yoga super guay',
    type: 'sports',
    startDate: Date,
    endDate: Date
}