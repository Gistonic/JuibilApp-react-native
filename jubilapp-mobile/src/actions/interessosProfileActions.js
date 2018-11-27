import {Actions} from "react-native-router-flux";
import {INTERESSOS_PROFILE_ACTIONS} from "../constants/actions";
import { AsyncStorage } from "react-native";

const token = null;

export const changeInteressosProfileProperty=(value) =>{
    return {
        type:INTERESSOS_PROFILE_ACTIONS.ChangeProperty,
        payload:{
            value
        }
    }
};

const recieveInteressos =(interessos)=>{
    return {
        type: INTERESSOS_PROFILE_ACTIONS.ReceiveInteressos,
        payload: interessos
    }
}

const requestInteressos =()=>{
    return {
        type: INTERESSOS_PROFILE_ACTIONS.RequestInteressos,
    }
}



export const fetchInteressos = () => {
    return(dispatch)=>{
      //  dispatch(requestInteressos())


        dispatch(recieveInteressos(interessosMock));
        // fetch('URL').then(response=>{
        //     if(response.ok){
        //         return response.json()
        //     }
        // }).then(json => {
        //     dispatch(recieveInteressos(json))
        // })
    }
}

/*export const interessosProfile = (interessosInfo) => {
    return () => {
        AsyncStorage.getItem('token').then((data) => {
            this.token = data
        });
        fetch('http://ordinadorcasa.no-ip.org:4100/profile/events', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(interessosInfo)
        }).then(response => {
            console.log(response)
            if (response.ok) {
                console.log(response.ok)

                return response.json()

            } else {
                console.log('Error sending interessos profile')
            }
        }).catch(err => {
            console.log(err)
        })
        Actions.km();
    }
}*/

const interessosMock = ['art','leisure'];