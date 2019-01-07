import {VALORAR_ACTIVITY_ACTIONS} from '../constants/actions'

const INITIAL_STATE = {
    activitats_valorar:[
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
    ],
    iterador: 0,
    num_estrelles:0,
    estrelles : [
        {id:0,marcada: false},
        {id:1,marcada: false},
        {id:2,marcada: false},
        {id:3,marcada: false},
        {id:4,marcada: false}
    ]
}

const valorarActivityReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type) {
        case VALORAR_ACTIVITY_ACTIONS.RebreActivitats:
            return{...state,activitats_valorar:action.payload}
        case VALORAR_ACTIVITY_ACTIONS.ChangeStar:
            const new_numestrelles = action.payload;
            new_numestrelles = new_numestrelles+1;
            const new_estrelles = [...state.estrelles];
            var y;
            for(y = 0; y < 5; y++){
                if(y <= action.payload){
                    new_estrelles[y].marcada = true;
                }
                else new_estrelles[y].marcada = false;
            }
            return { ...state, estrelles: new_estrelles, num_estrelles: new_numestrelles }
        case VALORAR_ACTIVITY_ACTIONS.FetchActivitatsValorar:
            return state
        case VALORAR_ACTIVITY_ACTIONS.ChangeIterator:
            return { ...state, iterador: state.iterador+1};
        case VALORAR_ACTIVITY_ACTIONS.ReiniciarStars:
            const new_estrelles2 = [
                {id:0,marcada: false},
                {id:1,marcada: false},
                {id:2,marcada: false},
                {id:3,marcada: false},
                {id:4,marcada: false}
            ]
            return{...state, estrelles: new_estrelles2}
        default: return state
    }
}

export {valorarActivityReducer}