import {LOGIN_FORM_ACTIONS} from "../constants/actions";

const INITIAL_STATE ={
    email: "",
    password:"",
    error: false
}
const loginFormReducer = (state = INITIAL_STATE, action)=>{
    switch (action.type) {
        case LOGIN_FORM_ACTIONS.ChangeProperty:
            let result = {
                ...state
            }
            result[action.payload.propertyName]=action.payload.value
            return result
        case LOGIN_FORM_ACTIONS.ReceiveLogin:
            return {
                ...state,
                error: false
            };
        case LOGIN_FORM_ACTIONS.ReceiveLoginError:
            return {
                ...state,
                error: true
            };
        case LOGIN_FORM_ACTIONS.ResetLoginError:
            return {
                ...state,
                error: false
            }
        default: return state
    }

}
export {loginFormReducer}