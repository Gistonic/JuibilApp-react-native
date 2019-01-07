import {FICHAS_ACTIONS} from "../constants/actions";


const INITIAL_STATE = {
    fichas: null,
    isFetching: false
};

export const fichasReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FICHAS_ACTIONS.FetchFichas:
            return state
        case FICHAS_ACTIONS.ReceiveFichas:
            return {...state, fichas: action.payload, isFetching: false};

        default:
            return state

    }
}