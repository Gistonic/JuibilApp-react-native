import {VALORAR_ACTIVITY_ACTIONS} from '../constants/actions'

const INITIAL_STATE = {
    activitats_valorar:[],
    iterador: 0,
    num_estrelles:0,
    estrelles : [
        {id:0,marcada: false},
        {id:1,marcada: false},
        {id:2,marcada: false},
        {id:3,marcada: false},
        {id:4,marcada: false}
    ],
    isFetching: false,
    ubicacioActual: ""
}

const valorarActivityReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type) {
        case VALORAR_ACTIVITY_ACTIONS.ChangePropietat:
            return{...state, ubicacioActual: action.payload}
        case VALORAR_ACTIVITY_ACTIONS.RebreActivitats:
            return{...state,activitats_valorar:action.payload,isFetching:false}
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
        case VALORAR_ACTIVITY_ACTIONS.RequestActivitats:
            return{...state,isFetching: true}
        default: return state
    }
}

export {valorarActivityReducer}