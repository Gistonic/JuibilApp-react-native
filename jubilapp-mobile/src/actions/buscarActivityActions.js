import {Actions} from "react-native-router-flux";
import {BUSCAR_ACTIVITY_ACTIONS} from "../constants/actions";
import { AsyncStorage } from "react-native";
import {request} from "../request";


const recieveActivitats = (activitats) =>{
    return {

        type: BUSCAR_ACTIVITY_ACTIONS.ReceiveActivitats,
        payload: activitats
    }
}

export const fetchActivitats = () =>{
    dispatch(recieveActivitats(activitatsMock));
}

export const changeIterador = () => {
    return{
        type: BUSCAR_ACTIVITY_ACTIONS.ChangeIterador
    }
}