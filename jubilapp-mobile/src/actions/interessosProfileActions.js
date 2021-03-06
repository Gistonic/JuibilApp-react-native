import {Actions} from "react-native-router-flux";
import {INTERESSOS_PROFILE_ACTIONS} from "../constants/actions";
import { AsyncStorage } from "react-native";
import {request} from "../request";

export const changeInteressosProfileProperty=(value) =>{
    return {
        type:INTERESSOS_PROFILE_ACTIONS.ChangeProperty,
        payload: value
    }
};

const recieveInteressos =(interessos)=>{
    return {

        type: INTERESSOS_PROFILE_ACTIONS.ReceiveInteressos,
        payload: interessos
    }
}

const requestInteressos =(interessos)=>{
    return {
        type: INTERESSOS_PROFILE_ACTIONS.RequestInteressos,
        payload: interessos
    }
}

export const fetchInteressos = () => {
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
                resp.json().then((body) => dispatch(requestInteressos(body.interests))))
        });
    }
}
export const fetchInteressosOld = () => {
    return(dispatch)=>{
        AsyncStorage.getItem('token').then((data) => {
            this.token = data
        });

      //  dispatch(requestInteressos())


        dispatch(recieveInteressos(interessosMock));
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
             dispatch(recieveInteressos(json.interests))
        })*/

    }
}

export const interessosProfileRegistre = (interessosInfo) =>{
    return () => {
        request('/profile', 'PATCH', {interests: interessosInfo});
        Actions.km({pantalla: "Registre"});
    }
}

export const interessosProfile = (interessosInfo) => {
    return () => {
        request('/profile', 'PATCH', {interests: interessosInfo});
        Actions.modperfil({textExpl: 'Modificar perfil', pathinteressos: () => Actions.interessos(), pathkm: () => Actions.km(), fraseExpl: 'Que quieres modificar de tu perfil?'});
    }
}

export const interessosProfileOld = (interessosInfo) => {
    return () => {
        AsyncStorage.getItem('token').then((token) => {
            fetch('http://ordinadorcasa.no-ip.org:4100/profile', {
            method: 'PATCH',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token
            },
            body: JSON.stringify({interests: interessosInfo})
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
        });
        
        Actions.km();
    }
}

const interessosMock = ['art','leisure'];
