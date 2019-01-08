import {Actions} from "react-native-router-flux";
import {VALORAR_ACTIVITY_ACTIONS} from '../constants/actions'
import { AsyncStorage } from "react-native";
import {request} from "../request";

const rebreActivitats = (activitats) =>{
    console.log("Hola ", activitats);
    return {
        type: VALORAR_ACTIVITY_ACTIONS.RebreActivitats,
        payload: activitats
    }
}

export const changeStar = (i) =>{
    return {
        type: VALORAR_ACTIVITY_ACTIONS.ChangeStar,
        payload: i
    }
}

export const changeIterator = () =>{
    return{
        type: VALORAR_ACTIVITY_ACTIONS.ChangeIterator
    }
}

export const reiniciarStars = () =>{
    return{
        type: VALORAR_ACTIVITY_ACTIONS.ReiniciarStars
    }
}

export const valorarActivitat = (id, rating) =>{
    return () => {
        const url1 = '/event/';
        const url2 = '/rate';
        request(url1+id+url2, 'POST', rating);
    }
}

export const changePropietat = (ubicacio) =>{
    return{
        type: VALORAR_ACTIVITY_ACTIONS.ChangePropietat,
        payload: ubicacio
    }
}

const requestActivitats = () =>{
    return{
        type: VALORAR_ACTIVITY_ACTIONS.RequestActivitats
    }
}


export const fetchActivitatsValorar = () =>{
    //dispatch(rebreActivitats(activitatsMock));
    /*return(dispatch)=>{
          setTimeout(() => {
              dispatch(rebreActivitats(activitatsMock))
          }, 2000)
    }*/
    return (dispatch) => {
        dispatch(requestActivitats())
        AsyncStorage.getItem('token').then((token) => {
            fetch('http://ordinadorcasa.no-ip.org:4100/event?ratingPending=true', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + token,

                },
                dataType: 'json',
            }).then((resp) =>
                resp.json().then((body) => dispatch(rebreActivitats(body.events))))
        });
        
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