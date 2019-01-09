import {BUSCAR_ACTIVITY_ACTIONS} from "../constants/actions";
import { showError } from '../actions/errorActions'
import { AsyncStorage } from "react-native";
import { request } from "../request";


const recieveActivitats = (activitats) =>{
    
    return {
        type:BUSCAR_ACTIVITY_ACTIONS.RecieveActivitats,
        payload:activitats
    }
}

export const changeBuscarActivityForm=(value) =>{
    return {
        type:BUSCAR_ACTIVITY_ACTIONS.ChangeProperty,
        payload: value,
    }
};

export const changeBuscarActivityFormProperty=(propertyName, value) =>{
    return {
        type:BUSCAR_ACTIVITY_ACTIONS.ChangeProperty2,
        payload:{
            propertyName,
            value
        }
    }
};

export const attend = (id, callback) => {
    return (dispatch) => {
        const url1 = '/event/';
        const url2 = '/attend';
        request(url1+id+url2, 'POST')
        //request('http://httpstat.us/409', 'POST')
            .then(() => {
                if (callback) callback()
            })
            .catch(error => {
                dispatch(showError('No es posible apuntarse a más de una actividad a la vez'))
            });
    }
}
export const notAttend = (id) => {
    return () => {
        const url1 = '/event/';
        const url2 = '/attend';
        request(url1+id+url2, 'DELETE');
    }
}

const requestActivitats = () =>{
    return{
        type: BUSCAR_ACTIVITY_ACTIONS.RequestActivitats
    }
}

export const fetchActivitats = (stringISOfromDate, stringISOtoDate) =>{
    /*return(dispatch)=>{
        dispatch(recieveActivitats(activitatsMock));
    }*/
    return (dispatch) => {
        dispatch(requestActivitats());
        AsyncStorage.getItem('token').then((token) => {
        const url1 = "http://ordinadorcasa.no-ip.org:4100/event?";
        const url2 = "lat=41.3892";
        const url3 = "&long=2.1175024";
        const url4 = "&fromDate=";
        const url5 = "&toDate=";
        const url6 = "&forMe=true";
        const url7 = "&excludeOwn=true";
        const url8 = "&undecidedOnly=true";
        const finalurl = url1+url2+url3+url4+stringISOfromDate+url5+stringISOtoDate+url6+url7+url8;
        console.log("finalurl: ", finalurl);
            fetch(finalurl, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + token,

                },
                dataType: 'json',
            }).then((resp) =>
                resp.json().then((body) => dispatch(recieveActivitats(body.events))))
        });
    }
}

export const changeIterador = () => {
    return{
        type: BUSCAR_ACTIVITY_ACTIONS.ChangeIterador
    }
}

