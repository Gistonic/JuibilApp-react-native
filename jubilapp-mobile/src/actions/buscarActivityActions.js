import {Actions} from "react-native-router-flux";
import {BUSCAR_ACTIVITY_ACTIONS} from "../constants/actions";
import { AsyncStorage } from "react-native";
import {request} from "../request";


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

export const attend = (id) => {
    return () => {
        const url1 = '/event/';
        const url2 = '/attend';
        request(url1+id+url2, 'POST');
    }
}
export const notAttend = (id) => {
    return () => {
        const url1 = '/event/';
        const url2 = '/attend';
        request(url1+id+url2, 'DELETE');
    }
}

export const fetchActivitats = (stringISOfromDate, stringISOtoDate) =>{
    console.log(stringISOfromDate);
    /*return(dispatch)=>{
        dispatch(recieveActivitats(activitatsMock));
    }*/
    return (dispatch) => {
        AsyncStorage.getItem('token').then((token) => {
        const url1 = "http://ordinadorcasa.no-ip.org:4100/event?";
        const url2 = "lat=41.3892";
        const url3 = "&long=2.1175024";
        const url4 = "&fromDate=";
        const url5 = "&toDate=";
        const url6 = "&forMe=true";
        const url7 = "&excludeOwn=true";
        const url8 = "&undecidedOnly=true&capacityExceeded=true";
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

const activitatsMock=[
    {
        id:0,
        nom: "Classe de Pintura",
        ubicacio: "Casal avis les Corts",
        dataIni: "22/12/2018",
        dataFi: "22/12/2018",
        horaIni: "17:30",
        horaFi: "19:00",
        descripcio: "Classe de pintura per aprendre els colors.",
        tipus: "art"
    },
    {
        id:1,
        nom: "Classe de Yoga",
        ubicacio: "Casal avis Sarria",
        dataIni: "25/12/2018",
        dataFi: "25/12/2018",
        horaIni: "10:30",
        horaFi: "12:00",
        descripcio: "Classe de yoga per relaxarse de bon mati.",
        tipus: "sports"
    },
    {
        id:2,
        nom: "Club de Lectura",
        ubicacio: "Casal avis Eixample",
        dataIni: "28/12/2018",
        dataFi: "28/12/2018",
        horaIni: "12:30",
        horaFi: "14:00",
        descripcio: "Comentem el llibre Acid House de Irvine Welsh.",
        tipus: "culture"
    }
]



