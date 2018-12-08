import {BUSCAR_ACTIVITY_ACTIONS} from "../constants/actions";

const INITIAL_STATE ={
    iterador: 0,
    activitats_trobades:[
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
        }
    ]
}

const buscarActivityReducer = (state = INITIAL_STATE, action)=>{

    switch (action.type) {
        case BUSCAR_ACTIVITY_ACTIONS.FetchActivitats:
            return state
        case BUSCAR_ACTIVITY_ACTIONS.ReceiveActivitats:
            return state
        case BUSCAR_ACTIVITY_ACTIONS.ChangeIterador:
            const newIterador = [...state.iterador];
            newIterador = newIterador + 1;
            return{ ...state, iterador: newIterador};
        default: return state
    }
}

export {buscarActivityReducer}

