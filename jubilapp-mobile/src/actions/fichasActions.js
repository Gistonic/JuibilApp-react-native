import {FICHAS_ACTIONS} from "../constants/actions";
import { AsyncStorage } from "react-native";



const recieveFichas =(fichas)=>{
    return {
        type: FICHAS_ACTIONS.ReceiveFichas,
        payload: fichas
    }
}


export const fetchFichas = () => {
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

                resp.json().then((body) => { console.log(body); dispatch(recieveFichas(body.tokens))}))
        });
    }
}

