import {VALORAR_ACTIVITY_ACTIONS} from "../constants/actions";

const INITIAL_STATE ={
    estrelles : [
        {id:0,marcada: false},
        {id:1,marcada: false},
        {id:2,marcada: false},
        {id:3,marcada: false},
        {id:4,marcada: false}
    ],
    iterador: 0,
    activitats: []
}

const fervaloracionsReducer = (state = INITIAL_STATE, action)=>{
    switch(action.type){
        case VALORAR_ACTIVITY_ACTIONS.FetchActivitats:
            return state
        case VALORAR_ACTIVITY_ACTIONS.RecieveActivitats:
            return {...state, activitats: action.payload}
        case VALORAR_ACTIVITY_ACTIONS.ChangeIterador:
            return { ...state, iterador: state.iterador+1};
        default: return state
    }
}

export {fervaloracionsReducer}