import { REGISTER_FORM_ACTIONS } from "../constants/actions";

const INITIAL_STATE = {
    token: null
}

const authReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case REGISTER_FORM_ACTIONS.ReceiveRegister:
        //TODO: case LOGIN_FORM_ACTIONS.ReceiveLogin:
            return {
                ...state,
                token: action.payload
            }
        default: return state
    }
}

export { authReducer }