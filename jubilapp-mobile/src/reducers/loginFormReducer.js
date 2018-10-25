import {LOGIN_FORM_ACTIONS} from "../constants/actions";

const INITIAL_STATE ={
    email: "",
    password:""
}
const loginFormReducer = (state = INITIAL_STATE, action)=>{
    switch (action.type) {

        case LOGIN_FORM_ACTIONS.ChangeProperty:
            let result = {
                ...state
            }
            result[action.payload.propertyName]=action.payload.value
            return result
        default: return state

    }

}
export {loginFormReducer}