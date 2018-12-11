import {Actions} from "react-native-router-flux";
import {KILOMETRES_PROFILE_ACTIONS} from "../constants/actions";
import { AsyncStorage } from "react-native";

const token = null;

export const changeKilometresProfileProperty=(value) =>{
    return {
        type:KILOMETRES_PROFILE_ACTIONS.ChangeProperty,
        payload: value
    }
};

const recieveKilometres =(value)=>{
    
    return {
        
        type: KILOMETRES_PROFILE_ACTIONS.ReceiveKilometres,
        payload: value
    }
}

const requestKilometres =(kilometre_num)=>{
    return {
        type: KILOMETRES_PROFILE_ACTIONS.RequestKilometres,
        payload: kilometre_num
    }
}

export const fetchKilometres = () => {
    return (dispatch) => {
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
                resp.json().then((body) => dispatch(requestKilometres(body.searchDistance))))
        });
    }
}

export const fetchKilometresOld = () => {
    return(dispatch)=>{
        AsyncStorage.getItem('token').then((data) => {
            this.token = data
        });

      //  dispatch(requestInteressos())
        dispatch(recieveKilometres(kilometresMock));
        /*fetch('http://ordinadorcasa.no-ip.org:4100/profile', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + this.token
            }
        }).then(response=>{
            console.log("HOLAAA" + response.json());
             if(response.ok){
                return response.json()
             }
         }).then(json => {
            console.log(json);
             dispatch(receiveKilometres(json.interests))
        })*/
        
    }
}

export const kilometresProfile = (km_num) => {
    return () => {
        AsyncStorage.getItem('token').then((token) => {
            fetch('http://ordinadorcasa.no-ip.org:4100/profile', {
                method: 'PATCH',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + token
                },
                body: JSON.stringify({searchDistance: km_num}) //CANVIAR
            }).then(response => {
                console.log(response)
                if (response.ok) {
                    console.log(response.ok)

                    return response.json()

                } else {
                    console.log('Error sending kilometres profile')
                }
            }).catch(err => {
                console.log(err)
            })
        });
            Actions.home();
        
        }
    }


const kilometresMock = '25';