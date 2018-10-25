import {REGISTER_FORM_ACTIONS} from "../constants/actions";

const INITIAL_STATE ={
    email: "",
    name:"",
    surname:"",
    phone:"",
    password:"",
    confirmPassword:""
}
const registerFormReducer = (state = INITIAL_STATE, action)=>{
    switch (action.type) {

        case REGISTER_FORM_ACTIONS.ChangeProperty:
            let result = {
                ...state
            }
            result[action.payload.propertyName]=action.payload.value
            return result
        default: return state

    }

}
export {registerFormReducer}