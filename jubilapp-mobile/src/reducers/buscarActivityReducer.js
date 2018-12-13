import {BUSCAR_ACTIVITY_ACTIONS} from "../constants/actions";

const INITIAL_STATE ={
    iterador: 0,
    activitats_trobades:[],
    location: null,
    fromDate: {},
    toDate: {},
}

const buscarActivityReducer = (state = INITIAL_STATE, action)=>{

    switch (action.type) {
        case BUSCAR_ACTIVITY_ACTIONS.FetchActivitats:
            return state
        case BUSCAR_ACTIVITY_ACTIONS.ChangeProperty:
            return {...state, location: action.payload}
        case BUSCAR_ACTIVITY_ACTIONS.ChangeProperty2:
            let result = {
                ...state
            }
            result[action.payload.propertyName]=action.payload.value
            return result

        case BUSCAR_ACTIVITY_ACTIONS.RecieveActivitats:
            return {...state, activitats_trobades: action.payload}

        case BUSCAR_ACTIVITY_ACTIONS.ChangeIterador:
            return { ...state, iterador: state.iterador+1};

        default: return state
    }
}

export {buscarActivityReducer}

