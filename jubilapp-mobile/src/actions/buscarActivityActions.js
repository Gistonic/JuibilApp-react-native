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

export const fetchActivitats = () =>{
    
    return(dispatch)=>{
        dispatch(recieveActivitats(activitatsMock));
    }
    //demanar crida Biel
    /*return (dispatch) => {
        AsyncStorage.getItem('token').then((token) => {
            fetch('http://ordinadorcasa.no-ip.org:4100/event', {
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
    } */
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



